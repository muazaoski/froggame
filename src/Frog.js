import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Config } from './Config.js';

export class Frog {
    static modelGeometry = null;
    static loader = new GLTFLoader();

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
        this.chatBubbleDiv.className = 'chat-bubble';
        this.chatBubbleDiv.style.opacity = '0'; // Hidden initially
        this.chatBubble = new CSS2DObject(this.chatBubbleDiv);
        this.chatBubble.position.set(0, 1.5, 0);
        this.mesh.add(this.chatBubble);
        this.chatTimer = null;

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

        // Health Bar UI
        this.healthBarContainer = document.createElement('div');
        this.healthBarContainer.className = 'health-bar-container';
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
    }

    update(dt, input, lookTarget, cameraOrbitAngle = 0) {
        if (!this.body) return;

        // Handle death state
        if (this.isDead) {
            this.deathTimer += dt;

            // Fade out
            const fadeProgress = Math.min(this.deathTimer / Config.deathFadeDuration, 1);
            this.setMeshOpacity(1 - fadeProgress);

            // Respawn timer
            this.respawnTimer -= dt;
            if (this.respawnTimer <= 0) {
                this.respawn();
            }
            return; // Don't process input while dead
        }

        // Update health bar
        this.updateHealthBar();

        // Sync Mesh Position to Body
        this.mesh.position.copy(this.body.position);

        // VISUAL ROTATION (Manually handle rotation)
        const axis = new THREE.Vector3(0, 1, 0);
        this.mesh.quaternion.setFromAxisAngle(axis, this.facingAngle);

        // Chat Fade Logic
        if (this.chatTimer > 0) {
            // ...
        }

        if (!input) return;

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
        const speed = Config.moveSpeed * dt;
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

            // Smooth rotation
            let angleDiff = targetAngle - this.facingAngle;
            while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
            while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
            this.facingAngle += angleDiff * Config.rotationSpeed * dt;

            // Apply force
            // Air control check? (Optional, but user asked for "more physics stuff")
            const force = new CANNON.Vec3(moveVec.x * speed, 0, moveVec.z * speed);
            this.body.applyForce(force, this.body.position);

            // ANIMATION (Simple Hop)
            if (this.onGround) {
                this.moveAnimTimer += dt * Config.hopSpeed;
                const hopY = Math.abs(Math.sin(this.moveAnimTimer)) * Config.hopHeight;
                this.bodyMesh.position.y = hopY;

                // Walking dust VFX
                if (this.particles) {
                    this.walkDustTimer -= dt;
                    if (this.walkDustTimer <= 0) {
                        this.particles.spawnWalkDust(this.mesh.position, 0xccaa88);
                        this.walkDustTimer = Config.vfxWalkInterval;
                    }
                }
            }
        } else {
            // Reset animation when stopped
            this.moveAnimTimer = 0;
            this.bodyMesh.position.y = THREE.MathUtils.lerp(this.bodyMesh.position.y, 0, dt * 10);
        }

        // JUMP
        if (this.onGround && input.keys.jump && this.jumpCooldown <= 0) {
            this.body.velocity.y = Config.jumpVelocity;
            this.jumpCooldown = 1.0;
            // Trigger Kick Animation
            this.jumpKickAmount = 1.0;

            // Jump dust VFX
            if (this.particles) {
                this.particles.spawnJumpDust(this.mesh.position, 0xccaa88);
            }
        }

        // Landing detection for VFX
        if (this.onGround && !this.wasOnGround) {
            // Just landed!
            const impactForce = Math.abs(this.lastVelocityY);
            if (this.particles && impactForce > 3) {
                this.particles.spawnLandingDust(this.mesh.position, impactForce, 0xccaa88);

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
            this.updateEyes(lookTarget);
        }

        // Update Animations (Legs)
        const isMoving = inputVec.length() > 0;
        this.updateAnimations(dt, isMoving, this.onGround);

        // Update Jiggle Physics (Ass)
        this.updateJiggle(dt, isMoving);

        // Update Punch/Kick Animation
        this.updatePunch(dt, input);

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

    updateRemote(dt) {
        if (!this.targetPos) return;

        // Interpolate Position
        this.mesh.position.lerp(this.targetPos, 10 * dt);

        // Interpolate Rotation
        if (this.targetRot) {
            this.mesh.quaternion.slerp(this.targetRot, 10 * dt);
        }

        // Animation based on movement speed
        const dist = this.mesh.position.distanceTo(this.targetPos);
        const isMoving = dist > 0.05;

        // Use the shared animation logic
        // We need to estimate "Grounded" for remote. 
        // If Y velocity is positive or high off ground?
        // Simple heuristic: If Y > 0.1, we are in air.
        const isGrounded = this.mesh.position.y < 0.1;

        // Trigger jump kick for remote?
        // If Y went up suddenly? Hard to track without synced events.
        // For now, remote walk juice is good enough.

        this.updateAnimations(dt, isMoving, isGrounded);

        if (isMoving) {
            this.moveAnimTimer = (this.moveAnimTimer || 0) + 15 * dt;
            const hopY = Math.abs(Math.sin(this.moveAnimTimer)) * Config.hopHeight; // Use Config
            this.bodyMesh.position.y = hopY;
        } else {
            this.moveAnimTimer = 0;
            this.bodyMesh.position.y = THREE.MathUtils.lerp(this.bodyMesh.position.y, 0, dt * 10);
        }
    }

    showChat(message) {
        this.chatBubbleDiv.innerText = message;
        this.chatBubbleDiv.style.opacity = '1';
        this.isTalking = true;

        if (this.chatTimer) clearTimeout(this.chatTimer);

        // Duration: Base 2s + 0.1s per character. Max 10s.
        const duration = Math.min(10000, Math.max(2000, message.length * 100));

        this.chatTimer = setTimeout(() => {
            this.chatBubbleDiv.style.opacity = '0';
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

        console.log("Analyzing Model Meshes:");

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
                    child.material.color.set(this.color);
                } else if (name.includes('rightleg')) {
                    this.rightLeg = child;
                    this.rightLegBasePos = child.position.clone();
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
        console.log(`Legs found: Left=${!!this.leftLeg}, Right=${!!this.rightLeg}`);
        console.log(`Ass found: Left=${!!this.assLeft}, Right=${!!this.assRight}`);
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
                        this.world.triggerScreenShake(hitSomething ? 0.3 : 0.05, 0.15);
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

    takeDamage(amount, knockback) {
        if (this.isDead) return;

        this.health -= amount;

        // Update health bar immediately
        this.updateHealthBar();

        // Apply knockback (only works on dynamic bodies, not kinematic)
        if (knockback && this.body && this.body.type !== 2) { // 2 = KINEMATIC
            this.body.velocity.set(knockback.x, knockback.y, knockback.z);
        }

        // Show damage toast
        this.showDamageToast(amount);

        if (this.health <= 0) {
            this.health = 0;
            this.die();
        }
    }

    die() {
        this.isDead = true;
        this.deathTimer = 0;
        this.respawnTimer = Config.respawnTime;

        // Disable physics temporarily
        if (this.body) {
            this.body.velocity.set(0, 0, 0);
        }

        // Hide health bar
        this.healthBarContainer.style.display = 'none';
    }

    respawn() {
        this.isDead = false;
        this.health = Config.maxHealth;
        this.deathTimer = 0;

        // Reset position
        if (this.body) {
            this.body.position.set(0, 10, 0);
            this.body.velocity.set(0, 0, 0);
        }

        // Reset opacity
        this.setMeshOpacity(1);

        // Show health bar
        this.healthBarContainer.style.display = 'block';
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

    showDamageToast(amount) {
        // Create toast as CSS2DObject so it follows the frog in 3D space
        const toastDiv = document.createElement('div');
        toastDiv.className = 'damage-toast';
        toastDiv.textContent = `-${amount}`;

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

        console.log(`Frog ${this.id} took ${amount} damage! Health: ${this.health}/${Config.maxHealth}`);
    }
}

