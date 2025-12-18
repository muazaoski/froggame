const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const path = require('path');
const fs = require('fs');

// Load environment variables from .env file
require('dotenv').config();

// Account system modules
const db = require('./database');
const auth = require('./auth');
const { ServerPhysics } = require('./physics');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

// Telegram notification config (from .env)
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '';
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '';

// Send Telegram notification
async function sendTelegramNotification(message) {
    try {
        const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'HTML'
            })
        });
        if (!response.ok) {
            console.error('Telegram notification failed:', await response.text());
        }
    } catch (error) {
        console.error('Telegram notification error:', error.message);
    }
}

// Format duration from milliseconds
function formatDuration(ms) {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    if (hours > 0) {
        return `${hours}h ${minutes % 60}m`;
    } else if (minutes > 0) {
        return `${minutes}m ${seconds % 60}s`;
    } else {
        return `${seconds}s`;
    }
}

// Save players to JSON file for /frogusers command
function savePlayersToFile() {
    const playerData = {};
    for (const id in players) {
        playerData[id] = {
            name: players[id].name,
            color: players[id].color,
            joinTime: players[id].joinTime,
            playtime: formatDuration(Date.now() - players[id].joinTime)
        };
    }
    try {
        fs.writeFileSync(path.join(__dirname, 'players.json'), JSON.stringify(playerData, null, 2));
    } catch (error) {
        console.error('Failed to save players file:', error.message);
    }
}

// API endpoint for player list
app.get('/api/players', (req, res) => {
    const playerList = [];
    for (const id in players) {
        playerList.push({
            id: id,
            name: players[id].name,
            color: players[id].color,
            joinTime: players[id].joinTime,
            playtime: formatDuration(Date.now() - players[id].joinTime)
        });
    }
    res.json({
        count: playerList.length,
        players: playerList
    });
});

// Serve static files from dist folder (for production/ngrok)
app.use(express.static(path.join(__dirname, '../dist')));

