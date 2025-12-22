import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Config } from './Config.js';

export class Ball {
    constructor(physicsWorld, scene, position = { x: 0, y: 2, z: 0 }) {
        this.scene = scene;
        this.physicsWorld = physicsWorld;

        // Ball properties from Config
        this.radius = Config.ballRadius;
        this.mass = Config.ballMass;

        // Create mesh group
        this.mesh = new THREE.Group();
        this.mesh.position.set(position.x, position.y, position.z);

        // Create fallback sphere immediately (visible while GLB loads)
        this.createFallbackSphere();

        // Randomize initial spawn position
        if (position.x === 0 && position.z === 0) {
            position.x = (Math.random() - 0.5) * 20;
            position.z = (Math.random() - 0.5) * 20;
        }

        // Load GLB model
        const loader = new GLTFLoader();
        loader.load('/models/ball.glb', (gltf) => {
            // Remove fallback sphere if it exists
            if (this.fallbackSphere) {
                this.mesh.remove(this.fallbackSphere);
            }

            const model = gltf.scene;

            // --- PERFECT SCALING LOGIC ---
            // Calculate bounding box to fit the model exactly to the physics radius
            const box = new THREE.Box3().setFromObject(model);
            const size = new THREE.Vector3();
            box.getSize(size);
            const maxDim = Math.max(size.x, size.y, size.z);
            const targetSize = this.radius * 2;
            const scale = targetSize / maxDim;
            model.scale.set(scale, scale, scale);

            // Center the model relative to its geometry
            const center = new THREE.Vector3();
            box.getCenter(center);
            model.position.sub(center.multiplyScalar(scale));

            // Apply material and shadows
            model.traverse((child) => {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                    if (child.material) {
                        child.material.roughness = 0.4;
                        child.material.metalness = 0.1;
                    }
                }
            });

            this.mesh.add(model);
            this.modelLoaded = true;

        }, undefined, (error) => {
            console.error('Error loading ball GLB:', error);
        });

        scene.add(this.mesh);

        // Create physics body
        this.createPhysicsBody(physicsWorld, position);
    }

    createFallbackSphere() {
        // Create a visible soccer ball-like sphere
        const geometry = new THREE.SphereGeometry(this.radius, 32, 32);
        const material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            roughness: 0.3,
            metalness: 0.0,
            emissive: 0x222222 // Slight glow to make it visible
        });
        this.fallbackSphere = new THREE.Mesh(geometry, material);
        this.fallbackSphere.castShadow = true;
        this.fallbackSphere.receiveShadow = true;
        this.mesh.add(this.fallbackSphere);
    }

    createPhysicsBody(physicsWorld, position) {
        // Ball material - bouncy!
        this.ballMaterial = new CANNON.Material('ball');

        // Create contact materials for ball interactions
        const ballGroundContact = new CANNON.ContactMaterial(
            physicsWorld.groundMaterial,
            this.ballMaterial,
            {
                friction: Config.ballFriction,
                restitution: Config.ballBounciness
            }
        );
        physicsWorld.world.addContactMaterial(ballGroundContact);

        const ballFrogContact = new CANNON.ContactMaterial(
            physicsWorld.frogMaterial,
            this.ballMaterial,
            {
                friction: 0.2,
                restitution: Config.ballBounciness * 0.85
            }
        );
        physicsWorld.world.addContactMaterial(ballFrogContact);

        // Create the ball body
        const shape = new CANNON.Sphere(this.radius);
        this.body = new CANNON.Body({
            mass: this.mass,
            shape: shape,
            material: this.ballMaterial,
            linearDamping: Config.ballLinearDamping,
            angularDamping: Config.ballAngularDamping
        });

        this.body.position.set(position.x, position.y, position.z);
        physicsWorld.world.addBody(this.body);
    }

    update(dt) {
        if (!this.body) return;

        // Sync mesh position and rotation with physics body
        this.mesh.position.copy(this.body.position);
        this.mesh.quaternion.copy(this.body.quaternion);

        // Reset ball if it falls too far
        if (this.body.position.y < Config.ballResetHeight) {
            this.reset();
        }
    }

    // Kick the ball with a force
    kick(direction, force = null) {
        if (!this.body) return;

        const kickForce = force || Config.ballKickForce;
        const impulse = new CANNON.Vec3(
            direction.x * kickForce,
            direction.y * kickForce + Config.ballKickUpward,
            direction.z * kickForce
        );

        this.body.applyImpulse(impulse, this.body.position);
    }

    // Reset ball to spawn position
    reset() {
        if (this.body) {
            const rx = (Math.random() - 0.5) * 30;
            const rz = (Math.random() - 0.5) * 30;
            this.body.position.set(rx, Config.ballSpawnHeight, rz);
            this.body.velocity.set(0, 0, 0);
            this.body.angularVelocity.set(0, 0, 0);
        }
    }

    // Get sync state for network
    getSyncState() {
        if (!this.body) return null;

        return {
            x: this.body.position.x,
            y: this.body.position.y,
            z: this.body.position.z,
            qx: this.body.quaternion.x,
            qy: this.body.quaternion.y,
            qz: this.body.quaternion.z,
            qw: this.body.quaternion.w,
            vx: this.body.velocity.x,
            vy: this.body.velocity.y,
            vz: this.body.velocity.z
        };
    }

    // Apply sync state from network
    applySyncState(state) {
        if (!this.body) return;

        this.body.position.set(state.x, state.y, state.z);
        this.body.quaternion.set(state.qx, state.qy, state.qz, state.qw);
        this.body.velocity.set(state.vx, state.vy, state.vz);
    }
}
