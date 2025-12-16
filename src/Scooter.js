import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { Config } from './Config.js';

export class Scooter {
    static loader = new GLTFLoader();

    constructor(id, color, scene, physicsWorld) {
        this.id = id;
        this.color = color;
        this.scene = scene;
        this.physicsWorld = physicsWorld;

        // State
        this.rider = null;
        this.velocity = 0;
        this.facingAngle = 0;
        this.wheelRotation = 0;
        this.jumpCooldown = 0; // Prevent jump spam
        this.steerAmount = 0;  // Current steering direction (-1 to 1)

        // Highlight state
        this.isHighlighted = false;

        // Mesh references
        this.mesh = new THREE.Group();
        this.board = null;
        this.handle = null;
        this.wheels = {
            backLeft: null,
            backRight: null,
            frontLeft: null,
            frontRight: null
        };
        this.allMeshes = [];

        // Physics body
        this.body = null;

        // Load model
        this.loadModel();

        // Create physics
        this.createPhysics();

        // Create prompt label
        this.createPromptLabel();

        // Add to scene
        scene.add(this.mesh);
    }

    loadModel() {
        // Add placeholder while loading
        const placeholderGeo = new THREE.BoxGeometry(0.5, 0.1, 1.0);
        const placeholderMat = new THREE.MeshStandardMaterial({ color: this.color });
        const placeholder = new THREE.Mesh(placeholderGeo, placeholderMat);
        placeholder.position.y = 0.2;
        this.mesh.add(placeholder);

        Scooter.loader.load('/models/scooter.glb', (gltf) => {
            // Remove placeholder
            this.mesh.remove(placeholder);
            placeholder.geometry.dispose();
            placeholder.material.dispose();

            const model = gltf.scene;
            model.scale.set(0.5, 0.5, 0.5);
            model.rotation.y = Math.PI; // Handle at front

            // Find and store mesh references
            model.traverse((child) => {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                    this.allMeshes.push(child);

                    // Apply custom color to board
                    const name = child.name.toLowerCase();
                    if (name.includes('board') || name.includes('deck')) {
                        child.material = child.material.clone();
                        child.material.color.set(this.color);
                        this.board = child;
                    }
                    if (name.includes('handle')) {
                        this.handle = child;
                    }
                    if (name.includes('wheel')) {
                        if (name.includes('back') && name.includes('left')) this.wheels.backLeft = child;
                        if (name.includes('back') && name.includes('right')) this.wheels.backRight = child;
                        if (name.includes('front') && name.includes('left')) this.wheels.frontLeft = child;
                        if (name.includes('front') && name.includes('right')) this.wheels.frontRight = child;
                    }
                }
            });

            this.mesh.add(model);
            console.log('Scooter model loaded!');
        });
    }

    createPhysics() {
        if (!this.physicsWorld) return;

        // Simple sphere for scooter physics
        const shape = new CANNON.Sphere(0.5);
        this.body = new CANNON.Body({
            mass: 5,
            shape: shape,
            material: this.physicsWorld.frogMaterial,
            linearDamping: 0.9,
            angularDamping: 0.99,
            fixedRotation: true
        });

        this.body.position.set(0, 1, 0);
        this.physicsWorld.world.addBody(this.body);
    }

    createPromptLabel() {
        const div = document.createElement('div');
        div.className = 'scooter-prompt';
        div.textContent = 'Press E to ride';
        div.style.cssText = `
            color: white;
            background: rgba(0,0,0,0.7);
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-family: sans-serif;
            white-space: nowrap;
            opacity: 0;
            transition: opacity 0.2s;
        `;
        this.promptLabel = new CSS2DObject(div);
        this.promptLabel.position.set(0, 1.5, 0);
        this.mesh.add(this.promptLabel);
    }

    setHighlight(on) {
        this.isHighlighted = on;
        if (this.promptLabel && this.promptLabel.element) {
            this.promptLabel.element.style.opacity = on ? '1' : '0';
        }
    }

    // === SIMPLIFIED MOUNT ===
    mount(frog) {
        if (this.rider) return false;

        this.rider = frog;
        frog.isRidingScooter = true;
        frog.currentScooter = this;

        // Reset velocity
        this.velocity = 0;

        // Get initial facing angle from frog's current rotation
        this.facingAngle = frog.mesh.rotation.y;

        // Keep frog legs visible while riding
        // (Previously we hid them, but user wants to see legs)

        // Hide prompt
        this.setHighlight(false);

        // Position frog on scooter immediately
        this.updateRiderPosition();

        console.log(`Frog ${frog.id} mounted scooter`);
        return true;
    }

    // === SIMPLIFIED DISMOUNT ===
    dismount() {
        if (!this.rider) return;

        const frog = this.rider;

        // Restore frog legs visibility
        if (frog.leftLeg) frog.leftLeg.visible = true;
        if (frog.rightLeg) frog.rightLeg.visible = true;

        // Reset leg positions and rotations to original
        if (frog.leftLeg && frog._originalLeftLegX !== undefined) {
            frog.leftLeg.position.x = frog._originalLeftLegX;
            frog.leftLeg.position.y = frog._originalLeftLegY;
            frog.leftLeg.position.z = frog._originalLeftLegZ;
            frog.leftLeg.rotation.x = 0;
            frog.leftLeg.rotation.y = 0;
            frog.leftLeg.rotation.z = 0;
        }
        if (frog.rightLeg && frog._originalRightLegX !== undefined) {
            frog.rightLeg.position.x = frog._originalRightLegX;
            frog.rightLeg.position.y = frog._originalRightLegY;
            frog.rightLeg.position.z = frog._originalRightLegZ;
            frog.rightLeg.rotation.x = 0;
            frog.rightLeg.rotation.y = 0;
            frog.rightLeg.rotation.z = 0;
        }

        // Position frog beside scooter
        const offset = new THREE.Vector3(1.5, 0, 0);
        offset.applyAxisAngle(new THREE.Vector3(0, 1, 0), this.facingAngle);

        frog.mesh.position.copy(this.mesh.position);
        frog.mesh.position.add(offset);
        frog.mesh.position.y += 0.5;

        // Sync physics body
        if (frog.body) {
            frog.body.position.copy(frog.mesh.position);
            frog.body.velocity.set(0, 5, 0); // Small upward boost
        }

        // Clear riding state
        frog.isRidingScooter = false;
        frog.currentScooter = null;
        this.rider = null;

        console.log(`Frog ${frog.id} dismounted scooter`);
    }

    updateRiderPosition() {
        if (!this.rider) return;

        // Position frog on top of scooter (using config Y offset)
        this.rider.mesh.position.copy(this.mesh.position);
        this.rider.mesh.position.y += Config.scooterRiderY;

        // Match scooter rotation
        this.rider.mesh.rotation.y = this.facingAngle;

        // Steering rotation for legs (to look like holding the handle)
        const steerRotation = this.steerAmount * 0.3; // Adjust multiplier for intensity

        // Apply leg position offsets while riding
        if (this.rider.leftLeg) {
            this.rider.leftLeg.position.x = this.rider._originalLeftLegX + Config.scooterLegOffsetX;
            this.rider.leftLeg.position.y = this.rider._originalLeftLegY + Config.scooterLegOffsetY;
            this.rider.leftLeg.position.z = this.rider._originalLeftLegZ + Config.scooterLegOffsetZ;
            // Apply leg rotation + steering rotation
            this.rider.leftLeg.rotation.x = Config.scooterLegRotationX;
            this.rider.leftLeg.rotation.y = Config.scooterLegRotationY + steerRotation;
            this.rider.leftLeg.rotation.z = Config.scooterLegRotationZ;
        }
        if (this.rider.rightLeg) {
            this.rider.rightLeg.position.x = this.rider._originalRightLegX - Config.scooterLegOffsetX;
            this.rider.rightLeg.position.y = this.rider._originalRightLegY + Config.scooterLegOffsetY;
            this.rider.rightLeg.position.z = this.rider._originalRightLegZ + Config.scooterLegOffsetZ;
            // Apply leg rotation + steering rotation (same direction for both legs)
            this.rider.rightLeg.rotation.x = Config.scooterLegRotationX;
            this.rider.rightLeg.rotation.y = -Config.scooterLegRotationY + steerRotation;
            this.rider.rightLeg.rotation.z = -Config.scooterLegRotationZ;
        }

        // Also sync frog's physics body position (so camera follows correctly)
        if (this.rider.body) {
            this.rider.body.position.set(
                this.rider.mesh.position.x,
                this.rider.mesh.position.y,
                this.rider.mesh.position.z
            );
        }
    }

    // === SIMPLIFIED UPDATE ===
    update(dt, input) {
        // Sync mesh to physics body when not riding
        if (!this.rider || !this.rider.isLocal) {
            if (this.body) {
                this.mesh.position.copy(this.body.position);
            }
            this.animateWheels(dt);
            return;
        }

        // === RIDING LOGIC ===

        // Get input
        const forward = input.keys.forward ? 1 : (input.keys.backward ? -1 : 0);
        const turn = input.keys.left ? 1 : (input.keys.right ? -1 : 0);
        const jump = input.keys.jump;

        // Acceleration/Deceleration
        if (forward !== 0) {
            this.velocity += forward * Config.scooterAcceleration * dt;
            this.velocity = THREE.MathUtils.clamp(this.velocity, -Config.scooterSpeed * 0.5, Config.scooterSpeed);
        } else {
            // Decelerate
            if (Math.abs(this.velocity) > 0.1) {
                this.velocity -= Math.sign(this.velocity) * Config.scooterDeceleration * dt;
            } else {
                this.velocity = 0;
            }
        }

        // Steering (only when moving)
        if (Math.abs(this.velocity) > 0.5) {
            const turnDir = this.velocity > 0 ? 1 : -1;
            this.facingAngle += turn * Config.scooterTurnSpeed * dt * turnDir;
        }

        // Store current steering for leg animation
        this.steerAmount = turn;

        // Apply movement using VELOCITY (not position) so physics collisions work!
        if (this.body) {
            // Calculate velocity direction
            const velX = Math.sin(this.facingAngle) * this.velocity;
            const velZ = Math.cos(this.facingAngle) * this.velocity;

            // Set horizontal velocity (preserve vertical velocity for gravity/jumping)
            this.body.velocity.x = velX;
            this.body.velocity.z = velZ;

            // Update jump cooldown
            if (this.jumpCooldown > 0) {
                this.jumpCooldown -= dt;
            }

            // Jump - require grounded (low y velocity) AND cooldown expired
            const isGrounded = Math.abs(this.body.velocity.y) < 1.0 && this.body.position.y < 3;
            if (jump && isGrounded && this.jumpCooldown <= 0) {
                this.body.velocity.y = 10;
                this.jumpCooldown = 0.5; // 500ms cooldown
            }
        }

        // Sync mesh to physics
        this.mesh.position.copy(this.body.position);
        this.mesh.rotation.y = this.facingAngle;

        // Rotate handle with steering
        if (this.handle) {
            this.handle.rotation.y = this.steerAmount * Config.scooterMaxTurn;
        }

        // Update rider position
        this.updateRiderPosition();

        // Animate wheels
        this.animateWheels(dt);

        // Dust particles
        this.spawnDustParticles(dt);
    }

    animateWheels(dt) {
        this.wheelRotation += this.velocity * Config.scooterWheelSpeed * dt;
        const wheels = [this.wheels.backLeft, this.wheels.backRight, this.wheels.frontLeft, this.wheels.frontRight];
        wheels.forEach(wheel => {
            if (wheel) wheel.rotation.x = this.wheelRotation;
        });
    }

    spawnDustParticles(dt) {
        if (!this.particles || !Config.vfxEnabled) return;
        if (Math.abs(this.velocity) < 2) return;

        this._dustTimer = (this._dustTimer || 0) + dt;
        if (this._dustTimer > 0.1) {
            this._dustTimer = 0;
            const pos = this.mesh.position.clone();
            pos.y = 0.1;
            this.particles.spawnWalkDust(pos, this.color || '#ffffff');
        }
    }

    dispose() {
        if (this.body && this.physicsWorld) {
            this.physicsWorld.world.removeBody(this.body);
        }
        if (this.mesh.parent) {
            this.mesh.parent.remove(this.mesh);
        }
    }
}
