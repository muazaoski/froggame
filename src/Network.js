import { io } from 'socket.io-client';
import * as THREE from 'three';
import { Config } from './Config.js';

export class Network {
    constructor(world) {
        this.world = world;
        this.socket = io();

        // Connection
        this.socket.on('connect', () => {
            console.log('Connected to server:', this.socket.id);
            // Hide offline overlay if visible
            const overlay = document.getElementById('offline-overlay');
            if (overlay && overlay.classList.contains('visible')) {
                overlay.classList.remove('visible');
                // Reload the page to show login modal
                window.location.reload();
            }

            // Request spectator mode to see current players during login screen
            this.socket.emit('spectate');
        });

        // Disconnection handling
        this.socket.on('disconnect', (reason) => {
            console.log('Disconnected from server:', reason);
            this.showOfflineOverlay();
        });

        this.socket.on('connect_error', (error) => {
            console.log('Connection error:', error);
            this.showOfflineOverlay();
        });

        // Kicked from session (logged in elsewhere)
        this.socket.on('kicked', (reason) => {
            alert('Disconnected: ' + reason);
            window.location.reload();
        });

        // Initial State - other players already in the game
        this.socket.on('currentPlayers', (players) => {
            Object.keys(players).forEach((id) => {
                // All players in this list are remote (local player hasn't been added yet)
                this.world.addRemoteFrog(id, players[id]);
            });
        });

        // Our own player data after joining
        this.socket.on('selfJoined', (playerInfo) => {
            this.world.addLocalFrog(playerInfo.id, playerInfo.color, playerInfo);

            // Initialize level display for authenticated users
            if (playerInfo.accountData) {
                const levelBadge = document.getElementById('level-badge');
                const xpFill = document.getElementById('xp-fill');
                if (levelBadge) levelBadge.textContent = `Lv.${playerInfo.accountData.level || 1}`;
                if (xpFill && playerInfo.accountData.xpToNext) {
                    xpFill.style.width = `${(playerInfo.accountData.xp / playerInfo.accountData.xpToNext) * 100}%`;
                }
            }
        });

        // New Player Joined
        this.socket.on('newPlayer', (playerInfo) => {
            this.world.addRemoteFrog(playerInfo.id, playerInfo);
            // Show join toast notification
            const playerName = playerInfo.name || `Frog ${playerInfo.id.substr(0, 4)}`;
            if (this.world.showToast) {
                this.world.showToast(`${playerName} joined the game`, 'join');
            }
        });

        // Player Disconnected
        this.socket.on('playerDisconnected', (id) => {
            this.world.removeFrog(id);
            if (this.mutedPlayers) this.mutedPlayers.delete(id);
        });

        this.mutedPlayers = new Set();

        // Player AFK Status Change
        this.socket.on('playerAFKStatus', ({ id, isAFK }) => {
            const frog = this.world.frogs[id];
            if (frog) {
                frog.isAFK = isAFK;
                frog.updateNameTag(); // Refresh name tag to show/hide AFK badge
            }
        });

        // Player Color Changed
        this.socket.on('playerColorChanged', ({ id, color }) => {
            const frog = this.world.frogs[id];
            if (frog && frog.setColor) {
                frog.setColor(color);
            }
        });

        // Player Moved (legacy - still used for extra state like tongue, scooter)
        this.socket.on('playerMoved', (playerInfo) => {
            // Skip local player - they use their own physics
            if (playerInfo.id === this.socket.id) return;

            const frog = this.world.frogs[playerInfo.id];
            if (frog) {
                // Apply the full sync state (pos, rot, vel, look, etc.)
                frog.applySyncState(playerInfo);
            }
        });

        // === SERVER-AUTHORITATIVE KNOCKBACK ===
        // Server sends knockback impulse when player is hit
        this.socket.on('playerKnockback', (data) => {
            const frog = this.world.frogs[data.id];
            if (frog && frog.isLocal && frog.body) {
                // Apply knockback impulse to local player's physics body
                frog.body.velocity.x += data.velocity.x;
                frog.body.velocity.y += data.velocity.y;
                frog.body.velocity.z += data.velocity.z;
            }
        });

        // === DAMAGE UPDATES ===
        this.socket.on('playerDamaged', (data) => {
            const frog = this.world.frogs[data.targetId];
            if (frog) {
                // Calculate new health
                const newHealth = frog.health - data.damage;
                frog.health = Math.max(0, newHealth);
                frog.updateHealthBar();

                // Show damage VFX
                if (frog.showDamageEffect) {
                    frog.showDamageEffect(data.damage, data.isCritical);
                }

                // Check death
                if (frog.health <= 0 && !frog.isDead) {
                    frog.die(true);
                }
            }
        });

        // Server respawned a player
        this.socket.on('playerRespawned', (data) => {
            const frog = this.world.frogs[data.id];
            if (frog) {
                frog.respawn(true);
                frog.health = data.health;
                // Teleport to respawn position
                if (frog.body) {
                    frog.body.position.set(data.x, data.y, data.z);
                    frog.body.velocity.set(0, 0, 0);
                }
                frog.mesh.position.set(data.x, data.y, data.z);
            }
        });

        // Chat
        this.socket.on('chatMessage', (data) => {
            if (this.mutedPlayers.has(data.id)) return; // Filter muted players

            const frog = this.world.frogs[data.id];
            if (frog) {
                frog.showChat(data.text);

                // Add to chat history panel
                this.addToChatHistory(frog.name || `Frog ${data.id.substr(0, 4)}`, data.text, frog.color);
            }
        });

        // Send Chat Listener
        window.addEventListener('chat-send', (e) => {
            this.socket.emit('chatMessage', e.detail);
        });

        // --- Combat Sync Listeners ---

        this.socket.on('playerPunched', (id) => {
            const frog = this.world.frogs[id];
            if (frog) frog.remotePunch();
        });

        this.socket.on('playerDamaged', (data) => {
            const frog = this.world.frogs[data.targetId];
            if (frog) {
                // Apply damage locally (visuals + health)
                frog.takeDamage(data.damage, data.knockback, true, data.isCritical); // true = confirm network hit
            }
        });

        this.socket.on('playerDied', (id) => {
            const frog = this.world.frogs[id];
            if (frog) frog.die(true); // true = network triggered
        });

        this.socket.on('playerRespawn', (id) => {
            const frog = this.world.frogs[id];
            if (frog) frog.respawn(true);
        });

        // Ball Sync - when another player kicks the ball
        this.socket.on('ballKicked', (ballState) => {
            if (this.world.ball) {
                this.world.ball.applySyncState(ballState);
                this.world.isBallAuthority = false; // Someone else kicked it
            }
        });

        // Ball Sync - continuous updates from authority
        this.socket.on('ballSync', (ballState) => {
            if (this.world.ball && !this.world.isBallAuthority) {
                this.world.ball.applySyncState(ballState);
            }
        });

        // Ball authority assignment
        this.socket.on('ballAuthority', (isAuthority) => {
            this.world.isBallAuthority = isAuthority;
            console.log('Ball authority:', isAuthority);
        });

        // Ping measurement
        this.ping = 0;
        this.allPings = {}; // All players' pings
        this._pingStartTime = 0;

        // Listen for pong response
        this.socket.on('pong_response', () => {
            this.ping = Date.now() - this._pingStartTime;
            // Share our ping with the server
            this.socket.emit('share_ping', this.ping);
        });

        // Receive all players' pings
        this.socket.on('all_pings', (pings) => {
            this.allPings = pings;
        });

        // Send ping every 2 seconds
        setInterval(() => {
            this._pingStartTime = Date.now();
            this.socket.emit('ping_request');
        }, 2000);
    }

