/**
 * Server Physics - COMBAT ONLY
 * 
 * Movement is CLIENT-AUTHORITATIVE
 * Server only handles:
 * - Combat (punch hit detection)
 * - Knockback impulses
 * - Death & respawn
 * 
 * Server does NOT simulate player movement!
 */

const CANNON = require('cannon-es');

const Config = {
    // Combat
    maxHealth: 100,
    punchDamageMin: 6,
    punchDamageMax: 10,
    criticalDamageMin: 15,
    criticalDamageMax: 20,
    criticalChance: 0.15,
    knockbackForce: 15,
    knockbackUpward: 8,
    punchHitRadius: 2.0,
    punchCooldown: 0.3,
    respawnTime: 2.035,

    // Validation
    maxSpeed: 25, // Max units per second (for speed hack detection)
};

class ServerPhysics {
    constructor(io) {
        this.io = io;
        this.players = {}; // socketId -> player state
    }

    addPlayer(socketId, playerData) {
        this.players[socketId] = {
            // Position (received from client)
            x: (Math.random() - 0.5) * 20,
            y: 5,
            z: (Math.random() - 0.5) * 20,
            vx: 0,
            vy: 0,
            vz: 0,
            rotation: 0,

            // Combat state (server-authoritative)
            health: Config.maxHealth,
            isDead: false,
            punchCooldown: 0,
            respawnTimer: null,

            // Validation
            lastUpdateTime: Date.now(),
            lastPosition: { x: 0, y: 5, z: 0 },

            // Player info
            name: playerData.name,
            color: playerData.color
        };

        console.log(`🐸 Player ${playerData.name} added`);
        return this.players[socketId];
    }

    removePlayer(socketId) {
        const player = this.players[socketId];
        if (player) {
            if (player.respawnTimer) clearTimeout(player.respawnTimer);
            delete this.players[socketId];
        }
    }

    // Receive position from client (client-authoritative)
    updatePlayerPosition(socketId, data) {
        const player = this.players[socketId];
        if (!player || player.isDead) return false;

        const now = Date.now();
        const dt = (now - player.lastUpdateTime) / 1000;

        // Validate: check for speed hacks / teleporting
        if (dt > 0.01) { // Ignore if too fast (spam)
            const dx = data.x - player.lastPosition.x;
            const dz = data.z - player.lastPosition.z;
            const distance = Math.sqrt(dx * dx + dz * dz);
            const speed = distance / dt;

            // Reject if moving too fast (potential speed hack)
            if (speed > Config.maxSpeed && dt > 0.05) {
                console.log(`⚠️ Speed hack detected: ${player.name} moving at ${speed.toFixed(1)} u/s`);
                return false;
            }
        }

        // Accept position update
        player.x = data.x;
        player.y = data.y;
        player.z = data.z;
        player.vx = data.vx || 0;
        player.vy = data.vy || 0;
        player.vz = data.vz || 0;
        player.rotation = data.rotation || 0;

        player.lastPosition = { x: data.x, y: data.y, z: data.z };
        player.lastUpdateTime = now;

        return true;
    }

    // Handle punch - SERVER AUTHORITATIVE
    handlePunch(attackerId) {
        const attacker = this.players[attackerId];
        if (!attacker || attacker.isDead || attacker.punchCooldown > 0) return [];

        attacker.punchCooldown = Config.punchCooldown;

        // Decay cooldown over time (called from main loop)
        setTimeout(() => {
            if (this.players[attackerId]) {
                this.players[attackerId].punchCooldown = 0;
            }
        }, Config.punchCooldown * 1000);

        const hits = [];

        for (const targetId in this.players) {
            if (targetId === attackerId) continue;

            const target = this.players[targetId];
            if (target.isDead) continue;

            // Distance check
            const dx = target.x - attacker.x;
            const dy = target.y - attacker.y;
            const dz = target.z - attacker.z;
            const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (distance > Config.punchHitRadius) continue;

            // Direction check (facing target)
            const toTargetAngle = Math.atan2(dx, dz);
            let angleDiff = toTargetAngle - attacker.rotation;
            while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
            while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;

            if (Math.abs(angleDiff) > Math.PI / 2) continue;

            // Calculate damage
            const isCritical = Math.random() < Config.criticalChance;
            const damage = isCritical
                ? Math.floor(Math.random() * (Config.criticalDamageMax - Config.criticalDamageMin + 1)) + Config.criticalDamageMin
                : Math.floor(Math.random() * (Config.punchDamageMax - Config.punchDamageMin + 1)) + Config.punchDamageMin;

            // Calculate knockback direction
            const knockbackDir = {
                x: dx / (distance || 1),
                z: dz / (distance || 1)
            };

            const knockback = {
                x: knockbackDir.x * Config.knockbackForce,
                y: Config.knockbackUpward,
                z: knockbackDir.z * Config.knockbackForce
            };

            // Apply damage
            target.health -= damage;

            hits.push({
                targetId,
                attackerId,
                damage,
                isCritical,
                knockback
            });

            // Check death
            if (target.health <= 0) {
                this.killPlayer(targetId, attackerId);
            }
        }

        return hits;
    }

    killPlayer(socketId, killerSocketId = null) {
        const player = this.players[socketId];
        if (!player || player.isDead) return;

        player.isDead = true;
        player.health = 0;

        this.io.emit('playerDied', socketId);

        // Server-controlled respawn
        player.respawnTimer = setTimeout(() => {
            this.respawnPlayer(socketId);
        }, Config.respawnTime * 1000);

        console.log(`💀 ${player.name} died`);
    }

    respawnPlayer(socketId) {
        const player = this.players[socketId];
        if (!player) return;

        player.isDead = false;
        player.health = Config.maxHealth;

        // Random respawn position
        const spawnX = (Math.random() - 0.5) * 20;
        const spawnZ = (Math.random() - 0.5) * 20;
        player.x = spawnX;
        player.y = 10;
        player.z = spawnZ;
        player.vx = 0;
        player.vy = 0;
        player.vz = 0;

        this.io.emit('playerRespawned', {
            id: socketId,
            x: player.x,
            y: player.y,
            z: player.z,
            health: player.health
        });

        console.log(`✨ ${player.name} respawned`);
    }

    getPlayerState(socketId) {
        const p = this.players[socketId];
        if (!p) return null;

        return {
            x: p.x,
            y: p.y,
            z: p.z,
            vx: p.vx,
            vy: p.vy,
            vz: p.vz,
            rotation: p.rotation,
            health: p.health,
            isDead: p.isDead
        };
    }

    // No longer needed - no physics simulation!
    startSimulation() {
        console.log('🎮 Server ready (client-authoritative movement, server-authoritative combat)');
    }
}

module.exports = { ServerPhysics, Config };
