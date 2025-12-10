import * as THREE from 'three';
import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as CANNON from 'cannon-es';
import { Physics } from './Physics.js';
import { Frog } from './Frog.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { Config } from './Config.js';
import { ParticleSystem } from './ParticleSystem.js';

export class World {
    constructor() {
        this.container = document.getElementById('canvas-container');

        // SCENE
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x87CEEB); // Sky blue
        this.scene.fog = new THREE.Fog(0x87CEEB, 10, 50);

        // CAMERA
        this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
        this.camera.position.set(0, 15, 15);
        this.camera.lookAt(0, 0, 0);

        // Camera orbit state
        this.cameraOrbitAngle = Config.cameraOrbitAngle;
        this.cameraPitchAngle = Config.cameraPitchAngle;
        this.cameraDistance = Config.cameraDistance;

        // Screen shake state
        this.shakeIntensity = 0;
        this.shakeTimer = 0;
        this.shakeOffset = new THREE.Vector3();

        // RENDERER
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        // Shadow map configuration from Config
        this.renderer.shadowMap.enabled = Config.shadowEnabled;
        this.renderer.shadowMap.type = this.getShadowMapType(Config.shadowType);
        this.renderer.shadowMap.autoUpdate = Config.shadowAutoUpdate;
        this.container.appendChild(this.renderer.domElement);

        // LABEL RENDERER (Chat bubbles)
        this.labelRenderer = new CSS2DRenderer();
        this.labelRenderer.setSize(window.innerWidth, window.innerHeight);
        this.labelRenderer.domElement.style.position = 'absolute';
        this.labelRenderer.domElement.style.top = '0px';
        this.labelRenderer.domElement.style.pointerEvents = 'none'; // Click through
        this.container.appendChild(this.labelRenderer.domElement);

