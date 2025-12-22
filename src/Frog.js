import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Config } from './Config.js';
import { Scooter } from './Scooter.js';

export class Frog {
    static modelGeometry = null;
    static loader = new GLTFLoader();

    static setLoaderManager(manager) {
        Frog.loader = new GLTFLoader(manager);
    }

    constructor(id, color, physicsWorld, isLocal = false) {
        this.id = id;
        this.isLocal = isLocal;
        this.color = color;

        // VISUALS
        this.mesh = new THREE.Group();
        this.bodyMesh = new THREE.Group(); // Container
        this.mesh.add(this.bodyMesh);

        // Load Model
        if (Frog.modelGeometry) {
            const model = Frog.modelGeometry.clone();
            this.applyColor(model);
            this.bodyMesh.add(model);
        } else {
            Frog.loader.load('/models/frog.glb', (gltf) => {
                const model = gltf.scene;
                model.scale.set(0.5, 0.5, 0.5);
                model.position.y = -0.6; // Adjust based on model origin
                // Rotate to face forward if needed. Model facing -Z? 
                model.rotation.y = Math.PI; // Usually models face +Z, but game uses -Z or vice versa. Adjust if backwards.

                // Cache it
                Frog.modelGeometry = model.clone();

                this.applyColor(model);
                this.bodyMesh.add(model);
            }, undefined, (error) => {
                console.error("Error loading model:", error);
                // Fallback
                const geo = new THREE.SphereGeometry(0.5);
                const mat = new THREE.MeshStandardMaterial({ color: this.color });
                this.bodyMesh.add(new THREE.Mesh(geo, mat));
            });
        }

        // Chat Bubble Support
        this.chatBubbleDiv = document.createElement('div');
        this.chatBubbleDiv.className = 'chat-container';
        this.chatBubble = new CSS2DObject(this.chatBubbleDiv);
        this.chatBubble.position.set(0, 1.5, 0);
        this.mesh.add(this.chatBubble);
        this.chatTimer = null; // Used for mouth animation only now

        // PHYSICS
        if (physicsWorld) {
            const shape = new CANNON.Sphere(0.5);

            if (this.isLocal) {
                this.body = new CANNON.Body({
                    mass: 1, // Dynamic
                    shape: shape,
                    material: physicsWorld.frogMaterial,
                    fixedRotation: true
                });
                this.body.linearDamping = Config.linearDamping;
            } else {
                // Remote players are KINEMATIC (infinite mass, moved by code)
                // They act as obstacles for the local player
                this.body = new CANNON.Body({
                    type: CANNON.Body.KINEMATIC,
                    shape: shape,
                    material: physicsWorld.frogMaterial
                });
            }

            this.body.position.set(0, 5, 0);
            this.body.updateMassProperties();
            physicsWorld.world.addBody(this.body);
        } else {
            this.body = null;
        }

        // State
        this.onGround = false;
        this.jumpCooldown = 0;
        this.facingAngle = 0;
        this.moveAnimTimer = 0; // For hopping animation

        // Scooter riding state
        this.isRidingScooter = false;
        this.currentScooter = null;

        // Jiggle physics state
        this.jiggleVelocity = 0;
        this.jiggleOffset = 0;
        this.lastVelocityY = 0;
        this.wasMoving = false;

        // Punch/kick animation state
        this.isPunching = false;
        this.punchProgress = 0;      // 0 to 1 for swing, then back to 0
        this.punchCooldownTimer = 0;

        // VFX state
        this.walkDustTimer = 0;
        this.wasOnGround = false;
        this.particles = null;  // Set by World

        // Health & Combat
        this.health = Config.maxHealth;
        this.isDead = false;
        this.deathTimer = 0;
        this.respawnTimer = 0;
        this.healthBarVisibleTimer = 0; // Timer for health bar visibility
        this.healthBarVisible = false;
        this.isAFK = false; // AFK status (set by server)

        // Tongue mechanics (Reworked - ref1.md spec)
        // New structured state object for 3-phase tongue system
        this.tongue = {
            state: 'idle',              // 'idle' | 'extending' | 'attached' | 'retracting'
            target: null,               // { type, id, object, point, distance, angle }
            lockedPoint: new THREE.Vector3(), // World position locked at fire time
            startTime: 0,               // For duration-based animation
            progress: 0,                // 0-1 animation progress
            cooldownTimer: 0            // Cooldown between uses
        };
        this.tongueStartPos = new THREE.Vector3();  // Mouth position (updates each frame)
        this.flies = 0;                 // Currency
        this.tongueLine = null;         // Visual line
        this.tongueTip = null;          // Visual tip sphere
        this.tongueTube = null;         // Visual tube geometry (for thickness)

        // Health Bar UI
        this.healthBarContainer = document.createElement('div');
        this.healthBarContainer.className = 'health-bar-container';
        this.healthBarContainer.style.opacity = '0'; // Hidden by default
        this.healthBarContainer.style.transition = 'opacity 0.3s ease';
        this.healthBarContainer.innerHTML = `
            <div class="health-bar-bg">
                <div class="health-bar-fill"></div>
            </div>
        `;
        this.healthBarFill = this.healthBarContainer.querySelector('.health-bar-fill');
        this.healthBar = new CSS2DObject(this.healthBarContainer);
        this.healthBar.position.set(0, 2.0, 0);
        this.mesh.add(this.healthBar);

        // Damage Toast Container
        this.damageToasts = [];

        // Name Tag
        this.nameTagDiv = document.createElement('div');
        this.nameTagDiv.className = 'name-tag';
        this.nameTagDiv.textContent = `Frog ${id.substr(0, 4)}`;
        this.nameTag = new CSS2DObject(this.nameTagDiv);
        this.nameTag.position.set(0, 1.2, 0); // Above head, below health bar
        this.mesh.add(this.nameTag);
    }

    setName(name) {
        this.name = name;
        this.updateNameTag();
    }

    updateNameTag() {
        // Build name tag HTML with optional AFK badge
        let html = `<span>${this.name || 'Frog'}</span>`;
        if (this.isAFK) {
            html += '<span class="afk-badge">AFK</span>';
        }
        this.nameTagDiv.innerHTML = html;
    }

