/**
 * WebGPU-compatible Water Material using TSL (Three.js Shading Language)
 * Replaces GLSL ShaderMaterial with TSL nodes
 */
import * as THREE from 'three/webgpu';
import { MeshStandardNodeMaterial, NodeMaterial } from 'three/webgpu';
import {
    vec2,
    vec3,
    vec4,
    float,
    add,
    sub,
    mul,
    sin,
    smoothstep,
    mix,
    time,
    uv,
    color,
    viewportLinearDepth,
    positionView
} from 'three/tsl';

/**
 * Creates a WebGPU-compatible water material with shimmer effect
 * @param {Object} options - Configuration options (should contain TSL uniforms)
 * @returns {MeshStandardNodeMaterial}
 */
export function createWaterMaterial(options = {}) {
    const {
        color: uColor,
        opacity: uOpacity,
        scale: uScale,
        frequency1: uFreq1,
        frequency2: uFreq2,
        frequency3: uFreq3,
        speed1: uSpeed1,
        speed2: uSpeed2,
        speed3: uSpeed3,
        distortion: uDistortion,
        shimmerIntensity: uShimmerIntensity,
        shimmerThreshold: uShimmerThreshold,
        shimmerSoftness: uShimmerSoftness,
        foamIntensity: uFoamIntensity,
        foamRange: uFoamRange
    } = options;

    const material = new MeshStandardNodeMaterial();
    material.colorNode = uColor;
    material.opacityNode = uOpacity;
    material.transparent = true;
    material.side = THREE.DoubleSide;
    material.depthWrite = false; // Required for depth-based foam to "see" what's behind the plane

    // TSL Shimmer effect
    const vUv = uv().mul(uScale);
    const t = time;

    // Layer 1 - Vertical-ish
    const waveShift = sin(add(mul(vUv.x, float(2.0)), mul(t, float(0.5)))).mul(uDistortion);
    const ripple1 = sin(add(mul(add(vUv.x, vUv.y.add(waveShift)), uFreq1), mul(t, uSpeed1)));

    // Layer 2 - Diagonal
    const ripple2 = sin(sub(mul(sub(vUv.x, vUv.y), uFreq2), mul(t, uSpeed2)));

    // Layer 3 - Large scale slow movement
    const ripple3 = sin(add(mul(vUv.y, uFreq3), mul(t, uSpeed3)));

    // Combined Shimmer - 3 Layer mix
    const shimmerValue = add(
        mul(ripple1, float(0.4)),
        add(mul(ripple2, float(0.4)), mul(ripple3, float(0.2)))
    );

    // shimmer = smoothstep(threshold, threshold + softness, shimmer)
    const shimmerFinal = smoothstep(uShimmerThreshold, add(uShimmerThreshold, uShimmerSoftness), shimmerValue);

    // --- DEPTH FOAM ---
    // Compare scene depth behind water with water's own depth
    const sceneDepth = viewportLinearDepth;
    const waterDepth = positionView.z.negate();
    const depthDiff = sceneDepth.sub(waterDepth);

    // Foam at edges / intersections
    const foamEdge = smoothstep(uFoamRange, float(0.0), depthDiff);
    const foamColorNode = color(0xffffff);

    // Combine base water color with shimmer highlights
    const shimmeredColor = mix(uColor, foamColorNode, mul(shimmerFinal, uShimmerIntensity));

    // Final combine with edge foam
    material.colorNode = mix(shimmeredColor, foamColorNode, mul(foamEdge, uFoamIntensity));

    return material;
}

