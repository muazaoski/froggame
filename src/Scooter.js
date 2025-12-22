import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { Config } from './Config.js';

export class Scooter {
    static loader = new GLTFLoader();
    static modelCache = null;

    static setLoaderManager(manager) {
        Scooter.loader = new GLTFLoader(manager);
    }

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

        // Terrain Alignment
        this.terrainNormal = new THREE.Vector3(0, 1, 0);
        this.targetQuaternion = new THREE.Quaternion();
        this.raycaster = new THREE.Raycaster();
        this.isGrounded = true; // Track if we are on the ground
        this.raycaster.far = 3.0;

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
        if (Scooter.modelCache) {
            this.setupModel(Scooter.modelCache.clone());
            return;
        }

        // Add placeholder while loading
        const placeholderGeo = new THREE.BoxGeometry(0.5, 0.1, 1.0);
        const placeholderMat = new THREE.MeshStandardMaterial({ color: this.color });
        const placeholder = new THREE.Mesh(placeholderGeo, placeholderMat);
        placeholder.position.y = 0; // Center in physics body
        this.mesh.add(placeholder);

        Scooter.loader.load('/models/scooter.glb', (gltf) => {
            // Remove placeholder
            this.mesh.remove(placeholder);
            placeholder.geometry.dispose();
            placeholder.material.dispose();

            const model = gltf.scene;
            Scooter.modelCache = model.clone();
            this.setupModel(model);
        });
    }

    setupModel(model) {
        model.scale.set(0.5, 0.5, 0.5);
        model.rotation.y = Math.PI; // Correct model facing to +Z

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

        model.position.y = Config.scooterVisualOffsetY; // Push model down to floor
        this.mesh.add(model);
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
        if (frog.leftLeg && frog.leftLegBasePos) {
            frog.leftLeg.position.copy(frog.leftLegBasePos);
            frog.leftLeg.rotation.set(0, 0, 0);
        }
        if (frog.rightLeg && frog.rightLegBasePos) {
            frog.rightLeg.position.copy(frog.rightLegBasePos);
            frog.rightLeg.rotation.set(0, 0, 0);
        }
        // Reset ass meshes
        if (frog.assLeft && frog.assLeftBasePos) {
            frog.assLeft.position.copy(frog.assLeftBasePos);
        }
        if (frog.assRight && frog.assRightBasePos) {
            frog.assRight.position.copy(frog.assRightBasePos);
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


    }

    updateRiderPosition() {
        if (!this.rider) return;

        // Match scooter orientation exactly
        this.rider.mesh.quaternion.copy(this.mesh.quaternion);

        // Calculate world-up offset based on current tilt
        const localUp = new THREE.Vector3(0, Config.scooterRiderY, 0).applyQuaternion(this.mesh.quaternion);
        this.rider.mesh.position.copy(this.mesh.position).add(localUp);

        // Apply leg position offsets while riding
        if (this.rider.leftLeg && this.rider.leftLegBasePos) {
            this.rider.leftLeg.position.x = this.rider.leftLegBasePos.x + Config.scooterLegOffsetX;
            this.rider.leftLeg.position.y = this.rider.leftLegBasePos.y + Config.scooterLegOffsetY;
            this.rider.leftLeg.position.z = this.rider.leftLegBasePos.z + Config.scooterLegOffsetZ;

            this.rider.leftLeg.rotation.x = Config.scooterLegRotationX;
            this.rider.leftLeg.rotation.y = Config.scooterLegRotationY + (this.steerAmount * 0.4);
            this.rider.leftLeg.rotation.z = Config.scooterLegRotationZ + (this.steerAmount * 0.1);
        }
        if (this.rider.rightLeg && this.rider.rightLegBasePos) {
            this.rider.rightLeg.position.x = this.rider.rightLegBasePos.x - Config.scooterLegOffsetX;
            this.rider.rightLeg.position.y = this.rider.rightLegBasePos.y + Config.scooterLegOffsetY;
            this.rider.rightLeg.position.z = this.rider.rightLegBasePos.z + Config.scooterLegOffsetZ;

            this.rider.rightLeg.rotation.x = Config.scooterLegRotationX;
            this.rider.rightLeg.rotation.y = -Config.scooterLegRotationY + (this.steerAmount * 0.4);
            this.rider.rightLeg.rotation.z = -Config.scooterLegRotationZ - (this.steerAmount * 0.1);
        }

        // Apply ass/butt offsets (pull them in/down to look like sitting)
        if (this.rider.assLeft && this.rider.assLeftBasePos) {
            this.rider.assLeft.position.y = this.rider.assLeftBasePos.y + Config.scooterAssOffsetY;
            this.rider.assLeft.position.z = this.rider.assLeftBasePos.z + Config.scooterAssOffsetZ;
        }
        if (this.rider.assRight && this.rider.assRightBasePos) {
            this.rider.assRight.position.y = this.rider.assRightBasePos.y + Config.scooterAssOffsetY;
            this.rider.assRight.position.z = this.rider.assRightBasePos.z + Config.scooterAssOffsetZ;
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
    update(dt, input, terrainMeshes) {
        // Sync mesh to physics body when not riding
        if (!this.rider || !this.rider.isLocal) {
            if (this.body) {
                this.mesh.position.copy(this.body.position);
            }
            // Even when not ridden, align to ground
            if (terrainMeshes) this.alignWithTerrain(terrainMeshes, dt);
            this.animateWheels(dt);
            // Allow dust particles for remote players
            this.spawnDustParticles(dt);
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

        // Face movement direction - handled by terrain alignment quaternion
        // this.mesh.rotation.y = this.facingAngle;

        // Banking (Lean into turns) - Applied as a local Z rotation later or merged
        const banking = -this.steerAmount * Config.scooterBanking * (Math.abs(this.velocity) / Config.scooterSpeed);

        // Align with Terrain
        if (terrainMeshes) {
            this.alignWithTerrain(terrainMeshes, dt, banking);
        } else {
            // Fallback if no terrain meshes provided
            this.mesh.rotation.z = THREE.MathUtils.lerp(this.mesh.rotation.z, banking, dt * 8);
        }

        // Rotate handle with steering
        if (this.handle) {
            this.handle.rotation.y = this.steerAmount * Config.scooterMaxTurn;
        }

        // Update visual children
        this.updateRiderPosition();
        this.animateWheels(dt);
        this.spawnDustParticles(dt);
    }

    alignWithTerrain(terrainMeshes, dt, extraRoll = 0) {
        // Raycast down from slightly above the scooter
        const rayOrigin = this.mesh.position.clone().add(new THREE.Vector3(0, 1, 0));
        const rayDir = new THREE.Vector3(0, -1, 0);
        this.raycaster.set(rayOrigin, rayDir);

        const intersects = this.raycaster.intersectObjects(terrainMeshes, false);

        // Grounded check (distance to terrain)
        if (intersects.length > 0) {
            const dist = intersects[0].distance;
            this.isGrounded = dist < 2.0; // Check if we are close to ground (1.0 offset + radius)
            this._lastGroundY = intersects[0].point.y; // Store for dust
        } else {
            this.isGrounded = false;
        }

        if (this.isGrounded) {
            const normal = intersects[0].face.normal.clone();
            // Transform normal to world space if the terrain mesh is rotated/scaled
            normal.applyQuaternion(intersects[0].object.quaternion);

            this.terrainNormal.lerp(normal, dt * 10);

            // Calculate rotation that faces 'facingAngle' but aligns 'up' with 'terrainNormal'
            const forward = new THREE.Vector3(Math.sin(this.facingAngle), 0, Math.cos(this.facingAngle));
            const right = new THREE.Vector3().crossVectors(this.terrainNormal, forward).normalize();
            const adjustedForward = new THREE.Vector3().crossVectors(right, this.terrainNormal);

            const matrix = new THREE.Matrix4();
            matrix.makeBasis(right, this.terrainNormal, adjustedForward);
            this.targetQuaternion.setFromRotationMatrix(matrix);
        } else {
            // In the air - slowly level the up vector but maintain forward facing
            this.terrainNormal.lerp(new THREE.Vector3(0, 1, 0), dt * 2);

            const forward = new THREE.Vector3(Math.sin(this.facingAngle), 0, Math.cos(this.facingAngle));
            const right = new THREE.Vector3().crossVectors(this.terrainNormal, forward).normalize();
            const adjustedForward = new THREE.Vector3().crossVectors(right, this.terrainNormal);

            const matrix = new THREE.Matrix4();
            matrix.makeBasis(right, this.terrainNormal, adjustedForward);
            this.targetQuaternion.setFromRotationMatrix(matrix);
        }

        // Apply extra roll (banking)
        if (extraRoll !== 0) {
            const rollQuat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), extraRoll);
            this.targetQuaternion.multiply(rollQuat);
        }

        this.mesh.quaternion.slerp(this.targetQuaternion, dt * 10);
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
        if (this._dustTimer > 0.1 && this.isGrounded) {
            this._dustTimer = 0;
            const pos = this.mesh.position.clone();
            pos.y = (this._lastGroundY !== undefined) ? this._lastGroundY + 0.1 : this.mesh.position.y - 0.4;
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
