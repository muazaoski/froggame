/**
 * Authentication module for FrogMultiplayer
 * Handles user registration, login, and session management
 */

const bcrypt = require('bcrypt');
const db = require('./database');

const SALT_ROUNDS = 10;

// Active sessions: socketId -> userId mapping
const sessions = new Map();

// Track session start times for playtime calculation
const sessionStartTimes = new Map();

// Track session stats (kills/deaths during this session)
const sessionStats = new Map();

module.exports = {
    /**
     * Register a new user
     * @param {string} username 
     * @param {string} password 
     * @param {string} color 
     * @returns {Promise<{success: boolean, error?: string, user?: object}>}
     */
    async register(username, password, color = '#00ff00') {
        // Validate input
        if (!username || username.length < 3 || username.length > 20) {
            return { success: false, error: 'Username must be 3-20 characters' };
        }

        if (!password || password.length < 4) {
            return { success: false, error: 'Password must be at least 4 characters' };
        }

        // Only allow alphanumeric and underscore
        if (!/^[a-zA-Z0-9_]+$/.test(username)) {
            return { success: false, error: 'Username can only contain letters, numbers, and underscores' };
        }

        try {
            // Hash password
            const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

            // Create user
            const result = db.createUser(username, passwordHash, color);

            if (!result.success) {
                return { success: false, error: result.error };
            }

            // Get the created user
            const user = db.getPublicProfile(result.userId);

            console.log(`✅ New user registered: ${username} (ID: ${result.userId})`);

            return { success: true, user };
        } catch (error) {
            console.error('Registration error:', error);
            return { success: false, error: 'Registration failed' };
        }
    },

    /**
     * Login a user
     * @param {string} username 
     * @param {string} password 
     * @returns {Promise<{success: boolean, error?: string, user?: object}>}
     */
    async login(username, password) {
        if (!username || !password) {
            return { success: false, error: 'Username and password required' };
        }

        try {
            // Get user from database
            const user = db.getUserByUsername(username);

            if (!user) {
                return { success: false, error: 'Invalid username or password' };
            }

            // Verify password
            const match = await bcrypt.compare(password, user.password_hash);

            if (!match) {
                return { success: false, error: 'Invalid username or password' };
            }

            // Update last login
            db.updateLastLogin(user.id);

            // Return public profile
            const profile = db.getPublicProfile(user.id);

            console.log(`🔓 User logged in: ${username} (ID: ${user.id})`);

            return { success: true, user: profile };
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, error: 'Login failed' };
        }
    },

    /**
     * Create a session for a socket
     * @param {string} socketId 
     * @param {number} userId 
     * @returns {string|null} Old socket ID if user was already logged in (to kick)
     */
    createSession(socketId, userId) {
        // Check if user is already logged in elsewhere
        let oldSocketId = null;
        for (const [existingSocketId, uid] of sessions) {
            if (uid === userId && existingSocketId !== socketId) {
                oldSocketId = existingSocketId;
                // End the old session first
                this.endSession(existingSocketId);
                console.log(`⚠️ User ${userId} was already logged in on socket ${existingSocketId}, kicking old session`);
                break;
            }
        }

        sessions.set(socketId, userId);
        sessionStartTimes.set(socketId, Date.now());
        sessionStats.set(socketId, { kills: 0, deaths: 0 });
        console.log(`📍 Session created: socket ${socketId} -> user ${userId}`);

        return oldSocketId;
    },

    /**
     * End a session and save stats
     * @param {string} socketId 
     */
    endSession(socketId) {
        const userId = sessions.get(socketId);

        if (userId) {
            // Calculate playtime
            const startTime = sessionStartTimes.get(socketId);
            const playtime = startTime ? Date.now() - startTime : 0;

            // Get session stats
            const stats = sessionStats.get(socketId) || { kills: 0, deaths: 0 };

            // Save to database
            db.updateStats(userId, playtime, stats.kills, stats.deaths);

            console.log(`📊 Session ended for user ${userId}: ${Math.floor(playtime / 1000)}s played, ${stats.kills}K/${stats.deaths}D`);
        }

        // Clean up
        sessions.delete(socketId);
        sessionStartTimes.delete(socketId);
        sessionStats.delete(socketId);
    },

    /**
     * Get user ID from socket
     * @param {string} socketId 
     * @returns {number|null}
     */
    getUserId(socketId) {
        return sessions.get(socketId) || null;
    },

    /**
     * Get socket ID from user ID
     * @param {number} userId 
     * @returns {string|null}
     */
    getSocketId(userId) {
        for (const [socketId, uid] of sessions) {
            if (uid === userId) return socketId;
        }
        return null;
    },

    /**
     * Check if user is online
     * @param {number} userId 
     * @returns {boolean}
     */
    isOnline(userId) {
        for (const uid of sessions.values()) {
            if (uid === userId) return true;
        }
        return false;
    },

    /**
     * Record a kill for the session
     * @param {string} socketId 
     */
    recordKill(socketId) {
        const stats = sessionStats.get(socketId);
        if (stats) stats.kills++;
    },

    /**
     * Record a death for the session
     * @param {string} socketId 
     */
    recordDeath(socketId) {
        const stats = sessionStats.get(socketId);
        if (stats) stats.deaths++;
    },

    /**
     * Save current flies count
     * @param {string} socketId 
     * @param {number} flies 
     */
    saveFlies(socketId, flies) {
        const userId = sessions.get(socketId);
        if (userId) {
            db.setFlies(userId, flies);
        }
    },

    /**
     * Update user color preference
     * @param {string} socketId 
     * @param {string} color 
     */
    updateColor(socketId, color) {
        const userId = sessions.get(socketId);
        if (userId) {
            db.updateColor(userId, color);
        }
    },

    /**
     * Get all online users with their user IDs
     * @returns {Map<string, number>}
     */
    getOnlineUsers() {
        return new Map(sessions);
    }
};
