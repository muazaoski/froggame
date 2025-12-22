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

        // --- MATERIALS --- (Using BasicMaterial for performance)
        this.dustMaterial = new THREE.MeshBasicMaterial({
            color: 0xccaa88,
            transparent: true,
            opacity: 0.8
        });

        this.impactMaterial = new THREE.MeshBasicMaterial({
            color: 0xffff88,
            transparent: true,
            opacity: 1.0,
            blending: THREE.AdditiveBlending
        });

        // Pre-pool particles
        this.initPool();
    }

    initPool() {
        // Create dust particle pool (Cubes) - Reduced for performance
        for (let i = 0; i < 40; i++) {
            const mesh = new THREE.Mesh(this.dustGeometry, this.dustMaterial.clone());
            mesh.castShadow = false;  // DISABLED for performance
            mesh.receiveShadow = false;
            mesh.visible = false;
            this.scene.add(mesh);
            this.dustPool.push(mesh);
        }

        // Create impact particle pool - Reduced for performance
        for (let i = 0; i < 80; i++) {
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

    // Spawn walking dust (Now using the high-quality "splat" style)
    spawnWalkDust(position, color) {
        if (!Config.vfxEnabled) return;

        const count = 3;
        const baseColor = new THREE.Color(color || 0xccaa88);

        for (let i = 0; i < count; i++) {
            const particle = this.getImpactParticle();
            if (!particle) return;

            // Offset slightly behind feet
            const offset = 0.2;
            particle.position.set(
                position.x + this.randRange(-offset, offset),
                position.y + 0.1,
                position.z + this.randRange(-offset, offset)
            );

            particle.scale.setScalar(0.01);
            const size = 0.15 * this.randRange(0.5, 1.2);

            // Use frog color but slightly brighter/glowier
            const pColor = baseColor.clone();
            if (Math.random() > 0.5) pColor.offsetHSL(0, 0, 0.2);

            particle.material.color.copy(pColor);
            particle.visible = true;

            this.particles.push({
                mesh: particle,
                velocity: new THREE.Vector3(
                    this.randRange(-1, 1),
                    this.randRange(1, 3), // Popping up
                    this.randRange(-1, 1)
                ),
                angularVelocity: new THREE.Vector3(this.randRange(-10, 10), this.randRange(-10, 10), 0),
                targetScale: size,
                life: 0.4,
                maxLife: 0.4,
                type: 'impact'
            });
        }
    }

    // Spawn jump burst (Circle of splats)
    spawnJumpDust(position, color) {
        if (!Config.vfxEnabled) return;

        const count = 15;
        const baseColor = new THREE.Color(color || 0xccaa88);

        for (let i = 0; i < count; i++) {
            const particle = this.getImpactParticle();
            if (!particle) return;

            const angle = (i / count) * Math.PI * 2 + this.randRange(-0.2, 0.2);
            const speed = this.randRange(4.0, 7.0);

            particle.position.set(
                position.x + Math.cos(angle) * 0.5,
                position.y + 0.1,
                position.z + Math.sin(angle) * 0.5
            );

            const size = 0.25 * this.randRange(1.0, 2.0);
            particle.scale.setScalar(0.01);
            particle.material.color.copy(baseColor);
            particle.visible = true;

            this.particles.push({
                mesh: particle,
                velocity: new THREE.Vector3(
                    Math.cos(angle) * speed,
                    this.randRange(2.0, 5.0),
                    Math.sin(angle) * speed
                ),
                angularVelocity: new THREE.Vector3(this.randRange(-10, 10), this.randRange(-10, 10), 0),
                targetScale: size,
                life: 0.5,
                maxLife: 0.5,
                type: 'impact'
            });
        }
    }

    // Spawn landing impact (Flattened splash)
    spawnLandingDust(position, impactForce, color) {
        if (!Config.vfxEnabled) return;

        const count = 18;
        const baseColor = new THREE.Color(color || 0xccaa88);

        for (let i = 0; i < count; i++) {
            const particle = this.getImpactParticle();
            if (!particle) return;

            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * 0.8;
            const speed = impactForce + this.randRange(2, 6);

            particle.position.set(
                position.x + Math.cos(angle) * dist,
                position.y + 0.05,
                position.z + Math.sin(angle) * dist
            );

            const size = 0.3 * this.randRange(0.8, 1.5);
            particle.scale.setScalar(0.01);
            particle.material.color.copy(baseColor);
            particle.visible = true;

            this.particles.push({
                mesh: particle,
                velocity: new THREE.Vector3(
                    Math.cos(angle) * speed,
                    this.randRange(2, impactForce * 1.5),
                    Math.sin(angle) * speed
                ),
                angularVelocity: new THREE.Vector3(this.randRange(-15, 15), this.randRange(-15, 15), 0),
                targetScale: size,
                life: 0.6,
                maxLife: 0.6,
                type: 'impact'
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
