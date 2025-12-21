import * as THREE from 'three';
import { Config } from './Config.js';

export class ParticleSystem {
    constructor(scene) {
        this.scene = scene;
        this.particles = [];
        this.dustPool = [];
        this.impactPool = [];

        // --- GEOMETRIES ---
        // Low-poly cube for dirt/dust
        this.dustGeometry = new THREE.BoxGeometry(1, 1, 1);

        // Spikey shape for impacts (low poly sphere)
        this.impactGeometry = new THREE.IcosahedronGeometry(1, 0);

        // --- MATERIALS ---
        this.dustMaterial = new THREE.MeshStandardMaterial({
            color: 0xccaa88,
            roughness: 1.0,
            transparent: true,
            opacity: 0.8
        });

        this.impactMaterial = new THREE.MeshBasicMaterial({
            color: 0xffff88,
            transparent: true,
            opacity: 1.0,
            blending: THREE.AdditiveBlending // Glowy effect
        });

        // Pre-pool particles
        this.initPool();
    }

    initPool() {
        // Create dust particle pool (Cubes)
        for (let i = 0; i < 80; i++) {
            const mesh = new THREE.Mesh(this.dustGeometry, this.dustMaterial.clone());
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            mesh.visible = false;
            this.scene.add(mesh);
            this.dustPool.push(mesh);
        }

        // Create impact particle pool (Sparks)
        for (let i = 0; i < 30; i++) {
            const mesh = new THREE.Mesh(this.impactGeometry, this.impactMaterial.clone());
            mesh.visible = false;
            this.scene.add(mesh);
            this.impactPool.push(mesh);
        }
    }

    getDustParticle() {
        return this.dustPool.find(p => !p.visible);
    }

    getImpactParticle() {
        return this.impactPool.find(p => !p.visible);
    }

    // Helper to get random value in range
    randRange(min, max) {
        return min + Math.random() * (max - min);
    }

    // Spawn walking dust (kick up dirt behind)
    spawnWalkDust(position, color) {
        if (!Config.vfxEnabled) return;

        const count = Math.ceil(Config.vfxDustCount * 0.5);
        for (let i = 0; i < count; i++) {
            const particle = this.getDustParticle();
            if (!particle) return;

            // Randomize position slightly around feet
            const offset = 0.3;
            particle.position.set(
                position.x + this.randRange(-offset, offset),
                position.y + this.randRange(0, 0.2),
                position.z + this.randRange(-offset, offset)
            );

            // Random rotation
            particle.rotation.set(
                Math.random() * Math.PI,
                Math.random() * Math.PI,
                Math.random() * Math.PI
            );

            // Scale variation
            const size = Config.vfxDustSize * this.randRange(0.8, 1.5);
            particle.scale.setScalar(0.01); // Start tiny for pop-in

            // Color variation (vary brightness)
            const baseColor = new THREE.Color(color || 0xccaa88);
            baseColor.offsetHSL(0, 0, this.randRange(-0.1, 0.1));
            particle.material.color.copy(baseColor);
            particle.material.opacity = 0.5; // Walk dust 50% opacity
            particle.visible = true;

            this.particles.push({
                mesh: particle,
                velocity: new THREE.Vector3(
                    this.randRange(-0.5, 0.5),
                    this.randRange(0.5, 1.5), // Upward pop
                    this.randRange(-0.5, 0.5)
                ),
                angularVelocity: new THREE.Vector3(
                    this.randRange(-5, 5),
                    this.randRange(-5, 5),
                    this.randRange(-5, 5)
                ),
                targetScale: size,
                life: Config.vfxDustLife,
                maxLife: Config.vfxDustLife,
                type: 'dust'
            });
        }
    }

