import * as THREE from 'three';

export class NoteSystem {
    constructor(world, network) {
        this.world = world;
        this.network = network;

        this.notes = {};

        // Settings
        this.selectedPaperColor = '#FFFCEB';
        this.selectedTextColor = '#333333';

        // Placement state
        this.isPlacing = false;
        this.placementPreview = null;
        this.placementIndicator = null;
        this.placementRotation = 0;
        this._lastHit = null;

        this.initUI();
        this.initNetworkHandlers();
    }

    initUI() {
        this.creatorModal = document.getElementById('note-creator-modal');
        this.viewerModal = document.getElementById('note-viewer-modal');

        // Creator Inputs
        this.titleInput = document.getElementById('note-title-input');
        this.contentInput = document.getElementById('note-content-input');
        this.placeBtn = document.getElementById('place-note-btn');
        this.closeBtn = document.getElementById('note-close');

        // Viewer elements
        this.viewTitle = document.getElementById('note-view-title');
        this.viewContent = document.getElementById('note-view-content');
        this.viewMeta = document.getElementById('note-view-meta');
        this.viewPaper = document.getElementById('note-view-paper');
        this.viewClose = document.getElementById('note-view-close');

        if (!this.creatorModal) return;

        // Color picking logic
        const setupColors = (containerId, property) => {
            const circles = document.getElementById(containerId).querySelectorAll('.note-color-circle');
            circles.forEach(c => {
                c.addEventListener('click', () => {
                    circles.forEach(node => node.classList.remove('selected'));
                    c.classList.add('selected');
                    this[property] = c.dataset.color;
                });
            });
        };

        setupColors('note-paper-colors', 'selectedPaperColor');
        setupColors('note-text-colors', 'selectedTextColor');

        this.closeBtn.addEventListener('click', () => this.closeCreator());
        this.placeBtn.addEventListener('click', () => this.startPlacement());
        this.viewClose.addEventListener('click', () => this.closeViewer());

        // Global key listeners for notes
        window.addEventListener('keydown', (e) => {
            if (e.key === 'n' || e.key === 'N') {
                if (!this.world.localFrog || this.world.localFrog.controlsDisabled) return;
                // Only open if not already in a modal
                if (!document.querySelector('.note-modal.visible') && !document.getElementById('drawing-modal').classList.contains('visible')) {
                    this.openCreator();
                }
            }
        });

        // Stop propagation for modals
        [this.creatorModal, this.viewerModal].forEach(m => {
            m.addEventListener('mousedown', (e) => e.stopPropagation());
            m.addEventListener('touchstart', (e) => e.stopPropagation());
        });
    }

    initNetworkHandlers() {
        if (!this.network || !this.network.socket) return;
        const socket = this.network.socket;

        socket.on('wallNotes', (notes) => {
            notes.forEach(note => this.createNoteMesh(note));
        });

        socket.on('notePlaced', (note) => {
            this.createNoteMesh(note);
        });

        socket.on('noteRemoved', (noteId) => {
            this.removeNote(noteId);
        });

        // Request existing notes
        socket.emit('getWallNotes');
    }

    openCreator() {
        this.creatorModal.classList.add('visible');
        if (this.world.localFrog) this.world.localFrog.controlsDisabled = true;
    }

    closeCreator() {
        this.creatorModal.classList.remove('visible');
        if (this.world.localFrog) this.world.localFrog.controlsDisabled = false;
        this.cancelPlacement();
    }

    startPlacement() {
        const title = this.titleInput.value.trim();
        const content = this.contentInput.value.trim();
        if (!title || !content) {
            this.world.showToast?.('Please add a title and message! 📝', 'error');
            return;
        }

        this.creatorModal.classList.remove('visible');
        if (this.world.localFrog) this.world.localFrog.controlsDisabled = false;

        this.isPlacing = true;
        this.placementRotation = 0;
        this.createPlacementPreview();
        this.world.showToast?.('Place: CLICK | Rotate: [Q]/[E] | Cancel: [ESC]', 'info');
    }

    cancelPlacement() {
        this.isPlacing = false;
        if (this.placementPreview) {
            this.world.scene.remove(this.placementPreview);
            this.placementPreview.geometry.dispose();
            this.placementPreview.material.dispose();
            this.placementPreview = null;
        }
        if (this.placementIndicator) {
            this.world.scene.remove(this.placementIndicator);
            this.placementIndicator.geometry.dispose();
            this.placementIndicator.material.dispose();
            this.placementIndicator = null;
        }
    }

