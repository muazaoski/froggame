import * as THREE from 'three/webgpu';
import { Config } from './Config.js';

export class ParticleSystem {
    constructor(scene) {
        this.scene = scene;
        this.particles = []; // Active particles data: { position, velocity, life, ... }

        // Limits
        this.maxDust = 100;
        this.maxImpacts = 100;

        // Dummy for matrix calculation
        this.dummy = new THREE.Object3D();

        // --- DUST SYSTEM (Instanced) ---
        const dustGeometry = new THREE.BoxGeometry(1, 1, 1);
        const dustMaterial = new THREE.MeshBasicMaterial({
            color: 0xccaa88,
            transparent: true,
            opacity: 0.8
        });
        this.dustMesh = new THREE.InstancedMesh(dustGeometry, dustMaterial, this.maxDust);
        this.dustMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        this.dustMesh.count = 0; // Start with 0 visible
        this.scene.add(this.dustMesh);

        // --- IMPACT SYSTEM (Instanced) ---
        const impactGeometry = new THREE.IcosahedronGeometry(1, 0);
        const impactMaterial = new THREE.MeshBasicMaterial({
            color: 0xffff88,
            transparent: true,
            opacity: 1.0,
            blending: THREE.AdditiveBlending
        });
        this.impactMesh = new THREE.InstancedMesh(impactGeometry, impactMaterial, this.maxImpacts);
        this.impactMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        this.impactMesh.count = 0;
        this.scene.add(this.impactMesh);
    }

    // Helper to get random value in range
    randRange(min, max) {
        return min + Math.random() * (max - min);
    }

    spawnParticle(type, data) {
        // Enforce limits to prevent array explosion (FIFO if full?)
        // For now, simple limit: if full, don't spawn
        let currentCount = 0;
        for (const p of this.particles) {
            if (p.type === type) currentCount++;
        }

        const limit = type === 'dust' ? this.maxDust : this.maxImpacts;
        if (currentCount >= limit) return; // Cap it

        this.particles.push({
            type: type, // 'dust' or 'impact'
            position: data.position.clone(),
            velocity: data.velocity.clone(),
            angularVelocity: data.angularVelocity.clone(),
            scale: 0, // Starts at 0
            targetScale: data.targetScale,
            life: data.life,
            maxLife: data.maxLife,
            color: data.color // Stored for potential color InstancedBufferAttribute later (not implemented yet for simplicity)
        });
    }

    // Spawn walking dust
    spawnWalkDust(position, color) {
        if (!Config.vfxEnabled) return;

        for (let i = 0; i < 3; i++) {
            const offset = 0.2;
            const pos = new THREE.Vector3(
                position.x + this.randRange(-offset, offset),
                position.y + 0.1,
                position.z + this.randRange(-offset, offset)
            );

            const size = 0.15 * this.randRange(0.5, 1.2);

            this.spawnParticle('impact', { // Using impact mesh for these too as per original logic? No, original used 'impact' geometry but labeled 'impact' type. 
                // Wait, original spawnWalkDust used `getImpactParticle()` but pushed type 'impact'.
                // Original spawnDeathDisperse used `getDustParticle()` (cubes).
                // Let's stick to original geometry mapping: Walk = ImpactGeo (spheres), Death = DustGeo (cubes).

                position: pos,
                velocity: new THREE.Vector3(
                    this.randRange(-1, 1),
                    this.randRange(1, 3),
                    this.randRange(-1, 1)
                ),
                angularVelocity: new THREE.Vector3(this.randRange(-10, 10), this.randRange(-10, 10), 0),
                targetScale: size,
                life: 0.4,
                maxLife: 0.4,
                color: color
            });
        }
    }