    update(dt, input, lookTarget, cameraOrbitAngle = 0) {
        // Handle scooter riding state FIRST (before body checks, since body may be removed from world)
        if (this.isRidingScooter && this.currentScooter) {
            // Update health bar and jiggle even while riding
            this.updateHealthBar();
            this.updateHealthBarVisibility(dt);
            this.updateJiggle(dt, Math.abs(this.currentScooter.velocity) > 1);
            return; // Scooter controls the frog position - exit early
        }

        // Body check
        if (!this.body) return;

        // Handle death state
        if (this.isDead) {
            this.deathTimer += dt;
            // Respawn timer
            this.respawnTimer -= dt;
            if (this.respawnTimer <= 0) {
                this.respawn();
            }
            return; // Don't process input while dead
        }

        // Update health bar
        this.updateHealthBar();
        this.updateHealthBarVisibility(dt);

        // Sync Mesh Position to Body
        this.mesh.position.copy(this.body.position);

        // VISUAL ROTATION (Manually handle rotation)
        const axis = new THREE.Vector3(0, 1, 0);
        this.mesh.quaternion.setFromAxisAngle(axis, this.facingAngle);

        // Chat Fade Logic
        if (this.chatTimer > 0) {
            // ...
        }

        // REMOTE INTERPOLATION (If not local, follow targetPos)
        if (!this.isLocal && this.targetPos) {
            // Move body toward target (to keep physics in sync)
            if (this.body) {
                this.body.position.x = THREE.MathUtils.lerp(this.body.position.x, this.targetPos.x, 0.3);
                this.body.position.y = THREE.MathUtils.lerp(this.body.position.y, this.targetPos.y, 0.3);
                this.body.position.z = THREE.MathUtils.lerp(this.body.position.z, this.targetPos.z, 0.3);
                this.body.velocity.set(0, 0, 0); // Don't let physics move remote bodies
            }
            // Slerp rotation
            if (this.targetRot) {
                this.mesh.quaternion.slerp(this.targetRot, 0.3);
            }

            // Sync Mesh Position to Body (even for remote)
            this.mesh.position.copy(this.body.position);
        }

        // Proceed to visual updates (animations, jiggle, tongue) regardless of input
        // But skip physical calculation and input handling if no input
        if (!input) {
            // REMOTE VISUAL UPDATES
            const remoteIsMoving = this.remoteVelocity && this.remoteVelocity.length() > 0.1;

            // Update Animations (Legs)
            this.updateAnimations(dt, remoteIsMoving, this.isRemoteGrounded);

            // Update Jiggle
            this.updateJiggle(dt, remoteIsMoving);

            // Update Eyes
            if (this.targetLook) this.updateEyes(this.targetLook);

            // Update Tongue
            this.updateTongue(dt, null);

            // Animate Mouth
            if (this.isRemoteTalking && this.mouthMesh && this.mouthBaseScale) {
                const talkSpeed = Config.talkSpeed;
                const openAmount = 0.5 + Math.sin(Date.now() / 100 * talkSpeed) * 0.5;
                this.mouthMesh.scale.y = this.mouthBaseScale.y * (1 + openAmount * 0.5);
            }

            // Remote Walking Dust
            if (!this.remoteScooter && this.particles && remoteIsMoving && this.isRemoteGrounded) {
                this.walkDustTimer -= dt;
                if (this.walkDustTimer <= 0) {
                    const footPos = this.mesh.position.clone();
                    footPos.y += Config.vfxGroundOffset;
                    this.particles.spawnWalkDust(footPos, this.color);
                    this.walkDustTimer = Config.vfxWalkInterval;
                }
            }

            // Update Remote Scooter
            if (this.remoteScooter) {
                const terrain = this.world ? this.world.terrainMeshes : null;
                this.remoteScooter.update(dt, null, terrain);
            }

            return;
        }

        // CHECK GROUND (Collision Check)
        this.onGround = false;

        if (this.body.world) {
            // Check all contacts to see if we are standing on something
            for (const contact of this.body.world.contacts) {
                let normalY = 0;

                // Identify which body is the frog and get the normal pointing OUT of the other body
                if (contact.bi === this.body) {
                    // Contact normal points from bi to bj. 
                    // If bi is frog, we want normal pointing UP (opposite to contact normal)
                    normalY = -contact.ni.y;
                } else if (contact.bj === this.body) {
                    // Contact normal points from bi to bj.
                    // If bj is frog, normal points TOWARDS frog (Up).
                    normalY = contact.ni.y;
                }

                // If normal is pointing somewhat up (Slope limit > 45 deg approx)
                if (normalY > 0.5) {
                    this.onGround = true;
                    break;
                }
            }
        }

        // Fallback for flat ground map 
        if (this.body.position.y < 0.6) this.onGround = true;



        // MOVEMENT (Camera-relative)
        const targetSpeed = Config.moveSpeed;
        const inputVec = new THREE.Vector3(0, 0, 0);

        // Get raw input direction
        if (input.keys.forward) inputVec.z -= 1;
        if (input.keys.backward) inputVec.z += 1;
        if (input.keys.left) inputVec.x -= 1;
        if (input.keys.right) inputVec.x += 1;

        if (inputVec.length() > 0) {
            inputVec.normalize();

            // Rotate input by camera orbit angle to make movement camera-relative
            const cos = Math.cos(cameraOrbitAngle);
            const sin = Math.sin(cameraOrbitAngle);
            const moveVec = new THREE.Vector3(
                inputVec.x * cos + inputVec.z * sin,
                0,
                -inputVec.x * sin + inputVec.z * cos
            );

            // Calculate target angle from the rotated movement vector
            const targetAngle = Math.atan2(moveVec.x, moveVec.z);

            // Smooth rotation towards movement direction
            let angleDiff = targetAngle - this.facingAngle;
            while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
            while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
            this.facingAngle += angleDiff * Config.rotationSpeed * dt;

            // Apply movement acceleration toward target velocity
            // This is MUCH snappier than raw force and prevents "speedster" teleportation
            const isGrappling = this.tongue.state === 'attached';
            const accelScale = this.onGround ? 12.0 : (Config.airControl * 5.0);
            const grappleMult = isGrappling ? 0.3 : 1.0;

            const targetVelX = moveVec.x * targetSpeed * grappleMult;
            const targetVelZ = moveVec.z * targetSpeed * grappleMult;

            // Soft-clamped acceleration (snappy startup, but not instant)
            this.body.velocity.x = THREE.MathUtils.lerp(this.body.velocity.x, targetVelX, accelScale * dt);
            this.body.velocity.z = THREE.MathUtils.lerp(this.body.velocity.z, targetVelZ, accelScale * dt);

            // ANIMATION (Simple Hop)
            if (this.onGround) {
                this.moveAnimTimer += dt * Config.hopSpeed;
                const hopY = Math.abs(Math.sin(this.moveAnimTimer)) * Config.hopHeight;
                this.bodyMesh.position.y = hopY;

                // Walking dust VFX
                if (this.particles) {
                    this.walkDustTimer -= dt;
                    if (this.walkDustTimer <= 0) {
                        // Calculate "Foot" position (floor level + alternate sides)
                        const footPos = this.mesh.position.clone();
                        footPos.y += Config.vfxGroundOffset;

                        const lateralOffset = 0.25;
                        const side = Math.sin(this.moveAnimTimer * 2) > 0 ? 1 : -1;
                        const offset = new THREE.Vector3(lateralOffset * side, 0, 0.1); // Slightly forward
                        offset.applyQuaternion(this.mesh.quaternion);
                        footPos.add(offset);

                        this.particles.spawnWalkDust(footPos, this.color);
                        this.walkDustTimer = Config.vfxWalkInterval;
                    }
                }
            }
        } else {
            // Reset animation when stopped
            this.moveAnimTimer = 0;
            this.bodyMesh.position.y = THREE.MathUtils.lerp(this.bodyMesh.position.y, 0, dt * 10);

            // Snappy deceleration when no input (prevents "ice skating" feel)
            if (this.onGround) {
                const stopScale = 15.0; // Fast stop on ground
                this.body.velocity.x = THREE.MathUtils.lerp(this.body.velocity.x, 0, stopScale * dt);
                this.body.velocity.z = THREE.MathUtils.lerp(this.body.velocity.z, 0, stopScale * dt);
            }
        }

        // JUMP
        if (this.onGround && input.keys.jump && this.jumpCooldown <= 0) {
            this.body.velocity.y = Config.jumpVelocity;
            this.jumpCooldown = 1.0;
            // Trigger Kick Animation
            this.jumpKickAmount = 1.0;

            // Jump dust VFX
            if (this.particles) {
                const jumpPos = this.mesh.position.clone();
                jumpPos.y += Config.vfxGroundOffset;
                const forward = this.getForwardDirection();
                jumpPos.add(forward.multiplyScalar(Config.vfxForwardOffset));
                this.particles.spawnJumpDust(jumpPos, this.color);
            }
        }

        // Landing detection for VFX
        if (this.onGround && !this.wasOnGround) {
            // Just landed!
            const impactForce = Math.abs(this.lastVelocityY);
            if (this.particles && impactForce > 3) {
                const landPos = this.mesh.position.clone();
                landPos.y += Config.vfxGroundOffset;
                const forward = this.getForwardDirection();
                landPos.add(forward.multiplyScalar(Config.vfxForwardOffset));
                this.particles.spawnLandingDust(landPos, impactForce, this.color);

                // Screen shake on heavy impact (if local player)
                if (this.isLocal && impactForce > 8 && this.world) {
                    this.world.triggerScreenShake(impactForce * 0.05, 0.2);
                }
            }
        }
        this.wasOnGround = this.onGround;

        if (this.jumpCooldown > 0) this.jumpCooldown -= dt;

        // Update Eyes
        if (lookTarget) {
            this.lookTarget = lookTarget; // Store for network sync
            this.updateEyes(lookTarget);
        }

        // Update Animations (Legs)
        const isMoving = inputVec.length() > 0;
        this.updateAnimations(dt, isMoving, this.onGround);

        // Update Jiggle Physics (Ass)
        this.updateJiggle(dt, isMoving);

        // Update Punch/Kick Animation
        this.updatePunch(dt, input);

        // Update Tongue - pass input for swing mechanics
        this.updateTongue(dt, input);

        // Animate Mouth
        if (this.isTalking && this.mouthMesh && this.mouthBaseScale) {
            const talkSpeed = Config.talkSpeed;
            const openAmount = 0.5 + Math.sin(Date.now() / 100 * talkSpeed) * 0.5;
            this.mouthMesh.scale.y = this.mouthBaseScale.y * (1 + openAmount * 0.5);
        }

        // Update Shader
        if (this.bodyUniforms) {
            this.bodyUniforms.uTime.value = performance.now() / 1000;
            this.bodyUniforms.uSpeed.value = Config.shaderSpeed;
            this.bodyUniforms.uIntensity.value = Config.shaderIntensity;
            this.bodyUniforms.uMix.value = Config.shaderColorMix;
        }
    }

    // For remote players
    updatePosition(pos, rot) {
        // Store target for interpolation in update()
        this.targetPos = new THREE.Vector3(pos.x, pos.y, pos.z);
        this.targetRot = new THREE.Quaternion(rot.qx, rot.qy, rot.qz, rot.qw);

        // Sync Physics Body immediately (so local player hits them where the server says they are)
        if (this.body) {
            this.body.position.set(pos.x, pos.y, pos.z);
        }
    }

    // --- Network Sync Methods ---

    getSyncState() {
        if (!this.body) return null;

        // When riding scooter, use mesh position (body position is stale)
        const pos = this.isRidingScooter ? this.mesh.position : this.body.position;
        const vel = this.isRidingScooter ? { x: 0, y: 0, z: 0 } : this.body.velocity;

        // Get steer amount from scooter if riding
        const steerAmount = (this.isRidingScooter && this.currentScooter)
            ? this.currentScooter.steerAmount
            : 0;

        // Encode tongue state: 0=idle, 1=extending, 2=retracting, 3=attached
        let tongueStateCode = 0;
        if (this.tongue.state === 'extending') tongueStateCode = 1;
        else if (this.tongue.state === 'retracting') tongueStateCode = 2;
        else if (this.tongue.state === 'attached') tongueStateCode = 3;

        return {
            x: pos.x,
            y: pos.y,
            z: pos.z,
            qx: this.mesh.quaternion.x,
            qy: this.mesh.quaternion.y,
            qz: this.mesh.quaternion.z,
            qw: this.mesh.quaternion.w,
            vx: vel.x,
            vy: vel.y,
            vz: vel.z,
            lookX: this.lookTarget?.x || 0,
            // Encode scooter color in lookY if riding (add 1Billion)
            lookY: (this.isRidingScooter && this.currentScooter)
                ? (1000000000 + parseInt(this.currentScooter.color.replace('#', ''), 16))
                : (this.lookTarget?.y || 0),
            // Encode steer amount in lookZ if riding (multiply by 10, add 1000 offset)
            lookZ: (this.isRidingScooter && this.currentScooter)
                ? (1000 + steerAmount * 10)
                : (this.lookTarget?.z || 0),
            isGrounded: this.onGround,
            isTalking: this.isTalking,
            isPunching: this.isPunching,
            // Encode scooter riding in punchProgress (add 100) because server filters new properties
            // Also encode tongue state (add 10 * tongueStateCode)
            punchProgress: this.punchProgress + (this.isRidingScooter ? 100 : 0) + (tongueStateCode * 10),
            // Tongue target (for remote visualization)
            tongueTargetX: this.tongue.lockedPoint?.x || 0,
            tongueTargetY: this.tongue.lockedPoint?.y || 0,
            tongueTargetZ: this.tongue.lockedPoint?.z || 0,
            tongueProgress: this.tongue.progress || 0
        };
    }