    createPlacementPreview() {
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;
        this.drawNoteToCanvas(canvas, this.titleInput.value, this.selectedPaperColor, this.selectedTextColor);

        const texture = new THREE.CanvasTexture(canvas);
        const geometry = new THREE.PlaneGeometry(1.2, 1.2);
        const material = new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
            opacity: 0.8,
            side: THREE.DoubleSide,
            depthTest: false
        });

        this.placementPreview = new THREE.Mesh(geometry, material);
        this.placementPreview.renderOrder = 999;
        this.placementPreview.visible = false;
        this.world.scene.add(this.placementPreview);

        this.placementIndicator = new THREE.Mesh(
            new THREE.RingGeometry(0.7, 0.8, 32),
            new THREE.MeshBasicMaterial({ color: 0xffff00, transparent: true, opacity: 0.5, depthTest: false })
        );
        this.placementIndicator.renderOrder = 998;
        this.placementIndicator.visible = false;
        this.world.scene.add(this.placementIndicator);
    }

    drawNoteToCanvas(canvas, title, paperColor, textColor) {
        const ctx = canvas.getContext('2d');
        // Paper background
        ctx.fillStyle = paperColor;
        ctx.beginPath();
        const r = 20;
        const w = canvas.width, h = canvas.height;
        ctx.moveTo(r, 0);
        ctx.lineTo(w - r, 0);
        ctx.quadraticCurveTo(w, 0, w, r);
        ctx.lineTo(w, h - r);
        ctx.quadraticCurveTo(w, h, w - r, h);
        ctx.lineTo(r, h);
        ctx.quadraticCurveTo(0, h, 0, h - r);
        ctx.lineTo(0, r);
        ctx.quadraticCurveTo(0, 0, r, 0);
        ctx.fill();

        // Shadow/Border (cute look)
        ctx.strokeStyle = 'rgba(0,0,0,0.1)';
        ctx.lineWidth = 4;
        ctx.stroke();

        // Icon
        ctx.font = '40px Outfit, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('📝', w / 2, 80);

        // Title
        ctx.fillStyle = textColor;
        ctx.font = 'bold 24px Outfit, sans-serif';
        ctx.textAlign = 'center';
        // Wrap text if needed
        const words = title.split(' ');
        let line = '';
        let y = 140;
        for (let n = 0; n < words.length; n++) {
            let testLine = line + words[n] + ' ';
            let metrics = ctx.measureText(testLine);
            if (metrics.width > w - 40 && n > 0) {
                ctx.fillText(line, w / 2, y);
                line = words[n] + ' ';
                y += 30;
            } else {
                line = testLine;
            }
        }
        ctx.fillText(line, w / 2, y);
    }

    update(input) {
        if (this.isPlacing) {
            this.updatePlacement(input);
        } else {
            this.updateInteraction(input);
        }
    }

    updatePlacement(input) {
        if (input.keys?.KeyQ) this.placementRotation += 0.05;
        if (input.keys?.KeyE) this.placementRotation -= 0.05;

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(new THREE.Vector2(input.mouse.x, input.mouse.y), this.world.camera);
        // Intersect walls/ground
        const intersects = raycaster.intersectObjects(this.world.scene.children, true);

        let hit = null;
        for (const intersection of intersects) {
            let root = intersection.object;
            let ignore = false;
            while (root) {
                if (root.userData.isFrog || root.userData.isBall || root === this.placementPreview || root === this.placementIndicator) { ignore = true; break; }
                root = root.parent;
            }
            if (!ignore && intersection.object.visible) { hit = intersection; break; }
        }

        if (hit) {
            const normal = hit.face.normal.clone().applyMatrix3(new THREE.Matrix3().getNormalMatrix(hit.object.matrixWorld)).normalize();
            this.placementPreview.position.copy(hit.point).add(normal.clone().multiplyScalar(0.02));
            this.placementPreview.lookAt(hit.point.clone().add(normal));
            this.placementPreview.rotateZ(this.placementRotation);
            this.placementPreview.visible = true;

            this.placementIndicator.position.copy(this.placementPreview.position);
            this.placementIndicator.quaternion.copy(this.placementPreview.quaternion);
            this.placementIndicator.visible = true;

            this._lastHit = { point: hit.point.clone(), normal: normal };
        } else {
            if (this.placementPreview) this.placementPreview.visible = false;
            if (this.placementIndicator) this.placementIndicator.visible = false;
            this._lastHit = null;
        }
    }

    tryPlace(input) {
        if (!this.isPlacing || !this._lastHit) return false;

        const playerPos = this.world.localFrog?.mesh?.position;
        if (playerPos && playerPos.distanceTo(this._lastHit.point) > 15) {
            this.world.showToast?.('Too far! Get closer.', 'error');
            return true;
        }

        input.consumePunch?.();

        const noteData = {
            title: this.titleInput.value,
            content: this.contentInput.value,
            paperColor: this.selectedPaperColor,
            textColor: this.selectedTextColor,
            position: this._lastHit.point.clone().add(this._lastHit.normal.clone().multiplyScalar(0.02)),
            normal: this._lastHit.normal,
            rotation: this.placementRotation
        };

        this.network.socket.emit('placeNote', noteData);
        this.cancelPlacement();
        this.world.showToast?.('Note posted! 📌', 'success');

        // Clear inputs
        this.titleInput.value = '';
        this.contentInput.value = '';

        return true;
    }

    createNoteMesh(note) {
        if (this.notes[note.id]) return;

        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;
        this.drawNoteToCanvas(canvas, note.title, note.paperColor, note.textColor);

        const texture = new THREE.CanvasTexture(canvas);
        const mesh = new THREE.Mesh(
            new THREE.PlaneGeometry(1.2, 1.2),
            new THREE.MeshBasicMaterial({ map: texture, transparent: true, side: THREE.DoubleSide })
        );

        mesh.position.set(note.position.x, note.position.y, note.position.z);
        if (note.normal) {
            mesh.lookAt(mesh.position.clone().add(new THREE.Vector3(note.normal.x, note.normal.y, note.normal.z)));
            if (note.rotation) mesh.rotateZ(note.rotation);
        }

        mesh.userData = { isNote: true, noteId: note.id, noteData: note };
        this.world.scene.add(mesh);
        this.notes[note.id] = { ...note, mesh };
    }

    removeNote(noteId) {
        const note = this.notes[noteId];
        if (note && note.mesh) {
            this.world.scene.remove(note.mesh);
            note.mesh.geometry.dispose();
            note.mesh.material.dispose();
            delete this.notes[noteId];
        }
    }

    updateInteraction(input) {
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(new THREE.Vector2(input.mouse.x, input.mouse.y), this.world.camera);
        const intersects = raycaster.intersectObjects(this.world.scene.children, true);

        let hoveredNote = null;
        for (const inter of intersects) {
            let obj = inter.object;
            while (obj) {
                if (obj.userData.isNote) { hoveredNote = obj; break; }
                obj = obj.parent;
            }
            if (hoveredNote || inter.object.visible) break;
        }

        if (hoveredNote) {
            const playerPos = this.world.localFrog?.mesh?.position;
            const dist = playerPos ? playerPos.distanceTo(hoveredNote.position) : Infinity;

            if (dist < 10) {
                document.body.style.cursor = 'pointer';

                // Interaction hint
                const data = hoveredNote.userData.noteData;
                const date = new Date(data.createdAt).toLocaleDateString();
                this.world.drawingSystem?.tooltip?.style.display && (this.world.drawingSystem.tooltip.style.display = 'block');
                if (this.world.drawingSystem?.tooltip) {
                    const tooltip = this.world.drawingSystem.tooltip;
                    tooltip.innerHTML = `<b>${data.title}</b><br><small>Click to read • Posted ${date}</small>`;
                    tooltip.style.left = ((input.mouse.x + 1) * window.innerWidth / 2 + 15) + 'px';
                    tooltip.style.top = ((-input.mouse.y + 1) * window.innerHeight / 2 + 15) + 'px';
                    tooltip.style.display = 'block';
                }

                if (input.leftClickPunch) {
                    this.openViewer(data);
                    input.consumePunch?.();
                }
            } else {
                document.body.style.cursor = 'default';
            }
        } else {
            // Check if we were previously hovering a note to hide tooltip (if drawing system isn't handling it)
            // Actually DrawingSystem.updateTooltip will run and might hide it.
        }
    }

    openViewer(note) {
        this.viewTitle.textContent = note.title;
        this.viewContent.textContent = note.content;
        const date = new Date(note.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
        this.viewMeta.textContent = `By ${note.authorName} • ${date}`;

        this.viewPaper.style.backgroundColor = note.paperColor;
        this.viewPaper.style.color = note.textColor;

        this.viewerModal.classList.add('visible');
        if (this.world.localFrog) this.world.localFrog.controlsDisabled = true;
    }

    closeViewer() {
        this.viewerModal.classList.remove('visible');
        if (this.world.localFrog) this.world.localFrog.controlsDisabled = false;
    }

    handleKeyDown(e) {
        if (e.key === 'Escape') {
            if (this.isPlacing) this.cancelPlacement();
            if (this.creatorModal.classList.contains('visible')) this.closeCreator();
            if (this.viewerModal.classList.contains('visible')) this.closeViewer();
        }
    }
}
