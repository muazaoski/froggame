import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
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

        // Create fallback sphere immediately (visible while OBJ loads)
        this.createFallbackSphere();

        // Try to load OBJ model
        const loader = new OBJLoader();
        loader.load('/models/ball.obj', (obj) => {
            // Remove fallback sphere if it exists
            if (this.fallbackSphere) {
                this.mesh.remove(this.fallbackSphere);
            }

            // Scale the model appropriately - try different scales
            obj.scale.set(0.5, 0.5, 0.5); // Adjust scale as needed

            // Apply material to all meshes
            obj.traverse((child) => {
                if (child.isMesh) {
                    child.material = new THREE.MeshStandardMaterial({
                        color: 0xffffff,
                        roughness: 0.4,
                        metalness: 0.1
                    });
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });

            this.mesh.add(obj);
            this.modelLoaded = true;
            console.log('Ball model loaded successfully!');
        }, undefined, (error) => {
            console.error('Error loading ball model, using fallback sphere:', error);
            // Keep the fallback sphere
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
            this.body.position.set(5, Config.ballSpawnHeight, 0);
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