    applySyncState(state, dt = 1 / 60) {
        // Target Position & Rotation
        this.targetPos = new THREE.Vector3(state.x, state.y, state.z);
        this.targetRot = new THREE.Quaternion(state.qx, state.qy, state.qz, state.qw);

        // Extract facingAngle from rotation for remote visuals (scooter/eyes)
        const euler = new THREE.Euler().setFromQuaternion(this.targetRot, 'YXZ');
        this.facingAngle = euler.y;

        // Velocity (Important for Jiggle & Animation prediction)
        this.remoteVelocity = new THREE.Vector3(state.vx, state.vy, state.vz);

        // Look Target & Scooter Color/Steer Decode
        if (state.lookX !== undefined) {
            let lookY = state.lookY;
            let lookZ = state.lookZ;

            // Decode scooter color from lookY
            if (lookY >= 1000000000) {
                const colorInt = lookY - 1000000000;
                this.remoteScooterColor = '#' + colorInt.toString(16).padStart(6, '0');
                lookY = 0; // Default look height
            }

            // Decode steer amount from lookZ (1000 + steer*10)
            if (lookZ >= 990 && lookZ <= 1010) {
                this.remoteSteerAmount = (lookZ - 1000) / 10;
                lookZ = 0; // Default look z
            } else {
                this.remoteSteerAmount = 0;
            }

            this.targetLook = new THREE.Vector3(state.lookX, lookY, lookZ);
        }

        // Ground Status
        this.isRemoteGrounded = state.isGrounded;

        // Talking Status
        this.isRemoteTalking = state.isTalking;

        this.isRemotePunching = state.isPunching;

        // Decode scooter state from punchProgress (>= 100 means riding)
        // Also decode tongue state (10, 20, 30 added for extending, retracting, grappling)
        let rawPunchProgress = state.punchProgress || 0;
        let isRiding = false;
        let tongueStateCode = 0;

        // First extract riding flag
        if (rawPunchProgress >= 100) {
            isRiding = true;
            rawPunchProgress -= 100;
        }

        // Then extract tongue state (encoded as 10, 20, 30)
        if (rawPunchProgress >= 30) {
            tongueStateCode = 3; // grappling
            rawPunchProgress -= 30;
        } else if (rawPunchProgress >= 20) {
            tongueStateCode = 2; // retracting
            rawPunchProgress -= 20;
        } else if (rawPunchProgress >= 10) {
            tongueStateCode = 1; // extending
            rawPunchProgress -= 10;
        }

        this.remotePunchProgress = rawPunchProgress;
        this.remoteTongueStateCode = tongueStateCode;

        // Tongue target for remote visualization
        if (state.tongueTargetX !== undefined) {
            this.remoteTongueTarget = new THREE.Vector3(
                state.tongueTargetX,
                state.tongueTargetY,
                state.tongueTargetZ
            );
            this.remoteTongueProgress = state.tongueProgress || 0;

            // Apply to internal tongue state for visualization
            if (this.remoteTongueStateCode > 0) {
                const states = ['idle', 'extending', 'retracting', 'attached'];
                this.tongue.state = states[this.remoteTongueStateCode];
                this.tongue.progress = this.remoteTongueProgress;
                this.tongue.lockedPoint.copy(this.remoteTongueTarget);

                // Ensure visual exists
                this.createTongueVisual();
                if (this.tongueLine) this.tongueLine.visible = true;
                if (this.tongueTip) this.tongueTip.visible = true;
            } else if (this.tongue.state !== 'idle') {
                this.finishTongue();
            }
        }

        // Scooter Status
        if (this.isRemoteRidingScooter !== isRiding) {
            this.isRemoteRidingScooter = isRiding;

            if (this.isRemoteRidingScooter && !this.remoteScooter) {
                // Create visual scooter for remote player
                this.remoteScooter = new Scooter(
                    `scooter_remote_${this.id}`,
                    this.remoteScooterColor || this.color,
                    this.mesh.parent || (this.world ? this.world.scene : null), // Parent to scene, not frog mesh
                    null // No physics
                );
                this.remoteScooter.particles = this.particles; // Helper for dust
                this.remoteScooter.rider = this; // Set rider for following

                // Immediate update to prevent "stuck at origin" frame
                const terrain = this.world ? this.world.terrainMeshes : null;
                this.remoteScooter.update(dt, null, terrain);
            } else if (!this.isRemoteRidingScooter && this.remoteScooter) {
                // DISMOUNT - Remove scooter and reset leg positions
                this.remoteScooter.dispose();
                this.remoteScooter = null;

                // Reset leg positions and rotations
                if (this.leftLeg && this._originalLeftLegX !== undefined) {
                    this.leftLeg.position.x = this._originalLeftLegX;
                    this.leftLeg.position.y = this._originalLeftLegY;
                    this.leftLeg.position.z = this._originalLeftLegZ;
                    this.leftLeg.rotation.x = 0;
                    this.leftLeg.rotation.y = 0;
                    this.leftLeg.rotation.z = 0;
                }
                if (this.rightLeg && this._originalRightLegX !== undefined) {
                    this.rightLeg.position.x = this._originalRightLegX;
                    this.rightLeg.position.y = this._originalRightLegY;
                    this.rightLeg.position.z = this._originalRightLegZ;
                    this.rightLeg.rotation.x = 0;
                    this.rightLeg.rotation.y = 0;
                    this.rightLeg.rotation.z = 0;
                }
            }
        }

        // Update scooter color if riding and color changed (separate from state change logic)
        if (this.isRemoteRidingScooter && this.remoteScooter && this.remoteScooterColor) {
            this.remoteScooter.setColor(this.remoteScooterColor);
        }

        // Sync Physics Body (Immediate snap)
        if (this.body) {
            this.body.position.set(state.x, state.y, state.z);
            // We don't snap velocity on kinematic bodies usually, but we store it for logic
        }
    }

    // Apply authoritative physics state from server
    applyServerPhysics(state) {
        if (!state) return;

        // Store server target for interpolation
        this.serverTargetPos = { x: state.x, y: state.y, z: state.z };
        this.serverVelocity = { x: state.vx, y: state.vy, z: state.vz };
        this.serverFacingAngle = state.facingAngle;
        this.serverIsGrounded = state.isGrounded;
        this.serverIsPunching = state.isPunching;
        this.serverIsDead = state.isDead;
        this.serverHealth = state.health;

        // Update health
        if (this.health !== state.health) {
            this.health = state.health;
            this.updateHealthBar();
            if (this.health < Config.maxHealth) {
                this.showHealthBar();
            }
        }

        // Handle death state
        if (state.isDead && !this.isDead) {
            this.die(true);
        }

        // For LOCAL player: apply server corrections smoothly
        if (this.isLocal) {
            // Only correct position if significantly different (reduces jitter)
            if (this.body) {
                const dx = state.x - this.body.position.x;
                const dy = state.y - this.body.position.y;
                const dz = state.z - this.body.position.z;
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                // If position differs significantly, correct it
                if (dist > 0.5) {
                    // Snap correction for large differences
                    if (dist > 3) {
                        this.body.position.set(state.x, state.y, state.z);
                        this.body.velocity.set(state.vx, state.vy, state.vz);
                    } else {
                        // Smooth correction for small differences
                        this.body.position.x += dx * 0.3;
                        this.body.position.y += dy * 0.3;
                        this.body.position.z += dz * 0.3;
                    }
                }
            }
        } else {
            // For REMOTE players: interpolate towards server position
            this.targetPos = new THREE.Vector3(state.x, state.y, state.z);
            this.remoteVelocity = new THREE.Vector3(state.vx, state.vy, state.vz);
            this.isRemoteGrounded = state.isGrounded;
            this.isRemotePunching = state.isPunching;

            // Update facing angle
            const targetRot = new THREE.Quaternion();
            targetRot.setFromAxisAngle(new THREE.Vector3(0, 1, 0), state.facingAngle);
            this.targetRot = targetRot;

            // Sync physics body for collision
            if (this.body) {
                this.body.position.set(state.x, state.y, state.z);
            }
        }
    }

