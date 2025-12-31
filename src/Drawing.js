// Drawing.js - Drawing on paper and wall placement system
import * as THREE from 'three';
import * as CANNON from 'cannon-es';

export class DrawingSystem {
    constructor(world, network) {
        this.world = world;
        this.network = network;

        // Drawing state
        this.isDrawing = false;
        this.currentColor = '#000000';
        this.brushSize = 4;
        this.isEraser = false;
        this.lastPos = null;

        // Wall art storage: { id: { imageData, position, rotation, mesh, ... } }
        this.wallArts = {};
        this.crumpledPapers = []; // For physics debris

        // Placement mode
        this.isPlacingArt = false;
        this.placementPreview = null;
        this.placementIndicator = null;
        this.currentDrawingData = null;

        // Selection / Editing
        this.selectedArt = null;
        this.hoveredArt = null;

        // Advanced features
        this.placementRotation = 0;
        this.artName = '';
        this.isFilling = false;
        this.lastDrawSyncTime = 0;

        // Initialize
        this.initUI();
        this.initNetworkHandlers();
    }

    initUI() {
        this.modal = document.getElementById('drawing-modal');
        this.canvas = document.getElementById('drawing-canvas');
        this.ctx = this.canvas ? this.canvas.getContext('2d', { willReadFrequently: true }) : null;
        this.editUI = document.getElementById('art-edit-ui');
        this.editNameLabel = document.getElementById('art-edit-name');

        if (!this.modal || !this.canvas || !this.ctx) return;

        // Create tooltip
        this.tooltip = document.createElement('div');
        this.tooltip.className = 'art-tooltip';
        this.tooltip.style.position = 'absolute';
        this.tooltip.style.background = 'rgba(0, 0, 0, 0.8)';
        this.tooltip.style.color = 'white';
        this.tooltip.style.padding = '5px 10px';
        this.tooltip.style.borderRadius = '4px';
        this.tooltip.style.pointerEvents = 'none';
        this.tooltip.style.display = 'none';
        this.tooltip.style.fontFamily = 'Outfit, sans-serif';
        this.tooltip.style.fontSize = '14px';
        this.tooltip.style.zIndex = '10000';
        this.tooltip.style.whiteSpace = 'nowrap';
        document.body.appendChild(this.tooltip);

        this.setupCanvasListeners();
        this.setupToolListeners();

        // Stop propagation to game
        [this.modal, this.editUI].forEach(el => {
            if (el) {
                ['mousedown', 'mouseup', 'mousemove', 'click', 'touchstart', 'touchend'].forEach(evt => {
                    el.addEventListener(evt, (e) => e.stopPropagation());
                });
            }
        });

        document.getElementById('art-move-btn')?.addEventListener('click', () => this.moveSelectedArt());
        document.getElementById('art-trash-btn')?.addEventListener('click', () => this.trashSelectedArt());
        document.getElementById('art-cancel-btn')?.addEventListener('click', () => this.deselectArt());
    }

    initNetworkHandlers() {
        if (!this.network || !this.network.socket) return;
        const socket = this.network.socket;

        socket.on('wallArts', (arts) => {
            console.log('📜 Received wall arts:', arts.length);
            arts.forEach(art => this.createWallArt(art));
        });

        socket.on('wallArtPlaced', (art) => {
            console.log('🖼️ New wall art placed');
            this.createWallArt(art);
        });

        socket.on('wallArtRemoved', (artId) => {
            this.removeWallArt(artId);
        });

        socket.on('wallArtError', (msg) => {
            if (this.world.showToast) this.world.showToast(msg, 'error');
        });
    }

    setupCanvasListeners() {
        const start = (e) => { e.stopPropagation(); this.startDrawing(e.touches ? e.touches[0] : e); };
        const move = (e) => { e.stopPropagation(); this.draw(e.touches ? e.touches[0] : e); if (e.touches) e.preventDefault(); };
        const stop = (e) => { e.stopPropagation(); this.stopDrawing(); };

        this.canvas.addEventListener('mousedown', start);
        this.canvas.addEventListener('mousemove', move);
        this.canvas.addEventListener('mouseup', stop);
        this.canvas.addEventListener('mouseleave', stop);

        this.canvas.addEventListener('touchstart', start);
        this.canvas.addEventListener('touchmove', move);
        this.canvas.addEventListener('touchend', stop);
    }

