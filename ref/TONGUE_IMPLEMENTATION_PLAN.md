# 🐸 Tongue Mechanic Rework — Implementation Plan
## Based on ref1.md specifications

---

## ✅ IMPLEMENTATION COMPLETE (2025-12-20)

All 8 phases have been implemented:
- Phase 1: Config Constants ✅
- Phase 2: Target Selection System ✅
- Phase 3: State Machine Refactor ✅
- Phase 4: Duration-Based Animation ✅
- Phase 5: Resolution Logic ✅
- Phase 6: Visual Feedback ✅
- Phase 7: Debug Tools (F3 key) ✅
- Phase 8: Server Sync ✅

---
| **Grapple Hooks** | Searched during extension | ❌ Should be pre-selected in AIM phase |
| **Frog Pull** | Detected during extension with distance check | ❌ Should be pre-selected target |
| **Retargeting** | Can switch from `extending` → `grappling` mid-flight | ❌ Violates "no retargeting" rule |
| **Magnet Radius** | Not implemented | ❌ Required for aim forgiveness |
| **Visual Feedback** | Basic cursor indicator | ⚠️ Needs pre-fire feedback when target in cone |
| **Tongue Visual** | Simple line + tip sphere | ⚠️ Could use thickness taper cheats |

### Current File Locations
- `src/Frog.js` — Tongue state machine, shooting, updating, visuals (lines 1138-1469)
- `src/World.js` — Cursor indicator, grapple hooks (lines 470-585)
- `src/Config.js` — Tongue config values (lines 123-131)
- `src/Input.js` — Right-click tongue input handling
- `src/main.js` — Tongue input consumption (lines 498-504)

---

## 🎯 Implementation Plan

### Phase 1: Config & Constants Setup
**Estimated: 15 min | Files: `Config.js`**

Add new constants required by spec:

```javascript
// Tongue Mechanics (REWORKED)
tongueRange: 12.0,              // Max tongue reach (was 15)
tongueExtendDuration: 0.15,     // 150ms extension (replaces tongueSpeed)
tongueRetractDuration: 0.1,     // 100ms retraction
tongueConeAngle: 18,            // Degrees from forward (not radians)
tongueMagnetRadius: 0.4,        // Snap radius for aim forgiveness
tongueAngleWeight: 0.7,         // Scoring weight for angle
tongueDistanceWeight: 0.3,      // Scoring weight for distance
tongueCooldown: 0.5,            // Seconds between uses
tongueGrappleForce: 25,         // Pull force when attached
tongueGrabForce: 15,            // Pull force on frogs
tongueColor: '#ff6b9d',
tongueTipSize: 0.15,

// Debug
tongueDebugEnabled: false,      // Toggle with F3 or similar
```

**Tasks:**
- [ ] Update Config.js with new constants
- [ ] Remove deprecated `tongueSpeed` (will use duration-based animation)

---

### Phase 2: Target Selection System (CORE REWORK)
**Estimated: 45 min | Files: `Frog.js`, `World.js`**

Create a new cone-based target selection that runs **once** on tongue fire.

#### New Method: `selectTongueTarget(world)`

