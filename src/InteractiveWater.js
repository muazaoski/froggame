import * as THREE from 'three/webgpu';
import {
    instanceIndex,
    struct,
    If,
    uint,
    int,
    floor,
    float,
    length,
    clamp,
    vec2,
    cos,
    sin,
    vec3,
    vertexIndex,
    Fn,
    uniform,
    instancedArray,
    min,
    max,
    positionLocal,
    transformNormalToView,
    select,
    globalId,
    time,
    color,
    add,
    mul,
    smoothstep,
    mix
} from 'three/tsl';

/**
 * Interactive water surface using WebGPU compute.
 * Fixed for better visibility and stability.
 */
export class InteractiveWater {
    constructor(renderer, options = {}) {
        this.renderer = renderer;
        this.width = 128;
        this.bounds = options.bounds || 6;
        this.waterColor = options.waterColor || 0x1a8ccc;

        // Simulation parameters
        this.params = {
            mousePos: uniform(new THREE.Vector2()),
            mouseSpeed: uniform(new THREE.Vector2()),
            mouseDeep: uniform(0.1),
            mouseSize: uniform(0.5),
            viscosity: uniform(0.98),
            speed: 5
        };

        this.frame = 0;
        this.pingPong = 0;
        this.readFromA = uniform(1);

        this.init();
    }

    init() {
        const WIDTH = this.width;

        const heightArray = new Float32Array(WIDTH * WIDTH);
        this.heightStorageA = instancedArray(heightArray).setName('HeightA');
        this.heightStorageB = instancedArray(new Float32Array(heightArray)).setName('HeightB');
        this.prevHeightStorage = instancedArray(new Float32Array(heightArray)).setName('PrevHeight');

        const getNeighborIndicesTSL = (index) => {
            const width = uint(WIDTH);
            const x = int(index.mod(width));
            const y = int(index.div(width));

            const leftX = max(0, x.sub(1));
            const rightX = min(x.add(1), width.sub(1));
            const bottomY = max(0, y.sub(1));
            const topY = min(y.add(1), width.sub(1));

            const westIndex = y.mul(width).add(leftX);
            const eastIndex = y.mul(width).add(rightX);
            const southIndex = bottomY.mul(width).add(x);
            const northIndex = topY.mul(width).add(x);

            return { northIndex, southIndex, eastIndex, westIndex };
        };

        const createComputeHeight = (readBuffer, writeBuffer) => Fn(() => {
            const index = instanceIndex;
            const height = readBuffer.element(index).toVar();
            const prevHeight = this.prevHeightStorage.element(index).toVar();

            const { northIndex, southIndex, eastIndex, westIndex } = getNeighborIndicesTSL(index);
            const neighborHeight = readBuffer.element(northIndex)
                .add(readBuffer.element(southIndex))
                .add(readBuffer.element(eastIndex))
                .add(readBuffer.element(westIndex));

            neighborHeight.mulAssign(0.5);
            neighborHeight.subAssign(prevHeight);

            const newHeight = neighborHeight.mul(this.params.viscosity).toVar();

            // Interaction
            const gx = float(globalId.x).div(WIDTH);
            const gy = float(globalId.y).div(WIDTH);
            const centerVec = vec2(0.5);
            const distToMouse = length((vec2(gx, gy).sub(centerVec)).mul(this.bounds).sub(this.params.mousePos));
            const mousePhase = clamp(distToMouse.mul(Math.PI).div(this.params.mouseSize), 0.0, Math.PI);

            newHeight.addAssign(cos(mousePhase).add(1.0).mul(this.params.mouseDeep).mul(this.params.mouseSpeed.length()));

            // Continuous pulse
            const pulse = sin(time.mul(0.2)).mul(0.0002);
            newHeight.addAssign(pulse);

            this.prevHeightStorage.element(index).assign(height);
            writeBuffer.element(index).assign(newHeight);
        })().compute(WIDTH * WIDTH, [16, 16]);

        this.computeHeightAtoB = createComputeHeight(this.heightStorageA, this.heightStorageB);
        this.computeHeightBtoA = createComputeHeight(this.heightStorageB, this.heightStorageA);

        this.geometry = new THREE.PlaneGeometry(this.bounds, this.bounds, WIDTH - 1, WIDTH - 1);
        this.material = new THREE.MeshStandardNodeMaterial({
            color: this.waterColor,
            roughness: 0.05,
            metalness: 0.9,
            transparent: true,
            opacity: 0.7,
            side: THREE.DoubleSide
        });

        const getCurrentHeight = (index) => {
            return select(this.readFromA, this.heightStorageA.element(index), this.heightStorageB.element(index));
        };

        this.material.positionNode = Fn(() => {
            const h = getCurrentHeight(vertexIndex);
            return vec3(positionLocal.x, positionLocal.y, h);
        })();

        this.material.normalNode = Fn(() => {
            const index = vertexIndex;
            const { northIndex, southIndex, eastIndex, westIndex } = getNeighborIndicesTSL(index);

            const n = getCurrentHeight(northIndex);
            const s = getCurrentHeight(southIndex);
            const e = getCurrentHeight(eastIndex);
            const w = getCurrentHeight(westIndex);

            const slopeX = (w.sub(e)).mul(WIDTH / this.bounds).mul(5.0);
            const slopeY = (s.sub(n)).mul(WIDTH / this.bounds).mul(5.0);

            return transformNormalToView(vec3(slopeX, slopeY.negate(), 1.0)).toVertexStage();
        })();

        // Color with shimmer
        this.material.colorNode = Fn(() => {
            const baseColor = color(this.waterColor);
            const uv = positionLocal.xy.div(this.bounds).add(0.5);
            const t = time.mul(0.5);

            const shimmer = ripple(uv, t, 30.0, 1.5).add(ripple(uv, t.negate(), 25.0, 1.2));
            const shimmerFinal = smoothstep(float(0.7), float(1.0), shimmer.mul(0.5));

            return mix(baseColor, color(0xffffff), shimmerFinal.mul(0.3));
        })();

        function ripple(vUv, t, freq, speed) {
            return sin(((vUv.x.add(vUv.y)).mul(freq)).add(t.mul(speed)));
        }

        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.rotation.x = -Math.PI * 0.5;
        this.mesh.renderOrder = 10;
    }

    update() {
        this.frame++;
        if (this.frame >= (7 - this.params.speed)) {
            const workgroups = [this.width / 16, this.width / 16, 1];
            if (this.pingPong === 0) {
                this.renderer.compute(this.computeHeightAtoB, workgroups);
                this.readFromA.value = 0;
            } else {
                this.renderer.compute(this.computeHeightBtoA, workgroups);
                this.readFromA.value = 1;
            }
            this.pingPong = 1 - this.pingPong;
            this.frame = 0;
        }
    }

    disturb(x, z, vx, vz) {
        this.params.mousePos.value.set(x, z);
        this.params.mouseSpeed.value.set(vx, vz);
    }
}
