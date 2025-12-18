# 🐸 Frog Multiplayer - VPS Deployment Guide

## Prerequisites
- OVH VPS with Docker pre-installed (Debian 12)
- Domain pointed to your VPS IP
- SSH access to the VPS

---

## Step 1: Connect to Your VPS

```bash
# From Windows Terminal or PowerShell
ssh root@YOUR_VPS_IP
```

---

## Step 2: Install Required Tools

```bash
# Update system
apt update && apt upgrade -y

# Install Git and Docker Compose (Docker is pre-installed)
apt install -y git docker-compose curl

# Verify Docker is running
docker --version
docker-compose --version
```

---

## Step 3: Clone Your Game

```bash
# Create apps directory
mkdir -p /opt/apps
cd /opt/apps

# Option A: Clone from GitHub
git clone https://github.com/YOUR_USERNAME/frogmultiplayer.git
cd frogmultiplayer

# Option B: Upload files via SFTP (use FileZilla or WinSCP)
# Upload to /opt/apps/frogmultiplayer/
```

---

## Step 4: Configure Environment

```bash
# Create .env file
cp .env.example .env
nano .env
```

Edit the `.env` file:
```
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
PORT=3000
NODE_ENV=production
```

---

## Step 5: Configure Domain

```bash
# Edit Caddyfile - replace YOUR_DOMAIN with your actual domain
nano Caddyfile
```

Replace `YOUR_DOMAIN` with something like `frog.muazaoski.online`

---

## Step 6: Build and Deploy

```bash
# Build the Docker image
docker-compose build

# Start the containers
docker-compose up -d

# Check if containers are running
docker-compose ps

# View logs
docker-compose logs -f
```

---

## Step 7: Point Domain to VPS

In your domain DNS (Cloudflare, etc.):

| Type | Name | Value | Proxy |
|------|------|-------|-------|
| A | frog | YOUR_VPS_IP | DNS only (gray cloud) |

Wait a few minutes for DNS propagation.

---

## Common Commands

```bash
# Stop the game
docker-compose down

# Restart
docker-compose restart

# View logs
docker-compose logs -f froggame

# Rebuild after code changes
docker-compose build --no-cache
docker-compose up -d

# Update from Git
git pull
docker-compose build
docker-compose up -d
```

---

## Troubleshooting

### Can't connect?
```bash
# Check if containers are running
docker-compose ps

# Check firewall
ufw status
ufw allow 80
ufw allow 443
ufw allow 22
```

### SSL not working?
```bash
# Check Caddy logs
docker-compose logs caddy

# Make sure domain DNS is pointing to VPS IP (not proxied through Cloudflare)
```

### Game not loading?
```bash
# Check game logs
docker-compose logs froggame

# Rebuild
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

---

## Backup

Database is stored in `./data/` directory. Back it up regularly:

```bash
# Create backup
cp data/game.db data/game.db.backup

# Or use automated backups from OVH
```

---

## Adding More Apps

Edit `docker-compose.yml` to add more services:

```yaml
services:
  froggame:
    # ... existing config
    
  dashboard:
    build: ../dashboard
    ports:
      - "3001:3001"
    networks:
      - web
```

Then add to `Caddyfile`:
```
dashboard.muazaoski.online {
    reverse_proxy dashboard:3001
}
```

---

## 🎉 Done!

Your game should now be accessible at:
- `https://YOUR_DOMAIN` (with automatic HTTPS!)

Players can connect and play from anywhere in the world! 🐸
