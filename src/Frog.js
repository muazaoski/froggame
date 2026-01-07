import * as THREE from 'three/webgpu';
import * as CANNON from 'cannon-es';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three-stdlib';
import { Config } from './Config.js';
import { Scooter } from './Scooter.js';

// Shared objects for efficient target acquisition
const _raycaster = new THREE.Raycaster();
const _mouthRaycaster = new THREE.Raycaster();
const _tmpV3 = new THREE.Vector3();
const _tmpV3_2 = new THREE.Vector3();
const _tmpV2 = new THREE.Vector2();

function ndcToPx(ndc, w, h) {
    return new THREE.Vector2(
        (ndc.x * 0.5 + 0.5) * w,
        (1 - (ndc.y * 0.5 + 0.5)) * h
    );
}

function worldToScreenPx(worldPos, camera, w, h) {
    // Project requires a copy or will modify in-place? Actually project returns new vector but uses internally as well.
    // three.js docs: .project(camera) projects this vector from world space to NDC space.
    const p = _tmpV3_2.copy(worldPos).project(camera);
    return ndcToPx(p, w, h);
}

export class Frog {
    static modelGeometry = null;
    static drawingModelGeometry = null;
    static loader = (() => {
        const l = new GLTFLoader();
        l.setMeshoptDecoder(MeshoptDecoder);
        return l;
    })();

    static setLoaderManager(manager) {
        Frog.loader = new GLTFLoader(manager);
        Frog.loader.setMeshoptDecoder(MeshoptDecoder);
    }

