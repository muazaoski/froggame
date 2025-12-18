@echo off
echo ========================================
echo    FROG MULTIPLAYER SERVER
echo ========================================
echo.

cd /d "%~dp0"

:: Kill any existing instances first (for clean restart)
echo [INFO] Cleaning up old processes...
taskkill /IM cloudflared.exe /F >nul 2>&1
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3000 ^| findstr LISTENING') do (
    taskkill /PID %%a /F >nul 2>&1
)
timeout /t 1 /nobreak >nul

echo [INFO] Starting Cloudflare Tunnel...
start "Cloudflare Tunnel - FrogAss" /min cmd /c "cloudflared.exe tunnel --config cloudflared-config.yml run frogass"

timeout /t 3 /nobreak >nul

echo [INFO] Starting Frog Game Server on port 3000...
echo.
echo ========================================
echo   ACCESS YOUR GAME:
echo   Local:  http://localhost:3000
echo   Public: https://frogass.muazaoski.online
echo ========================================
echo.
echo Press Ctrl+C to stop the server.
echo.

node server/index.js

:: Cleanup on exit
echo.
echo [INFO] Shutting down...
taskkill /IM cloudflared.exe /F >nul 2>&1
echo [DONE] Server stopped.
pause