```javascript
/**
 * PHASE 1: AIM & TARGET LOCK
 * Runs once, in 1 frame, when tongue is fired.
 * Returns: { targetId, targetType, lockPointWorld } or null
 */
selectTongueTarget(world) {
    const mouthPos = this.getMouthPosition();
    const cameraForward = this.getCameraForward(); // Or frog forward
    
    const candidates = [];
    const maxRange = Config.tongueRange;
    const coneAngleRad = THREE.MathUtils.degToRad(Config.tongueConeAngle);
    
    // === CANDIDATE GATHERING ===
    
    // 1. Other Players
    for (const [id, frog] of Object.entries(world.frogs)) {
        if (id === this.id) continue;
        if (frog.isDead) continue;
        
        const toTarget = new THREE.Vector3().subVectors(frog.mesh.position, mouthPos);
        const distance = toTarget.length();
        if (distance > maxRange) continue;
        
        // Cone check
        const angle = toTarget.normalize().angleTo(cameraForward);
        if (angle > coneAngleRad) continue;
        
        // Behind check
        if (toTarget.dot(cameraForward) < 0) continue;
        
        candidates.push({
            type: 'frog',
            id: id,
            object: frog,
            point: frog.mesh.position.clone(),
            distance,
            angle
        });
    }
    
    // 2. Grapple Hooks
    for (const hook of world.grappleHooks) {
        const toTarget = new THREE.Vector3().subVectors(hook.position, mouthPos);
        const distance = toTarget.length();
        if (distance > maxRange) continue;
        
        const angle = toTarget.normalize().angleTo(cameraForward);
        if (angle > coneAngleRad) continue;
        
        candidates.push({
            type: 'hook',
            id: null,
            object: hook,
            point: hook.position.clone(),
            distance,
            angle
        });
    }
    
    // 3. Scooters (if applicable)
    for (const scooter of world.scooters) {
        if (!scooter.isRideable()) continue;
        // ... similar logic
    }
    
    // 4. Ball
    if (world.ball && world.ball.mesh) {
        const toTarget = new THREE.Vector3().subVectors(world.ball.mesh.position, mouthPos);
        const distance = toTarget.length();
        if (distance <= maxRange) {
            const angle = toTarget.normalize().angleTo(cameraForward);
            if (angle <= coneAngleRad) {
                candidates.push({
                    type: 'ball',
                    id: null,
                    object: world.ball,
                    point: world.ball.mesh.position.clone(),
                    distance,
                    angle
                });
            }
        }
    }
    
    // === SCORING & SELECTION ===
    if (candidates.length === 0) {
        // No targets - shoot tongue to max range or wall
        return this.getWallTarget(world, mouthPos, cameraForward);
    }
    
    // Normalize and score
    const maxAngle = coneAngleRad;
    const scoredCandidates = candidates.map(c => ({
        ...c,
        score: (Config.tongueAngleWeight * (c.angle / maxAngle)) +
               (Config.tongueDistanceWeight * (c.distance / maxRange))
    }));
    
    // Lowest score wins
    scoredCandidates.sort((a, b) => a.score - b.score);
    
    return scoredCandidates[0];
}
```

**Tasks:**
- [ ] Create `getMouthPosition()` helper
- [ ] Create `getCameraForward()` or use frog's facing direction
- [ ] Implement `selectTongueTarget()` method
- [ ] Implement `getWallTarget()` for when no interactive targets found

---

### Phase 3: State Machine Refactor
**Estimated: 30 min | Files: `Frog.js`**

Replace the current state machine with a cleaner 3-phase approach.

#### New Tongue State Object

```javascript
// In constructor:
this.tongue = {
    state: 'idle',          // 'idle' | 'extending' | 'attached' | 'retracting'
    target: null,           // { type, id, object, point }
    lockedPoint: null,      // THREE.Vector3 - world position locked at fire
    progress: 0,            // 0-1 for animation
    startTime: 0,           // For duration-based animation
    cooldownTimer: 0
};
```

#### Refactored `shootTongue()`

```javascript
shootTongue(world) {
    if (this.tongue.state !== 'idle') return;
    if (this.tongue.cooldownTimer > 0) return;
    if (this.isRidingScooter) return;
    
    // === PHASE 1: AIM & LOCK (happens instantly) ===
    const target = this.selectTongueTarget(world);
    
    if (!target) {
        // Optional: Play "miss" sound, short tongue poke animation
        return;
    }
    
    // LOCK the target - no more aiming from here
    this.tongue.target = target;
    this.tongue.lockedPoint = target.point.clone();
    this.tongue.state = 'extending';
    this.tongue.startTime = performance.now();
    this.tongue.progress = 0;
    
    // Create visual if needed
    this.createTongueVisual();
    this.tongueLine.visible = true;
    this.tongueTip.visible = true;
    
    // Store world ref for later
    this.world = world;
}
```

**Tasks:**
- [ ] Replace all `this.tongueState` with `this.tongue.state`
- [ ] Replace all tongue-related instance variables with `this.tongue` object
- [ ] Refactor `shootTongue()` to use new target selection
- [ ] Remove all mid-flight raycasting

---

### Phase 4: Animation System (GSAP or Time-Based)
**Estimated: 30 min | Files: `Frog.js`**

Replace frame-based progress with duration-based easing.

