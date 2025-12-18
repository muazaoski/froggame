/**
 * Client-Side Prediction & Reconciliation System
 * 
 * FLOW:
 * 1. Client captures input → assigns sequence ID → stores in buffer → sends to server
 * 2. Client immediately predicts movement locally (feels instant)
 * 3. Server receives input → processes → sends back snapshot with lastProcessedSeq
 * 4. Client receives snapshot → reconciles:
 *    - Reset to server state
 *    - Remove acknowledged inputs (seq <= lastProcessedSeq)
 *    - Re-apply remaining unacknowledged inputs
 * 
 * RESULT: Instant feel + server authority + minimal rubber-banding
 */

export class InputBuffer {
    constructor() {
        this.inputs = [];  // { seq, timestamp, input, cameraAngle }
        this.sequence = 0;
    }

    // Add input to buffer and return it with sequence ID
    push(input, cameraAngle) {
        const entry = {
            seq: ++this.sequence,
            timestamp: Date.now(),
            input: { ...input.keys },
            cameraAngle: cameraAngle
        };
        this.inputs.push(entry);
        return entry;
    }

    // Remove all inputs up to and including lastProcessedSeq
    acknowledge(lastProcessedSeq) {
        this.inputs = this.inputs.filter(i => i.seq > lastProcessedSeq);
    }

    // Get all unacknowledged inputs for re-simulation
    getUnacknowledged() {
        return [...this.inputs];
    }

    // Clear buffer
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
        this.lastServerSeq = 0;
        this.correctionThreshold = 0.5;  // Snap if error > this
        this.smoothCorrectionRate = 0.2; // Lerp rate for small corrections
    }

    // Called every frame: predict movement locally
    predict(body, input, cameraAngle, dt) {
        if (!body) return null;

        // Store input in buffer
        const inputEntry = this.inputBuffer.push(input, cameraAngle);

        // Apply prediction locally
        this.applyInput(body, inputEntry.input, cameraAngle, dt);

        return inputEntry;
    }

    // Apply input to physics body (same logic as server!)
    applyInput(body, input, cameraAngle, dt) {
        const config = this.config;

        // Calculate movement direction
        let inputX = 0, inputZ = 0;
        if (input.forward) inputZ -= 1;
        if (input.backward) inputZ += 1;
        if (input.left) inputX -= 1;
        if (input.right) inputX += 1;

        const inputLen = Math.sqrt(inputX * inputX + inputZ * inputZ);
        if (inputLen > 0) {
            inputX /= inputLen;
            inputZ /= inputLen;

            // Rotate by camera angle
            const cos = Math.cos(cameraAngle);
            const sin = Math.sin(cameraAngle);
            const moveX = inputX * cos + inputZ * sin;
            const moveZ = -inputX * sin + inputZ * cos;

            // Check if grounded (simplified)
            const isGrounded = body.position.y < 0.6 || Math.abs(body.velocity.y) < 0.1;
            const airMultiplier = isGrounded ? 1.0 : config.airControl;

            // Apply force
            const force = config.moveSpeed * dt * airMultiplier;
            body.velocity.x += moveX * force * 0.001; // Simplified force application
            body.velocity.z += moveZ * force * 0.001;
        }

        // Jump
        if (input.jump) {
            const isGrounded = body.position.y < 0.6;
            if (isGrounded) {
                body.velocity.y = config.jumpVelocity;
            }
        }
    }

    // Reconcile with server snapshot
    reconcile(body, serverState) {
        if (!body || !serverState) return;

        this.lastServerState = serverState;
        this.lastServerSeq = serverState.lastProcessedSeq || 0;

        // Remove acknowledged inputs
        this.inputBuffer.acknowledge(this.lastServerSeq);

        // Calculate position error
        const dx = serverState.x - body.position.x;
        const dy = serverState.y - body.position.y;
        const dz = serverState.z - body.position.z;
        const error = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (error > this.correctionThreshold) {
            // Large error: reset to server state and re-simulate
            body.position.set(serverState.x, serverState.y, serverState.z);
            body.velocity.set(serverState.vx, serverState.vy, serverState.vz);

            // Re-apply unacknowledged inputs
            const unacked = this.inputBuffer.getUnacknowledged();
            const simulationDt = 1 / 60; // Fixed timestep for re-simulation

            for (const entry of unacked) {
                this.applyInput(body, entry.input, entry.cameraAngle, simulationDt);
            }
        } else if (error > 0.1) {
            // Small error: smooth correction
            body.position.x += dx * this.smoothCorrectionRate;
            body.position.y += dy * this.smoothCorrectionRate;
            body.position.z += dz * this.smoothCorrectionRate;
        }
        // Else: error is tiny, ignore
    }

    // Get current sequence number for sending with input
    getSequence() {
        return this.inputBuffer.sequence;
    }
}
