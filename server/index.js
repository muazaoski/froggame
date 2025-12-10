const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

const players = {};

io.on('connection', (socket) => {
    console.log('Player connected:', socket.id);

    // Initialize new player with random position and color
    players[socket.id] = {
        x: (Math.random() - 0.5) * 10,
        y: 5,
        z: (Math.random() - 0.5) * 10,
        qx: 0, qy: 0, qz: 0, qw: 1, // Quaternion
        color: '#' + Math.floor(Math.random() * 16777215).toString(16)
    };

    // Send current players to new player
    socket.emit('currentPlayers', players);

    // Broadcast new player to others
    socket.broadcast.emit('newPlayer', {
        id: socket.id,
        ...players[socket.id]
    });

    socket.on('playerMove', (data) => {
        if (players[socket.id]) {
            players[socket.id].x = data.x;
            players[socket.id].y = data.y;
            players[socket.id].z = data.z;
            players[socket.id].qx = data.qx;
            players[socket.id].qy = data.qy;
            players[socket.id].qz = data.qz;
            players[socket.id].qw = data.qw;

            socket.broadcast.emit('playerMoved', {
                id: socket.id,
                ...players[socket.id]
            });
        }
    });

    socket.on('chatMessage', (msg) => {
        io.emit('chatMessage', {
            id: socket.id,
            text: msg
        });
    });

    socket.on('disconnect', () => {
        console.log('Player disconnected:', socket.id);
        delete players[socket.id];
        io.emit('playerDisconnected', socket.id);
    });
});

const PORT = 3000;
httpServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
