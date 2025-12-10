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

        this.chatOpen = false;
        this.chatInput = document.getElementById('chat-input');

        document.addEventListener('keydown', (e) => this.onKeyDown(e));
        document.addEventListener('keyup', (e) => this.onKeyUp(e));
        document.addEventListener('mousemove', (e) => this.onMouseMove(e));
        document.addEventListener('mousedown', (e) => this.onMouseDown(e));
        document.addEventListener('mouseup', (e) => this.onMouseUp(e));
        document.addEventListener('wheel', (e) => this.onWheel(e), { passive: false });

        // Prevent context menu on middle click
        document.addEventListener('contextmenu', (e) => {
            if (this.middleMouseDown) e.preventDefault();
        });
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
        // Left mouse button (button 0) for punch
        if (e.button === 0 && !this.chatOpen) {
            this.leftClickPunch = true;
        }
    }

    onMouseUp(e) {
        if (e.button === 1) {
            this.middleMouseDown = false;
            this.mouseDelta.x = 0;
            this.mouseDelta.y = 0;
        }
    }

    onWheel(e) {
        // Don't zoom if chat is open
        if (this.chatOpen) return;

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

    onKeyDown(e) {
        // Chat toggle
        if (e.code === 'Enter') {
            this.toggleChat();
            return;
        }

        if (this.chatOpen) return; // Disable movement while chatting

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
        }
    }

    onKeyUp(e) {
        if (this.chatOpen) return;

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