        // LIGHTS
        const ambientLight = new THREE.AmbientLight(0xffffff, Config.ambientIntensity);
        this.scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, Config.sunIntensity);
        dirLight.position.set(20, 30, 10);
        this.dirLight = dirLight; // Store reference for config updates

        // Shadow settings from Config
        dirLight.castShadow = Config.shadowEnabled;
        dirLight.shadow.mapSize.width = Config.shadowMapSize;
        dirLight.shadow.mapSize.height = Config.shadowMapSize;
        dirLight.shadow.camera.near = Config.shadowCameraNear;
        dirLight.shadow.camera.far = Config.shadowCameraFar;
        dirLight.shadow.camera.top = Config.shadowCameraTop;
        dirLight.shadow.camera.bottom = Config.shadowCameraBottom;
        dirLight.shadow.camera.left = Config.shadowCameraLeft;
        dirLight.shadow.camera.right = Config.shadowCameraRight;
        dirLight.shadow.bias = Config.shadowBias;
        dirLight.shadow.normalBias = Config.shadowNormalBias;
        dirLight.shadow.radius = Config.shadowRadius;
        dirLight.shadow.blurSamples = Config.shadowBlurSamples;
        dirLight.shadow.intensity = Config.shadowIntensity;

        this.scene.add(dirLight);

        // PHYSICS
        this.physics = new Physics();

        // LOAD LEVEL
        this.loadLevel();

        // ENTITIES
        this.frogs = {}; // Map socketId -> Frog
        this.localFrog = null;

        // RESIZE
        window.addEventListener('resize', () => this.onWindowResize());

        // RAYCASTER (For eye looking)
        this.raycaster = new THREE.Raycaster();
        this.mousePlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0); // Ground plane

        // POST PROCESSING
        this.composer = new EffectComposer(this.renderer);
        this.composer.addPass(new RenderPass(this.scene, this.camera));

        // Comprehensive Post-Processing Shader
        const postFX = {
            uniforms: {
                "tDiffuse": { value: null },
                "uTime": { value: 0 },
                "uResolution": { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },

                // Color Grading
                "uSaturation": { value: Config.shaderSaturation },
                "uBrightness": { value: Config.shaderBrightness },
                "uContrast": { value: Config.shaderContrast },
                "uGamma": { value: Config.shaderGamma },

                // Color Tint / Temperature
                "uTint": { value: new THREE.Vector3(Config.shaderTintR, Config.shaderTintG, Config.shaderTintB) },
                "uTemperature": { value: Config.shaderTemperature },

                // Vignette
                "uVignetteEnabled": { value: Config.vignetteEnabled ? 1.0 : 0.0 },
                "uVignetteIntensity": { value: Config.vignetteIntensity },
                "uVignetteRadius": { value: Config.vignetteRadius },
                "uVignetteSoftness": { value: Config.vignetteSoftness },

                // Chromatic Aberration
                "uChromaticEnabled": { value: Config.chromaticEnabled ? 1.0 : 0.0 },
                "uChromaticIntensity": { value: Config.chromaticIntensity },
                "uChromaticRadial": { value: Config.chromaticRadial ? 1.0 : 0.0 },

                // Film Grain
                "uGrainEnabled": { value: Config.grainEnabled ? 1.0 : 0.0 },
                "uGrainIntensity": { value: Config.grainIntensity },
                "uGrainSpeed": { value: Config.grainSpeed },
                "uGrainSize": { value: Config.grainSize },

                // Sharpen
                "uSharpenEnabled": { value: Config.sharpenEnabled ? 1.0 : 0.0 },
                "uSharpenIntensity": { value: Config.sharpenIntensity },

                // Bloom
                "uBloomEnabled": { value: Config.bloomEnabled ? 1.0 : 0.0 },
                "uBloomIntensity": { value: Config.bloomIntensity },
                "uBloomThreshold": { value: Config.bloomThreshold },
                "uBloomRadius": { value: Config.bloomRadius }
            },
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                precision highp float;
                
                uniform sampler2D tDiffuse;
                uniform float uTime;
                uniform vec2 uResolution;
                
                // Color Grading
                uniform float uSaturation;
                uniform float uBrightness;
                uniform float uContrast;
                uniform float uGamma;
                
                // Tint / Temperature
                uniform vec3 uTint;
                uniform float uTemperature;
                
                // Vignette
                uniform float uVignetteEnabled;
                uniform float uVignetteIntensity;
                uniform float uVignetteRadius;
                uniform float uVignetteSoftness;
                
                // Chromatic Aberration
                uniform float uChromaticEnabled;
                uniform float uChromaticIntensity;
                uniform float uChromaticRadial;
                
                // Film Grain
                uniform float uGrainEnabled;
                uniform float uGrainIntensity;
                uniform float uGrainSpeed;
                uniform float uGrainSize;
                
                // Sharpen
                uniform float uSharpenEnabled;
                uniform float uSharpenIntensity;
                
                // Bloom
                uniform float uBloomEnabled;
                uniform float uBloomIntensity;
                uniform float uBloomThreshold;
                uniform float uBloomRadius;
                
                varying vec2 vUv;
                
                // Random function for grain
                float random(vec2 st) {
                    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
                }
                
                // Luminance calculation
                float getLuminance(vec3 c) {
                    return dot(c, vec3(0.299, 0.587, 0.114));
                }
                
                void main() {
                    vec2 uv = vUv;
                    vec2 texelSize = 1.0 / uResolution;
                    
                    // === CHROMATIC ABERRATION ===
                    vec4 color;
                    if (uChromaticEnabled > 0.5) {
                        vec2 direction;
                        if (uChromaticRadial > 0.5) {
                            direction = uv - 0.5;
                        } else {
                            direction = vec2(1.0, 0.0);
                        }
                        float r = texture2D(tDiffuse, uv + direction * uChromaticIntensity).r;
                        float g = texture2D(tDiffuse, uv).g;
                        float b = texture2D(tDiffuse, uv - direction * uChromaticIntensity).b;
                        color = vec4(r, g, b, 1.0);
                    } else {
                        color = texture2D(tDiffuse, uv);
                    }
                    
                    // === SHARPEN ===
                    if (uSharpenEnabled > 0.5) {
                        vec4 center = color;
                        vec4 left = texture2D(tDiffuse, uv - vec2(texelSize.x, 0.0));
                        vec4 right = texture2D(tDiffuse, uv + vec2(texelSize.x, 0.0));
                        vec4 top = texture2D(tDiffuse, uv - vec2(0.0, texelSize.y));
                        vec4 bottom = texture2D(tDiffuse, uv + vec2(0.0, texelSize.y));
                        
                        vec4 sharpened = center * (1.0 + 4.0 * uSharpenIntensity) - 
                                       (left + right + top + bottom) * uSharpenIntensity;
                        color = sharpened;
                    }
                    
                    // === BLOOM (simplified glow) ===
                    if (uBloomEnabled > 0.5) {
                        vec4 bloomColor = vec4(0.0);
                        float bloomSamples = 0.0;
                        for (float x = -4.0; x <= 4.0; x += 1.0) {
                            for (float y = -4.0; y <= 4.0; y += 1.0) {
                                vec2 offset = vec2(x, y) * texelSize * uBloomRadius * 10.0;
                                vec4 sampleCol = texture2D(tDiffuse, uv + offset);
                                float bright = getLuminance(sampleCol.rgb);
                                if (bright > uBloomThreshold) {
                                    bloomColor += sampleCol * (bright - uBloomThreshold);
                                    bloomSamples += 1.0;
                                }
                            }
                        }
                        if (bloomSamples > 0.0) {
                            bloomColor /= bloomSamples;
                            color.rgb += bloomColor.rgb * uBloomIntensity;
                        }
                    }
                    
                    // === COLOR TEMPERATURE ===
                    color.r += uTemperature * 0.1;
                    color.b -= uTemperature * 0.1;
                    
                    // === COLOR TINT ===
                    color.rgb *= uTint;
                    
                    // === SATURATION ===
                    float gray = getLuminance(color.rgb);
                    color.rgb = mix(vec3(gray), color.rgb, uSaturation);
                    
                    // === BRIGHTNESS ===
                    color.rgb += uBrightness;
                    
                    // === CONTRAST ===
                    color.rgb = (color.rgb - 0.5) * uContrast + 0.5;
                    
                    // === GAMMA CORRECTION ===
                    color.rgb = pow(max(color.rgb, vec3(0.0)), vec3(1.0 / uGamma));
                    
                    // === FILM GRAIN ===
                    if (uGrainEnabled > 0.5) {
                        vec2 grainUv = vUv * uResolution / uGrainSize;
                        float grain = random(grainUv + uTime * uGrainSpeed) * 2.0 - 1.0;
                        color.rgb += grain * uGrainIntensity;
                    }
                    
                    // === VIGNETTE ===
                    if (uVignetteEnabled > 0.5) {
                        vec2 vignetteUv = vUv - 0.5;
                        float dist = length(vignetteUv);
                        float vig = smoothstep(uVignetteRadius, uVignetteRadius - uVignetteSoftness, dist);
                        color.rgb = mix(color.rgb * (1.0 - uVignetteIntensity), color.rgb, vig);
                    }
                    
                    // Clamp final output
                    color.rgb = clamp(color.rgb, 0.0, 1.0);
                    
                    gl_FragColor = color;
                }
            `
        };

        this.customPass = new ShaderPass(postFX);
        this.composer.addPass(this.customPass);

        // Initialize Particle System for VFX
        this.particles = new ParticleSystem(this.scene);
    }

    getShadowMapType(type) {
        switch (type) {
            case 'Basic':
                return THREE.BasicShadowMap;
            case 'PCF':
                return THREE.PCFShadowMap;
            case 'PCFSoft':
                return THREE.PCFSoftShadowMap;
            case 'VSM':
                return THREE.VSMShadowMap;
            default:
                return THREE.PCFSoftShadowMap;
        }
    }

    loadLevel() {
        const loader = new GLTFLoader();
        loader.load('/models/world.glb', (gltf) => {
            const level = gltf.scene;
            this.scene.add(level);

            level.traverse((child) => {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;

                    // Physics Generation
                    if (child.name.startsWith('Ghost_')) {
                        // Pass (No physics)
                    } else {
                        this.createPhysicsForMesh(child);
                    }
                }
            });
        }, undefined, (err) => {
            console.error('Error loading world:', err);
            // Fallback ground if load fails
            const groundGeo = new THREE.PlaneGeometry(100, 100);
            const groundMat = new THREE.MeshStandardMaterial({ color: 0x0077be });
            const ground = new THREE.Mesh(groundGeo, groundMat);
            ground.rotation.x = -Math.PI / 2;
            ground.receiveShadow = true;
            this.scene.add(ground);

            // Fallback Physics
            const groundShape = new CANNON.Plane();
            const groundBody = new CANNON.Body({ mass: 0 });
            groundBody.addShape(groundShape);
            groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
            this.physics.world.addBody(groundBody);
        });
    }

    createPhysicsForMesh(mesh) {
        // Simple approach: Use Trimesh for static world geometry
        const geometry = mesh.geometry;

        // Ensure vertex position data is present
        if (!geometry.attributes.position) return;

        // Apply world scale/rotation/position to the physics body? 
        // No, Trimesh assumes local coords? 
        // Actually, easiest to make a Body matching the Mesh's world transform.
        // Or bake transform into the vertices.

        // Simplest: Create a Trimesh
        const vertices = [];
        const indices = []; // Trimesh needs indices

        const posAttr = geometry.attributes.position;
        const indexAttr = geometry.index;

        // Scale vertices by mesh scale
        const scale = mesh.getWorldScale(new THREE.Vector3());

        for (let i = 0; i < posAttr.count; i++) {
            vertices.push(posAttr.getX(i) * scale.x);
            vertices.push(posAttr.getY(i) * scale.y);
            vertices.push(posAttr.getZ(i) * scale.z);
        }

        if (indexAttr) {
            for (let i = 0; i < indexAttr.count; i++) {
                indices.push(indexAttr.getX(i));
            }
        } else {
            // Unindexed geometry - make dummy indices
            for (let i = 0; i < posAttr.count; i++) {
                indices.push(i);
            }
        }

        const shape = new CANNON.Trimesh(vertices, indices);
        const body = new CANNON.Body({
            mass: 0,
            material: this.physics.groundMaterial // Ensure low friction
        });
        body.addShape(shape);

        // Position/Rotation
        const pos = mesh.getWorldPosition(new THREE.Vector3());
        const quat = mesh.getWorldQuaternion(new THREE.Quaternion());

        body.position.copy(pos);
        body.quaternion.copy(quat);

        this.physics.world.addBody(body);
    }

    getMouseIntersection(input) {
        if (!input) return null;
        this.raycaster.setFromCamera(input.mouse, this.camera);
        const target = new THREE.Vector3();
        this.raycaster.ray.intersectPlane(this.mousePlane, target);
        // If looking at sky (no intersection with ground), project far out
        if (!target) {
            return this.raycaster.ray.at(50, target);
        }
        return target;
    }

    addLocalFrog(id, color, startData) {
        const frog = new Frog(id, color, this.physics, true);
        frog.world = this; // Give access to world for screen shake
        if (startData) {
            frog.body.position.set(startData.x, startData.y, startData.z);
        }
        this.scene.add(frog.mesh);
        this.localFrog = frog;
        this.frogs[id] = frog;

        // Give frog access to particle system for VFX
        frog.particles = this.particles;

        // Punch collision callback
        frog.onPunchHit = (position, direction, radius) => {
            this.checkPunchCollision(id, position, direction, radius);
        };

        return frog;
    }

    addRemoteFrog(id, data) {
        const frog = new Frog(id, data.color, this.physics, false);
        frog.updatePosition(
            { x: data.x, y: data.y, z: data.z },
            { qx: data.qx, qy: data.qy, qz: data.qz, qw: data.qw }
        );
        this.scene.add(frog.mesh);
        this.frogs[id] = frog;

        // Remote frogs also get particles for their effects
        frog.particles = this.particles;

        return frog;
    }

    checkPunchCollision(attackerId, position, direction, radius) {
        let hit = false;
        // Check all frogs except the attacker
        for (const id in this.frogs) {
            if (id === attackerId) continue;

            const targetFrog = this.frogs[id];
            if (!targetFrog.mesh || targetFrog.isDead) continue;

            const distance = position.distanceTo(targetFrog.mesh.position);

            if (distance < radius) {
                // Calculate knockback
                const knockback = direction.clone().multiplyScalar(Config.knockbackForce);
                knockback.y = Config.knockbackUpward;

                // Apply damage with knockback
                console.log(`HIT! Applying ${Config.punchDamage} damage to frog ${id}. Distance: ${distance.toFixed(2)}, Radius: ${radius}`);
                targetFrog.takeDamage(Config.punchDamage, knockback);

                // Spawn impact VFX at hit location (ONLY on hit)
                if (this.particles) {
                    this.particles.spawnPunchImpact(targetFrog.mesh.position, direction);
                }

                console.log(`Frog ${attackerId} hit frog ${id} for ${Config.punchDamage} damage!`);
                hit = true;
            } else {
                // Debug: log near misses
                if (distance < radius * 2) {
                    console.log(`Near miss on frog ${id}. Distance: ${distance.toFixed(2)}, Need: ${radius}`);
                }
            }
        }
        return hit;
    }

    removeFrog(id) {
        if (this.frogs[id]) {
            this.scene.remove(this.frogs[id].mesh);
            if (this.frogs[id].body) {
                this.physics.world.removeBody(this.frogs[id].body);
            }
            delete this.frogs[id];
        }
    }

    updateCamera(input) {
        if (!this.localFrog || !this.localFrog.mesh) return;

        // Get target position (frog)
        const targetPos = this.localFrog.mesh.position.clone();

        // Process input for camera control
        if (input) {
            // Handle mouse drag rotation (middle mouse button)
            if (input.middleMouseDown) {
                const delta = input.consumeMouseDelta();
                this.cameraOrbitAngle -= delta.x * Config.cameraRotateSpeed;
                this.cameraPitchAngle += delta.y * Config.cameraRotateSpeed;

                // Clamp pitch angle
                this.cameraPitchAngle = Math.max(Config.cameraMinPitch,
                    Math.min(Config.cameraMaxPitch, this.cameraPitchAngle));
            }

            // Handle scroll zoom
            const scrollDelta = input.consumeScroll();
            if (scrollDelta !== 0) {
                // Positive scroll = zoom out, negative = zoom in
                this.cameraDistance += scrollDelta * Config.cameraZoomSpeed * 0.01;
                this.cameraDistance = Math.max(Config.cameraMinDistance,
                    Math.min(Config.cameraMaxDistance, this.cameraDistance));
            }
        }

        // Calculate camera position based on orbit angles
        const horizontalDistance = this.cameraDistance * Math.cos(this.cameraPitchAngle);
        const verticalOffset = this.cameraDistance * Math.sin(this.cameraPitchAngle);

        const cameraX = targetPos.x + horizontalDistance * Math.sin(this.cameraOrbitAngle);
        const cameraY = targetPos.y + verticalOffset;
        const cameraZ = targetPos.z + horizontalDistance * Math.cos(this.cameraOrbitAngle);

        // Smooth camera follow
        const targetCameraPos = new THREE.Vector3(cameraX, cameraY, cameraZ);
        if (this.shakeOffset) {
            targetCameraPos.add(this.shakeOffset);
        }
        this.camera.position.lerp(targetCameraPos, Config.cameraLerp);

        // Always look at the frog
        this.camera.lookAt(targetPos);
    }

    step(dt, input) {
        // Step Physics
        this.physics.step(dt);

        // Update Particles (VFX)
        if (this.particles) {
            this.particles.update(dt);
        }

        // Update Screen Shake
        if (this.shakeTimer > 0) {
            this.shakeTimer -= dt;
            const amount = this.shakeIntensity * (this.shakeTimer > 0 ? 1 : 0);
            this.shakeOffset.set(
                (Math.random() - 0.5) * amount,
                (Math.random() - 0.5) * amount,
                (Math.random() - 0.5) * amount
            );
        } else {
            this.shakeOffset.set(0, 0, 0);
        }

        // Update Camera (Orbital follow)
        this.updateCamera(input);

        // Render
        if (Config.useShader && this.composer) {
            const u = this.customPass.uniforms;

            // Time
            u.uTime.value = performance.now() / 1000;

            // Color Grading
            u.uSaturation.value = Config.shaderSaturation;
            u.uBrightness.value = Config.shaderBrightness;
            u.uContrast.value = Config.shaderContrast;
            u.uGamma.value = Config.shaderGamma;

            // Color Tint / Temperature
            u.uTint.value.set(Config.shaderTintR, Config.shaderTintG, Config.shaderTintB);
            u.uTemperature.value = Config.shaderTemperature;

            // Vignette
            u.uVignetteEnabled.value = Config.vignetteEnabled ? 1.0 : 0.0;
            u.uVignetteIntensity.value = Config.vignetteIntensity;
            u.uVignetteRadius.value = Config.vignetteRadius;
            u.uVignetteSoftness.value = Config.vignetteSoftness;

            // Chromatic Aberration
            u.uChromaticEnabled.value = Config.chromaticEnabled ? 1.0 : 0.0;
            u.uChromaticIntensity.value = Config.chromaticIntensity;
            u.uChromaticRadial.value = Config.chromaticRadial ? 1.0 : 0.0;

            // Film Grain
            u.uGrainEnabled.value = Config.grainEnabled ? 1.0 : 0.0;
            u.uGrainIntensity.value = Config.grainIntensity;
            u.uGrainSpeed.value = Config.grainSpeed;
            u.uGrainSize.value = Config.grainSize;

            // Sharpen
            u.uSharpenEnabled.value = Config.sharpenEnabled ? 1.0 : 0.0;
            u.uSharpenIntensity.value = Config.sharpenIntensity;

            // Bloom
            u.uBloomEnabled.value = Config.bloomEnabled ? 1.0 : 0.0;
            u.uBloomIntensity.value = Config.bloomIntensity;
            u.uBloomThreshold.value = Config.bloomThreshold;
            u.uBloomRadius.value = Config.bloomRadius;

            this.composer.render();
        } else {
            this.renderer.render(this.scene, this.camera);
        }

        this.labelRenderer.render(this.scene, this.camera);
    }

    triggerScreenShake(intensity, duration) {
        if (!Config.vfxEnabled) return;
        this.shakeIntensity = intensity;
        this.shakeTimer = duration;
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.labelRenderer.setSize(window.innerWidth, window.innerHeight);
        if (this.composer) {
            this.composer.setSize(window.innerWidth, window.innerHeight);
        }
        // Update shader resolution
        if (this.customPass && this.customPass.uniforms.uResolution) {
            this.customPass.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
        }
    }
}