    // Spawn jump burst (Circle of dust)
    spawnJumpDust(position, color) {
        if (!Config.vfxEnabled) return;

        const count = Config.vfxDustCount * 1.5;
        for (let i = 0; i < count; i++) {
            const particle = this.getDustParticle();
            if (!particle) return;

            const angle = (i / count) * Math.PI * 2 + this.randRange(-0.2, 0.2);
            const speed = this.randRange(2.0, 4.0);
            const r = 0.5; // Start radius

            particle.position.set(
                position.x + Math.cos(angle) * r,
                position.y + 0.1,
                position.z + Math.sin(angle) * r
            );

            particle.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);

            const size = Config.vfxDustSize * this.randRange(1.0, 2.0);
            particle.scale.setScalar(0.01);

            particle.material.color.setHex(color || 0xccaa88);
            particle.visible = true;

            this.particles.push({
                mesh: particle,
                velocity: new THREE.Vector3(
                    Math.cos(angle) * speed,
                    this.randRange(1.0, 3.0),
                    Math.sin(angle) * speed
                ),
                angularVelocity: new THREE.Vector3(
                    this.randRange(-2, 2),
                    this.randRange(-5, 5),
                    this.randRange(-2, 2)
                ),
                targetScale: size,
                life: Config.vfxDustLife,
                maxLife: Config.vfxDustLife,
                type: 'dust'
            });
        }
    }

    // Spawn landing impact (Flattened dust splash)
    spawnLandingDust(position, impactForce, color) {
        if (!Config.vfxEnabled) return;

        const count = Math.min(Config.vfxDustCount * 2.5, 20);
        for (let i = 0; i < count; i++) {
            const particle = this.getDustParticle();
            if (!particle) return;

            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * 0.5;
            const speed = impactForce * 0.8 + Math.random() * 2;

            particle.position.set(
                position.x + Math.cos(angle) * dist,
                position.y + 0.05,
                position.z + Math.sin(angle) * dist
            );

            particle.scale.setScalar(0.01);
            const size = Config.vfxDustSize * (1 + impactForce * 0.1) * this.randRange(0.8, 1.2);

            particle.material.color.setHex(color || 0xccaa88);
            particle.visible = true;

            this.particles.push({
                mesh: particle,
                velocity: new THREE.Vector3(
                    Math.cos(angle) * speed,
                    this.randRange(1.0, impactForce * 0.5),
                    Math.sin(angle) * speed
                ),
                angularVelocity: new THREE.Vector3(
                    this.randRange(-10, 10),
                    this.randRange(-10, 10),
                    this.randRange(-10, 10)
                ),
                targetScale: size,
                life: Config.vfxDustLife * 1.5,
                maxLife: Config.vfxDustLife * 1.5,
                type: 'dust'
            });
        }
    }

    // Spawn punch impact (Sparks / Directional Burst)
    spawnPunchImpact(position, direction) {
        if (!Config.vfxEnabled) return;

        const count = Config.vfxImpactCount;
        for (let i = 0; i < count; i++) {
            const particle = this.getImpactParticle();
            if (!particle) return;

            particle.position.copy(position);
            particle.scale.setScalar(0.01);

            const size = Config.vfxImpactSize * this.randRange(0.5, 1.5);

            // Random bright warm colors (Yellow -> Orange -> White)
            const hue = this.randRange(0.05, 0.15); // Yellow/Orange
            const sat = 1.0;
            const light = this.randRange(0.5, 1.0);
            particle.material.color.setHSL(hue, sat, light);
            particle.visible = true;

            // Cone spread
            const spread = 0.8;
            this.particles.push({
                mesh: particle,
                velocity: new THREE.Vector3(
                    direction.x * 10 + this.randRange(-spread, spread) * 5,
                    this.randRange(-1, 5),
                    direction.z * 10 + this.randRange(-spread, spread) * 5
                ),
                angularVelocity: new THREE.Vector3(
                    this.randRange(-20, 20),
                    this.randRange(-20, 20),
                    this.randRange(-20, 20)
                ),
                targetScale: size,
                life: Config.vfxImpactLife,
                maxLife: Config.vfxImpactLife,
                type: 'impact'
            });
        }
    }

    // Spawn tongue impact (Pink/Wet splat)
    spawnTongueImpact(position, color) {
        if (!Config.vfxEnabled) return;

        const count = 12;
        const baseColor = new THREE.Color(color || Config.tongueColor);

        for (let i = 0; i < count; i++) {
            const particle = this.getImpactParticle();
            if (!particle) return;

            particle.position.copy(position);
            particle.scale.setScalar(0.01);

            const size = 0.2 * this.randRange(0.8, 2.0);

            // Wet pink look
            particle.material.color.copy(baseColor);
            particle.visible = true;

            const angle = Math.random() * Math.PI * 2;
            const speed = this.randRange(2, 6);

            this.particles.push({
                mesh: particle,
                velocity: new THREE.Vector3(
                    Math.cos(angle) * speed,
                    this.randRange(1, 4),
                    Math.sin(angle) * speed
                ),
                angularVelocity: new THREE.Vector3(this.randRange(-10, 10), this.randRange(-10, 10), 0),
                targetScale: size,
                life: 0.6,
                maxLife: 0.6,
                type: 'impact'
            });
        }
    }

    // Spawn Death Disperse (Exploding chunks)
    spawnDeathDisperse(position, color) {
        if (!Config.vfxEnabled) return;

        const count = 30;
        for (let i = 0; i < count; i++) {
            const particle = this.getDustParticle();
            if (!particle) return;

            // Start inside the body approx (0.5 radius)
            particle.position.set(
                position.x + this.randRange(-0.3, 0.3),
                position.y + this.randRange(0, 0.5),
                position.z + this.randRange(-0.3, 0.3)
            );

            particle.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
            particle.visible = true;

            // Color like the frog
            particle.material.color.setHex(color || 0x4CAF50);
            particle.material.opacity = 0.9;

            const size = 0.2 * this.randRange(0.5, 1.5);
            particle.scale.setScalar(0.01);

            // Explode outwards
            const speed = this.randRange(2, 8);
            const angle = Math.random() * Math.PI * 2;
            const yForce = this.randRange(2, 10);

            this.particles.push({
                mesh: particle,
                velocity: new THREE.Vector3(
                    Math.cos(angle) * speed,
                    yForce,
                    Math.sin(angle) * speed
                ),
                angularVelocity: new THREE.Vector3(
                    this.randRange(-10, 10),
                    this.randRange(-10, 10),
                    this.randRange(-10, 10)
                ),
                targetScale: size,
                life: 1.5,
                maxLife: 1.5,
                type: 'dust'
            });
        }
    }

    update(dt) {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];

            // 1. Position Physics
            p.mesh.position.add(p.velocity.clone().multiplyScalar(dt));

            // 2. Angular Physics (Spin)
            p.mesh.rotation.x += p.angularVelocity.x * dt;
            p.mesh.rotation.y += p.angularVelocity.y * dt;
            p.mesh.rotation.z += p.angularVelocity.z * dt;

            // 3. Gravity / Drag
            if (p.type === 'dust') {
                p.velocity.y -= 15 * dt; // Gravity
                p.velocity.multiplyScalar(1 - dt * 2.0); // Air Drag
            } else {
                p.velocity.multiplyScalar(1 - dt * 5.0); // Spark drag (slow fast)
            }

            // 4. Life Cycle
            p.life -= dt;
            const lifeRatio = p.life / p.maxLife; // 1.0 -> 0.0

            // 5. Scale Animation (Pop-in then shrink)
            // Pop in quickly (first 10% of life), then shrink
            let currentScale = 0;
            if (lifeRatio > 0.8) {
                // Growing phase (0.0 -> target)
                const growProgress = (1 - lifeRatio) / 0.2; // 0->1
                currentScale = THREE.MathUtils.lerp(0, p.targetScale, growProgress);
            } else {
                // Shrinking phase (target -> 0)
                const shrinkProgress = lifeRatio / 0.8; // 1->0
                currentScale = p.targetScale * shrinkProgress;
            }
            p.mesh.scale.setScalar(currentScale);

            // 6. Kill
            if (p.life <= 0) {
                p.mesh.visible = false;
                this.particles.splice(i, 1);
            }
        }
    }
}
