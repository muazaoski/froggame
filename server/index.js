const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

// Serve static files from dist folder (for production/ngrok)
app.use(express.static(path.join(__dirname, '../dist')));

// SPA fallback
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const players = {};

// Ball state - managed by server
let ballState = {
    x: 0, y: 30, z: 0,
    qx: 0, qy: 0, qz: 0, qw: 1,
    vx: 0, vy: 0, vz: 0
};
let ballAuthority = null; // Socket ID of the player controlling ball physics

io.on('connection', (socket) => {
    console.log('Player connected (waiting for join):', socket.id);

    // Wait for player to send name and color
    socket.on('joinGame', (userData) => {
        console.log(`Player ${socket.id} joining as ${userData.name}`);

        // Send current players to new player FIRST (before adding them)
        socket.emit('currentPlayers', players);

        // Send current ball state to new player
        socket.emit('ballSync', ballState);

        // If no ball authority, make this player the authority
        if (!ballAuthority || !players[ballAuthority]) {
            ballAuthority = socket.id;
            socket.emit('ballAuthority', true);
            console.log(`Ball authority assigned to ${socket.id}`);
        }

        // Initialize new player AFTER sending current players
        players[socket.id] = {
            x: (Math.random() - 0.5) * 10,
            y: 5,
            z: (Math.random() - 0.5) * 10,
            qx: 0, qy: 0, qz: 0, qw: 1,
            color: userData.color || '#' + Math.floor(Math.random() * 16777215).toString(16),
            name: userData.name || `Frog ${socket.id.substr(0, 4)}`
        };

        // Send the new player's OWN data to them so they can create their local frog
        socket.emit('selfJoined', {
            id: socket.id,
            ...players[socket.id]
        });

        // Broadcast new player to others
        socket.broadcast.emit('newPlayer', {
            id: socket.id,
            ...players[socket.id]
        });
    });

    socket.on('playerMove', (data) => {
        if (players[socket.id]) {
            // Position and rotation
            players[socket.id].x = data.x;
            players[socket.id].y = data.y;
            players[socket.id].z = data.z;
            players[socket.id].qx = data.qx;
            players[socket.id].qy = data.qy;
            players[socket.id].qz = data.qz;
            players[socket.id].qw = data.qw;

            // Velocity
            players[socket.id].vx = data.vx;
            players[socket.id].vy = data.vy;
            players[socket.id].vz = data.vz;

            // Look target
            players[socket.id].lookX = data.lookX;
            players[socket.id].lookY = data.lookY;
            players[socket.id].lookZ = data.lookZ;

            // State flags
            players[socket.id].isGrounded = data.isGrounded;
            players[socket.id].isTalking = data.isTalking;
            players[socket.id].isPunching = data.isPunching;
            players[socket.id].punchProgress = data.punchProgress;

            socket.broadcast.emit('playerMoved', {
                id: socket.id,
                ...players[socket.id]
            });
        }
    });

    // Combat Events
    socket.on('playerPunch', () => {
        socket.broadcast.emit('playerPunched', socket.id);
    });

    socket.on('playerHit', (data) => {
        io.emit('playerDamaged', data); // Broadcast to everyone including sender (confirms hit)
    });

    socket.on('playerDied', (id) => {
        socket.broadcast.emit('playerDied', id);
    });

    socket.on('playerRespawn', (id) => {
        socket.broadcast.emit('playerRespawn', id);
    });

    socket.on('chatMessage', (msg) => {
        io.emit('chatMessage', {
            id: socket.id,
            text: msg
        });
    });

    // Ball kick - kicker becomes authority and broadcasts
    socket.on('ballKick', (state) => {
        ballState = state;
        ballAuthority = socket.id;
        socket.broadcast.emit('ballKicked', state);
    });

    // Continuous ball sync from authority
    socket.on('ballUpdate', (state) => {
        if (socket.id === ballAuthority) {
            ballState = state;
            socket.broadcast.emit('ballSync', state);
        }
    });

    // Ping request - respond immediately for latency measurement
    socket.on('ping_request', () => {
        socket.emit('pong_response');
    });

    // Player shares their ping with server
    socket.on('share_ping', (ping) => {
        if (players[socket.id]) {
            players[socket.id].ping = ping;
        }
    });

    // Broadcast all players' pings periodically
    const pingBroadcastInterval = setInterval(() => {
        const pings = {};
        for (const id in players) {
            pings[id] = players[id].ping || 0;
        }
        socket.emit('all_pings', pings);
    }, 2000);

    socket.on('disconnect', () => {
        clearInterval(pingBroadcastInterval);
        console.log('Player disconnected:', socket.id);
        delete players[socket.id];
        io.emit('playerDisconnected', socket.id);

        // If ball authority disconnected, reassign to another player
        if (socket.id === ballAuthority) {
            const remainingPlayers = Object.keys(players);
            if (remainingPlayers.length > 0) {
                ballAuthority = remainingPlayers[0];
                io.to(ballAuthority).emit('ballAuthority', true);
                console.log(`Ball authority transferred to ${ballAuthority}`);
            } else {
                ballAuthority = null;
                // Reset ball for next player
                ballState = { x: 0, y: 30, z: 0, qx: 0, qy: 0, qz: 0, qw: 1, vx: 0, vy: 0, vz: 0 };
            }
        }
    });
});

const PORT = 3000;
httpServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
