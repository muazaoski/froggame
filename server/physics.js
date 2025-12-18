/**
 * Server-side Physics for AFK Players Only
 * Only simulates physics for players who haven't sent updates recently
 */

const CANNON = require('cannon-es');

// Physics configuration
const PhysicsConfig = {
    gravity: -21.39,
    knockbackForce: 15,
    knockbackUpward: 8,
    tickRate: 10, // Lower tick rate - only for AFK players
    linearDamping: 0.93,
    maxHealth: 100,
    respawnTime: 3000,
    afkThreshold: 5000, // Consider player AFK if no input for 5 seconds
};

class ServerPhysics {
    constructor(io) {
        this.io = io;
        this.world = null;
        this.players = {}; // socketId -> { body, lastInputTime, health, isDead }
        this.lastTickTime = Date.now();

        this.initPhysicsWorld();
    }

    initPhysicsWorld() {
        this.world = new CANNON.World();
        this.world.gravity.set(0, PhysicsConfig.gravity, 0);
        this.world.broadphase = new CANNON.SAPBroadphase(this.world);
        this.world.allowSleep = false;

        // Ground
        const groundShape = new CANNON.Plane();
        const groundBody = new CANNON.Body({ mass: 0, shape: groundShape });
        groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
        this.world.addBody(groundBody);

        console.log('🎮 Server physics initialized (AFK-only mode)');
    }

    addPlayer(socketId, playerData) {
        const shape = new CANNON.Sphere(0.5);
        const body = new CANNON.Body({
            mass: 1,
            shape: shape,
            fixedRotation: true,
            linearDamping: PhysicsConfig.linearDamping
        });

        const spawnX = (Math.random() - 0.5) * 10;
        const spawnZ = (Math.random() - 0.5) * 10;
        body.position.set(spawnX, 5, spawnZ);

        this.world.addBody(body);

        this.players[socketId] = {
            body: body,
            lastInputTime: Date.now(),
            health: PhysicsConfig.maxHealth,
            isDead: false,
            respawnTimer: null,
            name: playerData.name,
            color: playerData.color,
            facingAngle: 0
        };

        return this.players[socketId];
    }

    removePlayer(socketId) {
        const player = this.players[socketId];
        if (player) {
            if (player.respawnTimer) clearTimeout(player.respawnTimer);
            this.world.removeBody(player.body);
            delete this.players[socketId];
        }
    }

    // Called when client sends position update - update server tracking
    syncPlayerPosition(socketId, x, y, z, facingAngle) {
        const player = this.players[socketId];
        if (player && !player.isDead) {
            player.body.position.set(x, y, z);
            player.body.velocity.set(0, 0, 0); // Clear velocity since client is controlling
            player.lastInputTime = Date.now();
            player.facingAngle = facingAngle || 0;
        }
    }

    isPlayerAFK(socketId) {
        const player = this.players[socketId];
        if (!player) return false;
        return Date.now() - player.lastInputTime > PhysicsConfig.afkThreshold;
    }

    // Apply knockback - works on both active and AFK players
    applyKnockback(socketId, knockbackX, knockbackY, knockbackZ) {
        const player = this.players[socketId];
        if (!player || player.isDead) return;

        player.body.velocity.x += knockbackX;
        player.body.velocity.y += knockbackY;
        player.body.velocity.z += knockbackZ;
    }

    // Apply damage
    applyDamage(socketId, damage) {
        const player = this.players[socketId];
        if (!player || player.isDead) return false;

        player.health -= damage;

        if (player.health <= 0) {
            player.health = 0;
            this.killPlayer(socketId);
            return true; // died
        }
        return false;
    }

    killPlayer(socketId) {
        const player = this.players[socketId];
        if (!player || player.isDead) return;

        player.isDead = true;
        player.health = 0;

        // Server-side respawn timer
        player.respawnTimer = setTimeout(() => {
            this.respawnPlayer(socketId);
        }, PhysicsConfig.respawnTime);

        console.log(`💀 Player ${player.name} died`);
    }

    respawnPlayer(socketId) {
        const player = this.players[socketId];
        if (!player) return;

        player.isDead = false;
        player.health = PhysicsConfig.maxHealth;

        const spawnX = (Math.random() - 0.5) * 10;
        const spawnZ = (Math.random() - 0.5) * 10;
        player.body.position.set(spawnX, 10, spawnZ);
        player.body.velocity.set(0, 0, 0);

        // Notify all clients about respawn
        this.io.emit('playerRespawned', {
            id: socketId,
            x: player.body.position.x,
            y: player.body.position.y,
            z: player.body.position.z,
            health: player.health
        });

        console.log(`✨ Player ${player.name} respawned`);
    }

    // Get position for an AFK player
    getPlayerPosition(socketId) {
        const player = this.players[socketId];
        if (!player) return null;

        return {
            x: player.body.position.x,
            y: player.body.position.y,
            z: player.body.position.z,
            vx: player.body.velocity.x,
            vy: player.body.velocity.y,
            vz: player.body.velocity.z,
            facingAngle: player.facingAngle,
            isDead: player.isDead,
            health: player.health
        };
    }

    startSimulation() {
        // Only tick physics for AFK players
        setInterval(() => {
            const now = Date.now();
            const dt = (now - this.lastTickTime) / 1000;
            this.lastTickTime = now;

            const clampedDt = Math.min(dt, 0.1);

            // Only simulate bodies for AFK players
            let hasAFKPlayers = false;
            for (const socketId in this.players) {
                const player = this.players[socketId];
                if (this.isPlayerAFK(socketId) && !player.isDead) {
                    hasAFKPlayers = true;
                    // Player body will be simulated by world.step
                }
            }

            if (hasAFKPlayers) {
                this.world.step(1 / PhysicsConfig.tickRate, clampedDt, 3);

                // Broadcast AFK player positions
                for (const socketId in this.players) {
                    if (this.isPlayerAFK(socketId)) {
                        const pos = this.getPlayerPosition(socketId);
                        if (pos) {
                            this.io.emit('afkPlayerUpdate', { id: socketId, ...pos });
                        }
                    }
                }
            }
        }, 1000 / PhysicsConfig.tickRate);

        console.log(`🎮 Server physics running (AFK-only mode, ${PhysicsConfig.tickRate} Hz)`);
    }
}

module.exports = { ServerPhysics, PhysicsConfig };
