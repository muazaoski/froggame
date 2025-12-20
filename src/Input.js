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
        }
    }

    // Call this when player enters the game
    showMobileControls() {
        if (this.mobileUI) {
            this.mobileUI.style.display = 'block';
        }
    }

    detectMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
            || (window.innerWidth <= 800);
    }

    setupMobileControls() {
        // Create mobile UI
        this.createMobileUI();

        // Joystick state
        this.joystick = {
            active: false,
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            touchId: null
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
        // Mobile controls container
        const mobileUI = document.createElement('div');
        mobileUI.id = 'mobile-controls';
        mobileUI.style.display = 'none'; // Hidden until game starts
        mobileUI.innerHTML = `
            <!-- Virtual Joystick -->
            <div id="joystick-zone">
                <div id="joystick-base">
                    <div id="joystick-stick"></div>
                </div>
            </div>

            <!-- Action Buttons -->
            <div id="action-buttons">
                <button id="btn-jump" class="action-btn">⬆️</button>
                <button id="btn-attack" class="action-btn attack">👊</button>
            </div>
        `;
        document.body.appendChild(mobileUI);
        this.mobileUI = mobileUI;

        // Add mobile CSS
        const style = document.createElement('style');
        style.textContent = `
            #mobile-controls {
                position: fixed;
                z-index: 1000;
                pointer-events: none;
            }

            #joystick-zone {
                position: fixed;
                bottom: 30px;
                left: 30px;
                width: 150px;
                height: 150px;
                pointer-events: auto;
            }

            #joystick-base {
                width: 120px;
                height: 120px;
                background: rgba(255, 255, 255, 0.2);
                border: 3px solid rgba(255, 255, 255, 0.4);
                border-radius: 50%;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            #joystick-stick {
                width: 50px;
                height: 50px;
                background: rgba(255, 255, 255, 0.7);
                border-radius: 50%;
                position: absolute;
                transition: none;
                box-shadow: 0 2px 10px rgba(0,0,0,0.3);
            }

            #action-buttons {
                position: fixed;
                bottom: 30px;
                right: 30px;
                display: flex;
                gap: 15px;
                pointer-events: auto;
            }

            .action-btn {
                width: 70px;
                height: 70px;
                border-radius: 50%;
                border: 3px solid rgba(255, 255, 255, 0.5);
                background: rgba(255, 255, 255, 0.2);
                font-size: 28px;
                color: white;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                -webkit-tap-highlight-color: transparent;
                user-select: none;
                box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            }

            .action-btn:active {
                background: rgba(255, 255, 255, 0.4);
                transform: scale(0.95);
            }

            .action-btn.attack {
                background: rgba(255, 100, 100, 0.3);
                border-color: rgba(255, 100, 100, 0.6);
            }

            .action-btn.attack:active {
                background: rgba(255, 100, 100, 0.6);
            }

            /* Hide instructions on mobile */
            @media (max-width: 800px) {
                #instructions {
                    display: none !important;
                }
                #chat-input {
                    bottom: 200px !important;
                }
            }
        `;
        document.head.appendChild(style);

        // Button event listeners
        const jumpBtn = document.getElementById('btn-jump');
        const attackBtn = document.getElementById('btn-attack');

        jumpBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.keys.jump = true;
        });
        jumpBtn.addEventListener('touchend', (e) => {
            e.preventDefault();
            this.keys.jump = false;
        });

        attackBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.leftClickPunch = true;
        });

        // Store elements
        this.joystickBase = document.getElementById('joystick-base');
        this.joystickStick = document.getElementById('joystick-stick');
    }

    onTouchStart(e) {
        for (const touch of e.changedTouches) {
            const x = touch.clientX;
            const y = touch.clientY;

            // Check if touch is on joystick zone (left side of screen)
            if (x < window.innerWidth / 3 && !this.joystick.active) {
                this.joystick.active = true;
                this.joystick.touchId = touch.identifier;
                this.joystick.startX = x;
                this.joystick.startY = y;
                e.preventDefault();
            }
            // Camera rotation (right side, not on buttons)
            else if (x > window.innerWidth / 2 && y < window.innerHeight - 150 && !this.cameraTouch.active) {
                this.cameraTouch.active = true;
                this.cameraTouch.touchId = touch.identifier;
                this.cameraTouch.startX = x;
                this.cameraTouch.startY = y;
                e.preventDefault();
            }
        }
    }

    onTouchMove(e) {
        for (const touch of e.changedTouches) {
            // Joystick movement
            if (this.joystick.active && touch.identifier === this.joystick.touchId) {
                const dx = touch.clientX - this.joystick.startX;
                const dy = touch.clientY - this.joystick.startY;

                // Limit to radius
                const maxRadius = 40;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const clampedDistance = Math.min(distance, maxRadius);
                const angle = Math.atan2(dy, dx);

                const clampedX = Math.cos(angle) * clampedDistance;
                const clampedY = Math.sin(angle) * clampedDistance;

                // Update visual
                this.joystickStick.style.transform = `translate(${clampedX}px, ${clampedY}px)`;

                // Update keys based on joystick position
                const threshold = 15;
                this.keys.forward = clampedY < -threshold;
                this.keys.backward = clampedY > threshold;
                this.keys.left = clampedX < -threshold;
                this.keys.right = clampedX > threshold;

                e.preventDefault();
            }

            // Camera rotation
            if (this.cameraTouch.active && touch.identifier === this.cameraTouch.touchId) {
                const dx = touch.clientX - this.cameraTouch.startX;
                const dy = touch.clientY - this.cameraTouch.startY;

                // Apply delta with higher sensitivity for mobile
                this.mouseDelta.x += dx * 2;
                this.mouseDelta.y += dy * 2;

                // Update start position for continuous delta
                this.cameraTouch.startX = touch.clientX;
                this.cameraTouch.startY = touch.clientY;

                // Simulate middle mouse for camera system
                this.middleMouseDown = true;
                e.preventDefault();
            }
        }
    }

    onTouchEnd(e) {
        for (const touch of e.changedTouches) {
            // Joystick released
            if (this.joystick.active && touch.identifier === this.joystick.touchId) {
                this.joystick.active = false;
                this.joystick.touchId = null;
                this.joystickStick.style.transform = 'translate(0, 0)';

                // Reset movement keys
                this.keys.forward = false;
                this.keys.backward = false;
                this.keys.left = false;
                this.keys.right = false;
            }

            // Camera touch released
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
        if (e.code === 'Enter' && !isTyping) {
            this.toggleChat();
            return;
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