    // Spawn jump burst
    spawnJumpDust(position, color) {
        if (!Config.vfxEnabled) return;
        const count = 15;
        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2 + this.randRange(-0.2, 0.2);
            const speed = this.randRange(4.0, 7.0);

            this.spawnParticle('impact', {
                position: new THREE.Vector3(
                    position.x + Math.cos(angle) * 0.5,
                    position.y + 0.1,
                    position.z + Math.sin(angle) * 0.5
                ),
                velocity: new THREE.Vector3(
                    Math.cos(angle) * speed,
                    this.randRange(2.0, 5.0),
                    Math.sin(angle) * speed
                ),
                angularVelocity: new THREE.Vector3(this.randRange(-10, 10), this.randRange(-10, 10), 0),
                targetScale: 0.25 * this.randRange(1.0, 2.0),
                life: 0.5,
                maxLife: 0.5,
                color: color
            });
        }
    }

    // Spawn landing impact
    spawnLandingDust(position, impactForce, color) {
        if (!Config.vfxEnabled) return;
        const count = 18;
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * 0.8;
            const speed = impactForce + this.randRange(2, 6);

            this.spawnParticle('impact', {
                position: new THREE.Vector3(
                    position.x + Math.cos(angle) * dist,
                    position.y + 0.05,
                    position.z + Math.sin(angle) * dist
                ),
                velocity: new THREE.Vector3(
                    Math.cos(angle) * speed,
                    this.randRange(2, impactForce * 1.5),
                    Math.sin(angle) * speed
                ),
                angularVelocity: new THREE.Vector3(this.randRange(-15, 15), this.randRange(-15, 15), 0),
                targetScale: 0.3 * this.randRange(0.8, 1.5),
                life: 0.6,
                maxLife: 0.6,
                color: color
            });
        }
    }

    // Spawn punch impact
    spawnPunchImpact(position, direction) {
        if (!Config.vfxEnabled) return;
        const count = Config.vfxImpactCount;
        for (let i = 0; i < count; i++) {
            const spread = 0.8;
            this.spawnParticle('impact', {
                position: position.clone(),
                velocity: new THREE.Vector3(
                    direction.x * 10 + this.randRange(-spread, spread) * 5,
                    this.randRange(-1, 5),
                    direction.z * 10 + this.randRange(-spread, spread) * 5
                ),
                angularVelocity: new THREE.Vector3(this.randRange(-20, 20), this.randRange(-20, 20), this.randRange(-20, 20)),
                targetScale: Config.vfxImpactSize * this.randRange(0.5, 1.5),
                life: Config.vfxImpactLife,
                maxLife: Config.vfxImpactLife,
                color: 0xffff00 // Yellow-ish
            });
        }
    }

    // Spawn tongue impact
    spawnTongueImpact(position, color) {
        if (!Config.vfxEnabled) return;
        const count = 12;
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = this.randRange(2, 6);
            this.spawnParticle('impact', {
                position: position.clone(),
                velocity: new THREE.Vector3(
                    Math.cos(angle) * speed,
                    this.randRange(1, 4),
                    Math.sin(angle) * speed
                ),
                angularVelocity: new THREE.Vector3(this.randRange(-10, 10), this.randRange(-10, 10), 0),
                targetScale: 0.2 * this.randRange(0.8, 2.0),
                life: 0.6,
                maxLife: 0.6,
                color: color || Config.tongueColor
            });
        }
    }

    // Spawn Death Disperse (Cubes)
    spawnDeathDisperse(position, color) {
        if (!Config.vfxEnabled) return;
        const count = 30;
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = this.randRange(2, 8);
            const yForce = this.randRange(2, 10);

            this.spawnParticle('dust', { // Cubes for death
                position: new THREE.Vector3(
                    position.x + this.randRange(-0.3, 0.3),
                    position.y + this.randRange(0, 0.5),
                    position.z + this.randRange(-0.3, 0.3)
                ),
                velocity: new THREE.Vector3(
                    Math.cos(angle) * speed,
                    yForce,
                    Math.sin(angle) * speed
                ),
                angularVelocity: new THREE.Vector3(this.randRange(-10, 10), this.randRange(-10, 10), this.randRange(-10, 10)),
                targetScale: 0.2 * this.randRange(0.5, 1.5),
                life: 1.5,
                maxLife: 1.5,
                color: color
            });
        }
    }

    update(dt) {
        let dustIndex = 0;
        let impactIndex = 0;
        const deadParticles = [];

        // Update Physics
        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];

            // 1. Position
            p.position.x += p.velocity.x * dt;
            p.position.y += p.velocity.y * dt;
            p.position.z += p.velocity.z * dt;

            // 2. Life
            p.life -= dt;
            if (p.life <= 0) {
                deadParticles.push(i);
                continue;
            }

            // 3. Gravity/Drag
            if (p.type === 'dust') {
                p.velocity.y -= 15 * dt;
                const drag = 1 - dt * 2.0;
                p.velocity.x *= drag; p.velocity.y *= drag; p.velocity.z *= drag;
            } else {
                const drag = 1 - dt * 5.0;
                p.velocity.x *= drag; p.velocity.y *= drag; p.velocity.z *= drag;
            }

            // 4. Scale
            const lifeRatio = p.life / p.maxLife;
            if (lifeRatio > 0.8) {
                const grow = (1 - lifeRatio) / 0.2;
                p.scale = p.targetScale * grow;
            } else {
                const shrink = lifeRatio / 0.8;
                p.scale = p.targetScale * shrink;
            }

            // 5. Update Matrix for InstancedMesh
            this.dummy.position.copy(p.position);
            // Simple rotation logic (accumulated in separate vector? No, just spin based on time/life to same prop)
            const spin = p.life * 10; // Simple spin
            this.dummy.rotation.set(spin * p.angularVelocity.x, spin * p.angularVelocity.y, spin * p.angularVelocity.z);
            this.dummy.scale.setScalar(p.scale);
            this.dummy.updateMatrix();

            if (p.type === 'dust') {
                if (dustIndex < this.maxDust) {
                    this.dustMesh.setMatrixAt(dustIndex++, this.dummy.matrix);
                }
            } else {
                if (impactIndex < this.maxImpacts) {
                    this.impactMesh.setMatrixAt(impactIndex++, this.dummy.matrix);
                }
            }
        }

        // Cleanup dead
        for (let i = deadParticles.length - 1; i >= 0; i--) {
            this.particles.splice(deadParticles[i], 1);
        }

        // Update InstancedMesh counts and buffers
        this.dustMesh.count = dustIndex;
        this.dustMesh.instanceMatrix.needsUpdate = true;

        this.impactMesh.count = impactIndex;
        this.impactMesh.instanceMatrix.needsUpdate = true;
    }
}