// SPA fallback - only for non-asset routes (Express 5 compatible)
app.use((req, res, next) => {
    // Skip if requesting a file with extension (static asset)
    if (req.path.includes('.')) {
        return next();
    }
    // Only for GET requests
    if (req.method !== 'GET') {
        return next();
    }
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const players = {};

// Initialize server-authoritative physics
const serverPhysics = new ServerPhysics(io);
serverPhysics.startSimulation();

// AFK Tracking - mark players as AFK after 3 minutes of no movement
const AFK_TIMEOUT_MS = 3 * 60 * 1000; // 3 minutes
const playerActivity = {}; // socketId -> { lastUpdate: timestamp, isAFK: boolean }
const respawnTimers = {}; // socketId -> timeout for server-side respawn

// Check for AFK players every 10 seconds
setInterval(() => {
    const now = Date.now();
    for (const socketId in playerActivity) {
        const activity = playerActivity[socketId];
        const timeSinceUpdate = now - activity.lastUpdate;
        const wasAFK = activity.isAFK;

        // Mark as AFK if no update for 3 minutes
        activity.isAFK = timeSinceUpdate > AFK_TIMEOUT_MS;

        // Broadcast AFK status change
        if (activity.isAFK !== wasAFK && players[socketId]) {
            io.emit('playerAFKStatus', { id: socketId, isAFK: activity.isAFK });
            if (activity.isAFK) {
                console.log(`💤 Player ${players[socketId]?.name || socketId} is now AFK`);
            } else {
                console.log(`⚡ Player ${players[socketId]?.name || socketId} is back from AFK`);
            }
        }
    }
}, 10000);

// Ball state - managed by server
let ballState = {
    x: 0, y: 30, z: 0,
    qx: 0, qy: 0, qz: 0, qw: 1,
    vx: 0, vy: 0, vz: 0
};
let ballAuthority = null; // Socket ID of the player controlling ball physics

io.on('connection', (socket) => {
    console.log('Player connected (waiting for join):', socket.id);

    // === SPECTATOR MODE: Get current players without joining ===
    socket.on('spectate', () => {
        socket.emit('currentPlayers', players);
        socket.emit('ballSync', ballState);
    });

    // === ACCOUNT SYSTEM: Registration ===
    socket.on('register', async (data, callback) => {
        const { username, password, color } = data;
        const result = await auth.register(username, password, color);

        if (result.success) {
            // Auto-login after registration
            auth.createSession(socket.id, result.user.id);
        }

        callback(result);
    });

    // === ACCOUNT SYSTEM: Login ===
    socket.on('login', async (data, callback) => {
        const { username, password } = data;
        const result = await auth.login(username, password);

        if (result.success) {
            const oldSocketId = auth.createSession(socket.id, result.user.id);

            // Kick old session if user was already logged in
            if (oldSocketId) {
                const oldSocket = io.sockets.sockets.get(oldSocketId);
                if (oldSocket) {
                    oldSocket.emit('kicked', 'You logged in from another location');
                    // Remove their frog
                    delete players[oldSocketId];
                    io.emit('playerDisconnected', oldSocketId);
                    oldSocket.disconnect(true);
                }
            }
        }

        callback(result);
    });

    // === ACCOUNT SYSTEM: Logout ===
    socket.on('logout', () => {
        auth.endSession(socket.id);
        console.log(`User logged out: ${socket.id}`);
    });

    // === ACCOUNT SYSTEM: Save progress ===
    socket.on('saveProgress', (data) => {
        const userId = auth.getUserId(socket.id);
        if (userId && data.flies !== undefined) {
            auth.saveFlies(socket.id, data.flies);
        }
    });

    // === ACCOUNT SYSTEM: Update color ===
    socket.on('updateColor', (color) => {
        auth.updateColor(socket.id, color);
    });

    // === ACCOUNT SYSTEM: Friends ===
    socket.on('sendFriendRequest', (targetUsername, callback) => {
        const userId = auth.getUserId(socket.id);
        if (!userId) return callback({ success: false, error: 'Not logged in' });

        const targetUser = db.getUserByUsername(targetUsername);
        if (!targetUser) return callback({ success: false, error: 'User not found' });

        const result = db.sendFriendRequest(userId, targetUser.id);

        // Notify target if online
        const targetSocketId = auth.getSocketId(targetUser.id);
        if (targetSocketId) {
            io.to(targetSocketId).emit('friendRequestReceived', {
                from: db.getPublicProfile(userId)
            });
        }

        callback(result);
    });

    socket.on('acceptFriendRequest', (requesterId, callback) => {
        const userId = auth.getUserId(socket.id);
        if (!userId) return callback({ success: false, error: 'Not logged in' });

        const result = db.acceptFriendRequest(userId, requesterId);

        // Notify requester if online
        const requesterSocketId = auth.getSocketId(requesterId);
        if (requesterSocketId) {
            io.to(requesterSocketId).emit('friendRequestAccepted', {
                by: db.getPublicProfile(userId)
            });
        }

        callback(result);
    });

    socket.on('getFriends', (callback) => {
        const userId = auth.getUserId(socket.id);
        if (!userId) return callback({ success: false, error: 'Not logged in' });

        const friends = db.getFriends(userId);
        const pending = db.getPendingRequests(userId);
        const sent = db.getSentRequests(userId);

        // Add online status
        friends.forEach(f => f.online = auth.isOnline(f.id));

        callback({ success: true, friends, pending, sent });
    });

    socket.on('removeFriend', (friendId, callback) => {
        const userId = auth.getUserId(socket.id);
        if (!userId) return callback({ success: false, error: 'Not logged in' });

        const result = db.removeFriend(userId, friendId);
        callback(result);
    });

    // Wait for player to send name and color (supports both guest and authenticated)
    socket.on('joinGame', (userData) => {
        // Check if user is authenticated
        const userId = auth.getUserId(socket.id);
        let playerData;

        if (userId) {
            // Authenticated user - use stored data
            const profile = db.getPublicProfile(userId);
            playerData = {
                name: profile.username,
                color: userData.color || profile.color, // Allow color override
                flies: profile.flies,
                kills: profile.kills,
                deaths: profile.deaths,
                totalPlaytime: profile.totalPlaytime,
                userId: userId
            };
            console.log(`Player ${socket.id} joining as ${playerData.name} (authenticated)`);
        } else {
            // Guest user
            playerData = {
                name: userData.name || `Frog ${socket.id.substr(0, 4)}`,
                color: userData.color || '#' + Math.floor(Math.random() * 16777215).toString(16),
                flies: 0,
                kills: 0,
                deaths: 0,
                userId: null
            };
            console.log(`Player ${socket.id} joining as ${playerData.name} (guest)`);
        }

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
            color: playerData.color,
            name: playerData.name,
            joinTime: Date.now(),
            flies: playerData.flies,
            userId: playerData.userId
        };

        // Add player to server physics
        serverPhysics.addPlayer(socket.id, {
            name: playerData.name,
            color: playerData.color
        });

        // Initialize activity tracking for AFK detection
        playerActivity[socket.id] = {
            lastUpdate: Date.now(),
            isAFK: false
        };

        // Send Telegram notification
        const playerName = players[socket.id].name;
        const playerCount = Object.keys(players).length;
        sendTelegramNotification(`🐸 <b>${playerName}</b> entered FrogAss\n👥 Players online: ${playerCount}`);
        savePlayersToFile();

        // Send the new player's OWN data to them so they can create their local frog
        socket.emit('selfJoined', {
            id: socket.id,
            ...players[socket.id],
            // Include account data for authenticated users
            accountData: playerData.userId ? {
                flies: playerData.flies,
                kills: playerData.kills,
                deaths: playerData.deaths,
                totalPlaytime: playerData.totalPlaytime
            } : null
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

            // Server physics now handles positions authoritatively

            // Update activity tracking for AFK detection
            if (playerActivity[socket.id]) {
                const wasAFK = playerActivity[socket.id].isAFK;
                playerActivity[socket.id].lastUpdate = Date.now();
                playerActivity[socket.id].isAFK = false;

                // If was AFK and now active, broadcast status change
                if (wasAFK) {
                    io.emit('playerAFKStatus', { id: socket.id, isAFK: false });
                    console.log(`⚡ Player ${players[socket.id]?.name || socket.id} is back from AFK`);
                }
            }

            socket.broadcast.emit('playerMoved', {
                id: socket.id,
                ...players[socket.id]
            });
        }
    });

    // === SERVER-AUTHORITATIVE PHYSICS ===
    // Client sends inputs, server handles ALL physics
    socket.on('playerInput', (inputData) => {
        // Update activity tracking
        if (playerActivity[socket.id]) {
            const wasAFK = playerActivity[socket.id].isAFK;
            playerActivity[socket.id].lastUpdate = Date.now();
            playerActivity[socket.id].isAFK = false;

            if (wasAFK) {
                io.emit('playerAFKStatus', { id: socket.id, isAFK: false });
            }
        }

        // Pass input to server physics (this is the key!)
        serverPhysics.handleInput(socket.id, inputData);
    });

    // Combat is now handled by server physics
    // Client just sends punch request, server handles hit detection
    socket.on('playerPunch', () => {
        // Legacy support - tell server physics about punch intent
        if (serverPhysics.players[socket.id]) {
            serverPhysics.players[socket.id].input.punch = true;
        }
    });

    // Legacy hit event - now mostly handled by server
    socket.on('playerHit', (data) => {
        // Server physics handles this now, but keep for compatibility
        io.emit('playerDamaged', data);
    });

    socket.on('playerDied', (id) => {
        socket.broadcast.emit('playerDied', id);

        // Track kills/deaths for authenticated users
        auth.recordDeath(socket.id);

        // Server-side respawn timer (works even if tab is inactive)
        // Clear any existing respawn timer
        if (respawnTimers[socket.id]) {
            clearTimeout(respawnTimers[socket.id]);
        }

        // Start server-side respawn timer (3 seconds)
        respawnTimers[socket.id] = setTimeout(() => {
            if (players[socket.id]) {
                // Server forces respawn
                io.emit('playerRespawn', socket.id);
                console.log(`⏰ Server-side respawn for ${players[socket.id]?.name || socket.id}`);
            }
            delete respawnTimers[socket.id];
        }, 3000);
    });

    socket.on('playerRespawn', (id) => {
        // Clear server-side timer since client respawned
        if (respawnTimers[socket.id]) {
            clearTimeout(respawnTimers[socket.id]);
            delete respawnTimers[socket.id];
        }
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

        // Save authenticated user stats before disconnecting
        auth.endSession(socket.id);

        // Get player info before deleting for notification
        const player = players[socket.id];
        if (player) {
            const playtime = formatDuration(Date.now() - player.joinTime);
            const playerName = player.name;
            const remainingCount = Object.keys(players).length - 1;
            sendTelegramNotification(`🐸 <b>${playerName}</b> left FrogAss (${playtime})\n👥 Players online: ${remainingCount}`);
        }

        delete players[socket.id];
        delete playerActivity[socket.id]; // Clean up AFK tracking
        serverPhysics.removePlayer(socket.id); // Clean up physics
        if (respawnTimers[socket.id]) {
            clearTimeout(respawnTimers[socket.id]);
            delete respawnTimers[socket.id];
        }
        savePlayersToFile();
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
