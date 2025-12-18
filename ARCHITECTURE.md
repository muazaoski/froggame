# 🐸 Frog Multiplayer - Technical Architecture

## 📋 Table of Contents
1. [Game Overview](#game-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Client Architecture](#client-architecture)
5. [Server Architecture](#server-architecture)
6. [Networking Model](#networking-model)
7. [Physics System](#physics-system)
8. [Current Issues & Solutions](#current-issues--solutions)

---

## 🎮 Game Overview

**Frog Multiplayer** is a 3D multiplayer arena game where players control frogs that can:
- **Move** around a 3D environment with WASD controls
- **Jump** using physics-based movement
- **Punch** other players (combat with knockback)
- **Die and Respawn** when health reaches 0
- **Use Tongue** grapple mechanic
- **Ride Scooters** vehicle mechanic
- **Kick a Ball** physics-based ball

**Target:** Fun, casual multiplayer with responsive controls and fair gameplay.

---

## 🛠 Tech Stack

### Client (Browser)
| Technology | Purpose |
|------------|---------|
| **Three.js** | 3D rendering, models, lighting |
| **Cannon-ES** | Client-side physics simulation |
| **Socket.IO Client** | Real-time networking |
| **Vite** | Build tool, bundling |

### Server (Node.js)
| Technology | Purpose |
|------------|---------|
| **Express** | HTTP server, static files |
| **Socket.IO** | WebSocket communication |
| **Cannon-ES** | Server-side physics simulation |
| **SQLite (better-sqlite3)** | User accounts, stats |

### Deployment
| Technology | Purpose |
|------------|---------|
| **Docker** | Containerization |
| **Caddy** | Reverse proxy, auto HTTPS |
| **OVH VPS** | Hosting (Singapore, 4 vCPU, 8GB RAM) |

---

## 📁 Project Structure

```
frogmultiplayer/
├── src/                      # CLIENT-SIDE CODE (runs in browser)
│   ├── main.js               # Entry point, game loop
│   ├── World.js              # Scene, camera, environment
│   ├── Frog.js               # Player entity, physics, animations
│   ├── Network.js            # Socket.IO client, sync
│   ├── Input.js              # Keyboard/mouse handling
│   ├── Config.js             # Game constants (shared reference)
│   ├── Prediction.js         # Client-side prediction
│   └── VFX.js                # Visual effects
│
├── server/                   # SERVER-SIDE CODE (runs on VPS)
│   ├── index.js              # Express + Socket.IO server
│   ├── physics.js            # Server physics simulation
│   ├── auth.js               # Telegram authentication
│   └── database.js           # SQLite database
│
├── public/                   # Static assets
│   ├── models/               # 3D models (.glb)
│   └── song/                 # Audio files
│
├── dist/                     # Built client (Vite output)
├── Dockerfile                # Container build
├── docker-compose.yml        # Container orchestration
├── Caddyfile                 # Reverse proxy config
└── package.json              # Dependencies
```

---

## 🖥 Client Architecture

### Entry Point: `main.js`

```javascript
// Game loop runs at 60fps
function animate(time) {
    const dt = (time - lastTime) / 1000;
    
    // 1. Capture input
    input.update();
    
    // 2. Update local player physics
    world.localFrog.update(dt, input, world);
    
    // 3. Send input to server
    network.sendInput(input, cameraAngle);
    
    // 4. Render
    world.render();
    
    requestAnimationFrame(animate);
}
```

### Frog Entity: `Frog.js`

Each frog has:
- **Mesh** (Three.js) - Visual representation
- **Body** (Cannon-ES) - Physics simulation
- **State** - health, isDead, isPunching, etc.

```
Frog
├── mesh (THREE.Group)
│   ├── body model
│   ├── eyes
│   ├── legs
│   └── healthbar (CSS2D)
├── body (CANNON.Body)
│   ├── position {x, y, z}
│   ├── velocity {x, y, z}
│   └── material
└── state
    ├── health: 100
    ├── isDead: false
    ├── isLocal: true/false
    └── facingAngle: 0
```

### Network: `Network.js`

Handles all Socket.IO communication:

| Event | Direction | Data |
|-------|-----------|------|
| `playerInput` | Client → Server | `{seq, forward, backward, left, right, jump, punch, cameraAngle}` |
| `physicsState` | Server → Client | `{[socketId]: {x, y, z, vx, vy, vz, health, ...}}` |
| `playerMoved` | Server → Client | Position updates for remote players |
| `playerDamaged` | Server → Client | Hit notifications |
| `playerRespawned` | Server → Client | Respawn positions |

---

## 🖧 Server Architecture

### Entry Point: `server/index.js`

```javascript
// Socket.IO connection handler
io.on('connection', (socket) => {
    // Player joins
    socket.on('joinGame', (data) => {
        serverPhysics.addPlayer(socket.id, data);
    });
    
    // Player sends input
    socket.on('playerInput', (inputData) => {
        serverPhysics.handleInput(socket.id, inputData);
    });
    
    // Player punches
    socket.on('playerPunch', () => {
        // Server handles hit detection
    });
    
    // Player disconnects
    socket.on('disconnect', () => {
        serverPhysics.removePlayer(socket.id);
    });
});
```

### Physics Engine: `server/physics.js`

Runs authoritative simulation at 20Hz:

```javascript
// Server physics tick
setInterval(() => {
    // 1. Process each player's input
    for (player of players) {
        applyMovementForces(player);
        checkJump(player);
        checkPunch(player);
    }
    
    // 2. Step physics world
    world.step(1/20, dt, 3);
    
    // 3. Broadcast state to all clients
    io.emit('physicsState', getWorldState());
}, 1000 / 20);  // 20 Hz
```

---

## 🌐 Networking Model

### Current Model: Hybrid (Broken)

```
┌─────────────────────────────────────────────────────────────────┐
│                    CURRENT (PROBLEMATIC)                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  CLIENT                           SERVER                        │
│  ┌─────────┐    inputs           ┌─────────┐                   │
│  │ Physics │ ──────────────────► │ Physics │                   │
│  │ (60Hz)  │                     │ (20Hz)  │                   │
│  └────┬────┘    positions        └────┬────┘                   │
│       │      ◄──────────────────      │                        │
│       ▼                               ▼                        │
│  Client moves                    Server moves                   │
│  INDEPENDENTLY                   INDEPENDENTLY                  │
│                                                                 │
│  PROBLEM: Both run physics → positions diverge → jitter        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Correct Model: Client-Authoritative with Server Validation

For a responsive casual game, we should use:

```
┌─────────────────────────────────────────────────────────────────┐
│               RECOMMENDED MODEL FOR THIS GAME                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  CLIENT                           SERVER                        │
│  ┌─────────┐    positions        ┌─────────┐                   │
│  │ Physics │ ──────────────────► │ Validate│                   │
│  │ (60Hz)  │                     │ & Relay │                   │
│  │ OWNER   │    positions        │  ONLY   │                   │
│  └─────────┘ ◄────────────────── └─────────┘                   │
│              (other players)                                    │
│                                                                 │
│  MOVEMENT: Client runs physics, server validates + relays      │
│  COMBAT: Server authoritative for damage/knockback             │
│  RESULT: Smooth movement, fair combat                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## ⚙️ Physics System

### Config Values (Must Match!)

```javascript
// These MUST be identical on client and server
const Config = {
    gravity: -21.39,
    friction: 0.0,
    restitution: 0.336,
    moveSpeed: 1143.7,
    jumpVelocity: 15.08,
    airControl: 0.5,
    linearDamping: 0.93,
    knockbackForce: 15,
    knockbackUpward: 8,
    maxHealth: 100,
    respawnTime: 2.035,
};
```

### Force Application (Client)

```javascript
// In Frog.update()
const moveDir = calculateMoveDirection(input, cameraAngle);
const force = moveDir.scale(Config.moveSpeed * dt);
this.body.applyForce(force, this.body.position);

if (input.jump && isGrounded) {
    this.body.velocity.y = Config.jumpVelocity;
}
```

---

## 🐛 Current Issues & Solutions

### Issue 1: Movement Jitter

**Cause:** Client and server both run physics independently. Positions diverge, then server corrections cause snapping.

**Solution:** Choose ONE physics authority:

**Option A: Client-Authoritative Movement (Recommended for casual games)**
```javascript
// Client: Run physics, send positions
// Server: Validate (speed check), relay to others

// server/index.js
socket.on('playerMove', (data) => {
    // Validate: check if movement speed is reasonable
    const valid = validateMovement(data);
    if (valid) {
        players[socket.id] = data;
        socket.broadcast.emit('playerMoved', data);
    }
});

// Client: Just apply other players' positions
socket.on('playerMoved', (data) => {
    if (data.id !== myId) {
        frogs[data.id].targetPos = data.position;
    }
});
```

**Option B: Server-Authoritative (Competitive games)**
```javascript
// Client: Send ONLY inputs
// Server: Run physics, send positions to ALL

// Requires identical physics on both sides
// Requires input buffering and reconciliation
// More complex, more latency
```

### Issue 2: Knockback Not Working When Tab Inactive

**Cause:** Browser throttles JavaScript when tab is hidden.

**Solution:** Server handles knockback physics:
```javascript
// On damage, server applies knockback velocity
target.body.velocity.x += knockbackDir.x * Config.knockbackForce;
target.body.velocity.y += Config.knockbackUpward;
target.body.velocity.z += knockbackDir.z * Config.knockbackForce;

// Server continues simulating even if client tab is inactive
// Client receives corrected position on return
```

### Issue 3: Respawn Not Working When Tab Inactive

**Cause:** Client-side respawn timer doesn't run when throttled.

**Solution:** Server handles respawn timer:
```javascript
// Server-side respawn
killPlayer(socketId) {
    player.isDead = true;
    setTimeout(() => {
        respawnPlayer(socketId);
        io.emit('playerRespawned', { id: socketId, x, y, z });
    }, Config.respawnTime * 1000);
}
```

---

## 🎯 Recommended Fix

### For Smooth Movement WITHOUT Jitter:

1. **Disable server physics for movement** - Let client run physics
2. **Server only validates** - Check for cheating (speed hacks)
3. **Server handles combat** - Damage, knockback, death, respawn
4. **Server relays positions** - Broadcast to other players

```javascript
// Client sends position every frame
socket.emit('playerMove', { x, y, z, vx, vy, vz, rotation });

// Server validates and relays
socket.on('playerMove', (data) => {
    if (isValidPosition(data)) {
        players[socket.id].position = data;
        socket.broadcast.emit('playerMoved', { id: socket.id, ...data });
    }
});

// Combat stays server-authoritative
socket.on('playerPunch', () => {
    const hits = checkHitsOnServer();
    for (hit of hits) {
        applyKnockback(hit.target);
        applyDamage(hit.target);
    }
});
```

---

## 📊 Summary

| Aspect | Current | Recommended |
|--------|---------|-------------|
| **Movement Physics** | Both client + server | Client only |
| **Position Authority** | Server (causes jitter) | Client sends, server relays |
| **Validation** | None | Server speed checks |
| **Combat** | Server | Server (keep) |
| **Knockback** | Server | Server (keep) |
| **Respawn** | Server | Server (keep) |
| **Tick Rate** | 20Hz | Not needed for movement |

---

*Document generated: December 18, 2025*