    constructor(id, color, physicsWorld, isLocal = false) {
        this.id = id;
        this.isLocal = isLocal;
        this.color = color;

        // VISUALS
        this.mesh = new THREE.Group();
        this.bodyMesh = new THREE.Group(); // Normal state
        this.drawingMesh = new THREE.Group(); // Drawing pose
        this.drawingMesh.visible = false;
        this.mesh.add(this.bodyMesh);
        this.mesh.add(this.drawingMesh);

        // Load Normal Model
        if (Frog.modelGeometry) {
            const model = Frog.modelGeometry.clone();
            this.applyColor(model);
            this.bodyMesh.add(model);
        } else {
            Frog.loader.load('/models/frog.glb', (gltf) => {
                if (!gltf || !gltf.scene) return;
                const model = gltf.scene;
                model.scale.set(0.5, 0.5, 0.5);
                model.position.y = -0.6;
                model.rotation.y = Math.PI;
                Frog.modelGeometry = model.clone();
                this.applyColor(model);
                this.bodyMesh.add(model);
            });
        }

        // Load Drawing Pose Model
        if (Frog.drawingModelGeometry) {
            this.initDrawingModel(Frog.drawingModelGeometry.clone());
        } else {
            Frog.loader.load('/models/frog_draw.glb', (gltf) => {
                if (!gltf || !gltf.scene) return;
                const model = gltf.scene;
                model.scale.set(0.5, 0.5, 0.5);
                model.position.y = -0.6;
                model.rotation.y = Math.PI;
                Frog.drawingModelGeometry = model.clone();
                this.initDrawingModel(model);
            }, undefined, (err) => {
                console.error("Drawing pose model error:", err);
                if (this.isLocal && this.world && this.world.showToast) {
                    this.world.showToast('Error loading frog_draw.glb!', 'error');
                }
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
                    fixedRotation: true,
                    collisionFilterGroup: physicsWorld.FILTER_FROG,
                    collisionFilterMask: physicsWorld.FILTER_TERRAIN | physicsWorld.FILTER_FROG | physicsWorld.FILTER_INTERACTIVE
                });
                this.body.linearDamping = Config.linearDamping;
            } else {
                // Remote players are KINEMATIC (infinite mass, moved by code)
                // They act as obstacles for the local player
                this.body = new CANNON.Body({
                    type: CANNON.Body.KINEMATIC,
                    shape: shape,
                    material: physicsWorld.frogMaterial,
                    collisionFilterGroup: physicsWorld.FILTER_FROG,
                    collisionFilterMask: physicsWorld.FILTER_TERRAIN | physicsWorld.FILTER_FROG | physicsWorld.FILTER_INTERACTIVE
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

        // Underwater / Diving
        this.isUnderwater = false;

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

        // Tongue proxy collider (invisible mesh for better raycasting)
        const proxyGeo = new THREE.SphereGeometry(0.8, 8, 8);
        const proxyMat = new THREE.MeshBasicMaterial({ visible: false });
        this.tongueProxy = new THREE.Mesh(proxyGeo, proxyMat);
        this.tongueProxy.position.y = 0.5; // Center of body
        this.mesh.add(this.tongueProxy);

        this.flies = 0;                 // Currency
        this.tongueLine = null;         // Visual line
        this.tongueTip = null;          // Visual tip sphere
        this.tongueTube = null;         // Visual tube geometry (for thickness)
        this.laserLine = null;          // Visual laser sight guide
        this.laserDot = null;           // End of laser dot
        this.grappleAnchorBody = null;  // Physics anchor for swing
        this.grappleConstraint = null; // Distance constraint for swing
        this.isSwinging = false;        // Track swing state
        this.lockTimer = 0;             // Stability timer
        this.lockedTarget = null;       // Sticky target lock
        this.lastTargetId = null;       // For hysteresis tracking

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

        this.audio = null; // Set by World

        // Pose/Editor States
        this.isPoserMode = false;
        this.isDrawingPose = false;
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

    update(dt, input, lookTarget, cameraOrbitAngle = 0, isPlacing = false) {
        // POSER MODE or DRAWING MODE: Skip all physics/animation updates if enabled
        if (this.isPoserMode || this.isDrawingPose) return;

        // ...

        // Update Punch/Kick Animation
        this.updatePunch(dt, input, isPlacing);

        // Handle scooter riding state FIRST for remote players...
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

        // Update Laser Sight (Local only)
        if (this.isLocal && Config.tongueLaserSight) {
            this.updateLaserSight(input, dt);
        } else if (this.laserLine) {
            this.laserLine.visible = false;
            if (this.laserDot) this.laserDot.visible = false;
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

            // Detect landing for remote players
            if (this.isRemoteGrounded && !this.wasRemoteGrounded) {
                const impactForce = Math.abs(this.remoteVelocity ? this.remoteVelocity.y : 0);
                if (this.audio && impactForce > 2) {
                    this.audio.playSpatial('land', this.mesh.position, { volume: Math.min(impactForce / 10, 0.8) });
                }
                if (this.particles && impactForce > 3) {
                    const landPos = this.mesh.position.clone();
                    landPos.y += Config.vfxGroundOffset;
                    this.particles.spawnLandingDust(landPos, impactForce, this.color);
                }
            }

            // Detect jump for remote players (Velocity Y jump)
            if (!this.isRemoteGrounded && this.wasRemoteGrounded && this.remoteVelocity && this.remoteVelocity.y > 5) {
                if (this.audio) {
                    this.audio.playSpatial('hop', this.mesh.position, { volume: 0.6 });
                    const grunt = Math.random() > 0.5 ? 'grunt1' : 'grunt2';
                    this.audio.playSpatial(grunt, this.mesh.position, { volume: 0.4 });
                }
            }
            this.wasRemoteGrounded = this.isRemoteGrounded;

            // Update Animations (Legs)
            this.updateAnimations(dt, remoteIsMoving, this.isRemoteGrounded);

            // Update Jiggle
            this.updateJiggle(dt, remoteIsMoving);

            // Update Eyes
            if (this.targetLook) this.updateEyes(this.targetLook);

            // Update Tongue (Visuals and Sounds for remote)
            const oldTongueState = this.tongue.state;
            this.updateTongue(dt, null);

            // Remote Tongue Sounds
            if (this.audio && this.tongue.state !== oldTongueState) {
                if (this.tongue.state === 'extending') {
                    this.audio.playSpatial('tongue_shoot', this.getMouthPosition(), { volume: 0.5 });
                } else if (this.tongue.state === 'attached') {
                    // Hit something
                    const sound = Math.random() > 0.5 ? 'tongue_hit_player1' : 'tongue_hit_player2';
                    this.audio.playSpatial(sound, this.tongue.lockedPoint, { volume: 0.6 });
                }
            }

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

            // Remote Punch Audio Logic
            if (this.isPunching && !this.remotePunchPlayed) {
                // If remote player starts pulsing punchProgress, play sound once
                if (this.audio) {
                    this.audio.playSpatial('punch', this.mesh.position, { volume: 0.5 });
                }
                this.remotePunchPlayed = true;
            } else if (!this.isPunching) {
                this.remotePunchPlayed = false;
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
        // Apply underwater slowdown (50% speed reduction when diving)
        const underwaterMultiplier = this.isUnderwater ? 0.5 : 1.0;
        const targetSpeed = Config.moveSpeed * underwaterMultiplier;
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

            // HYBRID ROTATION: 
            // - Default: Face movement direction (natural walking)
            // - When aiming (tongueHeld or tongue active): Face cursor
            const isAiming = (input.tongueHeld || this.tongue.state !== 'idle');

            if (isAiming && lookTarget && !isPlacing) {
                // Aiming mode: Smoothly rotate toward cursor
                const toTarget = new THREE.Vector3().subVectors(lookTarget, this.mesh.position);
                const lookAngle = Math.atan2(toTarget.x, toTarget.z);
                let lookDiff = lookAngle - this.facingAngle;
                while (lookDiff > Math.PI) lookDiff -= Math.PI * 2;
                while (lookDiff < -Math.PI) lookDiff += Math.PI * 2;

                // Smooth but responsive rotation toward aim
                this.facingAngle += lookDiff * 15.0 * dt;
            } else {
                // Normal mode: Face movement direction
                this.facingAngle += angleDiff * Config.rotationSpeed * dt;
            }

            // Apply movement acceleration toward target velocity
            // This is MUCH snappier than raw force and prevents "speedster" teleportation
            const isGrappling = this.tongue.state === 'attached';
            const accelScale = this.onGround ? 12.0 : (isGrappling ? 1.0 : (Config.airControl * 5.0)); // Less fighting while grappling
            const grappleMult = isGrappling ? 0.2 : 1.0;

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
            // Slower deceleration underwater for floaty feel
            if (this.onGround) {
                const stopScale = this.isUnderwater ? 5.0 : 15.0;
                this.body.velocity.x = THREE.MathUtils.lerp(this.body.velocity.x, 0, stopScale * dt);
                this.body.velocity.z = THREE.MathUtils.lerp(this.body.velocity.z, 0, stopScale * dt);
            }
        }

        // UNDERWATER PHYSICS - diving and floating
        if (this.isUnderwater && this.body) {
            let buoyancyAmt = 12.0; // Base buoyancy (slightly higher than gravity)

            if (input.keys.dive) {
                buoyancyAmt = -15.0; // Dive down with Left Control
            } else if (input.keys.jump) {
                buoyancyAmt = 25.0; // Float up with Jump/Space
            }

            this.body.velocity.y += buoyancyAmt * dt;

            // Drag (Water resistance)
            this.body.velocity.x *= 0.98;
            this.body.velocity.z *= 0.98;
            this.body.velocity.y *= 0.95;

            // Limit vertical speed in water
            const maxSwimVertical = 5.0;
            this.body.velocity.y = Math.max(-maxSwimVertical, Math.min(maxSwimVertical, this.body.velocity.y));
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

            // Play Jump Sound
            if (this.audio) {
                this.audio.playSpatial('hop', this.mesh.position);
                const grunt = Math.random() > 0.5 ? 'grunt1' : 'grunt2';
                this.audio.playSpatial(grunt, this.mesh.position, { volume: 0.6 });
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

                // Play Land Sound
                if (this.audio && impactForce > 3) {
                    this.audio.playSpatial('land', this.mesh.position, { volume: Math.min(impactForce / 10, 1.0) });
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

        // Update Punch/Kick Animation is handled earlier in the function with isPlacing param
        // (Do not call updatePunch here again)

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
            // Encode state in punchProgress bitmask (server filters unknown fields)
            // +200: swimming/underwater, +100: riding, +10/20/30: tongue state
            punchProgress: this.punchProgress +
                (this.isRidingScooter ? 100 : 0) +
                (tongueStateCode * 10) +
                (this.isUnderwater ? 200 : 0),
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

        // Decode state from punchProgress bitmask
        let rawPunchProgress = state.punchProgress || 0;
        let isRiding = false;
        let tongueStateCode = 0;
        let isUnderwaterRemote = false;

        // Extract underwater flag (200)
        if (rawPunchProgress >= 200) {
            isUnderwaterRemote = true;
            rawPunchProgress -= 200;
        }

        // Extract riding flag (100)
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
        this.isRemoteUnderwater = isUnderwaterRemote;

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
        // Only check horizontal speed for walking animation to avoid buoyancy/gravity jitter
        const horizontalSpeed = Math.sqrt(vel.x * vel.x + vel.z * vel.z);
        const isMoving = horizontalSpeed > 0.1;
        const isSwimming = this.isRemoteUnderwater;

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
        this.updateAnimations(dt, isMoving, isGrounded, isSwimming);

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

                // Update internal state values so updateTongueVisual works
                this.tongueStartPos.copy(this.getMouthPosition());
                this.tongue.progress = this.remoteTongueProgress;

                // Decode internal state string for visual effects (sag/wobble)
                const states = ['idle', 'extending', 'retracting', 'attached'];
                this.tongue.state = states[this.remoteTongueStateCode] || 'idle';
                this.tongue.lockedPoint.copy(this.remoteTongueTarget);

                // Call the standard visual update
                this.updateTongueVisual();
            }
        } else if (this.tongueLine && this.tongueLine.visible) {
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

    initDrawingModel(model) {
        this.drawingMesh.add(model);
        this.paperMesh = null;

        model.traverse(child => {
            if (child.isMesh) {
                const name = child.name.toLowerCase();
                child.material = child.material.clone();

                // Color standard parts
                if (name.includes('eye') || name.includes('white')) {
                    child.material.color.set(0xffffff);
                } else if (name.includes('pupil')) {
                    child.material.color.set(0x000000);
                } else if (name.includes('paper') || name.includes('plane') || name.includes('canvas') || name.includes('sheet') || name.includes('page') || name.includes('quad')) {
                    // This is our drawing surface!
                    this.paperMesh = child;

                    // Force a consistent material that ignores world lighting
                    if (!(child.material instanceof THREE.MeshBasicMaterial)) {
                        child.material = new THREE.MeshBasicMaterial({
                            color: 0xffffff,
                            side: THREE.DoubleSide
                        });
                    }

                    // Ensure it can show the texture
                    child.material.map = null;
                    child.material.needsUpdate = true;
                } else {
                    child.material.color.set(this.color);
                }
            }
        });

        if (this.isLocal && this.world && this.world.showToast) {
            this.world.showToast('🎨 Artist Pose Loaded!', 'success');
        }
        console.log(`[Frog ${this.id}] Drawing model initialized. Paper mesh found: ${!!this.paperMesh}`);
    }

    setDrawingMode(enabled) {
        this.isDrawingPose = enabled;
        console.log(`[Frog ${this.id}] setDrawingMode: ${enabled}`);

        if (this.drawingMesh) {
            this.drawingMesh.visible = enabled;
            this.bodyMesh.visible = !enabled;

            // Recurse to be absolutely sure
            this.drawingMesh.traverse(child => { if (child.isMesh) child.visible = enabled; });
            this.bodyMesh.traverse(child => { if (child.isMesh) child.visible = !enabled; });
        }
    }

    updateDrawingTexture(source) {
        if (!this.paperMesh || !source) return;

        // Force material type if it got reset or lost (ensures paper is always visible)
        if (!(this.paperMesh.material instanceof THREE.MeshBasicMaterial)) {
            this.paperMesh.material = new THREE.MeshBasicMaterial({
                color: 0xffffff,
                side: THREE.DoubleSide
            });
        }

        if (!this.drawingTexture) {
            // Check if source is canvas or image
            if (source instanceof HTMLCanvasElement) {
                this.drawingTexture = new THREE.CanvasTexture(source);
            } else {
                this.drawingTexture = new THREE.Texture(source);
            }

            this.drawingTexture.minFilter = THREE.LinearFilter;
            this.drawingTexture.magFilter = THREE.LinearFilter;
            this.paperMesh.material.map = this.drawingTexture;
        } else if (source instanceof HTMLImageElement && this.drawingTexture.image !== source) {
            // Update texture image from network source
            this.drawingTexture.image = source;
        }

        // Always mark for update to trigger re-render
        this.drawingTexture.needsUpdate = true;
        this.paperMesh.material.needsUpdate = true;
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

    /**
     * Update leg animations based on movement state
     */
    updateAnimations(dt, isMoving, isGrounded, isSwimming = false) {
        if (!this.leftLeg || !this.rightLeg) return;

        // SWIMMING / UNDERWATER (Disable walking, maybe add treading later)
        if (isSwimming) {
            this.jumpKickAmount = 0;
            // Smoothly return to base or play subtle swim animation
            this.leftLeg.position.lerp(this.leftLegBasePos, dt * 5);
            this.rightLeg.position.lerp(this.rightLegBasePos, dt * 5);
            return;
        }

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
        const deltaVelY = Math.abs(currentVelY - this.lastVelocityY);

        // Add bounce based on landing impact
        if (deltaVelY > 0.5) {
            this.jiggleOffset += deltaVelY * Config.jiggleBounce;
        }

        // Apply damping
        this.jiggleOffset -= this.jiggleOffset * Config.jiggleDamping * dt;
        if (this.jiggleOffset < 0) this.jiggleOffset = 0;

        // Add movement wobble
        const movementJiggle = isMoving ? Math.sin(Date.now() * 0.01 * Config.jiggleSpeed) * Config.jiggleMovementResponse : 0;

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

    updatePunch(dt, input, isPlacingMode) {
        if (!this.rightLeg || !this.rightLegBasePos) return;

        // Prevent punch if we are placing art/notes
        if (isPlacingMode) {
            // console.log("Punch BLOCKED by placement mode"); 
            return;
        }

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

                    // Play Punch Sound
                    if (this.audio) {
                        let soundName;
                        if (hitSomething) {
                            soundName = Math.random() > 0.15 ? 'punch' : 'punch_crit';
                        } else {
                            soundName = Math.random() > 0.5 ? 'punch_whoosh' : 'punch_whoosh2';
                        }
                        this.audio.playSpatial(soundName, checkPosition, { volume: hitSomething ? 1.0 : 0.7 });
                    }

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
     * Simple, reliable tongue target acquisition
     * Raycasts from camera with multiple fallbacks for maximum reliability
     */
    selectTongueTarget(world, input, camera, dt) {
        if (!world || !input || !camera) return null;

        const MAX_RANGE = Config.tongueRange || 25;
        const playerY = this.mesh?.position?.y || 0;
        const isAirborne = !this.onGround;

        // Simple raycast from camera through mouse position
        _raycaster.setFromCamera(input.mouse, camera);

        // First try: Raycast against specific interactive objects
        const interactiveObjects = [];

        // Add grapple hooks (high priority)
        if (world.grappleHooks) interactiveObjects.push(...world.grappleHooks);

        // Add ball
        if (world.ball && world.ball.mesh) interactiveObjects.push(world.ball.mesh);

        // Add other frogs
        if (world.frogs) {
            for (const [id, frog] of Object.entries(world.frogs)) {
                if (id !== this.id && !frog.isDead && frog.mesh) {
                    interactiveObjects.push(frog.tongueProxy || frog.mesh);
                }
            }
        }

        // Check interactive objects first
        let hits = _raycaster.intersectObjects(interactiveObjects, true);

        if (hits.length > 0 && hits[0].distance <= MAX_RANGE) {
            return this._processHit(hits[0], world);
        }

        // Second try: Raycast against terrain/walls
        const staticObjects = [];
        if (world.terrainMeshes) staticObjects.push(...world.terrainMeshes);
        if (world.wallMeshes) staticObjects.push(...world.wallMeshes);

        hits = _raycaster.intersectObjects(staticObjects, true);

        // Filter: When airborne, skip floor/ground hits (surfaces facing up)
        if (isAirborne && hits.length > 0) {
            hits = hits.filter(h => {
                // Skip if hit is below player (probably floor)
                if (h.point.y < playerY - 1) return false;
                // Skip if surface normal faces up (floor-like)
                if (h.face && h.face.normal) {
                    const worldNormal = h.face.normal.clone();
                    if (h.object.matrixWorld) {
                        worldNormal.transformDirection(h.object.matrixWorld);
                    }
                    if (worldNormal.y > 0.7) return false; // Mostly facing up = floor
                }
                return true;
            });
        }

        if (hits.length > 0 && hits[0].distance <= MAX_RANGE) {
            return this._processHit(hits[0], world);
        }

        // Third try: Raycast against ENTIRE scene (catches everything)
        if (world.scene) {
            hits = _raycaster.intersectObjects(world.scene.children, true);

            // Filter out non-physical objects and floors when airborne
            const validHit = hits.find(h => {
                if (h.distance > MAX_RANGE) return false;
                if (!h.object.isMesh || !h.object.visible) return false;
                if (h.object.name.includes('helper') || h.object.name.includes('light')) return false;

                // Skip floors when airborne
                if (isAirborne) {
                    if (h.point.y < playerY - 1) return false;
                    if (h.face && h.face.normal && h.face.normal.y > 0.7) return false;
                }

                return true;
            });

            if (validHit) {
                return this._processHit(validHit, world);
            }
        }

        // Final fallback: Physics raycast (always works)
        if (world.physics && world.physics.world) {
            const ray = _raycaster.ray;
            const from = new CANNON.Vec3(ray.origin.x, ray.origin.y, ray.origin.z);
            const dir = ray.direction.clone().multiplyScalar(MAX_RANGE);
            const to = new CANNON.Vec3(
                ray.origin.x + dir.x,
                ray.origin.y + dir.y,
                ray.origin.z + dir.z
            );

            const result = new CANNON.RaycastResult();
            const cannonRay = new CANNON.Ray(from, to);
            cannonRay.intersectWorld(world.physics.world, { result });

            if (result.hasHit) {
                const hitPoint = new THREE.Vector3(
                    result.hitPointWorld.x,
                    result.hitPointWorld.y,
                    result.hitPointWorld.z
                );

                // Skip floor hits when airborne
                if (isAirborne && hitPoint.y < playerY - 1) {
                    return null;
                }

                return {
                    type: 'wall',
                    id: null,
                    object: null,
                    point: hitPoint,
                    confidence: 1.0
                };
            }
        }

        return null; // Truly nothing
    }

    /**
     * Process a raycast hit and determine what type of object it is
     */
    _processHit(hit, world) {
        let targetType = 'wall';
        let targetObject = hit.object;
        let targetId = null;

        // Check if it's a grapple hook
        if (world.grappleHooks && world.grappleHooks.includes(hit.object)) {
            targetType = 'hook';
        }
        // Check if it's the ball
        else if (world.ball && (hit.object === world.ball.mesh || hit.object.parent === world.ball.mesh)) {
            targetType = 'ball';
            targetObject = world.ball;
        }
        // Check if it's a frog
        else if (world.frogs) {
            for (const [id, frog] of Object.entries(world.frogs)) {
                if (frog.mesh && (hit.object === frog.mesh || hit.object === frog.tongueProxy || hit.object.parent === frog.mesh)) {
                    targetType = 'frog';
                    targetObject = frog;
                    targetId = id;
                    break;
                }
            }
        }

        return {
            type: targetType,
            id: targetId,
            object: targetObject,
            point: hit.point.clone(),
            confidence: 1.0
        };
    }

    /**
     * Verifies if a locked target is still viable for sticky aim
     */
    _stillValid(locked, mouthPos) {
        if (!locked || !locked.object) return false;

        const objPos = _tmpV3;
        if (locked.object.mesh) locked.object.mesh.getWorldPosition(objPos);
        else if (locked.object.getWorldPosition) locked.object.getWorldPosition(objPos);
        else objPos.copy(locked.point);

        const dist = mouthPos.distanceTo(objPos);
        if (dist > (Config.tongueRange * 1.2 || 30)) return false; // Extra slack for lock

        if (locked.type === 'frog' && locked.object.isDead) return false;

        return true;
    }

    /**
     * Gather all possible interactive targets into a unified array
     */
    _gatherTongueCandidates(world) {
        const candidates = [];

        // 1. Other Players
        if (world.frogs) {
            for (const [id, frog] of Object.entries(world.frogs)) {
                if (id === this.id || frog.isDead) continue;
                candidates.push({ type: 'frog', id, object: frog, point: frog.mesh.position });
            }
        }

        // 2. Grapple Hooks
        if (world.grappleHooks) {
            for (const hook of world.grappleHooks) {
                candidates.push({ type: 'hook', id: `hook_${hook.uuid}`, object: hook, point: hook.position });
            }
        }

        // 3. Ball
        if (world.ball && world.ball.mesh) {
            candidates.push({ type: 'ball', id: 'ball', object: world.ball, point: world.ball.mesh.position });
        }

        // 4. Scooters
        if (world.scooters) {
            for (const scooter of world.scooters) {
                if (scooter.rider) continue;
                candidates.push({ type: 'scooter', id: `scooter_${scooter.id}`, object: scooter, point: scooter.mesh.position });
            }
        }

        return candidates;
    }

    getWallTarget() {
        // Obsolete: functionality merged into selectTongueTarget
        return null;
    }

    /**
     * Create or update the laser sight visual
     */
    updateLaserSight(input, dt) {
        if (!this.world || !this.world.camera) return;

        // Hide laser if tongue is active or drawing/placing
        if (this.tongue.state !== 'idle' || this.isRidingScooter) {
            if (this.laserLine) this.laserLine.visible = false;
            if (this.laserDot) this.laserDot.visible = false;
            return;
        }

        if (!this.laserLine) {
            // Create laser line
            const laserGeo = new THREE.BufferGeometry();
            const positions = new Float32Array(6);
            laserGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            const laserMat = new THREE.LineBasicMaterial({
                color: 0xff0000,
                transparent: true,
                opacity: Config.tongueLaserIntensity || 0.4,
                depthWrite: false
            });
            this.laserLine = new THREE.Line(laserGeo, laserMat);
            this.laserLine.frustumCulled = false;
            this.world.scene.add(this.laserLine);

            // Create laser dot
            const dotGeo = new THREE.SphereGeometry(0.1, 8, 8);
            const dotMat = new THREE.MeshBasicMaterial({
                color: 0xff0000,
                transparent: true,
                opacity: 0.8,
                depthTest: false
            });
            this.laserDot = new THREE.Mesh(dotGeo, dotMat);
            this.world.scene.add(this.laserDot);
        }

        const mouthPos = this.getMouthPosition();

        // Find actual target to "Stick" to using modern acquisition
        const bestTarget = this.selectTongueTarget(this.world, input, this.world.camera, dt);

        // "Remove Stick with Air": If we hit nothing (Sky), hide the laser dot and potentially the line
        if (!bestTarget) {
            if (this.laserLine) this.laserLine.visible = false;
            if (this.laserDot) this.laserDot.visible = false;
            return;
        }

        const targetPoint = bestTarget.point;

        this.laserLine.visible = true;
        this.laserDot.visible = true;

        // Update line positions
        const positions = this.laserLine.geometry.attributes.position.array;
        positions[0] = mouthPos.x;
        positions[1] = mouthPos.y;
        positions[2] = mouthPos.z;
        positions[3] = targetPoint.x;
        positions[4] = targetPoint.y;
        positions[5] = targetPoint.z;
        this.laserLine.geometry.attributes.position.needsUpdate = true;

        // Update dot
        this.laserDot.position.copy(targetPoint);

        // Color feedback: Green if locked on target
        if (bestTarget.type !== 'wall' && bestTarget.type !== 'miss') {
            this.laserLine.material.color.setHex(0x00ff88);
            this.laserDot.material.color.setHex(0x00ff88);
            this.laserDot.scale.set(1.5, 1.5, 1.5);
        } else {
            this.laserLine.material.color.setHex(0xff0000);
            this.laserDot.material.color.setHex(0xff0000);
            this.laserDot.scale.set(1, 1, 1);
        }
    }

    /**
     * Create tongue visual elements (thick tube + tip)
     */
    createTongueVisual() {
        if (this.tongueLine) return; // Already created

        // Store curve points for TubeGeometry updates
        this.tongueSegmentCount = 16;
        this.tongueCurvePoints = [];
        for (let i = 0; i <= this.tongueSegmentCount; i++) {
            this.tongueCurvePoints.push(new THREE.Vector3(0, 0, 0));
        }

        // Create initial curve and tube geometry
        const curve = new THREE.CatmullRomCurve3(this.tongueCurvePoints);
        const tubeRadius = Config.tongueThicknessBase || 0.08;
        const tongueGeometry = new THREE.TubeGeometry(curve, this.tongueSegmentCount, tubeRadius, 8, false);

        const tongueMaterial = new THREE.MeshBasicMaterial({
            color: Config.tongueColor
        });

        this.tongueLine = new THREE.Mesh(tongueGeometry, tongueMaterial);
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
    shootTongue(input, world) {
        if (this.tongue.state !== 'idle') return;
        if (this.tongue.cooldownTimer > 0) return;
        if (this.isRidingScooter) return; // Can't use tongue while riding

        // Store world reference
        this.world = world;

        // === PHASE 1: AIM & LOCK (happens instantly in 1 frame) ===
        const mouthPos = this.getMouthPosition();

        // Use modern acquisition
        const target = this.selectTongueTarget(world, input, world.camera, 0);

        if (!target) {
            // No valid target - play quick "miss" poke animation
            // Calculate a default aim direction from mouse
            _raycaster.setFromCamera(input.mouse, world.camera);
            const aimDir = _raycaster.ray.direction.clone();
            this.playTongueMiss(aimDir);
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
    playTongueMiss(customAimDir = null) {
        // Quick visible poke forward then retract
        this.createTongueVisual();

        const aimDir = customAimDir || this.getForwardDirection();
        const range = Config.tongueRange || 15;

        this.tongue.target = {
            type: 'miss',
            id: null,
            object: null,
            point: this.getMouthPosition().add(aimDir.clone().multiplyScalar(range)),
            distance: range,
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

                // Start physics swing if enabled
                if (Config.tongueMode === 'swing') {
                    this.startSwingGrapple(currentPos);
                    // No abrupt velocity pop - let the rope do the lifting naturally
                }
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

        // If in swing mode, use stable pendulum physics
        if (Config.tongueMode === 'swing' && this.grappleConstraint) {
            this.updateSwingSteer(dt, input);
            return;
        }

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

            // --- Swing Mechanics (Zip Mode) ---
            if (input && input.keys) {
                const forward = this.getForwardDirection();
                const right = new THREE.Vector3().crossVectors(new THREE.Vector3(0, 1, 0), forward).normalize();
                const swingForce = Config.tongueSwingForce;

                if (input.keys.left) {
                    this.body.velocity.x -= right.x * swingForce * dt * 10;
                    this.body.velocity.z -= right.z * swingForce * dt * 10;
                }
                if (input.keys.right) {
                    this.body.velocity.x += right.x * swingForce * dt * 10;
                    this.body.velocity.z += right.z * swingForce * dt * 10;
                }
            }
        }

        // Release check (Zip mode only - Swing released by main.js)
        if (Config.tongueMode !== 'swing') {
            const isHolding = input ? input.tongueHeld : true;
            if ((!isHolding && distToTarget < 2.5) || distToTarget < 1.0) {
                this.releaseTongue();
            }
        }
    }

    /**
     * Physics Pendulum Swing Steer - Camera-Relative Directional Control
     */
    updateSwingSteer(dt, input) {
        if (!this.body || !this.grappleAnchorBody) return;

        // Lower damping so momentum builds
        this.body.linearDamping = 0.3;

        if (!input || !input.keys) return;

        const mass = this.body.mass || 1;
        const swingForce = 60;

        // Get raw input direction
        let inputX = 0;
        let inputZ = 0;
        if (input.keys.forward) inputZ -= 1;
        if (input.keys.backward) inputZ += 1;
        if (input.keys.left) inputX -= 1;
        if (input.keys.right) inputX += 1;

        if (inputX === 0 && inputZ === 0) return;

        // Rotate input by camera orbit angle (same as normal movement)
        const camAngle = this.world?.cameraOrbitAngle || 0;
        const cos = Math.cos(camAngle);
        const sin = Math.sin(camAngle);

        const forceX = (inputX * cos + inputZ * sin) * swingForce * mass;
        const forceZ = (-inputX * sin + inputZ * cos) * swingForce * mass;

        const f = new CANNON.Vec3(forceX, 0, forceZ);
        this.body.applyForce(f, this.body.position);
    }

    startSwingGrapple(point) {
        if (!this.body || !this.world || !this.world.physics) return;

        this.stopSwingGrapple(); // Safety cleanup

        // 1. Create static anchor at hit point
        this.grappleAnchorBody = new CANNON.Body({ mass: 0 });
        this.grappleAnchorBody.position.set(point.x, point.y, point.z);
        this.world.physics.world.addBody(this.grappleAnchorBody);

        // 2. Calculate rope length
        const playerPos = this.body.position;
        const anchorPos = this.grappleAnchorBody.position;
        const currentDistance = playerPos.distanceTo(anchorPos);

        // 3. Smart Rope Length: Ensure the lowest swing point clears the ground
        const minGroundClearance = 2.0;
        const lowestSwingPointY = anchorPos.y - currentDistance;

        let ropeLength = currentDistance;

        if (lowestSwingPointY < minGroundClearance) {
            ropeLength = anchorPos.y - minGroundClearance;
            if (ropeLength < 1.5) ropeLength = 1.5;
        }

        // 4. SOFT constraint: Much lower maxForce for an elastic, springy rope feel
        // This prevents the jarring "snap" and allows the rope to stretch slightly.
        const maxForce = 4000; // Down from 20000
        this.grappleConstraint = new CANNON.DistanceConstraint(
            this.body,
            this.grappleAnchorBody,
            ropeLength,
            maxForce
        );
        this.grappleConstraint.collideConnected = false;
        this.world.physics.world.addConstraint(this.grappleConstraint);
        this.isSwinging = true;
    }

    stopSwingGrapple() {
        if (!this.world || !this.world.physics) return;

        if (this.grappleConstraint) {
            this.world.physics.world.removeConstraint(this.grappleConstraint);
            this.grappleConstraint = null;
        }
        if (this.grappleAnchorBody) {
            this.world.physics.world.removeBody(this.grappleAnchorBody);
            this.grappleAnchorBody = null;
        }

        // Restore normal damping when releasing
        if (this.body) {
            this.body.linearDamping = Config.linearDamping || 0.93;
        }
        this.isSwinging = false;
    }

    /**
     * Finish tongue action and reset state
     */
    finishTongue() {
        this.stopSwingGrapple();
        this.tongue.state = 'idle';
        this.tongue.progress = 0;
        this.tongue.target = null;
        this.tongue.cooldownTimer = Config.tongueCooldown;

        // Hide tongue
        if (this.tongueLine) this.tongueLine.visible = false;
        if (this.tongueTip) this.tongueTip.visible = false;
    }

    /**
     * Release tongue (called when player releases button)
     */
    releaseTongue() {
        if (this.tongue.state === 'attached') {
            // MOMENTUM BOOST: Catapult effect when releasing swing
            if (this.body && this.isSwinging) {
                const vel = this.body.velocity;
                const speed = Math.sqrt(vel.x * vel.x + vel.y * vel.y + vel.z * vel.z);

                // Add 30% boost in current direction + slight upward pop
                if (speed > 2) {
                    const boostFactor = 0.3;
                    this.body.velocity.x += vel.x * boostFactor;
                    this.body.velocity.y += Math.max(vel.y * boostFactor, 3); // Ensure some upward boost
                    this.body.velocity.z += vel.z * boostFactor;
                }
            }

            this.stopSwingGrapple();
            this.tongue.state = 'retracting';
            this.tongue.startTime = performance.now();
        }
    }

    /**
     * Update tongue visual (thick tube + tip position)
     */
    updateTongueVisual() {
        if (!this.tongueLine || !this.tongueTip || !this.tongueCurvePoints) return;

        // Calculate current tongue end based on progress
        const targetPos = this.tongue.lockedPoint;
        const currentEnd = new THREE.Vector3().lerpVectors(
            this.tongueStartPos,
            targetPos,
            this.tongue.progress
        );

        const segments = this.tongueSegmentCount || 16;

        const time = performance.now() / 1000;
        const isAttached = this.tongue.state === 'attached';
        const isExtending = this.tongue.state === 'extending';

        // --- High-End Visuals: Dynamic Sag & Wobble ---
        const dist = this.tongueStartPos.distanceTo(currentEnd);

        // Get player velocity for swing-based effects
        let swingSpeed = 0;
        let velDir = new THREE.Vector3(0, 0, 0);
        if (this.body && isAttached) {
            const vel = this.body.velocity;
            swingSpeed = Math.sqrt(vel.x * vel.x + vel.y * vel.y + vel.z * vel.z);
            velDir.set(vel.x, vel.y, vel.z).normalize();
        }

        // Sag amount: More sag when attached and close (slack), less when stretched
        let sagBase = 0;
        if (isAttached) {
            const maxSlackDist = 8.0;
            sagBase = Math.max(0, (maxSlackDist - dist) * 0.2);
            sagBase *= Math.max(0.2, 1 - swingSpeed * 0.05);
        }

        // Swing bow: Tongue bows opposite to movement direction
        const swingBow = isAttached ? Math.min(swingSpeed * 0.08, 0.8) : 0;

        // Wobble amount (faster during extension)
        const wobbleIntensity = isExtending ? 0.12 : (isAttached ? 0.03 : 0);
        const wobbleSpeed = isExtending ? 30 : 12;
        const wobble = Math.sin(time * wobbleSpeed) * wobbleIntensity;

        // Update curve points
        for (let i = 0; i <= segments; i++) {
            const t = i / segments;
            const p = this.tongueCurvePoints[i];
            p.lerpVectors(this.tongueStartPos, currentEnd, t);

            // Parabola factor (strongest in middle of tongue)
            const archFactor = Math.sin(t * Math.PI);

            // Apply gravity sag
            if (sagBase > 0) {
                p.y -= archFactor * sagBase;
            }

            // Apply swing bow (tongue bends opposite to velocity)
            if (swingBow > 0) {
                p.x -= velDir.x * archFactor * swingBow;
                p.z -= velDir.z * archFactor * swingBow;
            }

            // Apply organic wobble wave
            if (isExtending || isAttached) {
                const waveOffset = Math.sin(t * Math.PI * 2 + time * 10) * (wobble * archFactor);
                p.z += waveOffset;
                p.x += waveOffset * 0.5;
            }
        }

        // Rebuild TubeGeometry with updated curve
        const curve = new THREE.CatmullRomCurve3(this.tongueCurvePoints);
        const tubeRadius = Config.tongueThicknessBase || 0.08;

        // Dispose old geometry to prevent memory leak
        this.tongueLine.geometry.dispose();
        this.tongueLine.geometry = new THREE.TubeGeometry(curve, segments, tubeRadius, 8, false);

        // Update tip position
        this.tongueTip.position.copy(currentEnd);

        // Pulse tip scale - bigger pulse when extending
        const pulseIntensity = isExtending ? 0.2 : 0.1;
        const tipPulse = 1.0 + Math.sin(time * 15) * pulseIntensity;
        this.tongueTip.scale.setScalar(tipPulse);
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

            // Play Hit Sound based on target type
            if (this.audio && this.tongue.target) {
                const type = this.tongue.target.type;
                if (type === 'frog') {
                    const sound = Math.random() > 0.5 ? 'tongue_hit_player1' : 'tongue_hit_player2';
                    this.audio.playSpatial(sound, this.tongue.lockedPoint);
                } else {
                    this.audio.playSpatial('tongue_hit_surface', this.tongue.lockedPoint);
                }
            }
        }
    }

    /**
     * Visual feedback - MISS effect
     */
    playMissEffect() {
        // Small screen shake for feedback
        if (this.world && this.isLocal) {
            this.world.triggerScreenShake(0.2, 0.05);
        }

        // Play Miss Sound
        if (this.audio) {
            this.audio.playSpatial('tongue_miss', this.getMouthPosition(), { volume: 0.5 });
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
        this.punchHitChecked = false;
    }

    takeDamage(amount, knockback, isNetworked = false, isCritical = false, attackerId = null) {
        if (this.isDead) return;

        this.health -= amount;

        // Track last attacker for kill credit
        if (attackerId) {
            this.lastAttackerId = attackerId;
        }

        this.showHealthBar();
        this.updateHealthBar();
        this.showHitTint();

        if (this.particles && this.mesh) {
            const hitPos = this.mesh.position.clone();
            hitPos.y += 0.5;
            const hitDir = knockback
                ? new THREE.Vector3(knockback.x, knockback.y, knockback.z).normalize()
                : new THREE.Vector3(0, 1, 0);
            this.particles.spawnPunchImpact(hitPos, hitDir);
        }

        if (this.isLocal && this.world) {
            const shakeAmount = isCritical ? 2.0 : 1.0;
            this.world.triggerScreenShake(shakeAmount, 0.50);
        }

        if (knockback && this.body && this.body.type !== 2) {
            this.body.velocity.set(knockback.x, knockback.y, knockback.z);
        }

        this.showDamageToast(amount, isCritical);

        if (this.health <= 0) {
            this.health = 0;
            this.die(isNetworked);
        }
    }

    showHitTint() {
        this.bodyMesh.traverse((child) => {
            if (child.isMesh && child.material) {
                if (!child.userData.originalColor) {
                    if (child.material.color) {
                        child.userData.originalColor = child.material.color.clone();
                    }
                }
                if (child.material.color) {
                    const red = new THREE.Color(0xff0000);
                    child.material.color.lerp(red, 0.6);
                }
            }
        });

        if (this.hitTintTimeout) clearTimeout(this.hitTintTimeout);
        this.hitTintTimeout = setTimeout(() => {
            this.fadeHitTint();
        }, 100);
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
                this.bodyMesh.traverse((child) => {
                    if (child.isMesh && child.material && child.userData.originalColor) {
                        child.material.color.copy(child.userData.originalColor);
                    }
                });
            }
        }, 50);
    }

    showHealthBar() {
        this.healthBarVisible = true;
        this.healthBarVisibleTimer = 3.0;

        if (this.isHidden) {
            this.healthBarContainer.style.opacity = this.isLocal ? '0.2' : '0';
        } else {
            this.healthBarContainer.style.opacity = '1';
        }
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
            } else if (this.isHidden) {
                this.healthBarContainer.style.opacity = this.isLocal ? '0.2' : '0';
            }
        }
    }

    die(isNetworked = false) {
        if (this.isDead) return;

        if (this.isRidingScooter && this.currentScooter) {
            this.currentScooter.dismount();
        }

        this.isDead = true;
        this.deathTimer = 0;
        this.respawnTimer = Config.respawnTime;

        if (this.particles) {
            this.particles.spawnDeathDisperse(this.mesh.position, this.color);
        }

        this.setMeshOpacity(0);
        this.bodyMesh.visible = false;

        if (this.body) {
            this.body.velocity.set(0, 0, 0);
            this.body.position.y = 1000;
        }

        this.healthBarContainer.style.display = 'none';

        if (this.isLocal && window.showDeathScreen) {
            window.showDeathScreen();
        }

        if (this.audio) {
            this.audio.play('death', { volume: 0.8, randomizePitch: false });
        }

        if (this.isLocal && !isNetworked && this.world && this.world.network) {
            this.world.network.sendDeath(this.lastAttackerId || null);
        }
    }

    respawn(isNetworked = false) {
        this.isDead = false;
        this.health = Config.maxHealth;
        this.deathTimer = 0;
        this.lastAttackerId = null;

        if (this.body) {
            this.body.position.set(0, 10, 0);
            this.body.velocity.set(0, 0, 0);
            this.mesh.position.set(0, 10, 0);
        }

        this.setHidden(false);
        this.setMeshOpacity(1);
        this.bodyMesh.visible = true;

        this.healthBarContainer.style.display = 'block';
        this.updateHealthBar();

        if (this.isLocal && window.hideDeathScreen) {
            window.hideDeathScreen();
        }

        if (this.audio) {
            this.audio.playSpatial('respawn', this.mesh.position);
        }

        if (this.isLocal && !isNetworked && this.world && this.world.network) {
            this.world.network.sendRespawn();
        }
    }

    setHidden(isHidden) {
        if (this.isHidden === isHidden) return;
        this.isHidden = isHidden;

        const opacity = isHidden ? (this.isLocal ? '0.2' : '0') : '1';
        const display = isHidden && !this.isLocal ? 'none' : 'block';

        if (this.nameTagDiv) {
            this.nameTagDiv.style.opacity = opacity;
            this.nameTagDiv.style.display = display;
            this.nameTagDiv.style.transition = 'opacity 0.3s ease';
        }

        if (this.healthBarContainer) {
            if (isHidden) {
                this.healthBarContainer.style.opacity = this.isLocal ? '0.2' : '0';
                if (!this.isLocal) this.healthBarContainer.style.display = 'none';
            } else {
                this.healthBarContainer.style.display = 'block';
                if (this.healthBarVisibleTimer > 0) {
                    this.healthBarContainer.style.opacity = '1';
                } else {
                    this.healthBarContainer.style.opacity = '0';
                }
            }
        }

        if (this.chatBubbleDiv) {
            this.chatBubbleDiv.style.opacity = opacity;
            this.chatBubbleDiv.style.display = display;
        }

        if (this.isLocal) {
            this.setMeshOpacity(isHidden ? 0.7 : 1.0);
        }
    }

    updateHealthBar() {
        if (!this.healthBarFill) return;

        const percent = (this.health / Config.maxHealth) * 100;
        this.healthBarFill.style.width = `${percent}%`;

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
        const toastDiv = document.createElement('div');
        toastDiv.className = 'damage-toast' + (isCritical ? ' critical' : '');
        toastDiv.textContent = isCritical ? `CRIT! -${amount}` : `-${amount}`;

        const toast = new CSS2DObject(toastDiv);
        toast.position.set(
            (Math.random() - 0.5) * 0.5,
            2.5 + Math.random() * 0.5,
            0
        );
        this.mesh.add(toast);

        setTimeout(() => {
            this.mesh.remove(toast);
            toastDiv.remove();
        }, 1000);
    }

    dispose() {
        if (this.chatBubbleDiv && this.chatBubbleDiv.parentNode) {
            this.chatBubbleDiv.parentNode.removeChild(this.chatBubbleDiv);
        }
        if (this.healthBarContainer && this.healthBarContainer.parentNode) {
            this.healthBarContainer.parentNode.removeChild(this.healthBarContainer);
        }
        if (this.nameTagDiv && this.nameTagDiv.parentNode) {
            this.nameTagDiv.parentNode.removeChild(this.nameTagDiv);
        }

        if (this.chatTimer) {
            clearTimeout(this.chatTimer);
            this.chatTimer = null;
        }

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
