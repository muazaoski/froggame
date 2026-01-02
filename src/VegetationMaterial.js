/**
 * WebGPU-compatible Vegetation Material using TSL (Three.js Shading Language)
 * Replaces GLSL onBeforeCompile with TSL nodes for grass/bush wind animation
 */
import * as THREE from 'three';
import { MeshStandardNodeMaterial } from 'three/webgpu';
import {
    positionLocal,
    positionWorld,
    modelWorldMatrix,
    uniform,
    sin,
    cos,
    float,
    vec3,
    vec4,
    mul,
    add,
    sub,
    normalize,
    distance,
    clamp,
    mix,
    time
} from 'three/tsl';

/**
 * Creates a WebGPU-compatible vegetation material with wind and player interaction
 * @param {Object} options - Configuration options
 * @param {string} options.type - 'grass' or 'bush'
 * @param {THREE.Color} options.color - Base color
 * @param {number} options.windStrength - Wind sway strength
 * @param {number} options.windSpeed - Wind animation speed
 * @param {number} options.bendingStrength - Player push strength
 * @param {number} options.bendingRadius - Player push radius
 * @param {THREE.Vector3} options.playerPos - Player position uniform
 * @returns {MeshStandardNodeMaterial}
 */
export function createVegetationMaterial(options = {}) {
    const {
        type = 'grass',
        color = type === 'bush' ? 0x2d5a27 : 0x3ea331,
        windStrength = type === 'bush' ? 0.15 : 0.1,
        windSpeed = 0.8,
        bendingStrength = type === 'bush' ? 0.6 : 0.4,
        bendingRadius = type === 'bush' ? 1.8 : 1.0,
        playerPosRef = new THREE.Vector3(0, 0, 0)
    } = options;

    // Create uniforms
    const uPlayerPos = uniform(playerPosRef);
    const uWindStrength = uniform(windStrength);
    const uWindSpeed = uniform(windSpeed);
    const uBendingStrength = uniform(bendingStrength);
    const uBendingRadius = uniform(bendingRadius);

    // Create node material
    const material = new MeshStandardNodeMaterial();
    material.color = new THREE.Color(color);
    material.side = THREE.DoubleSide;
    material.transparent = type === 'bush';

    // TSL Position Node for wind animation
    // Get time
    const timeNode = time;

    // Get local and world positions
    const localPos = positionLocal;
    const worldPos = positionWorld;

    // Height factor - more sway at top, less at bottom
    const heightFactor = clamp(mul(localPos.y, float(2.0)), float(0.0), float(1.0));

    // Wind sway calculation
    const windTime = mul(time, uWindSpeed);
    const windOffset = add(
        mul(worldPos.x, float(0.5)),
        mul(worldPos.z, float(0.5))
    );
    const windSway = mul(
        sin(add(windTime, windOffset)),
        mul(uWindStrength, heightFactor)
    );

    // Jitter for bushes
    let jitter = float(0.0);
    if (type === 'bush') {
        jitter = mul(
            sin(add(mul(time, float(15.0)), mul(worldPos.y, float(10.0)))),
            mul(float(0.02), heightFactor)
        );
    }

    // Player pushing calculation
    const playerDist = distance(worldPos, uPlayerPos);
    const pushFactor = mul(
        clamp(
            sub(float(1.0), mul(playerDist, float(1.0).div(uBendingRadius))),
            float(0.0),
            float(1.0)
        ),
        mul(uBendingStrength, heightFactor)
    );

    // Push direction
    const pushDir = normalize(sub(worldPos, uPlayerPos));

    // Final position offset
    const xOffset = add(windSway, jitter, mul(pushDir.x, pushFactor));
    const zOffset = add(mul(windSway, float(0.5)), jitter, mul(pushDir.z, pushFactor));
    const yOffset = mul(pushDir.y, pushFactor).negate().mul(float(0.3));

    // Apply position modification
    material.positionNode = add(
        localPos,
        vec3(xOffset, yOffset, zOffset)
    );

    // Store uniforms for external update
    material.userData = {
        uPlayerPos,
        uWindStrength,
        uWindSpeed,
        uBendingStrength,
        uBendingRadius,
        type
    };

    return material;
}

/**
 * Updates vegetation material player position
 * @param {MeshStandardNodeMaterial} material - The vegetation material
 * @param {THREE.Vector3} playerPos - Current player position
 */
export function updateVegetationPlayerPos(material, playerPos) {
    if (material.userData && material.userData.uPlayerPos) {
        material.userData.uPlayerPos.value.copy(playerPos);
    }
}
