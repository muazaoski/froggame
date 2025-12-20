# 🐸 Frog Multiplayer  
## reference1.md — Tongue Mechanic Rework (Hero Feature)

### Status
🔴 REQUIRED REWORK  
This document defines the **authoritative design and implementation rules** for the Tongue mechanic.

The Tongue is a **hero interaction system**.  
If the Tongue feels bad, the game feels bad.

---

## 🎯 CORE GOALS

The Tongue must:
- Feel **accurate even when forgiving**
- Commit clearly (no indecision mid-flight)
- Reward intention, not pixel precision
- Be readable, punchy, and funny
- Never feel jittery, random, or “betraying”

This system prioritizes **feel over realism**.

---

## 🚨 NON-NEGOTIABLE RULES

1. Tongue targeting is **100% client-side**
2. Tongue uses **aim assistance**, not raw ray precision
3. Target is **locked BEFORE animation**
4. Tongue NEVER retargets mid-flight
5. Tongue visuals do NOT depend on physics simulation
6. Server validates results, not aim

Breaking any rule invalidates the implementation.

---

## 🧠 HIGH-LEVEL DESIGN

### Tongue = 3 Explicit Phases

[ AIM & LOCK ] → [ EXTEND & COMMIT ] → [ RESOLVE & RETRACT ]

Copy code

Each phase has:
- a single responsibility
- clear entry & exit conditions
- no overlap in decision-making

---

## PHASE 1 — AIM & TARGET LOCK

### When This Phase Runs
- Triggered the instant the player presses the Tongue input
- Happens in **1 frame**

### Objective
Select the **best possible target** using **forgiving world-space logic**.

---

### ❌ WHAT NOT TO DO

- ❌ Single raycast only
- ❌ Screen-space pixel accuracy
- ❌ Re-evaluating aim every frame
- ❌ Physics collision checks

---

### ✅ TARGET SELECTION METHOD (MANDATORY)

Tongue targeting MUST use a **cone-based selection**.

#### Step 1 — Candidate Gathering
Collect all possible tongue targets within range:
- Players
- Balls
- Scooters
- Environment anchors (if applicable)

Ignore:
- Dead players
- Invalid or disabled objects
- Objects behind the player

---

#### Step 2 — Cone Filtering

Define:
```js
MAX_RANGE = 12.0
CONE_ANGLE = 18°   // forgiving by design
For each candidate:

Compute vector from frog mouth to target

Compute dot product with camera forward vector

Reject if outside cone angle

Reject if distance > MAX_RANGE

Step 3 — Scoring & Selection
Each remaining candidate is scored:

text
Copy code
score = (angleWeight * normalizedAngle)
      + (distanceWeight * normalizedDistance)
Recommended weights:

angleWeight = 0.7

distanceWeight = 0.3

The lowest score wins.

🎯 Aim Forgiveness (Critical)
Once a target is selected:

Allow a magnet radius (0.3 – 0.5m)

If the tongue endpoint enters this radius → snap

This is intentional.
Players must feel skilled even when imperfect.

OUTPUT OF PHASE 1
Store:

js
Copy code
tongueState = {
  targetId,
  lockPointWorld,
  lockedAtTime
}
From this point on:
❌ NO MORE AIM LOGIC
❌ NO MORE RAYCASTS

The decision is final.

PHASE 2 — EXTEND & COMMIT (VISUAL ONLY)
Objective
Sell the action emotionally.

The tongue commits immediately toward the locked target.

IMPLEMENTATION RULES
Tongue extension is animated, not simulated

Use GSAP or equivalent

Duration: 120–180ms (tunable)

Ease: power3.out or equivalent snap curve

js
Copy code
gsap.to(tongue, {
  length: targetDistance,
  duration: 0.15,
  ease: "power3.out"
});
VISUAL DESIGN RULES
Tongue direction is locked at fire time

Tongue does NOT wobble with camera

Tongue thickness cheats are allowed:

thicker near frog

slight taper at tip

These cheats improve perceived accuracy.

PHASE 3 — RESOLUTION
Objective
Resolve outcome clearly and decisively.

SUCCESS CONDITIONS
If, at resolution time:

Target still exists

Distance ≤ magnet radius

Line of sight not fully blocked (optional)

→ Tongue attaches

FAILURE CONDITIONS
If:

Target destroyed

Target moved far outside magnet radius

No valid target was locked

→ Tongue misses

Misses must be:

fast

clean

slightly exaggerated (funny, not frustrating)

SERVER INTERACTION
Client → Server
Client sends:

js
Copy code
socket.emit("tongueResult", {
  sourceId,
  targetId,
  type: "grab" | "pull" | "fail"
});
Server Responsibility
Server:

Validates:

target distance sanity

cooldowns

target state

Applies effects:

pull force

damage (if any)

detach on invalid state

Server does NOT:

Aim

Raycast

Re-evaluate target choice

VISUAL FEEDBACK (REQUIRED)
Pre-Fire Feedback
Subtle reticle widen or color shift when a valid target is inside cone

This feedback is felt, not obvious

On Hit
Small camera punch

Stretch recoil on frog

Distinct sound (wet snap / thump)

On Miss
Slight tongue over-extension

Quick embarrassed retract

Funny sound cue

Misses should feel playful, not punishing.

DEBUG TOOLS (MANDATORY DURING DEV)
Add a debug toggle:

Render cone volume

Highlight selected target

Draw magnet radius

These MUST be removable for production.

TUNABLE CONSTANTS
Expose via config:

js
Copy code
tongueRange
coneAngle
magnetRadius
extendDuration
cooldown
These values WILL be tuned by feel.

❌ EXPLICITLY FORBIDDEN
Physics ropes

Per-frame collision checks

Server-side targeting

Pixel-perfect aim

Continuous retargeting

ECS rewrites

Overengineering

✅ DEFINITION OF DONE
The Tongue:

Feels accurate even when sloppy

Never jitters or changes mind

Clearly hits or misses

Is fun to fail with

Makes players want to use it constantly

If players laugh when they miss, it’s correct.

FINAL NOTE
This Tongue is not a weapon.
It is a personality system.

Prioritize:

Commitment

Clarity

Comedy

🐸👅