#### Option A: Using GSAP (Recommended for feel)

```javascript
// In shootTongue():
import gsap from 'gsap'; // Add to dependencies

gsap.to(this.tongue, {
    progress: 1,
    duration: Config.tongueExtendDuration,
    ease: "power3.out",
    onComplete: () => this.resolveTongue()
});
```

#### Option B: Manual Easing (No Dependencies)

```javascript
updateTongue(dt) {
    if (this.tongue.state === 'idle') {
        this.tongue.cooldownTimer = Math.max(0, this.tongue.cooldownTimer - dt);
        return;
    }
    
    const elapsed = (performance.now() - this.tongue.startTime) / 1000;
    
    if (this.tongue.state === 'extending') {
        const duration = Config.tongueExtendDuration;
        const t = Math.min(elapsed / duration, 1);
        
        // Power3.out easing: 1 - (1 - t)^3
        this.tongue.progress = 1 - Math.pow(1 - t, 3);
        
        if (t >= 1) {
            this.resolveTongue();
        }
    } else if (this.tongue.state === 'retracting') {
        const duration = Config.tongueRetractDuration;
        const t = Math.min(elapsed / duration, 1);
        
        // Linear or slight ease
        this.tongue.progress = 1 - t;
        
        if (t >= 1) {
            this.finishTongue();
        }
    } else if (this.tongue.state === 'attached') {
        // Pull physics here
        this.updateGrapplePull(dt);
    }
    
    // Always update visual
    this.updateTongueVisual();
}
```

**Tasks:**
- [ ] Decide: GSAP vs manual easing (recommend manual to avoid dependency)
- [ ] Implement time-based animation in `updateTongue()`
- [ ] Add proper easing curves

---

### Phase 5: Resolution Phase (Hit/Miss)
**Estimated: 30 min | Files: `Frog.js`**

Implement the resolution logic that happens when tongue reaches target.

```javascript
resolveTongue() {
    const target = this.tongue.target;
    
    // Check if target still valid
    if (!target || !target.object) {
        this.tongue.state = 'retracting';
        this.tongue.startTime = performance.now();
        return;
    }
    
    // Get current target position
    const currentPos = target.object.position || target.object.mesh?.position;
    
    if (!currentPos) {
        this.tongue.state = 'retracting';
        this.tongue.startTime = performance.now();
        return;
    }
    
    // Check magnet radius - if target moved too far, it's a miss
    const lockPoint = this.tongue.lockedPoint;
    const movedDistance = lockPoint.distanceTo(currentPos);
    
    if (movedDistance > Config.tongueMagnetRadius * 3) {
        // Target escaped - miss!
        console.log('Tongue miss - target moved too far');
        this.tongue.state = 'retracting';
        this.tongue.startTime = performance.now();
        this.playMissEffect();
        return;
    }
    
    // SUCCESS - Apply effect based on target type
    switch (target.type) {
        case 'frog':
            this.pullFrog(target.object);
            this.tongue.state = 'retracting';
            break;
            
        case 'hook':
        case 'wall':
            this.tongue.state = 'attached';
            // Snap locked point to current (magnet effect)
            this.tongue.lockedPoint.copy(currentPos);
            this.playHitEffect();
            break;
            
        case 'ball':
            this.pullBall(target.object);
            this.tongue.state = 'retracting';
            break;
    }
    
    this.tongue.startTime = performance.now();
}
```

**Tasks:**
- [ ] Create `resolveTongue()` method
- [ ] Create `pullFrog()` method (apply force to other frog)
- [ ] Create `pullBall()` method
- [ ] Create `updateGrapplePull()` for attached state
- [ ] Create `finishTongue()` for cleanup

---

### Phase 6: Visual Feedback
**Estimated: 30 min | Files: `Frog.js`, `World.js`**

#### Pre-Fire Indicator (World.js)
Update the tongue cursor indicator to show when valid targets are available.

```javascript
updateTongueCursorIndicator(input) {
    // ... existing code ...
    
    // NEW: Wider/different color when target is in cone
    const potentialTargets = this.getPotentialTongueTargets(this.localFrog);
    
    if (potentialTargets.length > 0) {
        // Target available - subtle indicator change
        this.tongueCursorIndicator.material.color.setHex(0x00ff88); // Green tint
        this.tongueCursorIndicator.scale.setScalar(1.3);
    } else {
        this.tongueCursorIndicator.material.color.set(Config.tongueColor);
        this.tongueCursorIndicator.scale.setScalar(1);
    }
}
```

