@echo off
echo ========================================
echo    STOPPING FROG SERVER
echo ========================================

cd /d "%~dp0"

echo [INFO] Stopping Cloudflare Tunnel...
taskkill /IM cloudflared.exe /F >nul 2>&1

echo [INFO] Stopping Node.js server on port 3000...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3000 ^| findstr LISTENING') do (
    taskkill /PID %%a /F >nul 2>&1
)

echo.
echo [DONE] All FrogAss services stopped!
timeout /t 2 >nul
