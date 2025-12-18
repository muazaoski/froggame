/**
 * Server-Authoritative Physics Engine
 * Matches client Config.js EXACTLY for consistent gameplay
 */

const CANNON = require('cannon-es');

// MUST MATCH src/Config.js EXACTLY!
const Config = {
    // Physics
    gravity: -21.39,
    friction: 0.0,
    restitution: 0.336,

    // Movement
    moveSpeed: 1143.7,
    jumpVelocity: 15.08,
    airControl: 0.5,
    linearDamping: 0.93,

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

    // Server settings
    tickRate: 30, // Physics updates per second (higher = smoother but more CPU)
};

class ServerPhysics {
    constructor(io) {
        this.io = io;
        this.world = null;
        this.players = {}; // socketId -> { body, input, health, etc }
        this.lastTickTime = Date.now();
        this.tickInterval = null;

        this.initPhysicsWorld();
    }

    initPhysicsWorld() {
        // Create physics world matching client exactly
        this.world = new CANNON.World();
        this.world.gravity.set(0, Config.gravity, 0);
        this.world.broadphase = new CANNON.SAPBroadphase(this.world);
        this.world.allowSleep = false;

        // Materials matching client
        this.groundMaterial = new CANNON.Material('ground');
        this.frogMaterial = new CANNON.Material('frog');

        const groundFrogContact = new CANNON.ContactMaterial(
            this.groundMaterial,
            this.frogMaterial,
            {
                friction: Config.friction,
                restitution: Config.restitution
            }
        );
        this.world.addContactMaterial(groundFrogContact);

        // Ground plane
        const groundShape = new CANNON.Plane();
        const groundBody = new CANNON.Body({
            mass: 0,
            shape: groundShape,
            material: this.groundMaterial
        });
        groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
        this.world.addBody(groundBody);

        console.log('🎮 Server physics initialized (authoritative mode)');
    }