#### Hit/Miss Effects

```javascript
playHitEffect() {
    // Camera punch (slight zoom/shake)
    if (this.world) {
        this.world.triggerScreenShake(0.5, 0.1);
    }
    
    // TODO: Add sound cue (wet snap)
    // TODO: Stretch recoil on frog body
}

playMissEffect() {
    // Slight over-extension animation
    // Quick embarrassed retract
    // Funny sound cue
}
```

**Tasks:**
- [ ] Update tongue cursor indicator to show target availability
- [ ] Add hit effect (camera punch, sound hook)
- [ ] Add miss effect (over-extend, sound hook)
- [ ] (Optional) Add tongue thickness/taper visual

---

### Phase 7: Debug Tools
**Estimated: 20 min | Files: `World.js`, `Config.js`**

Add toggleable debug visualization.

```javascript
// Toggle with F3 key
updateTongueDebug() {
    if (!Config.tongueDebugEnabled) return;
    
    // Draw cone volume
    if (!this.tongueDebugCone) {
        const coneGeo = new THREE.ConeGeometry(
            Math.tan(THREE.MathUtils.degToRad(Config.tongueConeAngle)) * Config.tongueRange,
            Config.tongueRange,
            32,
            1,
            true
        );
        const coneMat = new THREE.MeshBasicMaterial({
            color: 0x00ff00,
            transparent: true,
            opacity: 0.1,
            wireframe: true
        });
        this.tongueDebugCone = new THREE.Mesh(coneGeo, coneMat);
        this.scene.add(this.tongueDebugCone);
    }
    
    // Position cone at frog mouth, pointing forward
    // ... position/rotation logic
    
    // Highlight selected target
    // Draw magnet radius spheres around targets
}
```

**Tasks:**
- [ ] Add F3 keybind to toggle debug
- [ ] Create debug cone visualization
- [ ] Highlight selected target with sphere
- [ ] Draw magnet radius around candidates

---

### Phase 8: Server Sync (Optional Enhancement)
**Estimated: 20 min | Files: `Frog.js`, `Network.js`**

Align with spec's server communication model.

```javascript
// After tongue resolution:
if (this.tongue.target && this.world?.network) {
    this.world.network.socket.emit('tongueResult', {
        sourceId: this.id,
        targetId: this.tongue.target.id,
        type: this.tongue.target.type === 'frog' ? 'pull' :
              this.tongue.state === 'attached' ? 'grab' : 'fail'
    });
}
```

**Tasks:**
- [ ] Define `tongueResult` event structure
- [ ] Send tongue result to server
- [ ] Server validates and broadcasts
- [ ] (Optional) Server applies authoritative effects

---

## 📋 Implementation Checklist

### Priority 1 — Core Mechanics (Must Have)
- [ ] Phase 1: Config constants
- [ ] Phase 2: Target selection system
- [ ] Phase 3: State machine refactor
- [ ] Phase 4: Duration-based animation
- [ ] Phase 5: Resolution logic

### Priority 2 — Polish (Should Have)
- [ ] Phase 6: Visual feedback
- [ ] Phase 7: Debug tools

### Priority 3 — Network (Nice to Have)
- [ ] Phase 8: Server sync

---

## 🚀 Quick Start: Minimal Viable Rework

If time is short, focus on these **3 key changes**:

1. **Lock target before animation** — No more `checkTongueHitDuringExtend()`
2. **Cone-based selection** — Replace direction clamping with candidate scoring
3. **Time-based animation** — Replace `tongueProgress += speed * dt` with duration-based

---

## 📝 Notes

- **Keep backwards compatibility** — Old `tongueCooldown`, `tongueGrappleForce` still work
- **No GSAP required** — Manual easing is fine for now
- **Debug tools removable** — Guard with `if (Config.tongueDebugEnabled)`
- **Test with multiple frogs** — Make sure frog-targeting works in multiplayer

---

*Last updated: 2025-12-20*
