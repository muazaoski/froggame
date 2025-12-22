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
const { ServerPhysics, Config } = require('./physics');

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

// Initialize server-authoritative physics with death callback
const serverPhysics = new ServerPhysics(io, {
    onPlayerDeath: (victimId, killerId) => {
        // Track kills/deaths for authenticated users
        auth.recordDeath(victimId);

        // Award XP to killer if authenticated
        console.log(`💀 [Physics] Death event: victim=${victimId}, killer=${killerId}`);
        if (killerId && players[killerId]) {
            auth.recordKill(killerId);
            const killerUserId = auth.getUserId(killerId);
            console.log(`  Killer userId: ${killerUserId}`);
            if (killerUserId) {
                const result = db.addXP(killerUserId, 25); // 25 XP per kill
                console.log(`  XP result:`, result);
                if (result) {
                    // Notify killer of XP gain
                    io.to(killerId).emit('xpGained', {
                        amount: 25,
                        level: result.level,
                        xp: result.xp,
                        xpToNext: result.level * 100
                    });
                    console.log(`  ⭐ XP awarded to ${players[killerId]?.name}: +25 XP (Level ${result.level})`);
                }
            }
        }
    }
});
serverPhysics.startSimulation();
console.log('⚔️  Combat System: Client-Authoritative Hit Registration Active');

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
    x: (Math.random() - 0.5) * 50, // -25 to 25
    y: 30,
    z: (Math.random() - 0.5) * 50, // -25 to 25
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
        if (!userId) {
            if (callback) callback({ success: false, error: 'Not logged in' });
            return;
        }

        const result = db.acceptFriendRequest(userId, parseInt(requesterId));

        // Notify requester if online
        const requesterSocketId = auth.getSocketId(parseInt(requesterId));
        if (requesterSocketId) {
            io.to(requesterSocketId).emit('friendRequestAccepted', {
                by: db.getPublicProfile(userId)
            });
        }

        if (callback) callback(result);

        // Refresh the friend lists for both users
        socket.emit('friendList', db.getFriends(userId).map(f => ({
            ...f,
            online: auth.isOnline(f.id)
        })));
        socket.emit('friendRequests', db.getPendingRequests(userId));
    });

    // Decline friend request
    socket.on('declineFriend', (requesterId) => {
        const userId = auth.getUserId(socket.id);
        if (!userId) return;

        db.removeFriend(userId, parseInt(requesterId));

        // Refresh requests
        socket.emit('friendRequests', db.getPendingRequests(userId));
    });

    // Remove friend
    socket.on('removeFriend', (friendId) => {
        const userId = auth.getUserId(socket.id);
        if (!userId) return;

        try {
            db.removeFriend(userId, parseInt(friendId));

            // Refresh friend list
            const friends = db.getFriends(userId) || [];
            socket.emit('friendList', friends.map(f => ({
                ...f,
                online: auth.isOnline(f.id)
            })));
        } catch (error) {
            console.error('Error removing friend:', error);
            socket.emit('friendList', []); // Send empty list on error
        }
    });

    // Get friends list (emit-based for new UI)
    socket.on('getFriends', (callback) => {
        const userId = auth.getUserId(socket.id);
        if (!userId) {
            if (typeof callback === 'function') {
                return callback({ success: false, error: 'Not logged in' });
            }
            socket.emit('friendList', []);
            return;
        }

        const friends = db.getFriends(userId);

        // Add online status
        friends.forEach(f => f.online = auth.isOnline(f.id));

        // Support both callback and emit patterns
        if (typeof callback === 'function') {
            const pending = db.getPendingRequests(userId);
            const sent = db.getSentRequests(userId);
            callback({ success: true, friends, pending, sent });
        } else {
            socket.emit('friendList', friends);
        }
    });

    // Get user profile by user ID
    socket.on('getProfile', (userId, callback) => {
        if (typeof callback !== 'function') return;

        const profile = db.getPublicProfile(parseInt(userId));
        if (profile) {
            callback(profile);
        } else {
            callback(null);
        }
    });

    // Get user profile by socket ID (for in-game players)
    socket.on('getProfileBySocket', (targetSocketId, callback) => {
        if (typeof callback !== 'function') return;

        console.log(`📡 getProfileBySocket request for: ${targetSocketId}`);

        // Try to find User ID from various sources
        let targetUserId = auth.getUserId(targetSocketId);

        // Fallback: Check if the player exists in game state and has a userId associated
        if (!targetUserId && players[targetSocketId] && players[targetSocketId].userId) {
            targetUserId = players[targetSocketId].userId;
            console.log(`   - Recovered UserID ${targetUserId} from players memory cache`);
        }

        if (!targetUserId) {
            console.log(`   - Player ${targetSocketId} resolved as GUEST`);
            // Player is a guest - return basic info from players object
            const player = players[targetSocketId];
            if (player) {
                callback({
                    id: null,
                    username: player.name,
                    level: player.level || 1,
                    bio: player.bio || '',
                    badges: player.badges || []
                });
            } else {
                callback(null);
            }
            return;
        }

        // Authenticated player - get full profile from DB (Source of Truth)
        const profile = db.getPublicProfile(targetUserId);
        console.log(`   - Player ${targetSocketId} is AUTHENTICATED (UID: ${targetUserId})`);

        // Ensure badges are an array (DB returns array, but just to be safe)
        if (profile && !Array.isArray(profile.badges)) {
            try {
                profile.badges = JSON.parse(profile.badges || '[]');
            } catch (e) {
                profile.badges = [];
            }
        }

        callback(profile);
    });

    // Get friend requests (emit-based for new UI)
    socket.on('getFriendRequests', () => {
        const userId = auth.getUserId(socket.id);
        if (!userId) {
            socket.emit('friendRequests', []);
            return;
        }

        const pending = db.getPendingRequests(userId);
        socket.emit('friendRequests', pending);
    });

    // Check if a player is friends with another (by socket ID)
    socket.on('checkFriendship', (targetSocketId, callback) => {
        if (typeof callback !== 'function') return;

        const userId = auth.getUserId(socket.id);
        if (!userId) return callback({ isFriend: false });

        // Get target's user ID from their socket
        const targetUserId = auth.getUserId(targetSocketId);
        if (!targetUserId) return callback({ isFriend: false });

        // Check if they're friends
        const friends = db.getFriends(userId);
        const isFriend = friends.some(f => f.id === targetUserId);
        callback({ isFriend });
    });

    // === ACCOUNT SYSTEM: Update Profile ===
    socket.on('updateProfile', (data) => {
        const userId = auth.getUserId(socket.id);
        if (!userId) return;

        const { color, bio, badges } = data;

        // Update color in database
        if (color) {
            db.updateColor(userId, color);
        }

        // Update bio in database
        if (bio !== undefined) {
            db.updateBio(userId, bio);
        }

        // Update badges in database
        if (badges !== undefined) {
            db.updateBadges(userId, badges);
        }

        // Update the player's data in the current session
        if (players[socket.id]) {
            if (color) {
                players[socket.id].color = color;
                // Broadcast color change to other players
                socket.broadcast.emit('playerColorChanged', {
                    id: socket.id,
                    color: color
                });
            }
            if (bio !== undefined || badges !== undefined) {
                if (bio !== undefined) players[socket.id].bio = bio;
                if (badges !== undefined) players[socket.id].badges = badges;

                // Broadcast profile updates to ALL players (including sender to sync local cache)
                io.emit('playerProfileUpdated', {
                    id: socket.id,
                    bio: players[socket.id].bio,
                    badges: players[socket.id].badges
                });
            }
        }

        console.log(`Profile updated for user ${userId}: color=${color}, bio=${bio?.substring(0, 20)}..., badges=${badges?.length || 0}`);
    });

    // === MESSAGING SYSTEM ===
    socket.on('sendDM', (data) => {
        const userId = auth.getUserId(socket.id);
        if (!userId) return socket.emit('dmError', 'Not logged in');

        const { friendId, content } = data;
        if (!friendId || !content) return socket.emit('dmError', 'Invalid message');

        const result = db.sendMessage(userId, parseInt(friendId), content);
        if (result.success) {
            const sender = db.getPublicProfile(userId);
            const message = {
                id: result.messageId,
                sender_id: userId,
                sender_name: sender.username,
                sender_color: sender.color,
                content: content.trim(),
                created_at: new Date().toISOString()
            };

            // Send back to sender for confirmation
            socket.emit('dmSent', message);

            // Send to recipient if online
            const recipientSocketId = auth.getSocketId(parseInt(friendId));
            if (recipientSocketId) {
                io.to(recipientSocketId).emit('dmReceived', message);
            }
        } else {
            socket.emit('dmError', result.error);
        }
    });

    socket.on('getMessages', (friendId) => {
        const userId = auth.getUserId(socket.id);
        if (!userId) return socket.emit('messageHistory', []);

        const messages = db.getMessages(userId, parseInt(friendId));
        // Mark messages as read
        db.markMessagesRead(userId, parseInt(friendId));
        socket.emit('messageHistory', messages.reverse()); // oldest first
    });

    socket.on('getUnreadDMs', () => {
        const userId = auth.getUserId(socket.id);
        if (!userId) {
            socket.emit('unreadDMs', { total: 0, byFriend: [] });
            return;
        }

        const total = db.getUnreadCount(userId);
        const byFriend = db.getUnreadByFriend(userId);
        socket.emit('unreadDMs', { total, byFriend });
    });

    socket.on('markDMRead', (friendId) => {
        const userId = auth.getUserId(socket.id);
        if (!userId) return;
        db.markMessagesRead(userId, parseInt(friendId));
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
                level: profile.level || 1,
                xp: profile.xp || 0,
                bio: profile.bio || '',
                badges: profile.badges || [],
                totalPlaytime: profile.totalPlaytime,
                userId: userId
            };
            console.log(`Player ${socket.id} joining as ${playerData.name} (authenticated, Level ${playerData.level})`);
        } else {
            // Guest user
            playerData = {
                name: userData.name || `Frog ${socket.id.substr(0, 4)}`,
                color: userData.color || '#' + Math.floor(Math.random() * 16777215).toString(16),
                flies: 0,
                kills: 0,
                deaths: 0,
                level: 1,
                xp: 0,
                bio: '',
                badges: [],
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
            level: playerData.level,
            bio: playerData.bio,
            badges: playerData.badges,
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
                level: playerData.level,
                xp: playerData.xp,
                xpToNext: playerData.level * 100,
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
            // Validate position with server physics (speed hack detection)
            const valid = serverPhysics.updatePlayerPosition(socket.id, {
                x: data.x,
                y: data.y,
                z: data.z,
                vx: data.vx,
                vy: data.vy,
                vz: data.vz,
                rotation: data.facingAngle || 0
            });

            if (!valid) {
                // Rejected - don't relay invalid positions
                return;
            }

            // Update local player cache
            players[socket.id].x = data.x;
            players[socket.id].y = data.y;
            players[socket.id].z = data.z;
            players[socket.id].qx = data.qx;
            players[socket.id].qy = data.qy;
            players[socket.id].qz = data.qz;
            players[socket.id].qw = data.qw;
            players[socket.id].vx = data.vx;
            players[socket.id].vy = data.vy;
            players[socket.id].vz = data.vz;
            players[socket.id].lookX = data.lookX;
            players[socket.id].lookY = data.lookY;
            players[socket.id].lookZ = data.lookZ;
            players[socket.id].isGrounded = data.isGrounded;
            players[socket.id].isTalking = data.isTalking;
            players[socket.id].isPunching = data.isPunching;
            players[socket.id].punchProgress = data.punchProgress;

            // Update activity tracking
            if (playerActivity[socket.id]) {
                const wasAFK = playerActivity[socket.id].isAFK;
                playerActivity[socket.id].lastUpdate = Date.now();
                playerActivity[socket.id].isAFK = false;

                if (wasAFK) {
                    io.emit('playerAFKStatus', { id: socket.id, isAFK: false });
                }
            }

            // Relay to other players (client-authoritative movement)
            socket.broadcast.emit('playerMoved', {
                id: socket.id,
                ...players[socket.id]
            });
        }
    });

    // === CLIENT-AUTHORITATIVE MOVEMENT ===
    // Client sends positions, server validates and relays
    // Server does NOT simulate movement physics!
    socket.on('playerInput', (inputData) => {
        // Just update activity tracking - movement comes via playerMove
        if (playerActivity[socket.id]) {
            const wasAFK = playerActivity[socket.id].isAFK;
            playerActivity[socket.id].lastUpdate = Date.now();
            playerActivity[socket.id].isAFK = false;

            if (wasAFK) {
                io.emit('playerAFKStatus', { id: socket.id, isAFK: false });
            }
        }
    });

    // === COMBAT - SERVER AUTHORITATIVE ===
    // === COMBAT - CLIENT AUTHORITATIVE (validated) ===
    socket.on('playerPunch', () => {
        // Just broadcast animation - hits are handled via playerHit
        // This prevents double damage and issues with server-side lag
        socket.broadcast.emit('playerPunched', socket.id);
    });

    // Handle client-reported hit
    socket.on('playerHit', (data) => {
        const attackerId = socket.id;
        const targetId = data.targetId;
        const damage = data.damage;

        // Validation: Verify existence and distance
        const attacker = players[attackerId];
        const target = players[targetId];

        if (!attacker || !target) return;

        // Simple distance check (generous to account for lag)
        const dx = target.x - attacker.x;
        const dy = target.y - attacker.y;
        const dz = target.z - attacker.z;
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

        // Allow hits up to 6 units away (generous lag compensation)
        // Normal range is ~2.5, but clients may see players closer than server does
        if (distance > 6.0) {
            console.log(`⚠️ rejected hit from ${attacker.name}: distance ${distance.toFixed(1)} > 6.0`);
            return;
        }

        // Update Server Physics State (Authoritative Health)
        const physicsPlayer = serverPhysics.players[targetId];
        if (physicsPlayer) {
            physicsPlayer.health -= damage;
            const maxHP = (Config && Config.maxHealth) ? Config.maxHealth : 200;
            console.log(`🥊 ${attacker.name} hit ${target.name} (-${damage}), HP: ${physicsPlayer.health}/${maxHP}`);

            // Propagate death if killed
            if (physicsPlayer.health <= 0) {
                serverPhysics.killPlayer(targetId, attackerId);
            }
        }

        // Broadcast damage to all clients (visual feedback)
        io.emit('playerDamaged', {
            ...data,
            attackerId: attackerId
        });

        // Send knockback impulse to target
        io.to(targetId).emit('playerKnockback', {
            id: targetId,
            velocity: data.knockback
        });
    });

    // === DEATH & RESPAWN (Authority Delegation) ===
    socket.on('playerDied', (data) => {
        const victimId = typeof data === 'object' ? data.id : data;
        const killerId = typeof data === 'object' ? data.killerId : null;

        // Delegate to physics engine - this will trigger XP, broadcast, and respawn
        if (serverPhysics.players[victimId]) {
            serverPhysics.killPlayer(victimId, killerId);
        }
    });

    socket.on('playerRespawn', (id) => {
        // Just relay - physics engine handles the actual state reset
        socket.broadcast.emit('playerRespawn', id);
    });

    // Tongue pull event - relay to target player
    socket.on('tongueResult', (data) => {
        if (data.targetId && data.type === 'pull') {
            // Send the pull force to the target player
            io.to(data.targetId).emit('tonguePulled', {
                sourceId: data.sourceId,
                pullForce: 8 // Force magnitude for the pull
            });
        }
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

            // AUTO-RESET: if ball falls too low
            if (state.y < -20) {
                ballState = {
                    x: (Math.random() - 0.5) * 50,
                    y: 30,
                    z: (Math.random() - 0.5) * 50,
                    qx: 0, qy: 0, qz: 0, qw: 1,
                    vx: 0, vy: 0, vz: 0
                };
                io.emit('ballSync', ballState);
            }
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