    updateRemote(dt) {
        if (!this.targetPos) return;

        // Interpolate Position
        this.mesh.position.lerp(this.targetPos, 15 * dt); // Snappier lerp

        // Interpolate Rotation
        if (this.targetRot) {
            this.mesh.quaternion.slerp(this.targetRot, 15 * dt);
        }

        // --- VISUALS & ANIMATION SYNC ---

        // 1. EYES
        if (this.targetLook) {
            this.updateEyes(this.targetLook);
        }

        // 2. MOVEMENT & ANIMATION
        // Use received velocity to determine movement state
        const vel = this.remoteVelocity || new THREE.Vector3();
        const speed = vel.length();
        const isMoving = speed > 0.1;

        // Use received ground state (fallback to Y check if missing)
        const isGrounded = (this.isRemoteGrounded !== undefined)
            ? this.isRemoteGrounded
            : (this.mesh.position.y < 0.1);

        // Detect Jump Start (sudden upward velocity while previously grounded-ish)
        // Or just if not grounded and moving up?
        if (!isGrounded && vel.y > 2.0 && this.wasRemoteGrounded) {
            // Trigger Jump Kick locally
            this.jumpKickAmount = 1.0;
            if (this.particles) this.particles.spawnJumpDust(this.mesh.position, 0xccaa88);
        }

        // Landing Dust
        if (isGrounded && !this.wasRemoteGrounded) {
            if (this.particles && Math.abs(this.lastRemoteVelY) > 2) {
                this.particles.spawnLandingDust(this.mesh.position, Math.abs(this.lastRemoteVelY), 0xccaa88);
            }
        }

        // Store history
        this.wasRemoteGrounded = isGrounded;
        this.lastRemoteVelY = vel.y;

        // Update Leg Animations
        this.updateAnimations(dt, isMoving, isGrounded);

        // Update Punch Animation (Input null, just processes existing global punch state)
        this.updatePunch(dt, null);

        // Animate Mouth (Remote)
        if (this.isRemoteTalking && this.mouthMesh && this.mouthBaseScale) {
            const talkSpeed = Config.talkSpeed;
            const openAmount = 0.5 + Math.sin(Date.now() / 100 * talkSpeed) * 0.5;
            this.mouthMesh.scale.y = this.mouthBaseScale.y * (1 + openAmount * 0.5);
        } else if (this.mouthMesh && this.mouthBaseScale) {
            // Close mouth if not talking
            this.mouthMesh.scale.lerp(this.mouthBaseScale, dt * 10);
        }

        // Update Hop Bobbing (Procedural)
        if (isMoving && isGrounded) {
            this.moveAnimTimer = (this.moveAnimTimer || 0) + 15 * dt;
            const hopY = Math.abs(Math.sin(this.moveAnimTimer)) * Config.hopHeight;
            this.bodyMesh.position.y = hopY;

            // Walking dust VFX for remote players
            if (this.particles) {
                this.walkDustTimer = (this.walkDustTimer || 0) - dt;
                if (this.walkDustTimer <= 0) {
                    this.particles.spawnWalkDust(this.mesh.position, 0xccaa88);
                    this.walkDustTimer = Config.vfxWalkInterval;
                }
            }
        } else {
            this.moveAnimTimer = 0;
            this.bodyMesh.position.y = THREE.MathUtils.lerp(this.bodyMesh.position.y, 0, dt * 10);
        }

        // 3. JIGGLE PHYSICS
        // We need to simulate the velocity on the body for updateJiggle to work, 
        // OR we pass the remote velocity manualy.
        // updateJiggle reads `this.body.velocity.y`.
        // Let's hack it: temporarily set body velocity if kinematic
        if (this.body) {
            this.body.velocity.copy(vel);
            this.updateJiggle(dt, isMoving);
        }

        // 4. REMOTE SCOOTER STEER ANIMATION
        if (this.isRemoteRidingScooter && this.remoteScooter) {
            const steer = this.remoteSteerAmount || 0;
            this.remoteScooter.steerAmount = steer;

            // Rotate handle
            if (this.remoteScooter.handle) {
                this.remoteScooter.handle.rotation.y = steer * Config.scooterMaxTurn;
            }

            // Animate legs with steering (don't call updateRiderPosition - it moves frog position!)
            const steerRotation = steer * 0.3;
            if (this.leftLeg && this._originalLeftLegZ !== undefined) {
                this.leftLeg.position.x = this._originalLeftLegX + Config.scooterLegOffsetX;
                this.leftLeg.position.y = this._originalLeftLegY + Config.scooterLegOffsetY;
                this.leftLeg.position.z = this._originalLeftLegZ + Config.scooterLegOffsetZ;
                this.leftLeg.rotation.x = Config.scooterLegRotationX;
                this.leftLeg.rotation.y = Config.scooterLegRotationY + steerRotation;
                this.leftLeg.rotation.z = Config.scooterLegRotationZ;
            }
            if (this.rightLeg && this._originalRightLegZ !== undefined) {
                this.rightLeg.position.x = this._originalRightLegX - Config.scooterLegOffsetX;
                this.rightLeg.position.y = this._originalRightLegY + Config.scooterLegOffsetY;
                this.rightLeg.position.z = this._originalRightLegZ + Config.scooterLegOffsetZ;
                this.rightLeg.rotation.x = Config.scooterLegRotationX;
                this.rightLeg.rotation.y = -Config.scooterLegRotationY + steerRotation;
                this.rightLeg.rotation.z = -Config.scooterLegRotationZ;
            }

            // Spawn dust particles for remote scooter (check position change, not velocity)
            if (this.particles && Config.vfxEnabled) {
                // Track last position to detect movement
                const currentPos = this.mesh.position;
                if (!this._lastRemoteScooterPos) {
                    this._lastRemoteScooterPos = currentPos.clone();
                }
                const moveDistance = currentPos.distanceTo(this._lastRemoteScooterPos);
                this._lastRemoteScooterPos.copy(currentPos);

                if (moveDistance > 0.05) { // Moving
                    this._remoteScooterDustTimer = (this._remoteScooterDustTimer || 0) + dt;
                    if (this._remoteScooterDustTimer > 0.1) {
                        this._remoteScooterDustTimer = 0;
                        const pos = this.mesh.position.clone();
                        pos.y = 0.1;
                        this.particles.spawnWalkDust(pos, this.color || '#ffffff');
                    }
                }
            }
        }

        // 5. HEALTH BAR VISIBILITY
        this.updateHealthBarVisibility(dt);

        // 6. REMOTE TONGUE VISUALIZATION
        if (this.remoteTongueStateCode > 0 && this.remoteTongueTarget) {
            // Create tongue visual if not exists
            if (!this.tongueLine) {
                this.createTongueVisual();
            }

            if (this.tongueLine && this.tongueTip) {
                this.tongueLine.visible = true;
                this.tongueTip.visible = true;

                // Calculate tongue start (mouth position)
                const mouthOffset = new THREE.Vector3(0, 0.3, 0.5);
                mouthOffset.applyQuaternion(this.mesh.quaternion);
                const tongueStart = this.mesh.position.clone().add(mouthOffset);

                // Calculate current end based on progress
                const currentEnd = new THREE.Vector3().lerpVectors(
                    tongueStart,
                    this.remoteTongueTarget,
                    this.remoteTongueProgress
                );

                // Update line geometry
                const positions = this.tongueLine.geometry.attributes.position.array;
                positions[0] = tongueStart.x;
                positions[1] = tongueStart.y;
                positions[2] = tongueStart.z;
                positions[3] = currentEnd.x;
                positions[4] = currentEnd.y;
                positions[5] = currentEnd.z;
                this.tongueLine.geometry.attributes.position.needsUpdate = true;

                // Update tip position
                this.tongueTip.position.copy(currentEnd);
            }
        } else if (this.tongueLine) {
            // Hide tongue when idle
            this.tongueLine.visible = false;
            if (this.tongueTip) this.tongueTip.visible = false;
        }
    }

    showChat(message) {
        // Create new bubble
        const bubble = document.createElement('div');
        bubble.className = 'chat-bubble';
        bubble.innerText = message;

        // Add to container (Newest at bottom -> Prepend)
        this.chatBubbleDiv.prepend(bubble);

        // Limit stack size to 9
        while (this.chatBubbleDiv.children.length > 9) {
            this.chatBubbleDiv.removeChild(this.chatBubbleDiv.lastElementChild);
        }

        // Cleanup after animation
        bubble.addEventListener('animationend', () => {
            if (bubble.parentNode) {
                bubble.remove();
            }
        });

        // Mouth Animation Trigger
        this.isTalking = true;
        if (this.chatTimer) clearTimeout(this.chatTimer);

        // Constant talking time for a burst of text, or estimate based on length
        const duration = Math.min(3000, message.length * 100);

        this.chatTimer = setTimeout(() => {
            this.isTalking = false;
            // Reset mouth
            if (this.mouthMesh && this.mouthBaseScale) {
                this.mouthMesh.scale.copy(this.mouthBaseScale);
            }
        }, duration);
    }

    applyColor(model) {
        this.pupils = [];
        this.leftLeg = null;
        this.rightLeg = null;



        model.traverse((child) => {
            if (child.isMesh) {
                const name = child.name.toLowerCase();

                // Clone material
                child.material = child.material.clone();
                child.castShadow = true;
                child.receiveShadow = true;

                if (name.includes('pupil')) {
                    child.material.color.set(0x000000);
                    child.userData.initialPos = child.position.clone();
                    this.pupils.push(child);
                } else if (name.includes('eye') || name.includes('white')) {
                    child.material.color.set(0xffffff);
                } else if (name.includes('mouth')) {
                    const darkColor = new THREE.Color(this.color);
                    darkColor.multiplyScalar(0.8);
                    child.material.color.set(darkColor);
                    this.mouthMesh = child;
                    this.mouthBaseScale = child.scale.clone();
                } else if (name.includes('leftleg')) {
                    this.leftLeg = child;
                    this.leftLegBasePos = child.position.clone();
                    this._originalLeftLegX = child.position.x;
                    this._originalLeftLegY = child.position.y;
                    this._originalLeftLegZ = child.position.z;
                    child.material.color.set(this.color);
                } else if (name.includes('rightleg')) {
                    this.rightLeg = child;
                    this.rightLegBasePos = child.position.clone();
                    this._originalRightLegX = child.position.x;
                    this._originalRightLegY = child.position.y;
                    this._originalRightLegZ = child.position.z;
                    child.material.color.set(this.color);
                } else if (name.includes('assleft') || name.includes('ass_left')) {
                    this.assLeft = child;
                    this.assLeftBasePos = child.position.clone();
                    this.assLeftBaseScale = child.scale.clone();
                    child.material.color.set(this.color);
                } else if (name.includes('assright') || name.includes('ass_right')) {
                    this.assRight = child;
                    this.assRightBasePos = child.position.clone();
                    this.assRightBaseScale = child.scale.clone();
                    child.material.color.set(this.color);
                } else {
                    // Body Mesh - Normal Color
                    child.material.color.set(this.color);
                }
            }
        });

    }