    join(name, color) {
        this.socket.emit('joinGame', { name, color });
    }

    addToChatHistory(name, text, color = '#ffffff') {
        const chatHistory = document.getElementById('chat-history');
        if (!chatHistory) return;

        const msg = document.createElement('div');
        msg.className = 'chat-message';

        const nameSpan = document.createElement('span');
        nameSpan.className = 'chat-name';
        nameSpan.textContent = name + ':';
        nameSpan.style.color = color;

        const textSpan = document.createElement('span');
        textSpan.textContent = text;

        msg.appendChild(nameSpan);
        msg.appendChild(textSpan);
        chatHistory.appendChild(msg);

        // Scroll to bottom
        chatHistory.scrollTop = chatHistory.scrollHeight;

        // Limit to 100 messages (permanent until server restart)
        while (chatHistory.children.length > 100) {
            chatHistory.removeChild(chatHistory.firstChild);
        }
    }

    update(dt) {
        // Any network smoothing logic could go here
    }

    sendUpdate(frog) {
        if (!frog.body) return;

        // Use the new sync state gatherer
        const syncData = frog.getSyncState();
        if (syncData) {
            // Debug: Log once per second when riding
            if (frog.isRidingScooter) {
                if (!this._lastNetDebug || Date.now() - this._lastNetDebug > 1000) {
                    this._lastNetDebug = Date.now();
                    console.log('NETWORK SYNC (riding):', {
                        x: syncData.x?.toFixed(2),
                        y: syncData.y?.toFixed(2),
                        z: syncData.z?.toFixed(2)
                    });
                }
            }
            this.socket.emit('playerMove', syncData);
        }
    }

    sendPunch() {
        this.socket.emit('playerPunch');
    }

    // Send player inputs to server (for activity tracking only)
    // Movement is handled via sendUpdate (client-authoritative)
    sendInput(input, cameraAngle) {
        this.socket.emit('playerInput', {
            forward: input.keys.forward,
            backward: input.keys.backward,
            left: input.keys.left,
            right: input.keys.right,
            jump: input.keys.jump,
            punch: input.keys.punch,
            cameraAngle: cameraAngle
        });
    }

    sendHit(targetId, damage, knockback, isCritical = false) {
        this.socket.emit('playerHit', { targetId, damage, knockback, isCritical });
    }

    sendDeath() {
        this.socket.emit('playerDied', this.socket.id);
    }

    sendRespawn() {
        this.socket.emit('playerRespawn', this.socket.id);
    }

    sendBallKick(ballState) {
        this.world.isBallAuthority = true; // We become authority when we kick
        this.socket.emit('ballKick', ballState);
    }

    sendBallUpdate(ballState) {
        if (this.world.isBallAuthority) {
            this.socket.emit('ballUpdate', ballState);
        }
    }

    showOfflineOverlay() {
        const overlay = document.getElementById('offline-overlay');
        if (overlay) {
            overlay.classList.add('visible');
        }
    }

    toggleMute(id) {
        if (this.mutedPlayers.has(id)) {
            this.mutedPlayers.delete(id);
            console.log(`Unmuted player: ${id}`);
            return false;
        } else {
            this.mutedPlayers.add(id);
            console.log(`Muted player: ${id}`);
            return true;
        }
    }
}
