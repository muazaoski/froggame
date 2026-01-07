// Drawing.js - Drawing on paper and wall placement system
import * as THREE from 'three/webgpu';
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

        // Undo/Redo history
        this.history = [];
        this.historyIndex = -1;
        this.maxHistory = 30;

        // Layers state
        this.layers = [];
        this.activeLayerIndex = 0;

        // Initialize
        this.initUI();
        this.initNetworkHandlers();
    }

    initUI() {
        this.modal = document.getElementById('drawing-modal');
        this.displayCanvas = document.getElementById('drawing-canvas');
        this.displayCtx = this.displayCanvas ? this.displayCanvas.getContext('2d', { alpha: true }) : null;

        // We still need this.canvas and this.ctx for backward compatibility with the rest of the code
        // but we'll redirect them to the active layer's canvas/ctx
        this.canvas = null;
        this.ctx = null;

        this.editUI = document.getElementById('art-edit-ui');
        this.editNameLabel = document.getElementById('art-edit-name');

        if (!this.modal || !this.displayCanvas) return;

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

        // Stop propagation to game for critical actions
        [this.modal, this.editUI].forEach(el => {
            if (el) {
                ['mousedown', 'click', 'touchstart'].forEach(evt => {
                    el.addEventListener(evt, (e) => e.stopPropagation());
                });
            }
        });

        document.getElementById('art-move-btn')?.addEventListener('click', () => this.moveSelectedArt());
        document.getElementById('art-trash-btn')?.addEventListener('click', () => this.trashSelectedArt());
        document.getElementById('art-cancel-btn')?.addEventListener('click', () => this.deselectArt());

        this.initColorPicker();

        // Confirmation Modal Listeners
        this.confirmModal = document.getElementById('drawing-confirm-modal');
        document.getElementById('btn-cancel-place')?.addEventListener('click', () => {
            if (this.confirmModal) this.confirmModal.style.display = 'none';
        });
        document.getElementById('btn-confirm-place')?.addEventListener('click', () => {
            if (this.confirmModal) this.confirmModal.style.display = 'none';
            this.executePlacement();
        });
    }

    initColorPicker() {
        this.pickerCanvas = document.getElementById('color-picker-canvas');
        this.pickerCtx = this.pickerCanvas?.getContext('2d');
        this.colorPreview = document.getElementById('color-preview');
        this.currentHue = 0;
        this.currentSat = 100;
        this.currentVal = 100;

        if (!this.pickerCanvas) return;

        const handleMove = (e) => {
            const rect = this.pickerCanvas.getBoundingClientRect();
            const x = (e.clientX || e.touches[0].clientX) - rect.left;
            const y = (e.clientY || e.touches[0].clientY) - rect.top;
            this.handleColorPickerInteraction(x, y);
        };

        this.pickerCanvas.addEventListener('mousedown', (e) => {
            this.isPickingColor = true;
            handleMove(e);
        });

        window.addEventListener('mousemove', (e) => {
            if (this.isPickingColor) handleMove(e);
        });

        window.addEventListener('mouseup', () => {
            this.isPickingColor = false;
        });

        // Touch support
        this.pickerCanvas.addEventListener('touchstart', (e) => {
            this.isPickingColor = true;
            handleMove(e); e.preventDefault();
        }, { passive: false });
        window.addEventListener('touchmove', (e) => {
            if (this.isPickingColor) handleMove(e);
        }, { passive: false });
        window.addEventListener('touchend', () => {
            this.isPickingColor = false;
        });

        this.renderColorPicker();
        this.updateColorFromHSV();
    }

    renderColorPicker() {
        if (!this.pickerCtx) return;
        const ctx = this.pickerCtx;
        const size = this.pickerCanvas.width;
        const center = size / 2;
        const ringRadius = 70;
        const ringWidth = 15;

        ctx.clearRect(0, 0, size, size);

        // Draw Color Ring
        for (let i = 0; i < 360; i++) {
            const startAngle = (i - 1) * Math.PI / 180;
            const endAngle = (i + 1) * Math.PI / 180;
            ctx.beginPath();
            ctx.arc(center, center, ringRadius, startAngle, endAngle);
            ctx.strokeStyle = `hsl(${i}, 100%, 50%)`;
            ctx.lineWidth = ringWidth;
            ctx.stroke();
        }

        // Draw S/V Square in the middle
        const sqSize = 70;
        const sqX = center - sqSize / 2;
        const sqY = center - sqSize / 2;

        // Base color for saturation gradient
        ctx.fillStyle = `hsl(${this.currentHue}, 100%, 50%)`;
        ctx.fillRect(sqX, sqY, sqSize, sqSize);

        // Saturation gradient (white to transparent)
        const satGrad = ctx.createLinearGradient(sqX, sqY, sqX + sqSize, sqY);
        satGrad.addColorStop(0, 'white');
        satGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = satGrad;
        ctx.fillRect(sqX, sqY, sqSize, sqSize);

        // Value gradient (transparent to black)
        const valGrad = ctx.createLinearGradient(sqX, sqY, sqX, sqY + sqSize);
        valGrad.addColorStop(0, 'transparent');
        valGrad.addColorStop(1, 'black');
        ctx.fillStyle = valGrad;
        ctx.fillRect(sqX, sqY, sqSize, sqSize);
    }

    handleColorPickerInteraction(x, y) {
        const size = this.pickerCanvas.width;
        const center = size / 2;
        const dx = x - center;
        const dy = y - center;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Detect if interacting with ring or square
        if (dist > 55 && dist < 85) {
            // Hue change
            let angle = Math.atan2(dy, dx) * 180 / Math.PI;
            if (angle < 0) angle += 360;
            this.currentHue = angle;
        } else {
            // Square change
            const sqSize = 70;
            const sqX = center - sqSize / 2;
            const sqY = center - sqSize / 2;

            if (x >= sqX && x <= sqX + sqSize && y >= sqY && y <= sqY + sqSize) {
                this.currentSat = ((x - sqX) / sqSize) * 100;
                this.currentVal = 100 - ((y - sqY) / sqSize) * 100;
            }
        }

        this.updateColorFromHSV();
        this.renderColorPicker();
    }

    updateColorFromHSV() {
        // Simple HSV to RGB/Hex
        const h = this.currentHue / 360;
        const s = this.currentSat / 100;
        const v = this.currentVal / 100;

        let r, g, b;
        const i = Math.floor(h * 6);
        const f = h * 6 - i;
        const p = v * (1 - s);
        const q = v * (1 - f * s);
        const t = v * (1 - (1 - f) * s);

        switch (i % 6) {
            case 0: r = v, g = t, b = p; break;
            case 1: r = q, g = v, b = p; break;
            case 2: r = p, g = v, b = t; break;
            case 3: r = p, g = q, b = v; break;
            case 4: r = t, g = p, b = v; break;
            case 5: r = v, g = p, b = q; break;
        }

        const toHex = x => Math.round(x * 255).toString(16).padStart(2, '0');
        this.currentColor = `#${toHex(r)}${toHex(g)}${toHex(b)}`;

        if (this.colorPreview) {
            this.colorPreview.style.background = this.currentColor;
        }

        // Switch back to brush if picking color
        this.isEraser = this.isFilling = false;
        this.updateToolUI();
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
        const start = (e) => {
            e.stopPropagation();
            this.startDrawing(e.touches ? e.touches[0] : e);
        };
        const move = (e) => {
            if (!this.isDrawing) return;
            this.draw(e.touches ? e.touches[0] : e);
            if (e.touches) {
                try { e.preventDefault(); } catch (err) { }
            }
        };
        const stop = (e) => {
            if (this.isDrawing) {
                this.stopDrawing();
            }
        };

        this.displayCanvas.addEventListener('mousedown', start);
        window.addEventListener('mousemove', move);
        window.addEventListener('mouseup', stop);

        this.displayCanvas.addEventListener('touchstart', start, { passive: false });
        window.addEventListener('touchmove', move, { passive: false });
        window.addEventListener('touchend', stop);
    }

    setupToolListeners() {
        const brushSlider = document.getElementById('brush-size');
        if (brushSlider) {
            brushSlider.addEventListener('input', (e) => {
                this.brushSize = parseInt(e.target.value);
                const label = document.getElementById('brush-size-value');
                if (label) label.textContent = this.brushSize;
            });
        }

        document.getElementById('fill-btn')?.addEventListener('click', (e) => {
            this.isFilling = !this.isFilling;
            this.isEraser = false;
            this.updateToolUI();
        });

        document.getElementById('eraser-btn')?.addEventListener('click', (e) => {
            this.isEraser = !this.isEraser;
            this.isFilling = false;
            this.updateToolUI();
        });

        document.getElementById('clear-canvas-btn')?.addEventListener('click', () => {
            this.clearActiveLayer();
            this.saveHistory();
            this.renderDisplay();
        });

        document.getElementById('undo-btn')?.addEventListener('click', () => { this.undo(); this.renderDisplay(); });
        document.getElementById('redo-btn')?.addEventListener('click', () => { this.redo(); this.renderDisplay(); });

        // Layer Management UI
        document.getElementById('add-layer-btn')?.addEventListener('click', () => this.addLayer());
        document.getElementById('delete-layer-btn')?.addEventListener('click', () => this.deleteActiveLayer());

        document.getElementById('place-drawing-btn')?.addEventListener('click', () => this.startPlacement());
        document.getElementById('drawing-close')?.addEventListener('click', () => this.close());

        // Initial tool update
        this.updateToolUI();
    }

    updateToolUI() {
        const fillBtn = document.getElementById('fill-btn');
        const eraserBtn = document.getElementById('eraser-btn');
        const brushLabel = document.querySelector('.brush-label');

        fillBtn?.classList.toggle('active', this.isFilling);
        eraserBtn?.classList.toggle('active', this.isEraser);

        if (brushLabel) {
            brushLabel.textContent = this.isEraser ? 'Eraser Size' : 'Brush Size';
        }

        if (this.displayCanvas) {
            if (this.isEraser) {
                this.displayCanvas.style.cursor = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\'><rect x=\'4\' y=\'4\' width=\'16\' height=\'16\' fill=\'white\' stroke=\'black\' stroke-width=\'2\'/></svg>") 12 12, auto';
            } else if (this.isFilling) {
                this.displayCanvas.style.cursor = 'crosshair';
            } else {
                this.displayCanvas.style.cursor = 'crosshair';
            }
        }
    }

    open() {
        if (!this.modal) return;
        this.modal.classList.add('visible');

        // Reset art name
        const nameInput = document.getElementById('drawing-name-input');
        if (nameInput) nameInput.value = '';

        // Reset layers on open
        this.layers = [];
        this.addLayer("Background", false); // Background layer with white base
        this.addLayer("Layer 1");

        // Clear history on open
        this.history = [];
        this.historyIndex = -1;
        this.saveHistory();

        this.renderDisplay(); // Ensure white background is visible

        if (this.world.localFrog) {
            this.world.localFrog.controlsDisabled = true;
            this.world.localFrog.setDrawingMode(true);
            this.network?.sendDrawingStatus(true, this.composeLayersToDataURL());
        }
    }

    startPlacement() {
        if (this.confirmModal) {
            this.confirmModal.style.display = 'flex';
        } else {
            this.executePlacement();
        }
    }

    executePlacement() {
        // Ensure white background if background is hidden? 
        // No, we use all visible layers
        const dataURL = this.composeLayersToDataURL();
        const nameInput = document.getElementById('drawing-name-input');
        const artName = nameInput ? nameInput.value.trim() : '';

        if (!artName) {
            this.world.showToast?.('Please enter a name for your art!', 'error');
            return;
        }

        this.network?.sendPlaceWallArt(dataURL, artName);
        this.close();
    }

    addLayer(name = null, transparent = true) {
        if (this.layers.length >= 6) {
            this.world.showToast?.('Maximum 6 layers allowed!', 'error');
            return;
        }

        const layerName = name || `Layer ${this.layers.length + (this.layers[0]?.name === "Background" ? 0 : 1)}`;
        const canvas = document.createElement('canvas');
        canvas.width = this.displayCanvas.width;
        canvas.height = this.displayCanvas.height;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });

        if (!transparent) {
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        const layer = {
            name: layerName,
            visible: true,
            canvas: canvas,
            ctx: ctx,
            id: Math.random().toString(36).substr(2, 9)
        };

        this.layers.push(layer);
        this.selectLayer(this.layers.length - 1);
        this.updateLayersUI();
    }

    selectLayer(index) {
        if (index < 0 || index >= this.layers.length) return;
        this.activeLayerIndex = index;
        const activeLayer = this.layers[this.activeLayerIndex];
        this.canvas = activeLayer.canvas;
        this.ctx = activeLayer.ctx;
        this.updateLayersUI();
    }

    deleteActiveLayer() {
        if (this.layers.length <= 1) {
            this.world.showToast?.('Cannot delete the last layer!', 'error');
            return;
        }
        this.layers.splice(this.activeLayerIndex, 1);
        this.selectLayer(Math.max(0, this.activeLayerIndex - 1));
        this.saveHistory();
        this.renderDisplay();
    }

    toggleLayerVisibility(index) {
        if (index < 0 || index >= this.layers.length) return;
        this.layers[index].visible = !this.layers[index].visible;
        this.updateLayersUI();
        this.renderDisplay();
    }

    updateLayersUI() {
        const list = document.getElementById('layers-list');
        if (!list) return;

        list.innerHTML = '';
        // Display layers in reverse order (top to bottom)
        for (let i = this.layers.length - 1; i >= 0; i--) {
            const layer = this.layers[i];
            const isBackground = layer.name === "Background";
            const item = document.createElement('div');
            item.className = `layer-item ${i === this.activeLayerIndex ? 'active' : ''} ${isBackground ? 'bg-layer' : ''}`;

            item.innerHTML = `
                <div class="layer-item-content">
                    <span class="layer-index">${i + 1}</span>
                    <span class="layer-name">${layer.name}</span>
                </div>
                <div class="layer-icons">
                    <span class="layer-visibility-icon" style="opacity: ${layer.visible ? 1 : 0.3}">${layer.visible ? '👁️' : '🕶️'}</span>
                </div>
            `;

            item.addEventListener('click', () => this.selectLayer(i));
            item.querySelector('.layer-visibility-icon').addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleLayerVisibility(i);
            });

            list.appendChild(item);
        }
    }

    renderDisplay() {
        if (!this.displayCtx) return;
        this.displayCtx.clearRect(0, 0, this.displayCanvas.width, this.displayCanvas.height);

        this.layers.forEach(layer => {
            if (layer.visible) {
                this.displayCtx.drawImage(layer.canvas, 0, 0);
            }
        });
    }

    composeLayersToDataURL() {
        // Create a temporary canvas to compose everything
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = this.displayCanvas.width;
        tempCanvas.height = this.displayCanvas.height;
        const tempCtx = tempCanvas.getContext('2d');

        this.layers.forEach(layer => {
            if (layer.visible) {
                tempCtx.drawImage(layer.canvas, 0, 0);
            }
        });

        return tempCanvas.toDataURL('image/png');
    }

    close() {
        if (!this.modal) return;
        this.modal.classList.remove('visible');
        this.isDrawing = false; // Reset drawing state
        if (this.world.localFrog) {
            this.world.localFrog.controlsDisabled = false;
            this.world.localFrog.setDrawingMode(false);
            this.network?.sendDrawingStatus(false);
        }
        this.cancelPlacement();
    }

    getCanvasPos(e) {
        const rect = this.displayCanvas.getBoundingClientRect();
        return {
            x: (e.clientX - rect.left) * (this.displayCanvas.width / rect.width),
            y: (e.clientY - rect.top) * (this.displayCanvas.height / rect.height)
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

        // If eraser, use destination-out to actually erase pixels on the layer
        if (this.isEraser) {
            this.ctx.globalCompositeOperation = 'destination-out';
            this.ctx.strokeStyle = 'rgba(0,0,0,1)';
        } else {
            this.ctx.globalCompositeOperation = 'source-over';
            this.ctx.strokeStyle = this.currentColor;
        }

        this.ctx.lineWidth = this.brushSize;
        this.ctx.lineCap = this.ctx.lineJoin = 'round';
        this.ctx.stroke();
        this.lastPos = pos;
        this.renderDisplay();
    }

    stopDrawing() {
        if (this.isDrawing) {
            this.saveHistory();
        }
        this.isDrawing = false;
        this.lastPos = null;
    }

    saveHistory() {
        if (!this.ctx) return;
        // History for multi-layer: Save all layers state
        if (this.historyIndex < this.history.length - 1) {
            this.history = this.history.slice(0, this.historyIndex + 1);
        }

        // Deep copy of layer contents
        const layerStates = this.layers.map(l => {
            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = l.canvas.width;
            tempCanvas.height = l.canvas.height;
            tempCanvas.getContext('2d').drawImage(l.canvas, 0, 0);
            return {
                id: l.id,
                name: l.name,
                visible: l.visible,
                data: tempCanvas
            };
        });

        this.history.push({
            layers: layerStates,
            activeIndex: this.activeLayerIndex
        });

        if (this.history.length > this.maxHistory) {
            this.history.shift();
        } else {
            this.historyIndex++;
        }
    }

    undo() {
        if (this.historyIndex > 0) {
            this.historyIndex--;
            this.restoreHistoryState(this.history[this.historyIndex]);
        }
    }

    redo() {
        if (this.historyIndex < this.history.length - 1) {
            this.historyIndex++;
            this.restoreHistoryState(this.history[this.historyIndex]);
        }
    }

    restoreHistoryState(state) {
        // Restore layers from saved canvases
        this.layers = state.layers.map(ls => {
            const canvas = document.createElement('canvas');
            canvas.width = ls.data.width;
            canvas.height = ls.data.height;
            const ctx = canvas.getContext('2d', { willReadFrequently: true });
            ctx.drawImage(ls.data, 0, 0);
            return {
                id: ls.id,
                name: ls.name,
                visible: ls.visible,
                canvas: canvas,
                ctx: ctx
            };
        });
        this.selectLayer(state.activeIndex);
        this.updateLayersUI();
    }

    clearActiveLayer() {
        if (!this.ctx) return;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // If it's the bottom layer (index 0), fill with white after clearing
        if (this.activeLayerIndex === 0) {
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }

    floodFill(startX, startY, colorHex) {
        const width = this.canvas.width;
        const height = this.canvas.height;
        const imgData = this.ctx.getImageData(0, 0, width, height);
        const data = imgData.data;
        const r = parseInt(colorHex.slice(1, 3), 16), g = parseInt(colorHex.slice(3, 5), 16), b = parseInt(colorHex.slice(5, 7), 16);
        const startPos = (startY * width + startX) * 4;
        const sR = data[startPos], sG = data[startPos + 1], sB = data[startPos + 2], sA = data[startPos + 3];

        // If eraser, we want to fill with transparency
        const targetR = this.isEraser ? 0 : r;
        const targetG = this.isEraser ? 0 : g;
        const targetB = this.isEraser ? 0 : b;
        const targetA = this.isEraser ? 0 : 255;

        if (sR === targetR && sG === targetG && sB === targetB && sA === targetA) return;

        const stack = [[startX, startY]];
        while (stack.length) {
            const [x, y] = stack.pop();
            if (x < 0 || x >= width || y < 0 || y >= height) continue;
            const pos = (y * width + x) * 4;
            if (data[pos] === sR && data[pos + 1] === sG && data[pos + 2] === sB && data[pos + 3] === sA) {
                data[pos] = targetR; data[pos + 1] = targetG; data[pos + 2] = targetB; data[pos + 3] = targetA;
                stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
            }
        }
        this.ctx.putImageData(imgData, 0, 0);
        this.renderDisplay();
        this.saveHistory();
    }

    startPlacement() {
        if (this.confirmModal) {
            this.confirmModal.style.display = 'flex';
        } else {
            this.executePlacement();
        }
    }

    executePlacement() {
        const nameInput = document.getElementById('drawing-name-input');
        this.artName = (nameInput && nameInput.value.trim()) || 'Untitled';

        this.currentDrawingData = this.composeLayersToDataURL();

        // Check if anything was drawn beyond the default white background
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = this.displayCanvas.width;
        tempCanvas.height = this.displayCanvas.height;
        const tempCtx = tempCanvas.getContext('2d');
        tempCtx.drawImage(this.displayCanvas, 0, 0);
        const pixels = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height).data;

        let empty = true;
        for (let i = 0; i < pixels.length; i += 4) {
            // A pixel is non-empty if it's not the default white background
            // White is (255, 255, 255). We check if it deviates significantly or has alpha changes.
            if (pixels[i + 3] > 0 && (pixels[i] < 250 || pixels[i + 1] < 250 || pixels[i + 2] < 250)) {
                empty = false;
                break;
            }
        }

        if (empty) {
            this.world.showToast?.('Draw something first! 🎨', 'error');
            return;
        }

        console.log('🚀 Entering placement mode for:', this.artName);

        // Hide both modals
        if (this.modal) this.modal.classList.remove('visible');
        if (this.confirmModal) this.confirmModal.style.display = 'none';

        if (this.world.localFrog) {
            this.world.localFrog.controlsDisabled = false;
            this.world.localFrog.setDrawingMode(false);
            this.network?.sendDrawingStatus(false);
        }

        this.isPlacingArt = true;
        this.placementRotation = 0;
        this.createPlacementPreview();
        this.world.showToast?.('Click to place! | Rotate: [Q]/[E] | Cancel: [ESC]', 'info');
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
                // Distance check: auto-close if too far
                const playerPos = this.world.localFrog?.mesh?.position;
                const artPos = this.selectedArt.position;
                if (playerPos && artPos && playerPos.distanceTo(artPos) > 10) {
                    this.deselectArt();
                } else {
                    // Update contextual UI position
                    this.updateEditUIPosition();
                    if (input.keys?.KeyM) this.moveSelectedArt();
                    if (input.keys?.KeyG) this.trashSelectedArt();
                    if (input.keys?.Escape) this.deselectArt();
                }
            }
            if (this.modal?.classList.contains('visible') && this.world.localFrog) {
                this.world.localFrog.updateDrawingTexture(this.displayCanvas);
                const now = Date.now();
                if (now - this.lastDrawSyncTime > 200) {
                    if (this.isDrawing) this.network?.sendDrawingUpdate(this.composeLayersToDataURL());
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
            // Only show tooltip if player is close enough (within 10 units)
            const playerPos = this.world.localFrog?.mesh?.position;
            const artPos = found.position;
            const distance = playerPos && artPos ? playerPos.distanceTo(artPos) : Infinity;

            if (distance > 10) {
                this.tooltip.style.display = 'none';
                this.hoveredArt = null; // Don't allow selection if too far
                return;
            }

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
            this.updateEditUIPosition();
        }
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

    updateEditUIPosition() {
        if (!this.selectedArt || !this.editUI || !this.world.camera) return;

        const vector = this.selectedArt.position.clone();
        vector.project(this.world.camera);

        const x = (vector.x + 1) * window.innerWidth / 2;
        const y = (-vector.y + 1) * window.innerHeight / 2;

        // Position modal slightly above the art
        this.editUI.style.left = `${x}px`;
        this.editUI.style.top = `${y - 20}px`;
        this.editUI.style.transform = 'translate(-50%, -100%)';
    }
}
