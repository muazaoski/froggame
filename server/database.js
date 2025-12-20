/**
 * Database module for FrogMultiplayer account system
 * Uses better-sqlite3 for synchronous SQLite operations
 */

const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

// Initialize database - use ./data directory for Docker volume persistence
const dataDir = path.join(__dirname, '..', 'data');
// Ensure data directory exists
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}
const dbPath = path.join(dataDir, 'frogass.db');
const db = new Database(dbPath);

// Enable WAL mode for better concurrency
db.pragma('journal_mode = WAL');

// Create tables if they don't exist
db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL COLLATE NOCASE,
        password_hash TEXT NOT NULL,
        color TEXT DEFAULT '#00ff00',
        flies INTEGER DEFAULT 0,
        total_playtime_ms INTEGER DEFAULT 0,
        kills INTEGER DEFAULT 0,
        deaths INTEGER DEFAULT 0,
        owned_cosmetics TEXT DEFAULT '[]',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        last_login DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS friends (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        friend_id INTEGER NOT NULL,
        status TEXT DEFAULT 'pending',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (friend_id) REFERENCES users(id),
        UNIQUE(user_id, friend_id)
    );

    CREATE INDEX IF NOT EXISTS idx_friends_user ON friends(user_id);
    CREATE INDEX IF NOT EXISTS idx_friends_friend ON friends(friend_id);
`);

console.log('📦 Database initialized at:', dbPath);

// Prepared statements for better performance
const statements = {
    // User operations
    createUser: db.prepare(`
        INSERT INTO users (username, password_hash, color)
        VALUES (?, ?, ?)
    `),

    getUserByUsername: db.prepare(`
        SELECT * FROM users WHERE username = ?
    `),

    getUserById: db.prepare(`
        SELECT * FROM users WHERE id = ?
    `),

    updateLastLogin: db.prepare(`
        UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE id = ?
    `),

    updateColor: db.prepare(`
        UPDATE users SET color = ? WHERE id = ?
    `),

    updateFlies: db.prepare(`
        UPDATE users SET flies = flies + ? WHERE id = ?
    `),

    setFlies: db.prepare(`
        UPDATE users SET flies = ? WHERE id = ?
    `),

    updateStats: db.prepare(`
        UPDATE users SET 
            total_playtime_ms = total_playtime_ms + ?,
            kills = kills + ?,
            deaths = deaths + ?
        WHERE id = ?
    `),

    updateCosmetics: db.prepare(`
        UPDATE users SET owned_cosmetics = ? WHERE id = ?
    `),

    // Friends operations
    sendFriendRequest: db.prepare(`
        INSERT OR IGNORE INTO friends (user_id, friend_id, status)
        VALUES (?, ?, 'pending')
    `),

    acceptFriendRequest: db.prepare(`
        UPDATE friends SET status = 'accepted' 
        WHERE user_id = ? AND friend_id = ? AND status = 'pending'
    `),

    removeFriend: db.prepare(`
        DELETE FROM friends 
        WHERE (user_id = ? AND friend_id = ?) OR (user_id = ? AND friend_id = ?)
    `),

    getFriends: db.prepare(`
        SELECT u.id, u.username, u.color, f.status
        FROM friends f
        JOIN users u ON (
            CASE 
                WHEN f.user_id = ? THEN u.id = f.friend_id
                ELSE u.id = f.user_id
            END
        )
        WHERE (f.user_id = ? OR f.friend_id = ?) AND f.status = 'accepted'
    `),

    getPendingRequests: db.prepare(`
        SELECT u.id, u.username, u.color
        FROM friends f
        JOIN users u ON u.id = f.user_id
        WHERE f.friend_id = ? AND f.status = 'pending'
    `),

    getSentRequests: db.prepare(`
        SELECT u.id, u.username, u.color
        FROM friends f
        JOIN users u ON u.id = f.friend_id
        WHERE f.user_id = ? AND f.status = 'pending'
    `)
};

// Export database functions
module.exports = {
    // User management
    createUser: (username, passwordHash, color = '#00ff00') => {
        try {
            const result = statements.createUser.run(username, passwordHash, color);
            return { success: true, userId: result.lastInsertRowid };
        } catch (error) {
            if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
                return { success: false, error: 'Username already exists' };
            }
            throw error;
        }
    },

    getUserByUsername: (username) => {
        return statements.getUserByUsername.get(username);
    },

    getUserById: (id) => {
        return statements.getUserById.get(id);
    },

    updateLastLogin: (userId) => {
        statements.updateLastLogin.run(userId);
    },

    updateColor: (userId, color) => {
        statements.updateColor.run(color, userId);
    },

    // Currency
    addFlies: (userId, amount) => {
        statements.updateFlies.run(amount, userId);
    },

    setFlies: (userId, amount) => {
        statements.setFlies.run(amount, userId);
    },

    // Stats
    updateStats: (userId, playtimeMs, kills, deaths) => {
        statements.updateStats.run(playtimeMs, kills, deaths, userId);
    },

    // Cosmetics
    getCosmetics: (userId) => {
        const user = statements.getUserById.get(userId);
        return user ? JSON.parse(user.owned_cosmetics) : [];
    },

    unlockCosmetic: (userId, cosmeticId) => {
        const user = statements.getUserById.get(userId);
        if (!user) return false;

        const cosmetics = JSON.parse(user.owned_cosmetics);
        if (!cosmetics.includes(cosmeticId)) {
            cosmetics.push(cosmeticId);
            statements.updateCosmetics.run(JSON.stringify(cosmetics), userId);
        }
        return true;
    },

    // Friends
    sendFriendRequest: (userId, friendId) => {
        if (userId === friendId) return { success: false, error: 'Cannot add yourself' };
        try {
            statements.sendFriendRequest.run(userId, friendId);
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },

    acceptFriendRequest: (userId, requesterId) => {
        // Accept the incoming request
        const result = statements.acceptFriendRequest.run(requesterId, userId);
        if (result.changes > 0) {
            // Create reverse friendship
            statements.sendFriendRequest.run(userId, requesterId);
            statements.acceptFriendRequest.run(userId, requesterId);
            return { success: true };
        }
        return { success: false, error: 'No pending request found' };
    },

    removeFriend: (userId, friendId) => {
        statements.removeFriend.run(userId, friendId, friendId, userId);
        return { success: true };
    },

    getFriends: (userId) => {
        return statements.getFriends.all(userId, userId, userId);
    },

    getPendingRequests: (userId) => {
        return statements.getPendingRequests.all(userId);
    },

    getSentRequests: (userId) => {
        return statements.getSentRequests.all(userId);
    },

    // Get user public profile (safe to send to clients)
    getPublicProfile: (userId) => {
        const user = statements.getUserById.get(userId);
        if (!user) return null;

        return {
            id: user.id,
            username: user.username,
            color: user.color,
            flies: user.flies,
            totalPlaytime: user.total_playtime_ms,
            kills: user.kills,
            deaths: user.deaths,
            cosmetics: JSON.parse(user.owned_cosmetics),
            createdAt: user.created_at
        };
    },

    // Close database (for graceful shutdown)
    close: () => {
        db.close();
    }
};