    // Change frog color at runtime
    setColor(newColor) {
        this.color = newColor;

        // Update all mesh materials
        if (this.bodyMesh) {
            this.bodyMesh.traverse((child) => {
                if (child.isMesh && child.material) {
                    const name = child.name.toLowerCase();

                    // Skip eyes and pupils
                    if (name.includes('pupil') || name.includes('eye') || name.includes('white')) {
                        return;
                    }

                    // Mouth is darker version
                    if (name.includes('mouth')) {
                        const darkColor = new THREE.Color(newColor);
                        darkColor.multiplyScalar(0.8);
                        child.material.color.set(darkColor);
                    } else {
                        // Body, legs, etc
                        child.material.color.set(newColor);
                    }

                    // Update originalColor for hit effects
                    child.userData.originalColor = child.material.color.clone();

                    // Enable shadows
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });
        }
    }

    updateAnimations(dt, isMoving, isGrounded) {
        if (!this.leftLeg || !this.rightLeg) return;

        // JUMP ANIMATION (Legs kick down)
        if (!isGrounded) {
            if (this.jumpKickAmount > 0) {
                this.jumpKickAmount -= dt * Config.legKickDecay;
                if (this.jumpKickAmount < 0) this.jumpKickAmount = 0;
                // Cubic Ease Out
                const ease = this.jumpKickAmount * this.jumpKickAmount * this.jumpKickAmount;
                const offset = -Config.legKickForce * ease;

                this.leftLeg.position.y = this.leftLegBasePos.y + offset;
                this.rightLeg.position.y = this.rightLegBasePos.y + offset;
            }
        } else {
            // Grounded
            this.jumpKickAmount = 0;

            // WALK ANIMATION
            if (isMoving) {
                // Use a running timer for consistent phase
                const time = Date.now() / 1000 * (Config.hopSpeed * Config.walkLegSpeed);

                // Sin wave moves from -1 to 1. 
                // We want: 
                // Left: Starts at 0, goes UP, then stays flat at 0 while Right goes UP.
                // Standard Sin: UP(0->1), DOWN(1->-1), UP(-1->0)
                // We can clamp negative values to 0. 
                // If we shift phases correctly, one is positive while other is negative.

                const rawSin = Math.sin(time);

                // Left Leg (Active when sin > 0)
                const leftOffset = Math.max(0, rawSin) * Config.walkLegHeight;

                // Right Leg (Active when sin < 0, so flip it)
                const rightOffset = Math.max(0, -rawSin) * Config.walkLegHeight;

                this.leftLeg.position.y = this.leftLegBasePos.y + leftOffset;
                this.rightLeg.position.y = this.rightLegBasePos.y + rightOffset;

            } else {
                // Return to base
                this.leftLeg.position.lerp(this.leftLegBasePos, dt * 10);
                this.rightLeg.position.lerp(this.rightLegBasePos, dt * 10);
            }
        }
    }

    updateJiggle(dt, isMoving) {
        if (!Config.jiggleEnabled) return;
        if (!this.assLeft && !this.assRight) return;

        // Get current vertical velocity for landing detection
        const currentVelY = this.body ? this.body.velocity.y : 0;

        // Detect landing impact (was falling, now stopped or going up)
        const landingImpact = (this.lastVelocityY < -2 && currentVelY > this.lastVelocityY) ?
            Math.abs(this.lastVelocityY) * 0.1 * Config.jiggleBounce : 0;

        // Detect movement start/stop
        const movementImpulse = (isMoving !== this.wasMoving) ? Config.jiggleMovementResponse * 0.5 : 0;

        // Add continuous movement jiggle
        const movementJiggle = isMoving ? Math.sin(Date.now() * 0.01 * Config.jiggleSpeed) * 0.3 : 0;

        // Apply impulses to velocity
        this.jiggleVelocity += landingImpact + movementImpulse;

        // Spring physics: acceleration toward rest position
        const springForce = -this.jiggleOffset * Config.jiggleSpeed * Config.jiggleSpeed;
        const dampingForce = -this.jiggleVelocity * Config.jiggleDamping;

        this.jiggleVelocity += (springForce + dampingForce) * dt;
        this.jiggleOffset += this.jiggleVelocity * dt;

        // Clamp to prevent extreme values
        this.jiggleOffset = Math.max(-1, Math.min(1, this.jiggleOffset));

        // Calculate final jiggle effect
        const jiggleAmount = (this.jiggleOffset + movementJiggle) * Config.jiggleIntensity;

        // Walk wobble - alternating forward/back (Z axis) with slight rotation
        const walkTime = Date.now() * 0.001 * Config.jiggleWalkSpeed;
        const leftWobbleZ = isMoving ? Math.sin(walkTime) * Config.jiggleWalkWobble : 0;
        const rightWobbleZ = isMoving ? Math.sin(walkTime + Math.PI) * Config.jiggleWalkWobble : 0;
        const leftRotX = isMoving ? Math.sin(walkTime) * Config.jiggleWalkWobble * 0.5 : 0;
        const rightRotX = isMoving ? Math.sin(walkTime + Math.PI) * Config.jiggleWalkWobble * 0.5 : 0;

        // Smooth return speed
        const returnSpeed = Config.jiggleReturnSpeed;

        // Apply to ass meshes with slight phase difference for natural look
        if (this.assLeft && this.assLeftBaseScale) {
            const leftJiggle = jiggleAmount;
            this.assLeft.scale.x = this.assLeftBaseScale.x * (1 + leftJiggle * 0.5);
            this.assLeft.scale.y = this.assLeftBaseScale.y * (1 - leftJiggle * 0.3);
            this.assLeft.scale.z = this.assLeftBaseScale.z * (1 + leftJiggle * 0.4);

            // Z wobble with smooth lerp back to base
            const targetZ = this.assLeftBasePos.z + leftWobbleZ;
            this.assLeft.position.z = THREE.MathUtils.lerp(this.assLeft.position.z, targetZ, dt * returnSpeed);
            this.assLeft.position.y = this.assLeftBasePos.y + leftJiggle * 0.1;

            // Rotation with smooth lerp back
            this.assLeft.rotation.x = THREE.MathUtils.lerp(this.assLeft.rotation.x, leftRotX, dt * returnSpeed);
        }

        if (this.assRight && this.assRightBaseScale) {
            const rightJiggle = jiggleAmount * 0.9 + Math.sin(Date.now() * 0.012 * Config.jiggleSpeed) * 0.1 * Config.jiggleIntensity;
            this.assRight.scale.x = this.assRightBaseScale.x * (1 + rightJiggle * 0.5);
            this.assRight.scale.y = this.assRightBaseScale.y * (1 - rightJiggle * 0.3);
            this.assRight.scale.z = this.assRightBaseScale.z * (1 + rightJiggle * 0.4);

            // Z wobble with smooth lerp back to base
            const targetZ = this.assRightBasePos.z + rightWobbleZ;
            this.assRight.position.z = THREE.MathUtils.lerp(this.assRight.position.z, targetZ, dt * returnSpeed);
            this.assRight.position.y = this.assRightBasePos.y + rightJiggle * 0.1;

            // Rotation with smooth lerp back
            this.assRight.rotation.x = THREE.MathUtils.lerp(this.assRight.rotation.x, rightRotX, dt * returnSpeed);
        }

        // Store for next frame
        this.lastVelocityY = currentVelY;
        this.wasMoving = isMoving;
    }

    updatePunch(dt, input) {
        if (!this.rightLeg || !this.rightLegBasePos) return;

        // Update cooldown
        if (this.punchCooldownTimer > 0) {
            this.punchCooldownTimer -= dt;
        }

        // Check for punch trigger
        if (input && input.consumePunch() && this.punchCooldownTimer <= 0 && !this.isPunching) {
            this.isPunching = true;
            this.punchProgress = 0;
            this.punchCooldownTimer = Config.punchCooldown;
            this.punchHitChecked = false;  // Track if we've checked for hits this punch

            // Send punch to network
            if (this.isLocal && this.world && this.world.network) {
                this.world.network.sendPunch();
            }
        }

        // Animate punch
        if (this.isPunching) {
            // Swing forward phase
            if (this.punchProgress < 1) {
                this.punchProgress += dt * Config.punchSwingSpeed;
                if (this.punchProgress >= 1) {
                    this.punchProgress = 1;
                }
            } else {
                // Return phase - mark as no longer punching, let lerp handle return
                this.isPunching = false;
            }

            // Apply swing animation - leg extends forward (foot kick, not knee)
            const swingAmount = Math.sin(this.punchProgress * Math.PI) * Config.punchSwingDistance;
            this.rightLeg.position.z = this.rightLegBasePos.z - swingAmount;  // Forward thrust
            this.rightLeg.position.y = this.rightLegBasePos.y + swingAmount * 0.15;  // Slight lift only

            // Very slight tilt back (opposite direction) so foot goes forward, not knee
            this.rightLeg.rotation.x = swingAmount * Config.punchLegRotation;  // Positive = foot forward

            // Spawn VFX at peak of swing (around 0.5 progress)
            if (this.punchProgress > 0.4 && this.punchProgress < 0.6 && !this.punchHitChecked) {
                this.punchHitChecked = true;

                // Get kick direction (forward from frog's facing)
                const kickDir = new THREE.Vector3(
                    Math.sin(this.facingAngle),
                    0,
                    Math.cos(this.facingAngle)
                );

                // Get foot position for collision check
                let checkPosition = this.mesh.position.clone();
                if (this.rightLeg) {
                    this.rightLeg.getWorldPosition(checkPosition);
                    checkPosition.add(kickDir.clone().multiplyScalar(0.5));
                }

                // Check for collision with other frogs (handled by World)
                if (this.onPunchHit) {
                    const hitSomething = this.onPunchHit(checkPosition, kickDir, Config.punchHitRadius);

                    // Shake screen on successful hit or just a tiny shake on miss for juice
                    if (this.isLocal && this.world) {
                        this.world.triggerScreenShake(hitSomething ? 1.5 : 0.3, 0.2);
                    }
                }
            }
        } else {
            // Smooth return to base position
            this.rightLeg.position.z = THREE.MathUtils.lerp(
                this.rightLeg.position.z,
                this.rightLegBasePos.z,
                dt * Config.punchReturnSpeed
            );
            this.rightLeg.position.y = THREE.MathUtils.lerp(
                this.rightLeg.position.y,
                this.rightLegBasePos.y,
                dt * Config.punchReturnSpeed
            );
            this.rightLeg.rotation.x = THREE.MathUtils.lerp(
                this.rightLeg.rotation.x,
                0,
                dt * Config.punchReturnSpeed
            );
        }
    }

    // === TONGUE MECHANICS (Reworked - ref1.md spec) ===
    // Three-phase system: AIM & LOCK → EXTEND & COMMIT → RESOLVE & RETRACT

    /**
     * Get the mouth position in world coordinates
     */
    getMouthPosition() {
        const mouthOffset = new THREE.Vector3(0, 0.3, 0.5);
        mouthOffset.applyQuaternion(this.mesh.quaternion);
        return this.mesh.position.clone().add(mouthOffset);
    }

    /**
     * Get the forward direction (using frog's facing, not camera)
     */
    getForwardDirection() {
        return new THREE.Vector3(0, 0, 1).applyQuaternion(this.mesh.quaternion);
    }

    /**
     * PHASE 1: AIM & TARGET LOCK
     * Runs once, in 1 frame, when tongue is fired.
     * Uses cone-based candidate gathering and scoring.
     * Returns: { type, id, object, point, distance, angle } or null
     */
    selectTongueTarget(world, customAimDir = null) {
        const mouthPos = this.getMouthPosition();
        const forward = customAimDir || this.getForwardDirection();

        const candidates = [];
        const maxRange = Config.tongueRange;
        const coneAngleRad = THREE.MathUtils.degToRad(Config.tongueConeAngle);

        // === CANDIDATE GATHERING ===

        // 1. Other Players (Frogs)
        if (world.frogs) {
            for (const [id, frog] of Object.entries(world.frogs)) {
                if (id === this.id) continue;           // Skip self
                if (frog.isDead) continue;              // Skip dead frogs

                const targetPos = frog.mesh.position.clone();
                targetPos.y += 0.3; // Aim at body center, not feet

                const toTarget = new THREE.Vector3().subVectors(targetPos, mouthPos);
                const distance = toTarget.length();

                if (distance > maxRange) continue;      // Out of range

                // Check if behind (dot product < 0)
                const normalizedDir = toTarget.clone().normalize();
                if (normalizedDir.dot(forward) < 0) continue;

                // Cone angle check
                const angle = normalizedDir.angleTo(forward);
                if (angle > coneAngleRad) continue;

                candidates.push({
                    type: 'frog',
                    id: id,
                    object: frog,
                    point: targetPos,
                    distance,
                    angle
                });
            }
        }

        // 2. Grapple Hooks
        if (world.grappleHooks) {
            for (const hook of world.grappleHooks) {
                const toTarget = new THREE.Vector3().subVectors(hook.position, mouthPos);
                const distance = toTarget.length();

                if (distance > maxRange) continue;

                const normalizedDir = toTarget.clone().normalize();
                if (normalizedDir.dot(forward) < 0) continue;

                const angle = normalizedDir.angleTo(forward);
                if (angle > coneAngleRad) continue;

                candidates.push({
                    type: 'hook',
                    id: null,
                    object: hook,
                    point: hook.position.clone(),
                    distance,
                    angle
                });
            }
        }

        // 3. Ball
        if (world.ball && world.ball.mesh) {
            const ballPos = world.ball.mesh.position.clone();
            const toTarget = new THREE.Vector3().subVectors(ballPos, mouthPos);
            const distance = toTarget.length();

            if (distance <= maxRange) {
                const normalizedDir = toTarget.clone().normalize();
                if (normalizedDir.dot(forward) >= 0) {
                    const angle = normalizedDir.angleTo(forward);
                    if (angle <= coneAngleRad) {
                        candidates.push({
                            type: 'ball',
                            id: null,
                            object: world.ball,
                            point: ballPos,
                            distance,
                            angle
                        });
                    }
                }
            }
        }

        // 4. Scooters
        if (world.scooters) {
            for (const scooter of world.scooters) {
                if (scooter.rider) continue; // Skip occupied scooters

                const scooterPos = scooter.mesh.position.clone();
                const toTarget = new THREE.Vector3().subVectors(scooterPos, mouthPos);
                const distance = toTarget.length();

                if (distance > maxRange) continue;

                const normalizedDir = toTarget.clone().normalize();
                if (normalizedDir.dot(forward) < 0) continue;

                const angle = normalizedDir.angleTo(forward);
                if (angle > coneAngleRad) continue;

                candidates.push({
                    type: 'scooter',
                    id: null,
                    object: scooter,
                    point: scooterPos,
                    distance,
                    angle
                });
            }
        }

        // === SCORING & SELECTION ===
        // We always check for a wall target simultaneously to allow for 'Assist' logic
        const wallTarget = this.getWallTarget(world, mouthPos, forward);

        // If we have a wall hit, check if any interactive targets are close to that hit point (Snap Assist)
        if (wallTarget && candidates.length > 0) {
            const assistRadius = Config.tongueAssistRadius || 2.0;
            const bestAssist = candidates.find(c => c.point.distanceTo(wallTarget.point) < assistRadius);
            if (bestAssist) {

                return bestAssist;
            }
        }

        if (candidates.length === 0) {
            return wallTarget;
        }

        // Score candidates: lower = better
        const scoredCandidates = candidates.map(c => ({
            ...c,
            score: (Config.tongueAngleWeight * (c.angle / coneAngleRad)) +
                (Config.tongueDistanceWeight * (c.distance / maxRange))
        }));

        scoredCandidates.sort((a, b) => a.score - b.score);
        return scoredCandidates[0];
    }

    /**
     * Find a wall target using physics raycasting
     * Used when no interactive targets are found
     */
    getWallTarget(world, mouthPos, forward) {
        if (!world || !world.physics) return null;

        // Modern Bundle Casting: Fire 5 rays in a tight cross pattern
        // This makes hitting edges, poles, and thin surfaces much easier.
        const rayRange = Config.tongueRange;
        const bundleOffsets = [
            new THREE.Vector3(0, 0, 0),        // Center
            new THREE.Vector3(0.1, 0, 0),     // Right
            new THREE.Vector3(-0.1, 0, 0),    // Left
            new THREE.Vector3(0, 0.1, 0),     // Top
            new THREE.Vector3(0, -0.1, 0)     // Bottom
        ];

        // Create a basis for the offsets (perpendicular to forward)
        const up = new THREE.Vector3(0, 1, 0);
        const rightAxis = new THREE.Vector3().crossVectors(forward, up).normalize();
        const upAxis = new THREE.Vector3().crossVectors(rightAxis, forward).normalize();

        let bestHit = null;

        for (const offset of bundleOffsets) {
            const startPoint = mouthPos.clone()
                .add(rightAxis.clone().multiplyScalar(offset.x))
                .add(upAxis.clone().multiplyScalar(offset.y));

            const from = new CANNON.Vec3(startPoint.x, startPoint.y, startPoint.z);
            const to = new CANNON.Vec3(
                startPoint.x + forward.x * rayRange,
                startPoint.y + forward.y * rayRange,
                startPoint.z + forward.z * rayRange
            );

            const result = new CANNON.RaycastResult();
            const ray = new CANNON.Ray(from, to);
            ray.intersectWorld(world.physics.world, { result });

            if (result.hasHit) {
                const hitPoint = new THREE.Vector3(
                    result.hitPointWorld.x,
                    result.hitPointWorld.y,
                    result.hitPointWorld.z
                );

                const hitNormal = result.hitNormalWorld;
                const isGround = hitNormal.y > 0.8 || hitPoint.y < 0.5;

                if (!isGround) {
                    const dist = mouthPos.distanceTo(hitPoint);
                    if (!bestHit || dist < bestHit.distance) {
                        bestHit = {
                            type: 'wall',
                            id: null,
                            object: null,
                            point: hitPoint,
                            distance: dist,
                            angle: 0
                        };
                    }
                }
            }
        }

        return bestHit;
    }

    /**
     * Create tongue visual elements (line + tip)
     */
    createTongueVisual() {
        if (this.tongueLine) return; // Already created

        // Create tongue line geometry with MULTIPLE SEGMENTS for sag/wobble
        const segments = 16;
        const tongueGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array((segments + 1) * 3);
        tongueGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const tongueMaterial = new THREE.LineBasicMaterial({
            color: Config.tongueColor,
            linewidth: 4
        });

        this.tongueSegmentCount = segments;
        this.tongueLine = new THREE.Line(tongueGeometry, tongueMaterial);
        this.tongueLine.visible = false;
        this.tongueLine.frustumCulled = false;

        // Create tongue tip (sphere)
        const tipGeometry = new THREE.SphereGeometry(Config.tongueTipSize, 8, 8);
        const tipMaterial = new THREE.MeshBasicMaterial({ color: Config.tongueColor });
        this.tongueTip = new THREE.Mesh(tipGeometry, tipMaterial);
        this.tongueTip.visible = false;

        // Add to scene (not to frog mesh, because tongue needs world coords)
        if (this.mesh.parent) {
            this.mesh.parent.add(this.tongueLine);
            this.mesh.parent.add(this.tongueTip);
        }
    }

    /**
     * Main tongue fire method
     * PHASE 1 happens here - target is selected and LOCKED
     */
    shootTongue(targetWorldPos, world) {
        if (this.tongue.state !== 'idle') return;
        if (this.tongue.cooldownTimer > 0) return;
        if (this.isRidingScooter) return; // Can't use tongue while riding

        // Store world reference
        this.world = world;

        // === PHASE 1: AIM & LOCK (happens instantly in 1 frame) ===
        const mouthPos = this.getMouthPosition();
        const aimDir = new THREE.Vector3().subVectors(targetWorldPos, mouthPos).normalize();
        const target = this.selectTongueTarget(world, aimDir);

        if (!target) {
            // No valid target - play quick "miss" poke animation
            this.playTongueMiss();
            return;
        }

        // LOCK the target - NO MORE AIM LOGIC FROM HERE
        this.tongue.target = target;
        this.tongue.lockedPoint.copy(target.point);
        this.tongue.state = 'extending';
        this.tongue.startTime = performance.now();
        this.tongue.progress = 0;

        // Update mouth position
        this.tongueStartPos.copy(this.getMouthPosition());

        // Create visual if needed
        this.createTongueVisual();
        if (this.tongueLine) this.tongueLine.visible = true;
        if (this.tongueTip) this.tongueTip.visible = true;
    }

    /**
     * Play a quick tongue poke for misses (no target found)
     */
    playTongueMiss() {
        // Quick visible poke forward then retract
        this.createTongueVisual();

        this.tongue.target = {
            type: 'miss',
            id: null,
            object: null,
            point: this.getMouthPosition().add(this.getForwardDirection().multiplyScalar(2)),
            distance: 2,
            angle: 0
        };
        this.tongue.lockedPoint.copy(this.tongue.target.point);
        this.tongue.state = 'extending';
        this.tongue.startTime = performance.now();
        this.tongue.progress = 0;

        this.tongueStartPos.copy(this.getMouthPosition());

        if (this.tongueLine) this.tongueLine.visible = true;
        if (this.tongueTip) this.tongueTip.visible = true;
    }

    /**
     * Main tongue update loop
     * Handles PHASE 2 (animation) and PHASE 3 (resolution)
     */
    updateTongue(dt, input = null) {
        // Update cooldown when idle
        if (this.tongue.state === 'idle') {
            this.tongue.cooldownTimer = Math.max(0, this.tongue.cooldownTimer - dt);
            return;
        }

        // Always update mouth position (start follows frog)
        this.tongueStartPos.copy(this.getMouthPosition());

        // Calculate elapsed time since animation started
        const elapsed = (performance.now() - this.tongue.startTime) / 1000;

        // === PHASE 2: EXTEND & COMMIT (animation only) ===
        if (this.tongue.state === 'extending') {
            const duration = this.tongue.target?.type === 'miss'
                ? Config.tongueExtendDuration * 0.5  // Faster for miss
                : Config.tongueExtendDuration;

            const t = Math.min(elapsed / duration, 1);

            // Power3.out easing: 1 - (1 - t)^3 (snappy extension)
            this.tongue.progress = 1 - Math.pow(1 - t, 3);

            if (t >= 1) {
                // Extension complete - resolve!
                this.resolveTongue();
            }
        }
        // === RETRACTING STATE ===
        else if (this.tongue.state === 'retracting') {
            const duration = Config.tongueRetractDuration;
            const t = Math.min(elapsed / duration, 1);

            // Linear retraction (or slight ease)
            this.tongue.progress = 1 - t;

            if (t >= 1) {
                this.finishTongue();
            }
        }
        // === ATTACHED STATE (grappling) ===
        else if (this.tongue.state === 'attached') {
            this.updateGrapplePull(dt, input);
        }

        // Always update visual
        this.updateTongueVisual();
    }

    /**
     * PHASE 3: RESOLUTION
     * Called when tongue reaches target - decide hit or miss
     */
    resolveTongue() {
        const target = this.tongue.target;

        // Miss type (no target was found)
        if (!target || target.type === 'miss') {
            this.tongue.state = 'retracting';
            this.tongue.startTime = performance.now();
            return;
        }

        // Check if target still exists and is valid
        if (target.type === 'frog' && (!target.object || target.object.isDead)) {
            this.tongue.state = 'retracting';
            this.tongue.startTime = performance.now();
            this.playMissEffect();
            return;
        }

        // Get current target position (might have moved)
        let currentPos = null;
        if (target.type === 'frog' && target.object?.mesh) {
            currentPos = target.object.mesh.position.clone();
            currentPos.y += 0.3;
        } else if (target.type === 'ball' && target.object?.mesh) {
            currentPos = target.object.mesh.position.clone();
        } else if (target.type === 'hook' && target.object) {
            currentPos = target.object.position.clone();
        } else if (target.type === 'wall' || target.type === 'scooter') {
            currentPos = target.point.clone();
        }

        if (!currentPos) {
            this.tongue.state = 'retracting';
            this.tongue.startTime = performance.now();
            return;
        }

        // === MAGNET RADIUS CHECK ===
        // If target moved too far from locked position, it's a miss
        const movedDistance = this.tongue.lockedPoint.distanceTo(currentPos);
        const magnetThreshold = Config.tongueMagnetRadius * 3; // Allow some movement

        if (movedDistance > magnetThreshold) {
            // Target escaped - MISS!

            this.tongue.state = 'retracting';
            this.tongue.startTime = performance.now();
            this.playMissEffect();
            return;
        }

        // === SUCCESS - Apply effect based on target type ===
        switch (target.type) {
            case 'frog':
                this.grabFrog(target.object);
                this.tongue.state = 'retracting';
                this.tongue.startTime = performance.now();
                this.playHitEffect();
                break;

            case 'hook':
            case 'wall':
                // Attach and start grappling
                this.tongue.state = 'attached';
                // Snap locked point to current position (magnet effect)
                this.tongue.lockedPoint.copy(currentPos);
                this.playHitEffect();
                break;

            case 'ball':
                this.grabBall(target.object);
                this.tongue.state = 'retracting';
                this.tongue.startTime = performance.now();
                this.playHitEffect();
                break;

            case 'scooter':
                this.pullScooter(target.object);
                this.tongue.state = 'retracting';
                this.tongue.startTime = performance.now();
                this.playHitEffect();
                break;

            default:
                this.tongue.state = 'retracting';
                this.tongue.startTime = performance.now();
        }
    }

    /**
     * Apply grab force to another frog
     */
    grabFrog(otherFrog) {
        if (!otherFrog || !otherFrog.body) return;

        const pullDir = new THREE.Vector3()
            .subVectors(this.mesh.position, otherFrog.mesh.position)
            .normalize();

        // Apply pull force to the other frog
        otherFrog.body.velocity.x += pullDir.x * Config.tongueGrabForce;
        otherFrog.body.velocity.y += pullDir.y * Config.tongueGrabForce * 0.5; // Less vertical
        otherFrog.body.velocity.z += pullDir.z * Config.tongueGrabForce;



        // Send to network if multiplayer
        if (this.world?.network) {
            this.world.network.socket.emit('tongueResult', {
                sourceId: this.id,
                targetId: otherFrog.id,
                type: 'pull'
            });
        }
    }

    /**
     * Apply grab force to ball
     */
    grabBall(ball) {
        if (!ball || !ball.body) return;

        const pullDir = new THREE.Vector3()
            .subVectors(this.mesh.position, ball.mesh.position)
            .normalize();

        // Pull ball toward frog
        ball.body.velocity.x += pullDir.x * Config.tongueGrabForce;
        ball.body.velocity.y += pullDir.y * Config.tongueGrabForce * 0.3;
        ball.body.velocity.z += pullDir.z * Config.tongueGrabForce;


    }

    /**
     * Apply pull to scooter (bring it closer)
     */
    pullScooter(scooter) {
        if (!scooter || !scooter.body) return;

        const pullDir = new THREE.Vector3()
            .subVectors(this.mesh.position, scooter.mesh.position)
            .normalize();

        scooter.body.velocity.x += pullDir.x * Config.tongueGrabForce * 0.5;
        scooter.body.velocity.z += pullDir.z * Config.tongueGrabForce * 0.5;


    }

    /**
     * Update grapple pull physics (when attached to wall/hook)
     */
    updateGrapplePull(dt, input) {
        if (!this.tongue.target) return;

        const grapplePoint = this.tongue.lockedPoint;
        const pullDirection = new THREE.Vector3()
            .subVectors(grapplePoint, this.mesh.position)
            .normalize();

        const distToTarget = this.mesh.position.distanceTo(grapplePoint);

        // --- Proximity Based Force Dampening ---
        // As we get closer than 4 units, we start tapering off the force
        let forceMultiplier = 1.0;
        if (distToTarget < 4.0) {
            forceMultiplier = Math.max(0, (distToTarget - 1.5) / 2.5);
        }

        const pullForce = Config.tongueGrappleForce * forceMultiplier;

        if (this.body) {
            // Apply pull force
            this.body.velocity.x += pullDirection.x * pullForce * dt * 10;
            this.body.velocity.y += pullDirection.y * pullForce * dt * 10;
            this.body.velocity.z += pullDirection.z * pullForce * dt * 10;

            // --- Swing Mechanics ---
            // Apply sideways force if using keys during grapple
            if (input && input.keys) {
                const forward = this.getForwardDirection();
                const right = new THREE.Vector3().crossVectors(new THREE.Vector3(0, 1, 0), forward).normalize();

                const swingForce = Config.tongueSwingForce || 10;

                if (input.keys.left) {
                    this.body.velocity.x -= right.x * swingForce * dt * 10;
                    this.body.velocity.z -= right.z * swingForce * dt * 10;
                }
                if (input.keys.right) {
                    this.body.velocity.x += right.x * swingForce * dt * 10;
                    this.body.velocity.z += right.z * swingForce * dt * 10;
                }
                // Air forward/backward
                if (input.keys.forward) {
                    this.body.velocity.x += forward.x * swingForce * 0.5 * dt * 10;
                    this.body.velocity.z += forward.z * swingForce * 0.5 * dt * 10;
                }
                if (input.keys.backward) {
                    this.body.velocity.x -= forward.x * swingForce * 0.5 * dt * 10;
                    this.body.velocity.z -= forward.z * swingForce * 0.5 * dt * 10;
                }
            }

            // Cap max grapple velocity to prevent tunneling
            const maxGrappleVel = 35.0; // Slightly higher for swinging
            const currentSpeed = this.body.velocity.length();
            if (currentSpeed > maxGrappleVel) {
                this.body.velocity.scale(maxGrappleVel / currentSpeed, this.body.velocity);
            }
        }

        // Release check
        const isHolding = input ? input.tongueHeld : true;

        // Release only if NOT holding or extremely close
        if ((!isHolding && distToTarget < 2.5) || distToTarget < 1.0) {
            this.tongue.state = 'retracting';
            this.tongue.startTime = performance.now();

            // Kill velocity towards the wall to prevent "sinking" into it
            if (this.body) {
                this.body.velocity.scale(0.5, this.body.velocity);
            }
        }
    }

    /**
     * Finish tongue action and reset state
     */
    finishTongue() {
        this.tongue.state = 'idle';
        this.tongue.progress = 0;
        this.tongue.target = null;
        this.tongue.cooldownTimer = Config.tongueCooldown;

        // Hide tongue
        if (this.tongueLine) this.tongueLine.visible = false;
        if (this.tongueTip) this.tongueTip.visible = false;
    }

    /**
     * Update tongue visual (line + tip position)
     */
    updateTongueVisual() {
        if (!this.tongueLine || !this.tongueTip) return;

        // Calculate current tongue end based on progress
        const targetPos = this.tongue.lockedPoint;
        const currentEnd = new THREE.Vector3().lerpVectors(
            this.tongueStartPos,
            targetPos,
            this.tongue.progress
        );

        const segments = this.tongueSegmentCount || 1;
        const positions = this.tongueLine.geometry.attributes.position.array;

        const time = performance.now() / 1000;
        const isAttached = this.tongue.state === 'attached';

        // --- High-End Visuals: Dynamic Sag & Wobble ---
        const dist = this.tongueStartPos.distanceTo(currentEnd);

        // Sag amount increases when attached but close to the point (slack)
        let sagBase = 0;
        if (isAttached) {
            const maxSlackDist = 6.0;
            sagBase = Math.max(0, (maxSlackDist - dist) * 0.15);
        }

        // Wobble amount (faster during extension)
        const isExtending = this.tongue.state === 'extending';
        const wobbleIntensity = isExtending ? 0.08 : (isAttached ? 0.02 : 0);
        const wobbleSpeed = isExtending ? 25 : 10;
        const wobble = Math.sin(time * wobbleSpeed) * wobbleIntensity;

        for (let i = 0; i <= segments; i++) {
            const t = i / segments;
            const p = new THREE.Vector3().lerpVectors(this.tongueStartPos, currentEnd, t);

            // Apply Sag (Quadratic parabola)
            if (sagBase > 0) {
                const sagFactor = Math.sin(t * Math.PI); // Half-sine for arch
                p.y -= sagFactor * sagBase;
            }

            // Apply organic wobble wave
            if (isExtending || isAttached) {
                const waveOffset = Math.sin(t * Math.PI * 2 + time * 10) * (wobble * Math.sin(t * Math.PI));
                p.z += waveOffset;
                p.x += waveOffset * 0.5;
            }

            positions[i * 3] = p.x;
            positions[i * 3 + 1] = p.y;
            positions[i * 3 + 2] = p.z;
        }

        this.tongueLine.geometry.attributes.position.needsUpdate = true;

        // Update tip position
        this.tongueTip.position.copy(currentEnd);

        // Pulse tip scale slightly
        const tipPulse = 1.0 + Math.sin(time * 15) * 0.1;
        this.tongueTip.scale.setScalar(tipPulse);
    }

    /**
     * Release tongue (called when player releases button)
     */
    releaseTongue() {
        if (this.tongue.state === 'attached') {
            this.tongue.state = 'retracting';
            this.tongue.startTime = performance.now();
        }
    }

    /**
     * Visual feedback - HIT effect
     */
    playHitEffect() {
        // Camera punch/shake
        if (this.world && this.isLocal) {
            this.world.triggerScreenShake(0.5, 0.1);

            // Spawn wet splatter at the hit point
            if (this.particles && this.tongue.target) {
                this.particles.spawnTongueImpact(this.tongue.lockedPoint, Config.tongueColor);
            }
        }

        // TODO: Add wet snap sound cue
        // TODO: Add stretch recoil on frog body
    }

    /**
     * Visual feedback - MISS effect
     */
    playMissEffect() {
        // Slight over-extension already handled by miss animation
        // TODO: Add embarrassed retract animation
        // TODO: Add funny sound cue

        // Small screen shake for feedback
        if (this.world && this.isLocal) {
            this.world.triggerScreenShake(0.2, 0.05);
        }
    }

    updateEyes(targetPoint) {
        if (!this.pupils || this.pupils.length === 0 || !targetPoint) return;

        this.pupils.forEach(pupil => {
            const localTarget = pupil.parent.worldToLocal(targetPoint.clone());
            const startPos = pupil.userData.initialPos;

            // Calculate vector from center
            const diff = new THREE.Vector3().subVectors(localTarget, startPos);

            // Lock Z axis (depth) to prevent popping out
            // Assuming Z is the depth axis relative to the eye surface
            diff.z = 0;

            // Clamp radius
            const maxRadius = 0.12;
            if (diff.length() > maxRadius) {
                diff.normalize().multiplyScalar(maxRadius);
            }

            const targetPos = startPos.clone().add(diff);
            pupil.position.lerp(targetPos, 0.2);
        });
    }

    // Trigger punch animation (visual only, for remote players)
    remotePunch() {
        this.punchTimer = 0;
        this.isPunching = true;
        this.punchProgress = 0;
        this.punchHitChecked = false; // Doesn't matter for remote but good reset
    }

    takeDamage(amount, knockback, isNetworked = false, isCritical = false, attackerId = null) {
        if (this.isDead) return;

        this.health -= amount;

        // Track last attacker for kill credit
        if (attackerId) {
            this.lastAttackerId = attackerId;

        }

        // Show health bar when hit
        this.showHealthBar();

        // Update health bar immediately
        this.updateHealthBar();

        // Red tint effect - visible to all players
        this.showHitTint();

        // Spawn hit VFX particles
        if (this.particles && this.mesh) {
            const hitPos = this.mesh.position.clone();
            hitPos.y += 0.5; // Hit at body level
            const hitDir = knockback
                ? new THREE.Vector3(knockback.x, knockback.y, knockback.z).normalize()
                : new THREE.Vector3(0, 1, 0);
            this.particles.spawnPunchImpact(hitPos, hitDir);
        }

        // Screen shake when hit (for local player)
        if (this.isLocal && this.world) {
            const shakeAmount = isCritical ? 2.0 : 1.0;
            this.world.triggerScreenShake(shakeAmount, 0.50);
        }

        // Apply knockback (only works on dynamic bodies, not kinematic)
        if (knockback && this.body && this.body.type !== 2) { // 2 = KINEMATIC
            this.body.velocity.set(knockback.x, knockback.y, knockback.z);
        }

        // Show damage toast
        this.showDamageToast(amount, isCritical);

        if (this.health <= 0) {
            this.health = 0;
            this.die(isNetworked);
        }
    }

    showHitTint() {
        // Store original colors and apply red tint
        this.bodyMesh.traverse((child) => {
            if (child.isMesh && child.material) {
                // Store original if not stored
                if (!child.userData.originalColor) {
                    if (child.material.color) {
                        child.userData.originalColor = child.material.color.clone();
                    }
                }

                // Apply red tint by blending with red
                if (child.material.color) {
                    const red = new THREE.Color(0xff0000);
                    child.material.color.lerp(red, 0.6);
                }
            }
        });

        // Fade back to original over 0.5s
        if (this.hitTintTimeout) clearTimeout(this.hitTintTimeout);

        this.hitTintTimeout = setTimeout(() => {
            this.fadeHitTint();
        }, 100); // Start fading after 100ms
    }

    fadeHitTint() {
        let progress = 0;
        const fadeInterval = setInterval(() => {
            progress += 0.1;

            this.bodyMesh.traverse((child) => {
                if (child.isMesh && child.material && child.userData.originalColor) {
                    child.material.color.lerp(child.userData.originalColor, 0.3);
                }
            });

            if (progress >= 1) {
                clearInterval(fadeInterval);
                // Ensure colors are fully restored
                this.bodyMesh.traverse((child) => {
                    if (child.isMesh && child.material && child.userData.originalColor) {
                        child.material.color.copy(child.userData.originalColor);
                    }
                });
            }
        }, 50); // Fade over ~500ms
    }

    showHealthBar() {
        this.healthBarVisible = true;
        this.healthBarVisibleTimer = 3.0; // 3 seconds
        this.healthBarContainer.style.opacity = '1';
    }

    hideHealthBar() {
        this.healthBarVisible = false;
        this.healthBarContainer.style.opacity = '0';
    }

    updateHealthBarVisibility(dt) {
        if (this.healthBarVisible && this.healthBarVisibleTimer > 0) {
            this.healthBarVisibleTimer -= dt;
            if (this.healthBarVisibleTimer <= 0) {
                this.hideHealthBar();
            }
        }
    }

    die(isNetworked = false) {
        if (this.isDead) return;

        // Dismount from scooter if riding
        if (this.isRidingScooter && this.currentScooter) {
            this.currentScooter.dismount();
        }

        this.isDead = true;
        this.deathTimer = 0;
        this.respawnTimer = Config.respawnTime;

        // Disperse Effect
        if (this.particles) {
            this.particles.spawnDeathDisperse(this.mesh.position, this.color);
        }

        // Hide mesh immediately (replaced by particles)
        this.setMeshOpacity(0);
        this.bodyMesh.visible = false;

        // Disable physics temporarily
        if (this.body) {
            this.body.velocity.set(0, 0, 0);
            // Move body away or disable collision to prevent invisible blocking?
            // For now, simple velocity zero is fine, maybe move up high?
            this.body.position.y = 1000;
        }

        // Hide health bar
        this.healthBarContainer.style.display = 'none';

        // Show death screen for local player
        if (this.isLocal && window.showDeathScreen) {
            window.showDeathScreen();
        }

        // If this is OUR death (local frog) and NOT triggered by network event, send it
        if (this.isLocal && !isNetworked && this.world && this.world.network) {

            this.world.network.sendDeath(this.lastAttackerId || null);
        }
    }

    respawn(isNetworked = false) {
        this.isDead = false;
        this.health = Config.maxHealth;
        this.deathTimer = 0;
        this.lastAttackerId = null; // Clear to prevent stale kill credit

        // Reset position
        if (this.body) {
            this.body.position.set(0, 10, 0);
            this.body.velocity.set(0, 0, 0);
            // Immediately sync mesh position (important for when tab is inactive)
            this.mesh.position.set(0, 10, 0);
        }

        // Reset opacity & visibility
        this.setMeshOpacity(1);
        this.bodyMesh.visible = true;

        // Show health bar & Update it!
        this.healthBarContainer.style.display = 'block';
        this.updateHealthBar();

        // Hide death screen for local player
        if (this.isLocal && window.hideDeathScreen) {
            window.hideDeathScreen();
        }

        // If this is OUR respawn (local frog) and NOT triggered by network, send it
        if (this.isLocal && !isNetworked && this.world && this.world.network) {
            this.world.network.sendRespawn();
        }
    }



    updateHealthBar() {
        if (!this.healthBarFill) return;

        const percent = (this.health / Config.maxHealth) * 100;
        this.healthBarFill.style.width = `${percent}%`;

        // Update color based on health
        this.healthBarFill.classList.remove('low', 'critical');
        if (percent <= 25) {
            this.healthBarFill.classList.add('critical');
        } else if (percent <= 50) {
            this.healthBarFill.classList.add('low');
        }
    }

    setMeshOpacity(opacity) {
        this.bodyMesh.traverse((child) => {
            if (child.isMesh && child.material) {
                child.material.transparent = true;
                child.material.opacity = opacity;
            }
        });
    }

    showDamageToast(amount, isCritical = false) {
        // Create toast as CSS2DObject so it follows the frog in 3D space
        const toastDiv = document.createElement('div');
        toastDiv.className = 'damage-toast' + (isCritical ? ' critical' : '');
        toastDiv.textContent = isCritical ? `CRIT! -${amount}` : `-${amount}`;

        const toast = new CSS2DObject(toastDiv);
        toast.position.set(
            (Math.random() - 0.5) * 0.5,  // Random horizontal offset
            2.5 + Math.random() * 0.5,     // Above health bar
            0
        );
        this.mesh.add(toast);

        // Animate and remove
        setTimeout(() => {
            this.mesh.remove(toast);
            toastDiv.remove();
        }, 1000);


    }

    // Cleanup method to properly dispose of CSS2D objects
    dispose() {
        // Remove CSS2D DOM elements
        if (this.chatBubbleDiv && this.chatBubbleDiv.parentNode) {
            this.chatBubbleDiv.parentNode.removeChild(this.chatBubbleDiv);
        }
        if (this.healthBarContainer && this.healthBarContainer.parentNode) {
            this.healthBarContainer.parentNode.removeChild(this.healthBarContainer);
        }
        if (this.nameTagDiv && this.nameTagDiv.parentNode) {
            this.nameTagDiv.parentNode.removeChild(this.nameTagDiv);
        }

        // Clear any pending timers
        if (this.chatTimer) {
            clearTimeout(this.chatTimer);
            this.chatTimer = null;
        }

        // Dispose of materials and geometry if needed
        this.bodyMesh.traverse((child) => {
            if (child.isMesh) {
                if (child.geometry) child.geometry.dispose();
                if (child.material) {
                    if (Array.isArray(child.material)) {
                        child.material.forEach(m => m.dispose());
                    } else {
                        child.material.dispose();
                    }
                }
            }
        });
    }
}

