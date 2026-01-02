/**
 * WebGPU-compatible Water Material using TSL (Three.js Shading Language)
 * Replaces GLSL ShaderMaterial with TSL nodes
 */
import * as THREE from 'three';
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
    color
} from 'three/tsl';

/**
 * Creates a WebGPU-compatible water material with shimmer effect
 * @param {Object} options - Configuration options
 * @returns {MeshStandardNodeMaterial}
 */
export function createWaterMaterial(options = {}) {
    const {
        waterColor = 0x1a8ccc,
        opacity = 0.6
    } = options;

    const material = new MeshStandardNodeMaterial();
    material.colorNode = color(new THREE.Color(waterColor));
    material.opacityNode = float(opacity);
    material.transparent = true;
    material.side = THREE.DoubleSide;

    // TSL Shimmer effect
    const vUv = uv();
    const t = time;

    // Two layers of scrolling diagonal lines for a "shimmer" effect
    // ripple1 = sin((vUv.x + vUv.y) * 30.0 + t * 1.5)
    const ripple1 = sin(add(mul(add(vUv.x, vUv.y), float(30.0)), mul(t, float(1.5))));

    // ripple2 = sin((vUv.x - vUv.y) * 25.0 - t * 1.2)
    const ripple2 = sin(sub(mul(sub(vUv.x, vUv.y), float(25.0)), mul(t, float(1.2))));

    // shimmer = (ripple1 * 0.5 + ripple2 * 0.5)
    const shimmerValue = add(mul(ripple1, float(0.5)), mul(ripple2, float(0.5)));

    // shimmer = smoothstep(0.7, 1.0, shimmer)
    const shimmerFinal = smoothstep(float(0.7), float(1.0), shimmerValue);

    // finalColor = mix(uColor, vec3(1.0), shimmer * 0.15)
    material.colorNode = mix(color(new THREE.Color(waterColor)), color(new THREE.Color(0xffffff)), mul(shimmerFinal, float(0.15)));

    return material;
}