    addPlayer(socketId, playerData) {
        // Physics body matching client Frog.js
        const shape = new CANNON.Sphere(0.5);
        const body = new CANNON.Body({
            mass: 1,
            shape: shape,
            material: this.frogMaterial,
            fixedRotation: true,
            linearDamping: Config.linearDamping
        });

        // Random spawn
        const spawnX = (Math.random() - 0.5) * 20;
        const spawnZ = (Math.random() - 0.5) * 20;
        body.position.set(spawnX, 5, spawnZ);

        this.world.addBody(body);

        this.players[socketId] = {
            body: body,
            input: {
                forward: false,
                backward: false,
                left: false,
                right: false,
                jump: false,
                punch: false
            },
            cameraAngle: 0,
            facingAngle: 0,
            health: Config.maxHealth,
            isDead: false,
            isGrounded: false,
            isPunching: false,
            punchCooldown: 0,
            jumpCooldown: 0,
            respawnTimer: null,
            name: playerData.name,
            color: playerData.color,
            lastProcessedSeq: 0  // For client reconciliation
        };

        console.log(`🐸 Player ${playerData.name} joined physics simulation`);
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

    handleInput(socketId, inputData) {
        const player = this.players[socketId];
        if (!player || player.isDead) return;

        player.input = {
            forward: inputData.forward || false,
            backward: inputData.backward || false,
            left: inputData.left || false,
            right: inputData.right || false,
            jump: inputData.jump || false,
            punch: inputData.punch || false
        };
        player.cameraAngle = inputData.cameraAngle || 0;

        // Track sequence ID for client reconciliation
        if (inputData.seq) {
            player.lastProcessedSeq = inputData.seq;
        }
    }

    tick(dt) {
        // Process inputs for each player
        for (const socketId in this.players) {
            const player = this.players[socketId];
            if (player.isDead) continue;

            this.processMovement(player, dt);
            this.processJump(player);
            this.processPunch(socketId, player, dt);
        }

        // Step physics - match client timing
        const fixedTimeStep = 1 / 60;
        this.world.step(fixedTimeStep, dt, 3);

        // Update grounded state
        for (const socketId in this.players) {
            const player = this.players[socketId];
            player.isGrounded = this.checkGrounded(player);
        }

        // Update cooldowns
        for (const socketId in this.players) {
            const player = this.players[socketId];
            if (player.punchCooldown > 0) player.punchCooldown -= dt;
            if (player.jumpCooldown > 0) player.jumpCooldown -= dt;
        }
    }

    processMovement(player, dt) {
        const { body, input, cameraAngle } = player;

        // Calculate input direction
        let inputX = 0, inputZ = 0;
        if (input.forward) inputZ -= 1;
        if (input.backward) inputZ += 1;
        if (input.left) inputX -= 1;
        if (input.right) inputX += 1;

        // Normalize diagonal movement
        const inputLen = Math.sqrt(inputX * inputX + inputZ * inputZ);
        if (inputLen > 0) {
            inputX /= inputLen;
            inputZ /= inputLen;

            // Rotate by camera angle (client does this too)
            const cos = Math.cos(cameraAngle);
            const sin = Math.sin(cameraAngle);
            const moveX = inputX * cos + inputZ * sin;
            const moveZ = -inputX * sin + inputZ * cos;

            // Update facing direction
            player.facingAngle = Math.atan2(moveX, moveZ);

            // Apply movement force - MATCH CLIENT EXACTLY
            // Client uses: force = moveDir * Config.moveSpeed * dt
            const airMultiplier = player.isGrounded ? 1.0 : Config.airControl;
            const force = Config.moveSpeed * dt * airMultiplier;

            body.applyForce(
                new CANNON.Vec3(moveX * force, 0, moveZ * force),
                body.position
            );
        }
    }

    processJump(player) {
        if (player.input.jump && player.isGrounded && player.jumpCooldown <= 0) {
            // Match client: body.velocity.y = Config.jumpVelocity
            player.body.velocity.y = Config.jumpVelocity;
            player.jumpCooldown = 0.2;
        }
    }

    processPunch(socketId, player, dt) {
        if (player.input.punch && player.punchCooldown <= 0) {
            player.isPunching = true;
            player.punchCooldown = Config.punchCooldown;

            // Check for hits
            const hits = this.checkPunchHits(socketId, player);

            // Broadcast punch animation
            this.io.emit('playerPunched', socketId);

            // Process hits
            for (const hit of hits) {
                this.io.emit('playerDamaged', hit);
            }

            // Reset punching after animation
            setTimeout(() => {
                if (this.players[socketId]) {
                    this.players[socketId].isPunching = false;
                }
            }, 150);
        }
    }

    checkPunchHits(attackerId, attacker) {
        const hits = [];
        const attackerPos = attacker.body.position;

        for (const targetId in this.players) {
            if (targetId === attackerId) continue;

            const target = this.players[targetId];
            if (target.isDead) continue;

            const targetPos = target.body.position;
            const dx = targetPos.x - attackerPos.x;
            const dy = targetPos.y - attackerPos.y;
            const dz = targetPos.z - attackerPos.z;
            const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

            // Check distance
            if (distance > Config.punchHitRadius) continue;

            // Check facing direction
            const toTargetAngle = Math.atan2(dx, dz);
            let angleDiff = toTargetAngle - attacker.facingAngle;
            while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
            while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;

            if (Math.abs(angleDiff) > Math.PI / 2) continue;

            // Calculate damage
            const isCritical = Math.random() < Config.criticalChance;
            const damage = isCritical
                ? Math.floor(Math.random() * (Config.criticalDamageMax - Config.criticalDamageMin + 1)) + Config.criticalDamageMin
                : Math.floor(Math.random() * (Config.punchDamageMax - Config.punchDamageMin + 1)) + Config.punchDamageMin;

            // Apply knockback
            const knockbackDir = { x: dx / distance, z: dz / distance };
            target.body.velocity.x += knockbackDir.x * Config.knockbackForce;
            target.body.velocity.y += Config.knockbackUpward;
            target.body.velocity.z += knockbackDir.z * Config.knockbackForce;

            // Apply damage
            target.health -= damage;

            hits.push({
                targetId: targetId,
                attackerId: attackerId,
                damage: damage,
                isCritical: isCritical,
                knockback: {
                    x: knockbackDir.x * Config.knockbackForce,
                    y: Config.knockbackUpward,
                    z: knockbackDir.z * Config.knockbackForce
                }
            });

            // Check death
            if (target.health <= 0) {
                this.killPlayer(targetId, attackerId);
            }
        }

        return hits;
    }

    checkGrounded(player) {
        // Check if near ground
        if (player.body.position.y < 0.6 && player.body.velocity.y <= 0.1) {
            return true;
        }

        // Check contacts
        for (const contact of this.world.contacts) {
            let normalY = 0;
            if (contact.bi === player.body) {
                normalY = -contact.ni.y;
            } else if (contact.bj === player.body) {
                normalY = contact.ni.y;
            }
            if (normalY > 0.5) return true;
        }
        return false;
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

        console.log(`💀 ${player.name} died${killerSocketId ? ` (killed by ${this.players[killerSocketId]?.name})` : ''}`);
    }

    respawnPlayer(socketId) {
        const player = this.players[socketId];
        if (!player) return;

        player.isDead = false;
        player.health = Config.maxHealth;

        const spawnX = (Math.random() - 0.5) * 20;
        const spawnZ = (Math.random() - 0.5) * 20;
        player.body.position.set(spawnX, 10, spawnZ);
        player.body.velocity.set(0, 0, 0);

        this.io.emit('playerRespawned', {
            id: socketId,
            x: player.body.position.x,
            y: player.body.position.y,
            z: player.body.position.z,
            health: player.health
        });

        console.log(`✨ ${player.name} respawned`);
    }

    getWorldState() {
        const state = {};
        for (const socketId in this.players) {
            const p = this.players[socketId];
            state[socketId] = {
                x: p.body.position.x,
                y: p.body.position.y,
                z: p.body.position.z,
                vx: p.body.velocity.x,
                vy: p.body.velocity.y,
                vz: p.body.velocity.z,
                facingAngle: p.facingAngle,
                isGrounded: p.isGrounded,
                isPunching: p.isPunching,
                isDead: p.isDead,
                health: p.health,
                lastProcessedSeq: p.lastProcessedSeq  // For client reconciliation
            };
        }
        return state;
    }

    startSimulation() {
        const tickMs = 1000 / Config.tickRate;

        this.tickInterval = setInterval(() => {
            const now = Date.now();
            const dt = Math.min((now - this.lastTickTime) / 1000, 0.1);
            this.lastTickTime = now;

            // Run physics
            this.tick(dt);

            // Broadcast state to all clients
            const worldState = this.getWorldState();
            this.io.emit('physicsState', worldState);
        }, tickMs);

        console.log(`🎮 Server physics running at ${Config.tickRate} Hz (authoritative mode)`);
    }

    stopSimulation() {
        if (this.tickInterval) {
            clearInterval(this.tickInterval);
            this.tickInterval = null;
        }
    }
}

module.exports = { ServerPhysics, Config };
