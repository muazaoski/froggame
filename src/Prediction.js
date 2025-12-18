/**
 * Client-Side Prediction & Reconciliation System
 * 
 * SIMPLIFIED APPROACH:
 * - Client runs physics locally (instant feel)
 * - Server sends authoritative positions
 * - Client gently corrects towards server position
 * - Only snap if error is very large (teleport/death)
 * 
 * This avoids jitter by NOT re-simulating inputs
 */

export class InputBuffer {
    constructor() {
        this.inputs = [];
        this.sequence = 0;
    }

    push(input, cameraAngle) {
        const entry = {
            seq: ++this.sequence,
            timestamp: Date.now(),
            input: { ...input.keys },
            cameraAngle: cameraAngle
        };
        this.inputs.push(entry);

        // Keep buffer small - remove old entries
        if (this.inputs.length > 60) {
            this.inputs.shift();
        }

        return entry;
    }

    acknowledge(lastProcessedSeq) {
        this.inputs = this.inputs.filter(i => i.seq > lastProcessedSeq);
    }

    clear() {
        this.inputs = [];
        this.sequence = 0;
    }
}

export class Predictor {
    constructor(config) {
        this.config = config;
        this.inputBuffer = new InputBuffer();
        this.lastServerState = null;

        // Correction settings - tuned for smooth feel
        this.snapThreshold = 3.0;        // Only snap if error > 3 units (teleport)
        this.correctionRate = 0.1;       // Gentle lerp (10% per frame)
        this.ignoreThreshold = 0.15;     // Ignore tiny errors
    }

    // Reconcile with server snapshot - SIMPLIFIED
    reconcile(body, serverState) {
        if (!body || !serverState) return;

        this.lastServerState = serverState;

        // Acknowledge processed inputs
        if (serverState.lastProcessedSeq) {
            this.inputBuffer.acknowledge(serverState.lastProcessedSeq);
        }

        // Calculate position error (horizontal only - Y handled differently)
        const dx = serverState.x - body.position.x;
        const dz = serverState.z - body.position.z;
        const horizontalError = Math.sqrt(dx * dx + dz * dz);

        // Y error handled separately (gravity makes it tricky)
        const dy = serverState.y - body.position.y;

        if (horizontalError > this.snapThreshold) {
            // Very large error: snap immediately (teleport/respawn)
            body.position.set(serverState.x, serverState.y, serverState.z);
            body.velocity.set(serverState.vx, serverState.vy, serverState.vz);
        } else if (horizontalError > this.ignoreThreshold) {
            // Normal error: gentle correction
            body.position.x += dx * this.correctionRate;
            body.position.z += dz * this.correctionRate;

            // Y correction only if significant and player is grounded
            if (Math.abs(dy) > 0.5 && serverState.isGrounded) {
                body.position.y += dy * this.correctionRate;
            }
        }
        // Else: error is tiny, trust client physics
    }
}
