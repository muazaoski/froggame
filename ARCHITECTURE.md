# 🐸 Frog Multiplayer - Technical Architecture

## 📋 Table of Contents
1. [Game Overview](#game-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Authority Model](#authority-model)
5. [Client Architecture](#client-architecture)
6. [Server Architecture](#server-architecture)
7. [Network Events](#network-events)
8. [Physics System](#physics-system)
9. [Deployment](#deployment)

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
│   ├── Config.js             # Game constants
│   └── VFX.js                # Visual effects
│
├── server/                   # SERVER-SIDE CODE (runs on VPS)
│   ├── index.js              # Express + Socket.IO server
│   ├── physics.js            # Combat-only physics (no movement!)
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

## ⚖️ Authority Model

### Client-Authoritative Movement + Server-Authoritative Combat

```
┌─────────────────────────────────────────────────────────────────┐
│                    CURRENT ARCHITECTURE                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  CLIENT (60Hz)                   SERVER                         │
│  ┌─────────────┐                 ┌─────────────┐               │
│  │ Cannon-ES   │   positions     │  Validate   │               │
│  │ Physics     │ ───────────────►│  & Relay    │               │
│  │ (movement)  │                 │             │               │
│  └─────────────┘                 │  Combat:    │               │
│         │                        │  - Hits     │               │
│         ▼                        │  - Damage   │               │
│  Instant, smooth                 │  - Knockback│               │
│  movement feel                   │  - Respawn  │               │
│                                  └──────┬──────┘               │
│                                         │                       │
│  REMOTE PLAYERS                         │ knockback             │
│  ┌─────────────┐                        ▼                       │
│  │ THREE.js    │◄─────────────── broadcasts                    │
│  │ Mesh only   │  (positions)                                  │
│  │ No physics  │                                               │
│  └─────────────┘                                               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Authority Summary

| Feature | Authority | Why |
|---------|-----------|-----|
| **Movement** | ✅ Client | Instant feel, no lag |
| **Jumping** | ✅ Client | Responsive controls |
| **Position** | Client → Server validates | Speed hack detection |
| **Punch Hit Detection** | ✅ Server | Fair combat |
| **Damage Calculation** | ✅ Server | Prevents cheating |
| **Knockback** | ✅ Server | Consistent for all players |
| **Health** | ✅ Server | Authoritative state |
| **Death** | ✅ Server | Prevents fake deaths |
| **Respawn** | ✅ Server | Works even if tab inactive |

---

## 🖥 Client Architecture

### Entry Point: `main.js`

```javascript
// Game loop runs at 60fps
function animate(time) {
    const dt = (time - lastTime) / 1000;
    
    // 1. Capture input
    input.update();
    
    // 2. Update local player physics (CLIENT AUTHORITATIVE)
    world.localFrog.update(dt, input, world);
    
    // 3. Send inputs (activity tracking)
    network.sendInput(input, cameraAngle);
    
    // 4. Send position to server (for relay to others)
    network.sendUpdate(world.localFrog);
    
    // 5. Render
    world.render();
    
    requestAnimationFrame(animate);
}
```

### Frog Entity: `Frog.js`

**Local Player:**
- Has Cannon-ES physics body
- Runs full physics simulation
- Applies movement forces, jumping, gravity

**Remote Players:**
- THREE.js mesh only (no physics body)
- Lerps position from network updates
- Visual-only representation

```
Local Frog                       Remote Frog
├── mesh (THREE.Group)           ├── mesh (THREE.Group)
├── body (CANNON.Body) ◄──────   │   (no physics body!)
│   ├── position                 ├── targetPos (lerp target)
│   └── velocity                 └── state
└── state                            ├── health
    ├── health                       └── isDead
    └── isDead
```

---

## 🖧 Server Architecture

### Entry Point: `server/index.js`

```javascript
io.on('connection', (socket) => {
    // Player joins
    socket.on('joinGame', (data) => {
        serverPhysics.addPlayer(socket.id, data);
    });
    
    // CLIENT-AUTHORITATIVE MOVEMENT
    // Server validates and relays - does NOT simulate
    socket.on('playerMove', (data) => {
        const valid = serverPhysics.updatePlayerPosition(socket.id, data);
        if (valid) {
            socket.broadcast.emit('playerMoved', data);
        }
    });
    
    // SERVER-AUTHORITATIVE COMBAT
    socket.on('playerPunch', () => {
        const hits = serverPhysics.handlePunch(socket.id);
        for (hit of hits) {
            io.emit('playerDamaged', hit);
            io.to(hit.targetId).emit('playerKnockback', hit.knockback);
        }
    });
});
```

### Combat Physics: `server/physics.js`

Server ONLY handles:
- **Hit Detection** - Who got punched
- **Damage Calculation** - Including criticals
- **Knockback** - Direction and force
- **Death Detection** - When health <= 0
- **Respawn Timer** - Server-controlled

Server does NOT:
- ❌ Simulate player movement
- ❌ Run continuous physics loop
- ❌ Apply movement forces

---

## 🌐 Network Events

### Client → Server

| Event | Data | Purpose |
|-------|------|---------|
| `joinGame` | `{name, color, token}` | Player joining |
| `playerMove` | `{x, y, z, vx, vy, vz, rotation, ...}` | Position update |
| `playerInput` | `{forward, backward, left, right, jump}` | Activity tracking |
| `playerPunch` | (none) | Request punch |

### Server → Client

| Event | Data | Purpose |
|-------|------|---------|
| `playerMoved` | `{id, x, y, z, ...}` | Other player moved |
| `playerPunched` | `socketId` | Show punch animation |
| `playerDamaged` | `{targetId, damage, isCritical}` | Damage notification |
| `playerKnockback` | `{id, velocity}` | Apply knockback impulse |
| `playerDied` | `socketId` | Player died |
| `playerRespawned` | `{id, x, y, z, health}` | Player respawned |

---

## ⚙️ Physics System

### Client Physics (Cannon-ES)

Only runs for **local player**:

```javascript
// In Frog.update() for local player only
const moveDir = calculateMoveDirection(input, cameraAngle);
const force = moveDir.scale(Config.moveSpeed * dt);
this.body.applyForce(force, this.body.position);

if (input.jump && isGrounded) {
    this.body.velocity.y = Config.jumpVelocity;
}

// Step physics world
world.step(1/60, dt, 3);
```

### Server Combat (No Cannon-ES)

Server stores positions but doesn't simulate:

```javascript
// Just stores and validates positions
updatePlayerPosition(socketId, data) {
    // Validate speed (anti-cheat)
    const speed = calculateSpeed(player, data);
    if (speed > Config.maxSpeed) return false;
    
    // Update stored position
    player.x = data.x;
    player.y = data.y;
    player.z = data.z;
    return true;
}

// Combat uses stored positions
handlePunch(attackerId) {
    for (target of players) {
        if (distance(attacker, target) < hitRadius) {
            // Apply damage & knockback
        }
    }
}
```

---

## 🚀 Deployment

### VPS Details
- **Provider:** OVH
- **Location:** Singapore
- **Specs:** 4 vCPU, 8GB RAM, 75GB SSD
- **OS:** Debian 12 + Docker
- **IP:** 51.79.161.63
- **Domain:** frog.muazaoski.online

### Docker Stack

```yaml
services:
  froggame:
    build: .
    ports:
      - "3000:3000"
    
  caddy:
    image: caddy:2-alpine
    ports:
      - "80:80"
      - "443:443"
```

### Deploy Commands

```bash
# Update code
cd /opt/apps/froggame
git pull

# Rebuild and restart
docker-compose down
docker-compose up -d --build

# View logs
docker-compose logs -f froggame
```

---

## 📊 Performance Benefits

| Metric | Before (Server-Auth) | After (Client-Auth Movement) |
|--------|---------------------|------------------------------|
| **Movement Feel** | Laggy, jittery | Instant, smooth |
| **Server CPU** | High (physics loop) | Low (validation only) |
| **Network Traffic** | High (state broadcasts) | Low (position relays) |
| **Combat Fairness** | ✅ Server auth | ✅ Server auth (unchanged) |
| **Cheat Prevention** | ✅ Full | ⚠️ Speed validation only |

---

*Last Updated: December 18, 2025*
