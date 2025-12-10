import { io } from 'socket.io-client';

export class Network {
    constructor(world) {
        this.world = world;
        this.socket = io();

        // Connection
        this.socket.on('connect', () => {
            console.log('Connected to server:', this.socket.id);
        });

        // Initial State
        this.socket.on('currentPlayers', (players) => {
            Object.keys(players).forEach((id) => {
                if (id === this.socket.id) {
                    this.world.addLocalFrog(id, players[id].color, players[id]);
                } else {
                    this.world.addRemoteFrog(id, players[id]);
                }
            });
        });

        // New Player Joined
        this.socket.on('newPlayer', (playerInfo) => {
            this.world.addRemoteFrog(playerInfo.id, playerInfo);
            // System message?
        });

        // Player Disconnected
        this.socket.on('playerDisconnected', (id) => {
            this.world.removeFrog(id);
        });

        // Player Moved
        this.socket.on('playerMoved', (playerInfo) => {
            const frog = this.world.frogs[playerInfo.id];
            if (frog) {
                // In a real game we would interpolate this
                frog.updatePosition(
                    { x: playerInfo.x, y: playerInfo.y, z: playerInfo.z },
                    { qx: playerInfo.qx, qy: playerInfo.qy, qz: playerInfo.qz, qw: playerInfo.qw }
                );
            }
        });

        // Chat
        this.socket.on('chatMessage', (data) => {
            const frog = this.world.frogs[data.id];
            if (frog) {
                frog.showChat(data.text);
            }
        });

        // Send Chat Listener
        window.addEventListener('chat-send', (e) => {
            this.socket.emit('chatMessage', e.detail);
        });
    }

    update(dt) {
        // Any network smoothing logic could go here
    }

    sendUpdate(frog) {
        if (!frog.body) return;

        // Improve: Only send if changed significantly or at fixed interval (tick rate)
        this.socket.emit('playerMove', {
            x: frog.body.position.x,
            y: frog.body.position.y,
            z: frog.body.position.z,
            qx: frog.mesh.quaternion.x,
            qy: frog.mesh.quaternion.y,
            qz: frog.mesh.quaternion.z,
            qw: frog.mesh.quaternion.w
        });
    }
}