    setupToolListeners() {
        const colorBtns = document.querySelectorAll('.draw-color');
        colorBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                colorBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentColor = btn.dataset.color;
                this.isEraser = this.isFilling = false;
                document.getElementById('eraser-btn')?.classList.remove('active');
                document.getElementById('fill-btn')?.classList.remove('active');
            });
        });

        const brushSlider = document.getElementById('brush-size');
        if (brushSlider) {
            brushSlider.addEventListener('input', (e) => {
                this.brushSize = parseInt(e.target.value);
                const label = document.getElementById('brush-size-label');
                if (label) label.textContent = this.brushSize;
            });
        }

        document.getElementById('fill-btn')?.addEventListener('click', (e) => {
            this.isFilling = true; this.isEraser = false;
            e.target.classList.add('active');
            document.getElementById('eraser-btn')?.classList.remove('active');
        });

        document.getElementById('eraser-btn')?.addEventListener('click', (e) => {
            this.isEraser = !this.isEraser; this.isFilling = false;
            e.target.classList.toggle('active', this.isEraser);
            document.getElementById('fill-btn')?.classList.remove('active');
        });

        document.getElementById('clear-canvas-btn')?.addEventListener('click', () => this.clearCanvas());
        document.getElementById('place-drawing-btn')?.addEventListener('click', () => this.startPlacement());
        document.getElementById('drawing-close')?.addEventListener('click', () => this.close());
        this.modal?.addEventListener('click', (e) => { if (e.target === this.modal) this.close(); });
    }

    open() {
        if (!this.modal) return;
        this.modal.classList.add('visible');
        this.clearCanvas();
        if (this.world.localFrog) {
            this.world.localFrog.controlsDisabled = true;
            this.world.localFrog.setDrawingMode(true);
            this.network?.sendDrawingStatus(true, this.canvas.toDataURL('image/png'));
        }
    }

    close() {
        if (!this.modal) return;
        this.modal.classList.remove('visible');
        if (this.world.localFrog) {
            this.world.localFrog.controlsDisabled = false;
            this.world.localFrog.setDrawingMode(false);
            this.network?.sendDrawingStatus(false);
        }
        this.cancelPlacement();
    }

    getCanvasPos(e) {
        const rect = this.canvas.getBoundingClientRect();
        return {
            x: (e.clientX - rect.left) * (this.canvas.width / rect.width),
            y: (e.clientY - rect.top) * (this.canvas.height / rect.height)
        };
    }

    startDrawing(e) {
        const pos = this.getCanvasPos(e);
        if (this.isFilling) {
            this.floodFill(Math.floor(pos.x), Math.floor(pos.y), this.currentColor);
        } else {
            this.isDrawing = true;
            this.lastPos = pos;
        }
    }

    draw(e) {
        if (!this.isDrawing) return;
        const pos = this.getCanvasPos(e);
        this.ctx.beginPath();
        this.ctx.moveTo(this.lastPos.x, this.lastPos.y);
        this.ctx.lineTo(pos.x, pos.y);
        this.ctx.strokeStyle = this.isEraser ? '#FFFFFF' : this.currentColor;
        this.ctx.lineWidth = this.brushSize;
        this.ctx.lineCap = this.ctx.lineJoin = 'round';
        this.ctx.stroke();
        this.lastPos = pos;
    }

    stopDrawing() { this.isDrawing = false; this.lastPos = null; }

    clearCanvas() {
        if (!this.ctx) return;
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    floodFill(startX, startY, colorHex) {
        const width = this.canvas.width;
        const height = this.canvas.height;
        const imgData = this.ctx.getImageData(0, 0, width, height);
        const data = imgData.data;
        const r = parseInt(colorHex.slice(1, 3), 16), g = parseInt(colorHex.slice(3, 5), 16), b = parseInt(colorHex.slice(5, 7), 16);
        const startPos = (startY * width + startX) * 4;
        const sR = data[startPos], sG = data[startPos + 1], sB = data[startPos + 2], sA = data[startPos + 3];
        if (sR === r && sG === g && sB === b && sA === 255) return;
        const stack = [[startX, startY]];
        while (stack.length) {
            const [x, y] = stack.pop();
            if (x < 0 || x >= width || y < 0 || y >= height) continue;
            const pos = (y * width + x) * 4;
            if (data[pos] === sR && data[pos + 1] === sG && data[pos + 2] === sB && data[pos + 3] === sA) {
                data[pos] = r; data[pos + 1] = g; data[pos + 2] = b; data[pos + 3] = 255;
                stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
            }
        }
        this.ctx.putImageData(imgData, 0, 0);
    }

    startPlacement() {
        const nameInput = document.getElementById('drawing-name-input');
        this.artName = nameInput ? nameInput.value.trim() : 'Untitled';
        this.currentDrawingData = this.canvas.toDataURL('image/png');

        // Simple empty check
        const pixels = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height).data;
        let empty = true;
        for (let i = 0; i < pixels.length; i += 4) if (pixels[i] < 250) { empty = false; break; }
        if (empty) { this.world.showToast?.('Draw something first! 🎨', 'error'); return; }

        this.close(); // Closes modal
        this.isPlacingArt = true;
        this.placementRotation = 0;
        this.createPlacementPreview();
        this.world.showToast?.('Place: CLICK | Rotate: [Q]/[E] | Cancel: [ESC]', 'info');
    }

    cancelPlacement() {
        this.isPlacingArt = false; this.currentDrawingData = null;
        [this.placementPreview, this.placementIndicator].forEach(p => {
            if (p) { this.world.scene.remove(p); p.geometry.dispose(); p.material.dispose(); }
        });
        this.placementPreview = this.placementIndicator = null;
    }

    createPlacementPreview() {
        const texture = new THREE.TextureLoader().load(this.currentDrawingData);
        texture.minFilter = texture.magFilter = THREE.LinearFilter;
        this.placementPreview = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.MeshBasicMaterial({ map: texture, transparent: true, opacity: 0.8, side: THREE.DoubleSide, depthTest: false }));
        this.placementPreview.renderOrder = 999;
        this.placementPreview.visible = false;
        this.world.scene.add(this.placementPreview);

        this.placementIndicator = new THREE.Mesh(new THREE.RingGeometry(1.1, 1.3, 32), new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.8, side: THREE.DoubleSide, depthTest: false }));
        this.placementIndicator.renderOrder = 998;
        this.placementIndicator.visible = false;
        this.world.scene.add(this.placementIndicator);
    }

    updatePlacementPreview(input) {
        if (!this.isPlacingArt || !this.placementPreview) return;
        if (input.keys?.KeyQ) this.placementRotation += 0.05;
        if (input.keys?.KeyE) this.placementRotation -= 0.05;

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(new THREE.Vector2(input.mouse.x, input.mouse.y), this.world.camera);
        const intersects = raycaster.intersectObjects(this.world.scene.children, true);

        let hit = null;
        for (const intersection of intersects) {
            let root = intersection.object;
            let isIgnored = false;
            while (root) {
                if (root === this.placementPreview || root === this.placementIndicator || root.userData.isFrog || root.userData.isBall) { isIgnored = true; break; }
                root = root.parent;
            }
            if (!isIgnored && intersection.object.visible) { hit = intersection; break; }
        }

        if (hit) {
            const normalMatrix = new THREE.Matrix3().getNormalMatrix(hit.object.matrixWorld);
            const worldNormal = hit.face.normal.clone().applyMatrix3(normalMatrix).normalize();
            this.placementPreview.position.copy(hit.point).add(worldNormal.clone().multiplyScalar(0.02));
            this.placementPreview.lookAt(hit.point.clone().add(worldNormal));
            this.placementPreview.rotateZ(this.placementRotation);
            this.placementPreview.visible = true;
            if (this.placementIndicator) {
                this.placementIndicator.position.copy(this.placementPreview.position);
                this.placementIndicator.quaternion.copy(this.placementPreview.quaternion);
                this.placementIndicator.visible = true;
                const t = Date.now() * 0.003;
                this.placementIndicator.material.opacity = 0.5 + Math.sin(t) * 0.3;
                this.placementIndicator.scale.setScalar(1 + Math.sin(t * 2) * 0.05);
            }
            this._lastHit = { point: hit.point.clone(), normal: worldNormal.clone() };
        } else {
            this.placementPreview.visible = this.placementIndicator.visible = false;
            this._lastHit = null;
        }
    }

    tryPlaceArt(input) {
        if (!this.isPlacingArt || !this._lastHit) return this.isPlacingArt;
        if (this.world.localFrog && this.world.localFrog.mesh.position.distanceTo(this._lastHit.point) > 15) {
            this.world.showToast?.('Too far! Get closer.', 'error'); return true;
        }
        input.consumePunch?.();
        const artData = {
            imageData: this.currentDrawingData,
            name: this.artName,
            rotation: this.placementRotation,
            position: { x: this._lastHit.point.x + this._lastHit.normal.x * 0.02, y: this._lastHit.point.y + this._lastHit.normal.y * 0.02, z: this._lastHit.point.z + this._lastHit.normal.z * 0.02 },
            normal: { x: this._lastHit.normal.x, y: this._lastHit.normal.y, z: this._lastHit.normal.z }
        };
        this.network.socket.emit('placeWallArt', artData);
        this.cancelPlacement();
        this.world.showToast?.('Drawing placed! 🎨', 'success');
        return true;
    }

    createWallArt(art) {
        if (this.wallArts[art.id]) return;
        const texture = new THREE.TextureLoader().load(art.imageData);
        texture.minFilter = texture.magFilter = THREE.LinearFilter;
        const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, transparent: true }));
        mesh.position.set(art.position.x, art.position.y, art.position.z);
        if (art.normal) {
            mesh.lookAt(mesh.position.clone().add(new THREE.Vector3(art.normal.x, art.normal.y, art.normal.z)));
            if (art.rotation) mesh.rotateZ(art.rotation);
        }
        mesh.userData = { isWallArt: true, artId: art.id, authorId: art.authorId, authorUserId: art.authorUserId, authorName: art.authorName, artName: art.name };
        this.world.scene.add(mesh);
        this.wallArts[art.id] = { ...art, mesh };
    }

    removeWallArt(artId) {
        const art = this.wallArts[artId];
        if (art?.mesh) {
            this.world.scene.remove(art.mesh);
            art.mesh.geometry.dispose();
            art.mesh.material.dispose();
            delete this.wallArts[artId];
        }
    }

    update(input) {
        if (this.isPlacingArt) {
            this.updatePlacementPreview(input);
        } else {
            this.updateTooltip(input);
            if (input.leftClickPunch && this.hoveredArt) {
                const myId = this.network?.socket?.id;
                const myUserId = this.world.localFrog?.userId;
                const isOwner = this.hoveredArt.userData.authorId === myId || (this.hoveredArt.userData.authorUserId && this.hoveredArt.userData.authorUserId === myUserId);
                if (isOwner) { this.selectArt(this.hoveredArt); input.consumePunch?.(); }
            }
            if (this.selectedArt) {
                if (input.keys?.KeyM) this.moveSelectedArt();
                if (input.keys?.KeyG) this.trashSelectedArt();
                if (input.keys?.Escape) this.deselectArt();
            }
            if (this.modal?.classList.contains('visible') && this.world.localFrog) {
                this.world.localFrog.updateDrawingTexture(this.canvas);
                const now = Date.now();
                if (now - this.lastDrawSyncTime > 200) {
                    if (this.isDrawing) this.network?.sendDrawingUpdate(this.canvas.toDataURL('image/png'));
                    this.lastDrawSyncTime = now;
                }
            }
        }
        this.updateCrumpledPapers();
    }

    updateTooltip(input) {
        if (!this.tooltip) return;
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(new THREE.Vector2(input.mouse.x, input.mouse.y), this.world.camera);
        const intersects = raycaster.intersectObjects(this.world.scene.children, true);
        let found = null;
        for (const inter of intersects) {
            let obj = inter.object;
            let temp = obj;
            let isPhysical = false;
            while (temp) { if (temp.userData.isFrog || temp.userData.isBall || temp.userData.isScooter) { isPhysical = true; break; } temp = temp.parent; }
            if (isPhysical) continue;
            while (obj) { if (obj.userData.isWallArt) { found = obj; break; } obj = obj.parent; }
            if (found || inter.object.visible) break;
        }
        this.hoveredArt = found;
        if (found) {
            const myId = this.network?.socket?.id;
            const myUserId = this.world.localFrog?.userId;
            const isOwner = found.userData.authorId === myId || (found.userData.authorUserId && found.userData.authorUserId === myUserId);
            this.tooltip.innerHTML = `<b>${found.userData.artName}</b><br><small>by ${found.userData.authorName}</small>${isOwner ? '<br><span style="color:#4CAF50">👉 Click to Edit</span>' : ''}`;
            this.tooltip.style.display = 'block';
            this.tooltip.style.left = ((input.mouse.x + 1) * window.innerWidth / 2 + 15) + 'px';
            this.tooltip.style.top = ((-input.mouse.y + 1) * window.innerHeight / 2 + 15) + 'px';
        } else this.tooltip.style.display = 'none';
    }

    selectArt(mesh) {
        this.deselectArt();
        this.selectedArt = mesh;
        if (mesh.material) {
            mesh.userData._oldEmissive = mesh.material.emissive?.getHex() || 0;
            mesh.material.emissive?.set(0x4CAF50);
        }
        if (this.editUI) {
            this.editUI.style.display = 'flex';
            if (this.editNameLabel) this.editNameLabel.textContent = mesh.userData.artName;
        }
        this.world.showToast?.('Art Selected! [M] Move [G] Trash', 'success');
    }

    deselectArt() {
        if (!this.selectedArt) return;
        if (this.selectedArt.material && this.selectedArt.userData._oldEmissive !== undefined) {
            this.selectedArt.material.emissive?.setHex(this.selectedArt.userData._oldEmissive);
        }
        this.selectedArt = null;
        if (this.editUI) this.editUI.style.display = 'none';
    }

    moveSelectedArt() {
        if (!this.selectedArt) return;
        const id = this.selectedArt.userData.artId, art = this.wallArts[id];
        if (!art) return;
        this.isPlacingArt = true; this.currentDrawingData = art.imageData; this.artName = art.name; this.placementRotation = art.rotation || 0;
        this.network.socket.emit('removeWallArt', id);
        this.deselectArt();
        this.createPlacementPreview();
        this.world.showToast?.('Moving... Click to reposition.', 'info');
    }

    trashSelectedArt() {
        if (!this.selectedArt) return;
        const id = this.selectedArt.userData.artId, pos = this.selectedArt.position.clone();
        const normal = new THREE.Vector3(0, 0, 1).applyQuaternion(this.selectedArt.quaternion);
        this.network.socket.emit('removeWallArt', id);
        this.createCrumpledPaper(pos, normal);
        this.deselectArt();
        this.world.showToast?.('Artwork trashed! 🗑️', 'info');
    }

    createCrumpledPaper(pos, normal) {
        const mesh = new THREE.Mesh(new THREE.DodecahedronGeometry(0.3, 0), new THREE.MeshBasicMaterial({ color: 0xffffff }));
        mesh.position.copy(pos); mesh.scale.setScalar(0.5 + Math.random() * 0.5);
        this.world.scene.add(mesh);
        if (this.world.physics?.world) {
            const body = new CANNON.Body({ mass: 0.2, shape: new CANNON.Sphere(0.2), position: new CANNON.Vec3(pos.x, pos.y, pos.z) });
            const f = 6 + Math.random() * 4;
            body.velocity.set(normal.x * f + (Math.random() - 0.5) * 4, normal.y * f + 4 + Math.random() * 4, normal.z * f + (Math.random() - 0.5) * 4);
            body.angularVelocity.set((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20);
            this.world.physics.world.addBody(body);
            this.crumpledPapers.push({ mesh, body, createdAt: Date.now() });
        }
    }

    updateCrumpledPapers() {
        const now = Date.now();
        for (let i = this.crumpledPapers.length - 1; i >= 0; i--) {
            const p = this.crumpledPapers[i];
            p.mesh.position.copy(p.body.position); p.mesh.quaternion.copy(p.body.quaternion);
            const age = now - p.createdAt;
            if (age > 10000) {
                this.world.scene.remove(p.mesh); p.mesh.geometry.dispose(); p.mesh.material.dispose();
                this.world.physics.world.removeBody(p.body); this.crumpledPapers.splice(i, 1);
            } else if (age > 8000) { p.mesh.material.transparent = true; p.mesh.material.opacity = 1 - (age - 8000) / 2000; }
        }
    }

    handleKeyDown(e) {
        if (e.key === 'Escape') {
            if (this.isPlacingArt) this.cancelPlacement();
            else if (this.selectedArt) this.deselectArt();
        }
        if (this.selectedArt && !this.isPlacingArt) {
            if (e.code === 'KeyM') this.moveSelectedArt();
            if (e.code === 'KeyG') this.trashSelectedArt();
        }
    }
}
