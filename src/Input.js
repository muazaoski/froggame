export class Input {
    constructor() {
        this.keys = {
            forward: false,
            backward: false,
            left: false,
            right: false,
            jump: false
        };

        this.mouse = { x: 0, y: 0 };

        // Camera control state
        this.middleMouseDown = false;
        this.mouseDelta = { x: 0, y: 0 };
        this.lastMouse = { x: 0, y: 0 };
        this.scrollDelta = 0;

        // Punch/kick click
        this.leftClickPunch = false;

        // Tongue (right click)
        this.rightClickTongue = false;
        this.tongueHeld = false;

        this.chatOpen = false;
        this.chatInput = document.getElementById('chat-input');

        // Mobile detection
        this.isMobile = this.detectMobile();

        document.addEventListener('keydown', (e) => this.onKeyDown(e));
        document.addEventListener('keyup', (e) => this.onKeyUp(e));
        document.addEventListener('mousemove', (e) => this.onMouseMove(e));
        document.addEventListener('mousedown', (e) => this.onMouseDown(e));
        document.addEventListener('mouseup', (e) => this.onMouseUp(e));
        document.addEventListener('wheel', (e) => this.onWheel(e), { passive: false });

        // Prevent context menu on middle click and right click (for tongue)
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault(); // Always prevent context menu for game
        });

        // Prevent pinch zoom on mobile
        document.addEventListener('gesturestart', (e) => e.preventDefault());
        document.addEventListener('gesturechange', (e) => e.preventDefault());
        document.addEventListener('gestureend', (e) => e.preventDefault());

        // Mobile touch controls
        if (this.isMobile) {
            this.setupMobileControls();
            this.checkOrientation();
            window.addEventListener('resize', () => this.checkOrientation());
        }
    }

    // Call this when player enters the game
    showMobileControls() {
        if (this.mobileUI) {
            this.mobileUI.classList.add('visible');
        }
    }

    detectMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
            || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) // iPad Pro fix
            || (window.innerWidth <= 1024 && ('ontouchstart' in window || navigator.maxTouchPoints > 0));
    }

    checkOrientation() {
        const isPortrait = window.innerHeight > window.innerWidth;
        if (isPortrait && this.isMobile) {
            if (!this.orientationOverlay) {
                this.createOrientationOverlay();
            }
            this.orientationOverlay.style.display = 'flex';
        } else if (this.orientationOverlay) {
            this.orientationOverlay.style.display = 'none';
        }
    }

    createOrientationOverlay() {
        const overlay = document.createElement('div');
        overlay.id = 'orientation-overlay';
        overlay.innerHTML = `
            <div class="oo-content">
                <div class="oo-icon">🔄</div>
                <h2>Rotate for Better Grip!</h2>
                <p>Please rotate your device to landscape for the best froggy experience.</p>
            </div>
        `;
        document.body.appendChild(overlay);
        this.orientationOverlay = overlay;

        const style = document.createElement('style');
        style.textContent = `
            #orientation-overlay {
                position: fixed;
                top: 0; left: 0; width: 100%; height: 100%;
                background: #1a1a1a;
                color: white;
                z-index: 10000;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;
                font-family: 'Outfit', sans-serif;
            }
            .oo-icon { font-size: 80px; margin-bottom: 20px; animation: oo-rotate 2s ease-in-out infinite; }
            @keyframes oo-rotate {
                0% { transform: rotate(0deg); }
                50% { transform: rotate(90deg); }
                100% { transform: rotate(0deg); }
            }
        `;
        document.head.appendChild(style);
    }

    setupMobileControls() {
        this.createMobileUI();

        // Joystick state
        this.joystick = {
            active: false,
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            touchId: null,
            maxRadius: 60
        };

        // Camera touch state
        this.cameraTouch = {
            active: false,
            startX: 0,
            startY: 0,
            touchId: null
        };

        // Touch events
        document.addEventListener('touchstart', (e) => this.onTouchStart(e), { passive: false });
        document.addEventListener('touchmove', (e) => this.onTouchMove(e), { passive: false });
        document.addEventListener('touchend', (e) => this.onTouchEnd(e), { passive: false });
    }

    createMobileUI() {
        const mobileUI = document.createElement('div');
        mobileUI.id = 'mobile-controls';
        mobileUI.innerHTML = `
            <div id="joystick-boundary">
                <div id="joystick-base">
                    <div id="joystick-stick"></div>
                </div>
            </div>

            <div id="mobile-action-buttons">
                <div class="btn-row">
                    <button id="btn-tongue" class="m-btn secondary">👅</button>
                    <button id="btn-jump" class="m-btn primary">⬆️</button>
                </div>
                <div class="btn-row">
                    <button id="btn-dive" class="m-btn secondary">⬇️</button>
                    <button id="btn-punch" class="m-btn primary">👊</button>
                </div>
            </div>

            <div id="mobile-utils">
                <button id="m-btn-fullscreen" class="m-util-btn">⛶</button>
                <button id="m-btn-chat" class="m-util-btn">💬</button>
                <button id="m-btn-tab" class="m-util-btn">👥</button>
                <button id="m-btn-esc" class="m-util-btn">⚙️</button>
            </div>
        `;
        document.body.appendChild(mobileUI);
        this.mobileUI = mobileUI;

        const style = document.createElement('style');
        style.textContent = `
            #mobile-controls {
                position: fixed;
                top: 0; left: 0; width: 100%; height: 100%;
                pointer-events: none;
                z-index: 1000;
                display: none;
                opacity: 0;
                transition: opacity 0.5s ease;
            }
            #mobile-controls.visible { display: block; opacity: 1; }

            #joystick-boundary {
                position: absolute;
                bottom: 40px; left: 40px;
                width: 180px; height: 180px;
                pointer-events: auto;
            }
            #joystick-base {
                width: 140px; height: 140px;
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(5px);
                border: 2px solid rgba(255, 255, 255, 0.2);
                border-radius: 50%;
                position: relative;
                top: 20px; left: 20px;
            }
            #joystick-stick {
                width: 60px; height: 60px;
                background: rgba(255, 255, 255, 0.8);
                border-radius: 50%;
                position: absolute;
                top: 40px; left: 40px;
                box-shadow: 0 4px 15px rgba(0,0,0,0.5);
                pointer-events: none;
            }

            #mobile-action-buttons {
                position: absolute;
                bottom: 40px; right: 40px;
                display: flex;
                flex-direction: column;
                gap: 20px;
                pointer-events: auto;
            }
            .btn-row { display: flex; gap: 20px; justify-content: flex-end; }
            .m-btn {
                width: 85px; height: 85px;
                border-radius: 50%;
                border: none;
                background: rgba(255, 255, 255, 0.15);
                backdrop-filter: blur(8px);
                color: white;
                font-size: 32px;
                display: flex; align-items: center; justify-content: center;
                box-shadow: 0 8px 32px rgba(0,0,0,0.3);
                -webkit-tap-highlight-color: transparent;
                transition: transform 0.1s, background 0.1s;
            }
            .m-btn:active { transform: scale(0.9); background: rgba(255, 255, 255, 0.3); }
            .m-btn.primary { background: rgba(76, 175, 80, 0.4); border: 2px solid rgba(76, 175, 80, 0.6); }
            .m-btn.secondary { width: 70px; height: 70px; font-size: 24px; position: relative; top: 7.5px; }

            #mobile-utils {
                position: absolute;
                top: 20px; right: 20px;
                display: flex; gap: 15px;
                pointer-events: auto;
            }
            .m-util-btn {
                width: 50px; height: 50px;
                border-radius: 12px;
                border: none;
                background: rgba(0, 0, 0, 0.5);
                backdrop-filter: blur(5px);
                color: white; font-size: 20px;
                display: flex; align-items: center; justify-content: center;
                -webkit-tap-highlight-color: transparent;
            }
        `;
        document.head.appendChild(style);

        // Bind utility buttons
        document.getElementById('m-btn-fullscreen').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.toggleFullscreen();
        });
        document.getElementById('m-btn-chat').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.toggleChat();
        });
        document.getElementById('m-btn-esc').addEventListener('touchstart', (e) => {
            e.preventDefault();
            window.dispatchEvent(new KeyboardEvent('keydown', { code: 'Escape' }));
        });
        document.getElementById('m-btn-tab').addEventListener('touchstart', (e) => {
            e.preventDefault();
            const tabBtn = document.getElementById('player-table');
            if (tabBtn) tabBtn.classList.toggle('visible-mobile');
        });

        // Setup individual action buttons
        this.setupActionBtn('btn-jump', 'jump');
        this.setupActionBtn('btn-punch', (down) => this.leftClickPunch = down);
        this.setupActionBtn('btn-tongue', (down) => {
            this.rightClickTongue = down;
            this.tongueHeld = down;
        });
        this.setupActionBtn('btn-dive', 'dive');
    }

    setupActionBtn(id, action) {
        const btn = document.getElementById(id);
        btn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            if (typeof action === 'string') this.keys[action] = true;
            else action(true);
        });
        btn.addEventListener('touchend', (e) => {
            e.preventDefault();
            if (typeof action === 'string') this.keys[action] = false;
            else action(false);
        });
    }

    onTouchStart(e) {
        for (const touch of e.changedTouches) {
            const x = touch.clientX;
            const y = touch.clientY;

            // Joystick zone (left 40% of screen)
            if (x < window.innerWidth * 0.4 && !this.joystick.active) {
                this.joystick.active = true;
                this.joystick.touchId = touch.identifier;
                this.joystick.startX = x;
                this.joystick.startY = y;
                // Move joystick base to touch start position for better feel
                this.updateJoystickPosition(x, y);
            }
            // Camera zone (anywhere else not on UI)
            else if (!this.cameraTouch.active) {
                // Check if touch is on any UI button
                const onUI = document.elementFromPoint(x, y)?.closest('button, #joystick-boundary');
                if (!onUI) {
                    this.cameraTouch.active = true;
                    this.cameraTouch.touchId = touch.identifier;
                    this.cameraTouch.startX = x;
                    this.cameraTouch.startY = y;
                }
            }
        }
    }

    updateJoystickPosition(x, y) {
        const base = document.getElementById('joystick-base');
        const boundary = document.getElementById('joystick-boundary');
        // We keep it within a reasonable range but follow the finger initially
        // Actually for now let's just use the fixed position to start
    }

    onTouchMove(e) {
        for (const touch of e.changedTouches) {
            if (this.joystick.active && touch.identifier === this.joystick.touchId) {
                const dx = touch.clientX - this.joystick.startX;
                const dy = touch.clientY - this.joystick.startY;

                const distance = Math.sqrt(dx * dx + dy * dy);
                const clampedDistance = Math.min(distance, this.joystick.maxRadius);
                const angle = Math.atan2(dy, dx);

                const clampedX = Math.cos(angle) * clampedDistance;
                const clampedY = Math.sin(angle) * clampedDistance;

                // Update visual
                if (this.joystickStick) {
                    this.joystickStick.style.transform = `translate(${clampedX}px, ${clampedY}px)`;
                }

                // Update movement logic
                const normX = clampedX / this.joystick.maxRadius;
                const normY = clampedY / this.joystick.maxRadius;

                const threshold = 0.2;
                this.keys.forward = normY < -threshold;
                this.keys.backward = normY > threshold;
                this.keys.left = normX < -threshold;
                this.keys.right = normX > threshold;

                e.preventDefault();
            }

            if (this.cameraTouch.active && touch.identifier === this.cameraTouch.touchId) {
                const dx = touch.clientX - this.cameraTouch.startX;
                const dy = touch.clientY - this.cameraTouch.startY;

                this.mouseDelta.x += dx * 1.5;
                this.mouseDelta.y += dy * 1.5;

                this.cameraTouch.startX = touch.clientX;
                this.cameraTouch.startY = touch.clientY;

                this.middleMouseDown = true;
                e.preventDefault();
            }
        }
    }

    onTouchEnd(e) {
        for (const touch of e.changedTouches) {
            if (this.joystick.active && touch.identifier === this.joystick.touchId) {
                this.joystick.active = false;
                this.joystick.touchId = null;
                if (this.joystickStick) this.joystickStick.style.transform = 'translate(0, 0)';

                this.keys.forward = false;
                this.keys.backward = false;
                this.keys.left = false;
                this.keys.right = false;
            }

            if (this.cameraTouch.active && touch.identifier === this.cameraTouch.touchId) {
                this.cameraTouch.active = false;
                this.cameraTouch.touchId = null;
                this.middleMouseDown = false;
                this.mouseDelta.x = 0;
                this.mouseDelta.y = 0;
            }
        }
    }

    onMouseMove(e) {
        this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

        // Track delta for camera rotation
        if (this.middleMouseDown) {
            this.mouseDelta.x = e.clientX - this.lastMouse.x;
            this.mouseDelta.y = e.clientY - this.lastMouse.y;
        }

        this.lastMouse.x = e.clientX;
        this.lastMouse.y = e.clientY;
    }

    onMouseDown(e) {
        // Middle mouse button (button 1)
        if (e.button === 1) {
            this.middleMouseDown = true;
            this.lastMouse.x = e.clientX;
            this.lastMouse.y = e.clientY;
            this.mouseDelta.x = 0;
            this.mouseDelta.y = 0;
            e.preventDefault();
        }

        // Check if clicking on UI elements - don't trigger game actions
        const isUIClick = e.target.closest('button, input, textarea, .panel, .panel-overlay, .bottom-left-buttons, #profile-modal, #dm-chat-panel, #emote-wheel, #friend-list-overlay, #profile-editor-overlay');

        // Left mouse button (button 0) for punch
        if (e.button === 0 && !this.chatOpen && !isUIClick) {
            this.leftClickPunch = true;
        }
        // Right mouse button (button 2) for tongue
        if (e.button === 2 && !this.chatOpen && !isUIClick) {
            this.rightClickTongue = true;
            this.tongueHeld = true;
            e.preventDefault();
        }
    }

    onMouseUp(e) {
        if (e.button === 1) {
            this.middleMouseDown = false;
            this.mouseDelta.x = 0;
            this.mouseDelta.y = 0;
        }
        // Release tongue grapple on right mouse up
        if (e.button === 2) {
            this.tongueHeld = false;
        }
    }

    onWheel(e) {
        // Don't zoom if chat is open
        if (this.chatOpen) return;

        // Don't zoom if scrolling inside chat panel
        const chatPanel = document.getElementById('chat-panel');
        if (chatPanel && chatPanel.contains(e.target)) {
            return; // Let the chat panel handle its own scroll
        }

        this.scrollDelta = e.deltaY;
        e.preventDefault();
    }

    // Call this after processing scroll to reset it
    consumeScroll() {
        const delta = this.scrollDelta;
        this.scrollDelta = 0;
        return delta;
    }

    // Call this after processing mouse delta to reset it
    consumeMouseDelta() {
        const delta = { x: this.mouseDelta.x, y: this.mouseDelta.y };
        this.mouseDelta.x = 0;
        this.mouseDelta.y = 0;
        return delta;
    }

    // Call this to check and consume punch click
    consumePunch() {
        const clicked = this.leftClickPunch;
        this.leftClickPunch = false;
        return clicked;
    }

    // Call this to check and consume tongue click
    consumeTongue() {
        const clicked = this.rightClickTongue;
        this.rightClickTongue = false;
        return clicked;
    }

    onKeyDown(e) {
        // Check if any input/textarea is focused
        const isTyping = document.activeElement &&
            (document.activeElement.tagName === 'INPUT' ||
                document.activeElement.tagName === 'TEXTAREA');

        // Chat toggle - only if not typing in other inputs
        if (e.code === 'Enter') {
            if (this.chatOpen) {
                this.toggleChat();
                e.preventDefault();
                return;
            } else if (!isTyping) {
                this.toggleChat();
                e.preventDefault();
                return;
            }
        }

        // F3 - Toggle tongue debug mode
        if (e.code === 'F3') {
            e.preventDefault();
            // Dispatch event to toggle debug - handled elsewhere
            window.dispatchEvent(new CustomEvent('toggle-tongue-debug'));
            return;
        }

        // Disable movement while chatting or typing in any input
        if (this.chatOpen || isTyping) return;

        switch (e.code) {
            case 'ArrowUp':
            case 'KeyW': this.keys.forward = true; break;
            case 'ArrowDown':
            case 'KeyS': this.keys.backward = true; break;
            case 'ArrowLeft':
            case 'KeyA': this.keys.left = true; break;
            case 'ArrowRight':
            case 'KeyD': this.keys.right = true; break;
            case 'Space': this.keys.jump = true; break;
            case 'ShiftLeft':
            case 'ShiftRight': this.keys.dive = true; break;
            case 'KeyE': this.dismountPressed = true; break;
        }
    }

    // Check and consume dismount press
    consumeDismount() {
        const pressed = this.dismountPressed;
        this.dismountPressed = false;
        return pressed;
    }

    onKeyUp(e) {
        // Check if any input/textarea is focused
        const isTyping = document.activeElement &&
            (document.activeElement.tagName === 'INPUT' ||
                document.activeElement.tagName === 'TEXTAREA');

        if (this.chatOpen || isTyping) return;

        switch (e.code) {
            case 'ArrowUp':
            case 'KeyW': this.keys.forward = false; break;
            case 'ArrowDown':
            case 'KeyS': this.keys.backward = false; break;
            case 'ArrowLeft':
            case 'KeyA': this.keys.left = false; break;
            case 'ArrowRight':
            case 'KeyD': this.keys.right = false; break;
            case 'Space': this.keys.jump = false; break;
            case 'ShiftLeft':
            case 'ShiftRight': this.keys.dive = false; break;
        }
    }

    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.warn(`Error attempting to enable full-screen mode: ${err.message}`);
            });
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }

    toggleChat() {
        this.chatOpen = !this.chatOpen;
        if (this.chatOpen) {
            this.chatInput.style.display = 'block';
            this.chatInput.focus();
            // Reset movement keys so we don't keep moving while typing
            this.keys.forward = false;
            this.keys.backward = false;
            this.keys.left = false;
            this.keys.right = false;
            this.keys.jump = false;
        } else {
            // Send message if there is one
            const text = this.chatInput.value.trim();
            if (text) {
                // Emit event via global network instance (hacky but quick)
                // Better: Input emits event, Main listens and calls Network
                const event = new CustomEvent('chat-send', { detail: text });
                window.dispatchEvent(event);
            }
            this.chatInput.value = '';
            this.chatInput.style.display = 'none';
        }
    }
}
