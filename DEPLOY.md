# 🐸 Frog Multiplayer - VPS Deployment Guide

## VPS Details
- **IP:** 51.79.161.63
- **User:** debian
- **OS:** Debian 12 + Docker
- **Domain:** frog.muazaoski.online
- **App Directory:** /opt/apps/froggame

---

## Quick Connect (Windows)

Double-click `connect_vps.bat` or run:
```powershell
ssh debian@51.79.161.63
```

Once connected, switch to root:
```bash
sudo -i
cd /opt/apps/froggame
```

---

## ⚠️ IMPORTANT: Docker Commands

**Use `docker compose` (with SPACE), NOT `docker-compose` (with hyphen)!**

The VPS uses Docker Compose V2 which uses space:
- ✅ `docker compose up -d`
- ❌ `docker-compose up -d` (old, may cause errors)

---

## 🚀 Quick Deploy (After Code Changes)

### On Your Local Machine (Windows):

**One-liner to push everything (Fast):**
```powershell
npm run build; git add .; git commit -m "Update profile UI"; git push
```

**Step-by-step:**
1. **Build the frontend:**
   ```powershell
   npm run build
   ```
2. **Add and Commit:**
   ```powershell
   git add .
   git commit -m "Your descriptive message"  # Use -m (lowercase), NOT -M
   ```
3. **Push to GitHub:**
   ```powershell
   git push
   ```

### On Your VPS:
```bash
# SSH into VPS
ssh debian@51.79.161.63

# Switch to root and go to app
sudo -i
cd /opt/apps/froggame

# Pull latest code (force reset if needed)
git fetch origin
git reset --hard origin/main

# Rebuild WITHOUT cache and restart
docker compose down
docker compose build --no-cache
docker compose up -d

# Check status
docker compose ps
docker compose logs -f froggame
```

> ⚠️ **ALWAYS use `--no-cache`** when rebuilding after code changes, or Docker will use old cached layers!

---

## 📋 Deploy Checklist

1. ✅ Run `npm run build` locally (creates dist/)
2. ✅ Commit and push (includes built dist/)
3. ✅ SSH to VPS
4. ✅ `git fetch origin && git reset --hard origin/main`
5. ✅ `docker compose build --no-cache`
6. ✅ `docker compose up -d`
7. ✅ Hard refresh browser (`Ctrl+Shift+R`)

---

## 📊 Viewing Logs

```bash
# Become root
sudo -i

# Navigate to app directory
cd /opt/apps/froggame

# View live logs (follows new output)
docker compose logs -f

# Or view just the last 100 lines
docker compose logs --tail=100

# View logs for game server only
docker compose logs -f froggame

# View Caddy (reverse proxy) logs
docker compose logs -f caddy
```

---

## First Time Setup

### Step 1: Connect to VPS
```bash
ssh debian@51.79.161.63
sudo -i
```

### Step 2: Install Docker (if not installed)
```bash
curl -fsSL https://get.docker.com | sh
systemctl enable docker
systemctl start docker
```

### Step 3: Clone Repository
```bash
mkdir -p /opt/apps
cd /opt/apps
git clone https://github.com/muazaoski/froggame.git
cd froggame
```

### Step 4: Configure Environment
```bash
# Create .env file
cat > .env << 'EOF'
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
PORT=3000
NODE_ENV=production
EOF

# Edit Caddyfile - set domain
nano Caddyfile
# Replace YOUR_DOMAIN with: frog.muazaoski.online
```

### Step 5: Build and Run
```bash
docker compose up -d --build
docker compose ps
```

---

## Common Commands

```bash
# View running containers
docker compose ps

# View logs (live)
docker compose logs -f froggame

# View Caddy (reverse proxy) logs
docker compose logs -f caddy

# Stop everything
docker compose down

# Restart (quick, no rebuild)
docker compose restart

# Rebuild after code changes (USE THIS!)
docker compose down
docker compose build --no-cache
docker compose up -d

# Nuclear option - full cleanup
docker rm -f froggame caddy 2>/dev/null
docker system prune -af
docker compose up -d --build
```

---

## Troubleshooting

### Changes not appearing after deploy?
```bash
# 1. Make sure git pull succeeded (check for merge conflicts)
git status

# 2. Force reset to remote
git fetch origin
git reset --hard origin/main

# 3. Rebuild WITHOUT cache
docker compose build --no-cache
docker compose up -d

# 4. Hard refresh your browser (Ctrl+Shift+R)
```

### Error: 'ContainerConfig' / Container Issues
```bash
# Nuclear option - remove everything and rebuild
docker rm -f froggame caddy 2>/dev/null
docker rmi froggame-froggame 2>/dev/null
docker system prune -af
docker compose up -d --build
```

### Can't connect to game?
```bash
# Check if containers are running
docker compose ps

# Check firewall
ufw status
ufw allow 80
ufw allow 443
ufw allow 22
```

### SSL not working?
```bash
# Check Caddy logs
docker compose logs caddy

# Make sure DNS is set to "DNS only" (gray cloud) in Cloudflare
# Orange cloud (proxied) can break WebSockets
```

### Game crashes on startup?
```bash
# Check logs for errors
docker compose logs froggame

# Common fix - rebuild
docker compose down
docker compose build --no-cache
docker compose up -d
```

---

## DNS Configuration (Cloudflare)

| Type | Name | Content | Proxy Status |
|------|------|---------|--------------|
| A | frog | 51.79.161.63 | **DNS only** (gray cloud) |

**IMPORTANT:** Must be "DNS only", not "Proxied" - WebSockets need direct connection!

---

## File Locations

| Path | Purpose |
|------|---------|
| `/opt/apps/froggame/` | Main app directory |
| `/opt/apps/froggame/.env` | Environment variables |
| `/opt/apps/froggame/Caddyfile` | Reverse proxy config |
| `/opt/apps/froggame/data/` | SQLite database (persistent) |
| `/opt/apps/froggame/dist/` | Built frontend (from git) |

---

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    DEPLOYMENT FLOW                          │
├─────────────────────────────────────────────────────────────┤
│  Local Machine           │           VPS                    │
│  ─────────────           │           ───                    │
│  1. Edit code            │                                  │
│  2. npm run build        │                                  │
│  3. git push ───────────────────────> 4. git pull          │
│                          │           5. docker build        │
│                          │           6. docker up           │
└─────────────────────────────────────────────────────────────┘

Traffic Flow:
User → Caddy (HTTPS:443) → Froggame (Node.js:3000)
```

- **Caddy** - Reverse proxy with automatic HTTPS (port 80, 443)
- **Froggame** - Node.js game server (port 3000 internal)
- **SQLite** - Database stored in ./data/
- **dist/** - Pre-built frontend (pushed from local, NOT built on server)

---

## 🎉 Done!

Game accessible at: **https://frog.muazaoski.online**
