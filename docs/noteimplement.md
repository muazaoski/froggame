# 📝 Note System Implementation Guide

This document explains how the Note System is implemented in the Frog Multiplayer game, including important architectural decisions and lessons learned from debugging.

---

## Overview

The Note System allows players to create and place virtual notes on surfaces in the 3D world. Notes consist of:
- **Title** (displayed on the note)
- **Content** (full message, shown when clicked)
- **Paper Color** (customizable)
- **Text Color** (customizable)

---

## Architecture

### Key Files

| File | Purpose |
|------|---------|
| `src/NoteSystem.js` | Core note system logic (placement, rendering, interaction) |
| `src/main.js` | Game loop integration, input handling for placement |
| `src/Input.js` | Mouse/keyboard input management |
| `src/Frog.js` | Player character (contains punch logic that can conflict) |
| `src/World.js` | World management (contains frog update loop) |
| `server/index.js` | Server-side note persistence |
| `index.html` | UI modals for note creation/viewing |

---

## Input Handling Flow

### Critical: Order of Operations

The game loop in `main.js` processes input in this order:

```
1. HUD Update (debug)
2. drawingSystem.update(input)
3. noteSystem.update(input)
4. world.step(dt, input)        ← DO NOT update local frog here!
5. if (world.localFrog) {
     - Check placement mode
     - Handle click for placement   ← Placement happens HERE
     - frog.update(..., isPlacing)  ← Pass isPlacing flag
   }
```

### ⚠️ CRITICAL LESSON: Avoid Duplicate Updates

**Problem We Encountered:**
The local frog was being updated in TWO places:
1. `World.step()` — called `frog.update(dt, input, ...)` WITHOUT `isPlacing`
2. `main.js` — called `frog.update(dt, input, ..., isPlacing)` WITH `isPlacing`

The first call would consume the click input (via `Frog.updatePunch()`), so by the time the placement code ran, `input.leftClickPunch` was already `false`.

**Solution:**
Only update the LOCAL frog in `main.js`, where we have access to the `isPlacing` flag. Remote frogs can still be updated in `World.step()`.

```javascript
// In World.step():
if (frog.isLocal) {
    // Local frog is updated in main.js with isPlacing parameter
    // Do NOT call frog.update here or it will consume input before placement handling
} else {
    frog.update(dt, null, frog.targetLook);
}
```

---

## Placement Mode Flow

### 1. User Opens Note Creator (Press `N`)

```javascript
// NoteSystem.js
openCreator() {
    this.creatorModal.classList.add('visible');
    if (this.world.localFrog) this.world.localFrog.controlsDisabled = true;
}
```

### 2. User Clicks "Place" Button

```javascript
// NoteSystem.js
startPlacement() {
    // Validate inputs
    if (!title || !content) {
        this.world.showToast?.('Please add a title and message!', 'error');
        return;
    }

    // Hide modal but keep data
    this.creatorModal.classList.remove('visible');
    
    // Enter placement mode
    this.isPlacing = true;
    this.placementRotation = 0;
    this.createPlacementPreview();
    
    // Re-enable controls for movement
    if (this.world.localFrog) this.world.localFrog.controlsDisabled = false;
}
```

### 3. Preview Follows Mouse (Every Frame)

```javascript
// NoteSystem.js - called from update() when isPlacing=true
updatePlacement(input) {
    // Handle rotation keys
    if (input.keys?.KeyQ) this.placementRotation += 0.05;
    if (input.keys?.KeyE) this.placementRotation -= 0.05;

    // Raycast to find surface
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(new THREE.Vector2(input.mouse.x, input.mouse.y), this.world.camera);
    const intersects = raycaster.intersectObjects(this.world.scene.children, true);

    // Find valid hit (filter out frogs, ball, preview meshes)
    let hit = null;
    for (const intersection of intersects) {
        // ... filtering logic ...
        if (!ignore && intersection.object.visible) { hit = intersection; break; }
    }

    if (hit) {
        // Position preview on surface
        const normal = hit.face.normal.clone()...
        this.placementPreview.position.copy(hit.point).add(normal.clone().multiplyScalar(0.02));
        this.placementPreview.lookAt(hit.point.clone().add(normal));
        this.placementPreview.rotateZ(this.placementRotation);
        this.placementPreview.visible = true;

        // Store for placement
        this._lastHit = { point: hit.point.clone(), normal: normal };
    } else {
        this.placementPreview.visible = false;
        this._lastHit = null;
    }
}
```

### 4. User Clicks to Place (main.js handles this!)

```javascript
// main.js - inside animate() loop
if (world.localFrog) {
    const isPlacing = drawingSystem.isPlacingArt || noteSystem.isPlacing;

    if (input.leftClickPunch) {
        if (drawingSystem.isPlacingArt) {
            drawingSystem.tryPlaceArt(input);
            input.consumePunch();
        } else if (noteSystem.isPlacing) {
            noteSystem.tryPlace(input);  // ← Placement happens here
            input.consumePunch();
        }
    }

    // Pass isPlacing to frog update so punch is blocked
    world.localFrog.update(dt, input, lookTarget, world.cameraOrbitAngle, isPlacing);
}
```

### 5. Note Is Placed

```javascript
// NoteSystem.js
tryPlace(input) {
    if (!this.isPlacing || !this._lastHit) return false;

    // Distance check
    const playerPos = this.world.localFrog?.mesh?.position;
    if (playerPos && playerPos.distanceTo(this._lastHit.point) > 15) {
        this.world.showToast?.('Too far! Get closer.', 'error');
        return true;
    }

    // Consume input
    input.consumePunch?.();

    // Send to server
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

    return true;
}
```

---

## Blocking Punch During Placement

The `Frog.update()` method receives an `isPlacing` parameter:

```javascript
// Frog.js
update(dt, input, lookTarget, cameraOrbitAngle = 0, isPlacing = false) {
    // ... other updates ...
    this.updatePunch(dt, input, isPlacing);
}

updatePunch(dt, input, isPlacingMode) {
    if (!this.rightLeg || !this.rightLegBasePos) return;

    // Prevent punch if we are placing art/notes
    if (isPlacingMode) {
        return;  // ← Exit early, no punch!
    }

    // Normal punch logic...
    if (input && input.consumePunch() && this.punchCooldownTimer <= 0 && !this.isPunching) {
        this.isPunching = true;
        // ...
    }
}
```

---

## Common Pitfalls & Solutions

### 1. Input Being Consumed Too Early

**Symptom:** `input.leftClickPunch` is `false` when it should be `true`.

**Cause:** Another system (e.g., `World.step()`, `drawingSystem.update()`) is calling `input.consumePunch()` or calling `frog.update()` before the placement code runs.

**Solution:** Ensure placement handling happens BEFORE any code that might consume the input.

### 2. Player Still Punches During Placement

**Symptom:** Clicking to place a note also triggers a punch animation.

**Cause:** The `isPlacing` flag isn't being passed to `Frog.update()`.

**Solution:** Always pass the `isPlacing` flag:
```javascript
world.localFrog.update(dt, input, lookTarget, world.cameraOrbitAngle, isPlacing);
```

### 3. Service Worker Caching Old Code

**Symptom:** Code changes don't seem to take effect even after deployment.

**Solution:** 
- Bump service worker cache version
- Or disable SW caching entirely for debugging
- Clear browser site data (Application → Storage → Clear site data)

### 4. Multiple Update Loops

**Symptom:** Frog is updated twice per frame, causing double input consumption.

**Solution:** Only update local frog in ONE place (main.js), not in World.step().

---

## Server-Side Implementation

```javascript
// server/index.js
socket.on('placeNote', (noteData) => {
    const note = {
        id: generateNoteId(),
        authorId: socket.id,
        authorUserId: socket.userId,
        authorName: socket.playerName,
        title: noteData.title,
        content: noteData.content,
        paperColor: noteData.paperColor,
        textColor: noteData.textColor,
        position: noteData.position,
        normal: noteData.normal,
        rotation: noteData.rotation,
        createdAt: Date.now()
    };

    // Persist to database/file
    saveNote(note);

    // Broadcast to all clients
    io.emit('notePlaced', note);
});
```

---

## Testing Checklist

- [ ] Can create a note with title and content
- [ ] Preview follows mouse cursor
- [ ] Preview snaps to surfaces correctly
- [ ] Can rotate preview with Q/E keys
- [ ] Clicking places the note
- [ ] Player does NOT punch when placing
- [ ] Note appears for all connected players
- [ ] Can click on note to read full content
- [ ] ESC cancels placement mode
- [ ] Notes persist after page refresh

---

## Debug Logging (Remove After Testing)

The following debug logs were added during development:

```javascript
// Input.js - onMouseDown
console.log('[INPUT] MouseDown', { button, chatOpen, isUIClick, targetElement, willSetLeftClick });

// main.js - animate loop
console.log('[FRAME DEBUG] Placing mode active', { hasLocalFrog, leftClickPunch, noteIsPlacing });

// NoteSystem.js - tryPlace
console.log('[NoteSystem] tryPlace called', { isPlacing, hasLastHit });
```

**Remember to remove these before production!**

---

## Summary

The key insight is that **input handling order matters**. The placement system must:

1. Check for clicks BEFORE the frog's update loop
2. Consume the input to prevent other systems from using it
3. Pass an `isPlacing` flag to block punch animations
4. Only update the local frog in ONE place (main.js, not World.step)

By following these patterns, any placement-based system (notes, drawings, items) can coexist with the game's combat mechanics without conflicts.
