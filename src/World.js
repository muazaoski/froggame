import * as THREE from 'three';
import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as CANNON from 'cannon-es';
import { Physics } from './Physics.js';
import { Frog } from './Frog.js';
import { Ball } from './Ball.js';
import { Scooter } from './Scooter.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { SAOPass } from 'three/addons/postprocessing/SAOPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { Config } from './Config.js';
import { ParticleSystem } from './ParticleSystem.js';

export class World {
    constructor() {
        this.container = document.getElementById('canvas-container');

        // SCENE
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xff8800); // Warmer Sunset Orange
        this.scene.fog = new THREE.Fog(0xff8800, 40, 120);

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

        // Tongue mechanics - grapple hooks
        this.grappleHooks = [];

        // Tongue cursor indicator
        this.tongueCursorIndicator = null;
        this.createTongueCursorIndicator();

        // RENDERER
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        // Shadow map configuration from Config
        this.renderer.shadowMap.enabled = Config.shadowEnabled;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Forced for realism
        this.renderer.shadowMap.autoUpdate = Config.shadowAutoUpdate;

        // Realistic Tone Mapping (Cycles Look)
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.0;

        this.container.appendChild(this.renderer.domElement);

        // LABEL RENDERER (Chat bubbles, damage toasts, health bars)
        this.labelRenderer = new CSS2DRenderer();
        this.labelRenderer.setSize(window.innerWidth, window.innerHeight);
        this.labelRenderer.domElement.style.position = 'absolute';
        this.labelRenderer.domElement.style.top = '0px';
        this.labelRenderer.domElement.style.left = '0px';
        this.labelRenderer.domElement.style.pointerEvents = 'none'; // Click through
        this.container.appendChild(this.labelRenderer.domElement);

        // LIGHTS
        const ambientLight = new THREE.AmbientLight(0xffffff, Config.ambientIntensity);
        this.scene.add(ambientLight);

        // Hemisphere Light for natural sky/ground contrast
        const hemiLight = new THREE.HemisphereLight(Config.hemiSkyColor, Config.hemiGroundColor, Config.hemiIntensity);
        this.scene.add(hemiLight);
        this.hemiLight = hemiLight;

        const dirLight = new THREE.DirectionalLight(0xffffff, Config.sunIntensity);
        dirLight.position.set(20, 30, 10);
        this.dirLight = dirLight; // Store reference for config updates

        // Rim Light (Opposite side) for better definition
        const rimLight = new THREE.DirectionalLight(Config.rimColor, Config.rimIntensity);
        rimLight.position.set(Config.rimPosX, Config.rimPosY, Config.rimPosZ);
        this.scene.add(rimLight);
        this.rimLight = rimLight;

        // Shadow settings from Config
        dirLight.castShadow = Config.shadowEnabled;
        dirLight.shadow.mapSize.width = Config.shadowMapSize;
        dirLight.shadow.mapSize.height = Config.shadowMapSize;
        dirLight.shadow.camera.near = Config.shadowCameraNear;
        dirLight.shadow.camera.far = Config.shadowCameraFar;
        dirLight.shadow.camera.left = -100; // Increased for broader coverage
        dirLight.shadow.camera.right = 100;
        dirLight.shadow.camera.top = 100;
        dirLight.shadow.camera.bottom = -100;
        dirLight.shadow.bias = Config.shadowBias;
        dirLight.shadow.normalBias = Config.shadowNormalBias;
        dirLight.shadow.radius = Config.shadowRadius;
        dirLight.shadow.blurSamples = Config.shadowBlurSamples;
        dirLight.shadow.intensity = Config.shadowIntensity;

        this.scene.add(dirLight);
        this.scene.add(dirLight.target); // Required for target tracking

        // PHYSICS
        this.physics = new Physics();

        // LOADING MANAGER
        this.loadingManager = new THREE.LoadingManager();
        this.setupLoadingManager();

        // Pass manager to entity loaders
        Frog.setLoaderManager(this.loadingManager);
        Scooter.setLoaderManager(this.loadingManager);

        // LOAD LEVEL
        this.loadLevel();

        // ENTITIES
        this.frogs = {}; // Map socketId -> Frog
        this.localFrog = null;
        this.isBallAuthority = false; // Whether this client controls ball physics sync

        // SCOOTERS
        this.scooters = [];
        this.scooterSpawnZones = []; // Positions where scooters can spawn
        this.playerHasScooter = {}; // Track which players have spawned scooters

        // RESIZE
        window.addEventListener('resize', () => this.onWindowResize());

        // RAYCASTER (For eye looking)
        this.raycaster = new THREE.Raycaster();
        this.mousePlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0); // Ground plane

        // FPS Tracking
        this.fpsCounter = document.getElementById('fps-counter');
        this.frameCount = 0;
        this.lastFpsUpdate = performance.now();

        // GRASS INTERACTION
        this.grassMeshes = [];
        this.grassUniforms = {
            uTime: { value: 0 },
            uPlayerPos: { value: new THREE.Vector3() },
            uBendingStrength: { value: Config.grassBendingStrength },
            uBendingRadius: { value: Config.grassBendingRadius },
            uWindSpeed: { value: Config.grassWindSpeed },
            uWindStrength: { value: Config.grassWindStrength }
        };

        // POST PROCESSING
        this.composer = new EffectComposer(this.renderer);
        this.composer.addPass(new RenderPass(this.scene, this.camera));

        // SAO - Scalable Ambient Occlusion (The "Cycles" deep corner shadows)
        this.saoPass = new SAOPass(this.scene, this.camera);
        this.saoPass.params.output = SAOPass.OUTPUT.Default;
        this.saoPass.params.saoBias = 0.5;
        this.saoPass.params.saoIntensity = 0.015; // Increased for deeper "Cycles" feel
        this.saoPass.params.saoScale = 12;
        this.saoPass.params.saoKernelRadius = 40;
        this.saoPass.params.saoMinResolution = 0;
        this.saoPass.enabled = Config.saonEnabled;
        this.composer.addPass(this.saoPass);

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
                "uBloomRadius": { value: Config.bloomRadius },

                // Toon / Outline
                "uToonEnabled": { value: Config.toonEnabled ? 1.0 : 0.0 },
                "uOutlineEnabled": { value: Config.outlineEnabled ? 1.0 : 0.0 },
                "uOutlineIntensity": { value: Config.outlineIntensity },
                "uSkyColor": { value: new THREE.Vector3(1.0, 0.53, 0.0) },
                "uLowHealth": { value: 0.0 }
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

                // Toon / Outline
                uniform float uToonEnabled;
                uniform float uOutlineEnabled;
                uniform float uOutlineIntensity;
                uniform vec3 uSkyColor;
                uniform float uLowHealth;
                
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
                    
                    // === CEL SHADING (Smooth Posterize) ===
                    bool isSky = distance(color.rgb, uSkyColor) < 0.25;
                    
                    if (uToonEnabled > 0.5 && !isSky) {
                        float levels = 8.0;
                        vec3 originalCol = color.rgb;
                        
                        // Use a smoother floor for cleaner ramps
                        vec3 low = floor(color.rgb * levels) / levels;
                        vec3 high = ceil(color.rgb * levels) / levels;
                        vec3 posterized = mix(low, high, fract(color.rgb * levels) * 0.4);
                        
                        // Mix back heavily for that soft "Ghibli" feel
                        color.rgb = mix(posterized, originalCol, 0.7);
                    }

                    // === SOBEL OUTLINE ===
                    if (uOutlineEnabled > 0.5 && !isSky) {
                        float thickness = 0.6; // Even thinner edge
                        vec2 offset = thickness / uResolution;
                        
                        float t00 = getLuminance(texture2D(tDiffuse, uv + vec2(-offset.x, -offset.y)).rgb);
                        float t10 = getLuminance(texture2D(tDiffuse, uv + vec2( 0.0,      -offset.y)).rgb);
                        float t20 = getLuminance(texture2D(tDiffuse, uv + vec2( offset.x, -offset.y)).rgb);
                        float t01 = getLuminance(texture2D(tDiffuse, uv + vec2(-offset.x,  0.0)).rgb);
                        float t21 = getLuminance(texture2D(tDiffuse, uv + vec2( offset.x,  0.0)).rgb);
                        float t02 = getLuminance(texture2D(tDiffuse, uv + vec2(-offset.x,  offset.y)).rgb);
                        float t12 = getLuminance(texture2D(tDiffuse, uv + vec2( 0.0,       offset.y)).rgb);
                        float t22 = getLuminance(texture2D(tDiffuse, uv + vec2( offset.x,  offset.y)).rgb);
                        
                        float gx = t00 + 2.0 * t01 + t02 - t20 - 2.0 * t21 - t22;
                        float gy = t00 + 2.0 * t10 + t20 - t02 - 2.0 * t12 - t22;
                        float edge = sqrt(gx * gx + gy * gy);
                        
                        if (edge > 0.25) { // Protect smooth surfaces
                            color.rgb *= (1.0 - uOutlineIntensity * 2.5);
                        }
                    }

                    // === VIGNETTE ===
                    if (uVignetteEnabled > 0.5) {
                        vec2 vignetteUv = vUv - 0.5;
                        float dist = length(vignetteUv);
                        
                        // Heartbeat pulse calculation
                        float pulseSpeed = 4.0 + (uLowHealth * 8.0);
                        float pulse = (0.5 + 0.5 * sin(uTime * pulseSpeed)) * uLowHealth;
                        
                        // Modulate vignette parameters based on health/pulse
                        float currentRadius = uVignetteRadius * (1.1 - uLowHealth * 0.4);
                        float currentIntensity = uVignetteIntensity + (pulse * 0.5);
                        
                        float vig = smoothstep(currentRadius, currentRadius - uVignetteSoftness, dist);
                        
                        // Mix in red tint for low health
                        vec3 vignetteColor = mix(vec3(0.0), vec3(0.8, 0.0, 0.0), uLowHealth * 0.7);
                        
                        // Apply darkening and red tint
                        vec3 processedColor = color.rgb * (1.0 - currentIntensity);
                        processedColor += (vignetteColor * (dist * 2.0) * currentIntensity);
                        
                        color.rgb = mix(processedColor, color.rgb, vig);
                    }
                    
                    // Clamp final output
                    color.rgb = clamp(color.rgb, 0.0, 1.0);
                    
                    gl_FragColor = color;
                }
            `
        };

        this.customPass = new ShaderPass(postFX);
        this.composer.addPass(this.customPass);

        // Final Output Pass for high-fidelity tone mapping
        const outputPass = new OutputPass();
        this.composer.addPass(outputPass);

        // Initialize Particle System for VFX
        this.particles = new ParticleSystem(this.scene);

        // Initialize Soccer Ball - spawn from sky in a random area
        const spawnX = (Math.random() - 0.5) * Config.ballSpawnRange * 2;
        const spawnZ = (Math.random() - 0.5) * Config.ballSpawnRange * 2;
        this.ball = new Ball(this.physics, this.scene, { x: spawnX, y: Config.ballSpawnHeight, z: spawnZ });
    }

    setupLoadingManager() {
        const loadingBar = document.getElementById('loading-bar');
        const loadingStatus = document.getElementById('loading-status');
        const loadingScreen = document.getElementById('loading-screen');

        this.loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
            const progress = (itemsLoaded / itemsTotal) * 100;
            if (loadingBar) loadingBar.style.width = progress + '%';

            // Helpful status messages based on what's loading
            if (url.includes('world.glb')) {
                if (loadingStatus) loadingStatus.textContent = 'Analyzing Terrain & Lilypads...';
            } else if (url.includes('scooter.glb')) {
                if (loadingStatus) loadingStatus.textContent = 'Polishing Scooters...';
            } else if (url.includes('frog_ready')) {
                if (loadingStatus) loadingStatus.textContent = 'Waking up Frogs...';
            } else {
                if (loadingStatus) loadingStatus.textContent = `Gathering assets... (${itemsLoaded}/${itemsTotal})`;
            }
        };

        this.loadingManager.onLoad = () => {
            console.log('Loading complete!');
            if (loadingStatus) loadingStatus.textContent = 'Optimizing Grass & Shadows...';

            // Give a tiny moment for instancing to happen if needed
            setTimeout(() => {
                if (loadingScreen) {
                    loadingScreen.classList.add('fade-out');
                    // Completely remove after transition
                    setTimeout(() => {
                        loadingScreen.style.display = 'none';
                        const loginModal = document.getElementById('login-modal');
                        // ONLY show login modal if user hasn't started the game yet
                        if (loginModal && document.body.classList.contains('spectator-mode')) {
                            loginModal.style.display = 'flex';
                        }
                    }, 800);
                }
            }, 500);
        };

        this.loadingManager.onError = (url) => {
            console.error('Error loading: ' + url);
            if (loadingStatus) loadingStatus.textContent = 'Error loading assets. Please refresh.';
        };
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

    setupGrassMaterial(material) {
        if (!material) return;

        material.onBeforeCompile = (shader) => {
            // Add uniforms
            shader.uniforms.uTime = this.grassUniforms.uTime;
            shader.uniforms.uPlayerPos = this.grassUniforms.uPlayerPos;
            shader.uniforms.uBendingStrength = this.grassUniforms.uBendingStrength;
            shader.uniforms.uBendingRadius = this.grassUniforms.uBendingRadius;
            shader.uniforms.uWindSpeed = this.grassUniforms.uWindSpeed;
            shader.uniforms.uWindStrength = this.grassUniforms.uWindStrength;

            // Inject vertex shader logic
            shader.vertexShader = `
                uniform float uTime;
                uniform vec3 uPlayerPos;
                uniform float uBendingStrength;
                uniform float uBendingRadius;
                uniform float uWindSpeed;
                uniform float uWindStrength;
            ` + shader.vertexShader;

            shader.vertexShader = shader.vertexShader.replace(
                '#include <begin_vertex>',
                `
                #include <begin_vertex>
                
                // Get world position of vertex (Handle instancing)
                #ifdef USE_INSTANCING
                    vec4 worldPos = modelMatrix * instanceMatrix * vec4(position, 1.0);
                #else
                    vec4 worldPos = modelMatrix * vec4(position, 1.0);
                #endif
                
                // 1. Wind Sway (Simple sin wave based on height)
                // We use object-space Y for height factor
                float heightFactor = clamp(position.y * 2.0, 0.0, 1.0); 
                float windTime = uTime * uWindSpeed;
                float windSway = sin(windTime + worldPos.x * 0.5 + worldPos.z * 0.5) * uWindStrength * heightFactor;
                transformed.x += windSway;
                transformed.z += windSway * 0.5;

                // 2. Player Pushing
                float dist = distance(worldPos.xyz, uPlayerPos);
                if (dist < uBendingRadius) {
                    float pushFactor = (1.0 - (dist / uBendingRadius)) * uBendingStrength * heightFactor;
                    vec3 pushDir = normalize(worldPos.xyz - uPlayerPos);
                    pushDir.y = -0.3; // Push down slightly
                    
                    // Transform push direction back to local space
                    #ifdef USE_INSTANCING
                        transformed += (inverse(instanceMatrix) * inverse(modelMatrix) * vec4(pushDir * pushFactor, 0.0)).xyz;
                    #else
                        transformed += (inverse(modelMatrix) * vec4(pushDir * pushFactor, 0.0)).xyz;
                    #endif
                }
                `
            );
        };
    }

    setupInstancedGrass(templateMesh, instances) {
        const geometry = templateMesh.geometry;
        const material = templateMesh.material.clone();

        // Ensure green color
        material.color.setHex(0x3ea331);

        // Apply the bending shader to the instanced material
        this.setupGrassMaterial(material);

        const instancedMesh = new THREE.InstancedMesh(geometry, material, instances.length);
        instancedMesh.name = 'InstancedGrass';
        instancedMesh.castShadow = false; // Massive perf gain
        instancedMesh.receiveShadow = true;

        for (let i = 0; i < instances.length; i++) {
            instancedMesh.setMatrixAt(i, instances[i]);
        }

        instancedMesh.instanceMatrix.needsUpdate = true;
        this.scene.add(instancedMesh);
        this.grassMeshes.push(instancedMesh);
    }

    loadLevel() {
        const loader = new GLTFLoader(this.loadingManager);
        this.wallMeshes = []; // Track walls for camera occlusion
        const grassInstances = [];
        let grassTemplate = null;

        loader.load('/models/world.glb', (gltf) => {
            const level = gltf.scene;
            this.scene.add(level);

            level.traverse((child) => {
                if (child.isMesh) {
                    child.castShadow = !child.name.toLowerCase().includes('grass');
                    child.receiveShadow = true;

                    // Make material support transparency for camera occlusion
                    if (child.material) {
                        child.material.transparent = true;
                        child.material.opacity = 1;
                        child.userData.originalOpacity = 1;
                        child.userData.targetOpacity = 1;

                        // TOON LOOK: Inject vibrant colors for terrain/water
                        // CYCLES LOOK: Natural, physically grounded colors
                        if (child.name.toLowerCase().includes('terrain') || child.name.toLowerCase().includes('island')) {
                            child.material.color.setHex(0x55aa66); // Natural Forest Green
                            child.material.emissive.setHex(0x000000);
                            child.material.emissiveIntensity = 0.0;
                            child.material.roughness = 0.8;
                        }
                        if (child.name.toLowerCase().includes('water')) {
                            child.material.color.setHex(0x1166aa); // Deep Ocean Blue
                            child.material.opacity = 0.9;
                            child.material.emissive.setHex(0x002244);
                            child.material.emissiveIntensity = 0.1;
                            child.material.metalness = 0.6;
                            child.material.roughness = 0.1;
                        }

                        // SETUP GRASS INTERACTION (Collect for instancing)
                        if (child.name.toLowerCase().includes('grass')) {
                            // Store transform and hide individual mesh
                            child.updateMatrixWorld();
                            const worldMatrix = child.matrixWorld.clone();
                            grassInstances.push(worldMatrix);

                            if (!grassTemplate) grassTemplate = child;
                            child.visible = false;
                        }
                    }

                    // Track as wall for camera occlusion (exclude ground)
                    if (!child.name.toLowerCase().includes('ground') &&
                        !child.name.toLowerCase().includes('floor')) {
                        this.wallMeshes.push(child);
                    }

                    // Detect scooter spawn zones - plate hidden but scooters still spawn
                    if (child.name.toLowerCase().includes('scooterspawn')) {
                        // Hide the spawn plate visual
                        child.visible = false;
                        child.userData.isSpawnPlate = true;

                        // Get spawn position and spawn scooter
                        const worldPos = new THREE.Vector3();
                        child.getWorldPosition(worldPos);
                        const zone = {
                            position: worldPos,
                            mesh: child
                        };
                        this.scooterSpawnZones.push(zone);

                        // Spawn a scooter at this zone
                        setTimeout(() => {
                            this.spawnScooterAtZone(zone);
                        }, 100);


                    }

                    // Physics Generation
                    if (child.name.startsWith('Ghost_') || child.name.toLowerCase().includes('grass')) {
                        // Pass (No physics for ghosts or grass)
                    } else if (!child.name.toLowerCase().includes('scooterspawn')) {
                        this.createPhysicsForMesh(child);
                    }
                }
            });

            // Create Instanced Grass for performance
            if (grassTemplate && grassInstances.length > 0) {
                this.setupInstancedGrass(grassTemplate, grassInstances);
            }
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

            // Spawn grapple hooks after level loads
            this.spawnGrappleHooks();
        });
    }

    spawnGrappleHooks() {
        // Create several grapple points around the map
        const hookPositions = [
            { x: -10, y: 8, z: -10 },
            { x: 10, y: 10, z: -10 },
            { x: -10, y: 7, z: 10 },
            { x: 10, y: 9, z: 10 },
            { x: 0, y: 12, z: 0 },
            { x: -15, y: 6, z: 0 },
            { x: 15, y: 6, z: 0 },
            { x: 0, y: 8, z: -15 },
            { x: 0, y: 8, z: 15 },
        ];

        hookPositions.forEach(pos => {
            // Create hook visual
            const hookGeometry = new THREE.SphereGeometry(0.3, 16, 16);
            const hookMaterial = new THREE.MeshStandardMaterial({
                color: 0xffd700, // Gold color
                metalness: 0.8,
                roughness: 0.2,
                emissive: 0xffd700,
                emissiveIntensity: 0.3
            });
            const hook = new THREE.Mesh(hookGeometry, hookMaterial);
            hook.position.set(pos.x, pos.y, pos.z);
            hook.castShadow = true;

            // Add a hanging rope visual
            const ropeGeometry = new THREE.CylinderGeometry(0.03, 0.03, 2, 8);
            const ropeMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
            const rope = new THREE.Mesh(ropeGeometry, ropeMaterial);
            rope.position.y = 1;
            hook.add(rope);

            this.scene.add(hook);
            this.grappleHooks.push(hook);
        });


    }

    createTongueCursorIndicator() {
        // Create a ring indicator that shows where tongue will hit
        const ringGeometry = new THREE.RingGeometry(0.3, 0.4, 32);
        const ringMaterial = new THREE.MeshBasicMaterial({
            color: Config.tongueColor,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.8,
            depthTest: false // Render on top
        });

        this.tongueCursorIndicator = new THREE.Mesh(ringGeometry, ringMaterial);
        this.tongueCursorIndicator.visible = false;

        // Add a glow effect (inner filled circle)
        const glowGeometry = new THREE.CircleGeometry(0.3, 32);
        const glowMaterial = new THREE.MeshBasicMaterial({
            color: Config.tongueColor,
            transparent: true,
            opacity: 0.3,
            depthTest: false
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        this.tongueCursorIndicator.add(glow);

        this.scene.add(this.tongueCursorIndicator);
    }

    updateTongueCursorIndicator(input) {
        if (!this.tongueCursorIndicator || !this.localFrog) {
            return;
        }

        // Hide cursor if tongue is active
        if (this.localFrog.tongue.state !== 'idle') {
            this.tongueCursorIndicator.visible = false;
            return;
        }

        // Get mouse world position
        const mouseWorldPos = this.getMouseIntersection(input);
        if (!mouseWorldPos) {
            this.tongueCursorIndicator.visible = false;
            return;
        }

        // Get frog's position and mouth offset
        const frogPos = this.localFrog.mesh.position;
        const mouthOffset = new THREE.Vector3(0, 0.3, 0.5);
        mouthOffset.applyQuaternion(this.localFrog.mesh.quaternion);
        const tongueStart = frogPos.clone().add(mouthOffset);

        // Direction to mouse (for vertical aiming)
        let targetDir = new THREE.Vector3().subVectors(mouseWorldPos, tongueStart).normalize();

        // Check if any interactive targets are in the cone
        const potentialTargets = this.getPotentialTongueTargets(targetDir);
        const hasTargets = potentialTargets.length > 0;

        // Calculate direction to mouse (horizontal check for body rotation)
        const toMouse = new THREE.Vector3().subVectors(mouseWorldPos, frogPos);
        const horizontalToMouse = new THREE.Vector3(toMouse.x, 0, toMouse.z).normalize();
        const frogForward = new THREE.Vector3(0, 0, 1).applyQuaternion(this.localFrog.mesh.quaternion);
        const horizontalForward = new THREE.Vector3(frogForward.x, 0, frogForward.z).normalize();

        // Check if within frontal cone (use spec's 18 degree cone)
        const angle = Math.acos(Math.max(-1, Math.min(1, horizontalToMouse.dot(horizontalForward))));
        const maxAngle = THREE.MathUtils.degToRad(Config.tongueConeAngle);

        if (angle > maxAngle * 2.5 || isNaN(angle)) { // Wider check for cursor, actual cone is tighter
            this.tongueCursorIndicator.visible = false;
            return;
        }

        // Use physics raycast
        const from = new CANNON.Vec3(tongueStart.x, tongueStart.y, tongueStart.z);
        const to = new CANNON.Vec3(
            tongueStart.x + targetDir.x * Config.tongueRange,
            tongueStart.y + targetDir.y * Config.tongueRange,
            tongueStart.z + targetDir.z * Config.tongueRange
        );

        const result = new CANNON.RaycastResult();
        const ray = new CANNON.Ray(from, to);
        ray.intersectWorld(this.physics.world, { result });

        if (result.hasHit) {
            const hitPoint = new THREE.Vector3(
                result.hitPointWorld.x,
                result.hitPointWorld.y,
                result.hitPointWorld.z
            );
            const hitNormal = result.hitNormalWorld;

            // Check if ground
            const isGround = hitNormal.y > 0.8 || hitPoint.y < 0.5;

            if (!isGround) {
                // Show indicator at hit point
                this.tongueCursorIndicator.position.copy(hitPoint);

                // --- Modern Snap Logic ---
                // If a target is close to this wall hit, snap the reticle to the target!
                if (hasTargets) {
                    const bestTarget = potentialTargets[0];
                    const assistRadius = Config.tongueAssistRadius || 2.0;
                    if (bestTarget.point.distanceTo(hitPoint) < assistRadius) {
                        this.tongueCursorIndicator.position.copy(bestTarget.point);
                        this.tongueCursorIndicator.quaternion.set(0, 0, 0, 1); // Face camera for floating targets
                    } else {
                        // Orient to wall
                        const normal = new THREE.Vector3(hitNormal.x, hitNormal.y, hitNormal.z);
                        this.tongueCursorIndicator.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal);
                        this.tongueCursorIndicator.position.add(normal.multiplyScalar(0.05));
                    }
                } else {
                    // Normal wall orientation
                    const normal = new THREE.Vector3(hitNormal.x, hitNormal.y, hitNormal.z);
                    this.tongueCursorIndicator.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal);
                    this.tongueCursorIndicator.position.add(normal.multiplyScalar(0.05));
                }

                this.tongueCursorIndicator.visible = true;

                // === PHASE 6: TARGET FEEDBACK ===
                // Change color/size when targets are available in cone
                if (hasTargets) {
                    const bestTarget = potentialTargets[0];
                    const distToCenter = bestTarget.point.distanceTo(hitPoint);
                    const isLocked = distToCenter < (Config.tongueAssistRadius || 2.0);

                    if (isLocked) {
                        // Target available - green tint, larger
                        this.tongueCursorIndicator.material.color.setHex(0x00ffcc);
                        const time = performance.now() / 1000;
                        const scale = 1.4 + Math.sin(time * 10) * 0.1;
                        this.tongueCursorIndicator.scale.set(scale, scale, 1);
                    } else {
                        // Target nearby but not locked
                        this.tongueCursorIndicator.material.color.set(Config.tongueColor);
                        this.tongueCursorIndicator.scale.set(1.1, 1.1, 1);
                    }
                } else {
                    // No targets - normal pink, standard pulse
                    this.tongueCursorIndicator.material.color.set(Config.tongueColor);
                    const time = performance.now() / 1000;
                    const scale = 1 + Math.sin(time * 5) * 0.1;
                    this.tongueCursorIndicator.scale.set(scale, scale, 1);
                }
                return;
            }
        }

        // If no valid wall hit, check if we have targets anyway (show indicator near best target)
        if (hasTargets) {
            const bestTarget = potentialTargets[0];
            this.tongueCursorIndicator.position.copy(bestTarget.point);
            this.tongueCursorIndicator.visible = true;
            this.tongueCursorIndicator.material.color.setHex(0x00ff88);
            const time = performance.now() / 1000;
            const scale = 1.3 + Math.sin(time * 8) * 0.15;
            this.tongueCursorIndicator.scale.set(scale, scale, 1);
            // Reset rotation for floating targets
            this.tongueCursorIndicator.quaternion.set(0, 0, 0, 1);
            return;
        }

        // No valid hit, hide
        this.tongueCursorIndicator.visible = false;
    }

    /**
     * Get potential tongue targets currently in the cone
     * Used for visual feedback on the cursor indicator
     */
    getPotentialTongueTargets(customAimDir = null) {
        if (!this.localFrog) return [];

        const mouthPos = this.localFrog.getMouthPosition();
        const forward = customAimDir || this.localFrog.getForwardDirection();
        const maxRange = Config.tongueRange;
        const coneAngleRad = THREE.MathUtils.degToRad(Config.tongueConeAngle);
        const candidates = [];

        // Check frogs
        for (const [id, frog] of Object.entries(this.frogs)) {
            if (id === this.localFrog.id) continue;
            if (frog.isDead) continue;

            const targetPos = frog.mesh.position.clone();
            targetPos.y += 0.3;

            const toTarget = new THREE.Vector3().subVectors(targetPos, mouthPos);
            const distance = toTarget.length();
            if (distance > maxRange) continue;

            const normalizedDir = toTarget.clone().normalize();
            if (normalizedDir.dot(forward) < 0) continue;

            const angle = normalizedDir.angleTo(forward);
            if (angle > coneAngleRad) continue;

            candidates.push({ type: 'frog', point: targetPos, distance, angle });
        }

        // Check grapple hooks
        for (const hook of this.grappleHooks) {
            const toTarget = new THREE.Vector3().subVectors(hook.position, mouthPos);
            const distance = toTarget.length();
            if (distance > maxRange) continue;

            const normalizedDir = toTarget.clone().normalize();
            if (normalizedDir.dot(forward) < 0) continue;

            const angle = normalizedDir.angleTo(forward);
            if (angle > coneAngleRad) continue;

            candidates.push({ type: 'hook', point: hook.position.clone(), distance, angle });
        }

        // Check ball
        if (this.ball && this.ball.mesh) {
            const ballPos = this.ball.mesh.position.clone();
            const toTarget = new THREE.Vector3().subVectors(ballPos, mouthPos);
            const distance = toTarget.length();

            if (distance <= maxRange) {
                const normalizedDir = toTarget.clone().normalize();
                if (normalizedDir.dot(forward) >= 0) {
                    const angle = normalizedDir.angleTo(forward);
                    if (angle <= coneAngleRad) {
                        candidates.push({ type: 'ball', point: ballPos, distance, angle });
                    }
                }
            }
        }

        // Score and sort
        return candidates.map(c => ({
            ...c,
            score: (Config.tongueAngleWeight * (c.angle / coneAngleRad)) +
                (Config.tongueDistanceWeight * (c.distance / maxRange))
        })).sort((a, b) => a.score - b.score);
    }

    /**
     * Phase 7: Debug visualization for tongue targeting
     * Toggle with F3 key
     */
    updateTongueDebug() {
        // Create debug objects on first call
        if (!this.tongueDebugCone) {
            // Create cone mesh for visualization
            const coneRadius = Math.tan(THREE.MathUtils.degToRad(Config.tongueConeAngle)) * Config.tongueRange;
            const coneGeo = new THREE.ConeGeometry(coneRadius, Config.tongueRange, 32, 1, true);
            const coneMat = new THREE.MeshBasicMaterial({
                color: 0x00ff00,
                transparent: true,
                opacity: 0.15,
                wireframe: false,
                side: THREE.DoubleSide,
                depthWrite: false
            });
            this.tongueDebugCone = new THREE.Mesh(coneGeo, coneMat);
            this.tongueDebugCone.visible = false;
            this.scene.add(this.tongueDebugCone);

            // Wireframe overlay
            const wireGeo = new THREE.ConeGeometry(coneRadius, Config.tongueRange, 16, 1, true);
            const wireMat = new THREE.MeshBasicMaterial({
                color: 0x00ff00,
                wireframe: true,
                transparent: true,
                opacity: 0.4
            });
            this.tongueDebugConeWire = new THREE.Mesh(wireGeo, wireMat);
            this.tongueDebugConeWire.visible = false;
            this.scene.add(this.tongueDebugConeWire);

            // Target highlight spheres (pool of 10)
            this.tongueDebugTargets = [];
            for (let i = 0; i < 10; i++) {
                const sphereGeo = new THREE.SphereGeometry(Config.tongueMagnetRadius, 16, 16);
                const sphereMat = new THREE.MeshBasicMaterial({
                    color: 0xffff00,
                    transparent: true,
                    opacity: 0.5,
                    wireframe: true
                });
                const sphere = new THREE.Mesh(sphereGeo, sphereMat);
                sphere.visible = false;
                this.scene.add(sphere);
                this.tongueDebugTargets.push(sphere);
            }
        }

        // Toggle visibility based on config
        if (!Config.tongueDebugEnabled) {
            this.tongueDebugCone.visible = false;
            this.tongueDebugConeWire.visible = false;
            for (const sphere of this.tongueDebugTargets) {
                sphere.visible = false;
            }
            return;
        }

        if (!this.localFrog) return;

        // Position cone at frog mouth, pointing forward
        const mouthPos = this.localFrog.getMouthPosition();
        const forward = this.localFrog.getForwardDirection();

        // Position cone (cone points in -Y by default, need to rotate)
        this.tongueDebugCone.position.copy(mouthPos);
        this.tongueDebugConeWire.position.copy(mouthPos);

        // Offset forward by half the cone height
        const halfHeight = Config.tongueRange / 2;
        this.tongueDebugCone.position.add(forward.clone().multiplyScalar(halfHeight));
        this.tongueDebugConeWire.position.add(forward.clone().multiplyScalar(halfHeight));

        // Rotate cone to point in forward direction
        // Default cone points in -Y, we want it to point in forward direction
        const up = new THREE.Vector3(0, -1, 0);
        const quaternion = new THREE.Quaternion().setFromUnitVectors(up, forward);
        this.tongueDebugCone.quaternion.copy(quaternion);
        this.tongueDebugConeWire.quaternion.copy(quaternion);

        this.tongueDebugCone.visible = true;
        this.tongueDebugConeWire.visible = true;

        // Highlight potential targets
        const targets = this.getPotentialTongueTargets();
        for (let i = 0; i < this.tongueDebugTargets.length; i++) {
            if (i < targets.length) {
                this.tongueDebugTargets[i].position.copy(targets[i].point);
                this.tongueDebugTargets[i].visible = true;
                // Best target is green, others are yellow
                this.tongueDebugTargets[i].material.color.setHex(i === 0 ? 0x00ff00 : 0xffff00);
            } else {
                this.tongueDebugTargets[i].visible = false;
            }
        }
    }

    createPhysicsForMesh(mesh) {
        // Simple approach: Use Trimesh for static world geometry
        const geometry = mesh.geometry;

        // Ensure vertex position data is present
        if (!geometry || !geometry.attributes || !geometry.attributes.position) {
            console.warn(`Skipping physics for mesh "${mesh.name}": no position attributes`);
            return;
        }

        const posAttr = geometry.attributes.position;
        const indexAttr = geometry.index;

        // Skip if no vertices
        if (!posAttr || posAttr.count === 0) {
            console.warn(`Skipping physics for mesh "${mesh.name}": empty vertices`);
            return;
        }

        // Need at least 3 vertices to form a triangle
        if (posAttr.count < 3) {
            console.warn(`Skipping physics for mesh "${mesh.name}": not enough vertices (${posAttr.count})`);
            return;
        }

        // Scale vertices by mesh scale
        const scale = mesh.getWorldScale(new THREE.Vector3());

        // Validate scale - skip if mesh has zero scale
        if (scale.x === 0 || scale.y === 0 || scale.z === 0) {
            console.warn(`Skipping physics for mesh "${mesh.name}": zero scale`);
            return;
        }

        const vertices = [];
        const indices = [];

        for (let i = 0; i < posAttr.count; i++) {
            const x = posAttr.getX(i) * scale.x;
            const y = posAttr.getY(i) * scale.y;
            const z = posAttr.getZ(i) * scale.z;

            // Skip if any vertex contains NaN or Infinity
            if (!isFinite(x) || !isFinite(y) || !isFinite(z)) {
                console.warn(`Skipping physics for mesh "${mesh.name}": invalid vertex at index ${i}`);
                return;
            }

            vertices.push(x, y, z);
        }

        if (indexAttr && indexAttr.count > 0) {
            // Need at least 3 indices to form a triangle
            if (indexAttr.count < 3) {
                console.warn(`Skipping physics for mesh "${mesh.name}": not enough indices (${indexAttr.count})`);
                return;
            }

            for (let i = 0; i < indexAttr.count; i++) {
                const idx = indexAttr.getX(i);
                // Validate index is within bounds
                if (idx < 0 || idx >= posAttr.count) {
                    console.warn(`Skipping physics for mesh "${mesh.name}": index out of bounds at ${i}`);
                    return;
                }
                indices.push(idx);
            }
        } else {
            // Unindexed geometry - make sequential indices
            // Need vertex count to be divisible by 3 for triangles
            if (posAttr.count % 3 !== 0) {
                console.warn(`Skipping physics for mesh "${mesh.name}": vertex count not divisible by 3`);
                return;
            }
            for (let i = 0; i < posAttr.count; i++) {
                indices.push(i);
            }
        }

        // Final validation - need at least one complete triangle
        if (vertices.length < 9 || indices.length < 3) {
            console.warn(`Skipping physics for mesh "${mesh.name}": insufficient data for triangles`);
            return;
        }

        try {
            const shape = new CANNON.Trimesh(vertices, indices);

            // Additional CANNON.js specific validation
            if (!shape.vertices || shape.vertices.length === 0 ||
                !shape.indices || shape.indices.length === 0) {
                console.warn(`Skipping physics for mesh "${mesh.name}": Trimesh creation resulted in empty data`);
                return;
            }

            const body = new CANNON.Body({
                mass: 0,
                material: this.physics.groundMaterial
            });
            body.addShape(shape);

            // Position/Rotation
            const pos = mesh.getWorldPosition(new THREE.Vector3());
            const quat = mesh.getWorldQuaternion(new THREE.Quaternion());

            body.position.copy(pos);
            body.quaternion.copy(quat);

            this.physics.world.addBody(body);
        } catch (error) {
            console.error(`Failed to create physics for mesh "${mesh.name}":`, error);
        }
    }

    getMouseIntersection(input) {
        if (!input) return null;

        // Setup raycaster from camera through mouse position
        this.raycaster.setFromCamera(input.mouse, this.camera);

        // First try to hit actual scene geometry (walls, objects)
        const intersects = this.raycaster.intersectObjects(this.scene.children, true);

        // Filter to only include valid targets (not tongue, not particles, etc)
        for (const hit of intersects) {
            // Skip invisible objects
            if (!hit.object.visible) continue;

            // --- FIX: Back-shooting bug ---
            // If we hit an object that is currently occluded (faded to 0.2 opacity), SKIP IT.
            // This prevents shooting the tongue at the back of walls that the camera is "looking through".
            if (hit.object.userData && hit.object.userData.targetOpacity !== undefined && hit.object.userData.targetOpacity < 1.0) {
                continue;
            }

            // Skip tongue visuals
            if (hit.object.parent && hit.object.parent.type === 'Line') continue;
            // Skip particles (very small meshes)
            if (hit.object.geometry && hit.object.geometry.type === 'BoxGeometry') {
                const box = hit.object.geometry.boundingBox || hit.object.geometry.computeBoundingBox();
                if (box) {
                    const size = new THREE.Vector3();
                    hit.object.geometry.boundingBox.getSize(size);
                    if (size.x < 0.3 && size.y < 0.3 && size.z < 0.3) continue; // Skip small particles
                }
            }

            // Valid hit!
            return hit.point.clone();
        }

        // If no geometry hit, use a smart plane that follows the frog
        // This gives a reasonable target when clicking on sky/empty space
        if (this.localFrog) {
            const frogY = this.localFrog.mesh.position.y;
            const dynamicPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -frogY);
            const target = new THREE.Vector3();
            this.raycaster.ray.intersectPlane(dynamicPlane, target);
            if (target) {
                return target;
            }
        }

        // Last fallback: project ray forward
        const target = new THREE.Vector3();
        return this.raycaster.ray.at(15, target);
    }

    addLocalFrog(id, color, startData) {
        const frog = new Frog(id, color, this.physics, true);
        frog.world = this; // Give access to world for screen shake
        if (startData) {
            frog.body.position.set(startData.x, startData.y, startData.z);
            if (startData.name) frog.setName(startData.name);
            frog.level = startData.level || 1;
            frog.bio = startData.bio || '';
            frog.badges = startData.badges || [];
            frog.userId = startData.userId || null;
        }
        this.scene.add(frog.mesh);
        this.localFrog = frog;
        this.frogs[id] = frog;

        // Give frog access to particle system for VFX
        frog.particles = this.particles;

        // Punch collision callback
        frog.onPunchHit = (position, direction, radius) => {
            return this.checkPunchCollision(id, position, direction, radius); // Return result
        };

        return frog;
    }

    addRemoteFrog(id, data) {
        // Guard: Don't create duplicate if frog already exists
        if (this.frogs[id]) {

            // Update existing frog's data
            const existing = this.frogs[id];
            if (data.name) existing.setName(data.name);
            if (data.color) existing.setColor(data.color);
            if (data.level) existing.level = data.level;
            if (data.bio !== undefined) existing.bio = data.bio;
            if (data.badges) existing.badges = data.badges;
            if (data.userId) existing.userId = data.userId;
            return existing;
        }

        const frog = new Frog(id, data.color, this.physics, false);
        if (data.name) frog.setName(data.name);
        frog.level = data.level || 1;
        frog.bio = data.bio || '';
        frog.badges = data.badges || [];
        frog.userId = data.userId || null;
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
                // Calculate critical hit
                const isCritical = Math.random() < Config.criticalChance;

                // Random damage from ranges
                let damage;
                if (isCritical) {
                    damage = Math.floor(Math.random() * (Config.criticalDamageMax - Config.criticalDamageMin + 1)) + Config.criticalDamageMin;
                } else {
                    damage = Math.floor(Math.random() * (Config.punchDamageMax - Config.punchDamageMin + 1)) + Config.punchDamageMin;
                }

                // Calculate knockback (stronger for critical)
                const knockbackMult = isCritical ? 1.5 : 1;
                const knockback = direction.clone().multiplyScalar(Config.knockbackForce * knockbackMult);
                knockback.y = Config.knockbackUpward * knockbackMult;

                // NETWORKED COMBAT:
                // Don't apply damage locally yet. Send to server, wait for 'playerDamaged' event.
                // This ensures consistency (all clients apply damage at same time).
                if (this.network) {
                    this.network.sendHit(id, damage, knockback, isCritical);
                }

                // Spawn impact VFX immediately for feedback
                if (this.particles) {
                    this.particles.spawnPunchImpact(targetFrog.mesh.position, direction);
                }


                hit = true;
            } else {
                // Debug: log near misses
                if (distance < radius * 2) {

                }
            }
        }

        // Check if kick hit the ball
        if (this.ball && this.ball.mesh) {
            const ballDistance = position.distanceTo(this.ball.mesh.position);
            const ballKickRadius = radius + this.ball.radius; // Extend radius to account for ball size

            if (ballDistance < ballKickRadius) {
                // Kick the ball!
                this.ball.kick(direction, 12);

                // Spawn impact VFX at ball position
                if (this.particles) {
                    this.particles.spawnPunchImpact(this.ball.mesh.position, direction);
                }


                hit = true;

                // Send ball state to network for sync
                if (this.network) {
                    this.network.sendBallKick(this.ball.getSyncState());
                }
            }
        }

        return hit;
    }

    removeFrog(id) {
        if (this.frogs[id]) {
            const frog = this.frogs[id];
            const frogName = frog.name || `Frog ${id.substr(0, 4)}`;

            // Call dispose to clean up CSS2D elements
            if (frog.dispose) {
                frog.dispose();
            }

            this.scene.remove(frog.mesh);
            if (frog.body) {
                this.physics.world.removeBody(frog.body);
            }
            delete this.frogs[id];

            // Show leave toast
            this.showToast(`${frogName} left the game`, 'leave');
        }
    }

    showToast(message, type = 'info') {
        // Create toast container if it doesn't exist
        let container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            container.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1000;
                display: flex;
                flex-direction: column;
                gap: 10px;
                pointer-events: none;
            `;
            document.body.appendChild(container);
        }

        // Create toast element
        const toast = document.createElement('div');
        toast.className = `game-toast toast-${type}`;
        toast.innerHTML = `
            <span class="toast-icon">${type === 'join' ? '🐸' : type === 'leave' ? '👋' : 'ℹ️'}</span>
            <span class="toast-message">${message}</span>
        `;
        toast.style.cssText = `
            background: ${type === 'join' ? 'linear-gradient(135deg, #22c55e, #16a34a)' :
                type === 'leave' ? 'linear-gradient(135deg, #f87171, #ef4444)' :
                    'linear-gradient(135deg, #3b82f6, #2563eb)'};
            color: white;
            padding: 12px 20px;
            border-radius: 12px;
            font-family: 'Segoe UI', sans-serif;
            font-weight: 600;
            font-size: 14px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            display: flex;
            align-items: center;
            gap: 10px;
            animation: toast-slide-in 0.3s ease-out;
            transform-origin: right center;
        `;

        // Add animation keyframes if not already added
        if (!document.getElementById('toast-styles')) {
            const style = document.createElement('style');
            style.id = 'toast-styles';
            style.textContent = `
                @keyframes toast-slide-in {
                    from { opacity: 0; transform: translateX(100%); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes toast-slide-out {
                    from { opacity: 1; transform: translateX(0); }
                    to { opacity: 0; transform: translateX(100%); }
                }
            `;
            document.head.appendChild(style);
        }

        container.appendChild(toast);

        // Remove after 3 seconds
        setTimeout(() => {
            toast.style.animation = 'toast-slide-out 0.3s ease-in forwards';
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, 3000);
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

        // Camera occlusion - fade walls between camera and player
        this.updateWallOcclusion(targetPos);
    }

    updateWallOcclusion(playerPos) {
        if (!this.wallMeshes || this.wallMeshes.length === 0) return;

        // Raycast from camera to player
        const direction = new THREE.Vector3().subVectors(playerPos, this.camera.position).normalize();
        const distance = this.camera.position.distanceTo(playerPos);

        this.raycaster.set(this.camera.position, direction);
        this.raycaster.far = distance;

        // Only intersect with wall meshes directly (not recursive to avoid accidental hits)
        const intersects = this.raycaster.intersectObjects(this.wallMeshes, false);

        // Create a set of objects that are blocking
        const blockingObjects = new Set();
        for (const hit of intersects) {
            if (hit.distance < distance - 0.5) { // Ensure it's between camera and player
                blockingObjects.add(hit.object);
            }
        }

        // Update wall opacity - only affect walls, never frogs
        for (const wall of this.wallMeshes) {
            // Skip if this isn't actually from world.glb
            if (!wall.userData.originalOpacity) continue;

            const isBlocking = blockingObjects.has(wall);
            wall.userData.targetOpacity = isBlocking ? 0.2 : 1;

            // Smooth fade
            if (wall.material) {
                const current = wall.material.opacity;
                const target = wall.userData.targetOpacity;
                const speed = 5; // Fade speed

                if (Math.abs(current - target) > 0.01) {
                    wall.material.opacity = THREE.MathUtils.lerp(current, target, speed * 0.016);
                } else {
                    wall.material.opacity = target;
                }
            }
        }
    }

    step(dt, input) {
        // Step Physics
        this.physics.step(dt);

        // Update Particles (VFX)
        if (this.particles) {
            this.particles.update(dt);
        }

        // Update Grass Uniforms
        this.grassUniforms.uTime.value += dt;
        if (this.localFrog && this.localFrog.mesh) {
            this.grassUniforms.uPlayerPos.value.copy(this.localFrog.mesh.position);

            // Update Directional Light to follow player (for high-fidelity shadows)
            if (this.dirLight) {
                const targetPos = this.localFrog.mesh.position;
                // Offset light position from player but keep it at a fixed relative distance
                const offset = new THREE.Vector3(20, 30, 10);
                this.dirLight.position.copy(targetPos).add(offset);
                this.dirLight.target.position.copy(targetPos);
                this.dirLight.target.updateMatrixWorld();
            }
        }

        // Update Ball
        if (this.ball) {
            this.ball.update(dt);

            // If we're the ball authority, send updates to other players
            if (this.isBallAuthority && this.network && this.ball.body) {
                // Only send if ball is moving
                const vel = this.ball.body.velocity;
                const isMoving = Math.abs(vel.x) > 0.1 || Math.abs(vel.y) > 0.1 || Math.abs(vel.z) > 0.1;
                if (isMoving) {
                    this.network.sendBallUpdate(this.ball.getSyncState());
                }
            }
        }

        // Update Scooters
        for (const scooter of this.scooters) {
            scooter.update(dt, input, this.wallMeshes);
        }

        // Check scooter spawn zones for highlighting
        this.checkScooterSpawnZones();

        // E key to mount/dismount
        if (input && input.consumeDismount && input.consumeDismount()) {
            if (this.localFrog && this.localFrog.isRidingScooter) {
                // Dismount
                if (this.localFrog.currentScooter) {
                    this.localFrog.currentScooter.dismount();
                    this.showToast("Dismounted! 🐸");
                }
            } else {
                // Try to mount a nearby scooter
                this.tryMountScooter();
            }
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

        // Update Tongue Cursor Indicator
        this.updateTongueCursorIndicator(input);

        // Update Tongue Debug Visualization (Phase 7)
        this.updateTongueDebug();

        // Update Local Frog Aura (Blue Glow)
        this.updateLocalFrogAura();

        // Update FPS Counter
        this.frameCount++;
        const now = performance.now();
        if (now - this.lastFpsUpdate > 1000) {
            const fps = Math.round((this.frameCount * 1000) / (now - this.lastFpsUpdate));
            if (this.fpsCounter) {
                this.fpsCounter.textContent = `FPS: ${fps}`;
                this.fpsCounter.style.display = Config.showFPS ? 'block' : 'none';
            }
            this.frameCount = 0;
            this.lastFpsUpdate = now;
        }

        // Render
        if (this.localFrog) {
            this.checkFrogClick(input);
        }

        if (Config.useShader && this.composer) {
            const u = this.customPass.uniforms;

            // Time
            u.uTime.value = performance.now() / 1000;

            // Low Health amount calculation (start at 50% HP)
            let lowHealthAmount = 0;
            if (this.localFrog) {
                const hpPercent = this.localFrog.health / Config.maxHealth;
                lowHealthAmount = Math.max(0, Math.min(1.0, (0.5 - hpPercent) / 0.5));
            }
            u.uLowHealth.value = lowHealthAmount;

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

            // Toon / Outline
            u.uToonEnabled.value = Config.toonEnabled ? 1.0 : 0.0;
            u.uOutlineEnabled.value = Config.outlineEnabled ? 1.0 : 0.0;
            u.uOutlineIntensity.value = Config.outlineIntensity;

            // SAO Toggle
            if (this.saoPass) this.saoPass.enabled = Config.saonEnabled;

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

    checkScooterSpawnZones() {
        if (!this.localFrog || !this.localFrog.mesh) return;

        const frogPos = this.localFrog.mesh.position;

        // Check proximity to existing scooters for mounting
        for (const scooter of this.scooters) {
            if (scooter.rider) continue; // Already has rider

            const distance = frogPos.distanceTo(scooter.mesh.position);
            const isNearby = distance < Config.scooterSpawnRadius;

            // Update highlight
            scooter.setHighlight(isNearby && !this.localFrog.isRidingScooter);
        }
    }

    // Called when E key is pressed
    tryMountScooter() {
        if (!this.localFrog || this.localFrog.isRidingScooter) return false;

        const frogPos = this.localFrog.mesh.position;

        // Find nearest unmounted scooter
        for (const scooter of this.scooters) {
            if (scooter.rider) continue;

            const distance = frogPos.distanceTo(scooter.mesh.position);
            if (distance < Config.scooterSpawnRadius) {
                scooter.mount(this.localFrog);
                this.showToast("Vroom! 🛴 (Jump to dismount)");
                return true;
            }
        }

        return false;
    }

    // Spawn scooter at zone (called when zone loads)
    spawnScooterAtZone(zone) {
        // Random bright color
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

        const scooter = new Scooter(
            `scooter_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            randomColor,
            this.scene,
            this.physics
        );
        scooter.particles = this.particles;

        // Use zone position (X and Z) with a small Y lift to let it fall flush
        const spawnX = zone.position.x + (Math.random() - 0.5) * 4;
        const spawnZ = zone.position.z + (Math.random() - 0.5) * 4;
        const spawnY = zone.position.y + 1.0;

        scooter.mesh.position.set(spawnX, spawnY, spawnZ);
        if (scooter.body) {
            scooter.body.position.set(spawnX, spawnY, spawnZ);
        }

        // Give scooter access to particles
        scooter.particles = this.particles;

        // Add to tracking
        this.scooters.push(scooter);


    }

    showToast(message) {
        // Create or reuse toast element
        let toast = document.getElementById('game-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'game-toast';
            toast.style.cssText = `
        position: fixed;
        top: 20 %;
        left: 50 %;
        transform: translateX(-50 %);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 15px 25px;
        border - radius: 10px;
        font - size: 18px;
        font - weight: bold;
        z - index: 9999;
        pointer - events: none;
        opacity: 0;
        transition: opacity 0.3s ease;
        `;
            document.body.appendChild(toast);
        }

        toast.textContent = message;
        toast.style.opacity = '1';

        // Hide after 2 seconds
        if (this.toastTimeout) clearTimeout(this.toastTimeout);
        this.toastTimeout = setTimeout(() => {
            toast.style.opacity = '0';
        }, 2000);
    }

    // --- PROFILE SYSTEM ---

    checkFrogClick(input) {
        if (!input || !input.leftClickPunch) return;

        this.raycaster.setFromCamera(input.mouse, this.camera);
        const intersects = this.raycaster.intersectObjects(this.scene.children, true);

        for (const hit of intersects) {
            // Find if hit object belongs to a remote frog
            let obj = hit.object;
            while (obj) {
                // Check if this object is a frog mesh
                for (const frog of Object.values(this.frogs)) {
                    if (frog.mesh === obj && !frog.isLocal) {
                        // Open profile directly
                        this.showProfileButton(frog);
                        input.leftClickPunch = false; // Consume click
                        return true;
                    }
                }
                obj = obj.parent;
            }
        }

        return false;
    }

    showProfileButton(frog) {
        // DIRECT OPEN - NO FLOATING BUTTON
        this.profileButtonTarget = frog;

        if (this.network && this.network.socket) {
            // Pre-fetch fresh data just like the Friend List does (High Authority route)
            const fetchRoute = (frog.userId && String(frog.userId).length < 15) ? 'getProfile' : 'getProfileBySocket';
            const fetchId = (fetchRoute === 'getProfile') ? frog.userId : frog.id;


            this.network.socket.emit(fetchRoute, fetchId, (freshData) => {
                const profileData = {
                    id: frog.id,
                    userId: freshData?.id || frog.userId, // Prefer fresh ID
                    name: freshData?.username || frog.name,
                    color: freshData?.color || frog.color,
                    level: freshData?.level || frog.level || 1,
                    bio: freshData?.bio || frog.bio || '',
                    badges: freshData?.badges || frog.badges || [],
                    kills: freshData?.kills || 0,
                    deaths: freshData?.deaths || 0,
                    isFriend: undefined // Trigger checkFriendship in openProfile
                };

                // If fresh data, update the local frog object too just in case
                if (freshData) {
                    frog.userId = profileData.userId;
                    frog.bio = profileData.bio;
                    frog.badges = profileData.badges;
                    frog.level = profileData.level;
                }


                this.openProfile(profileData);
            });
        } else {
            // Fallback for non-networked scenarios
            this.openProfile({
                id: frog.id,
                userId: frog.userId,
                name: frog.name,
                color: frog.color,
                level: frog.level || 1,
                bio: frog.bio || '',
                badges: frog.badges || [],
                isFriend: undefined
            });
        }
    }



    /**
    * Open Profile Popup with standardized data object (POJO)
    * @param {Object} data - Profile data { id, userId, name, color, level, bio, badges, isFriend }
    */
    openProfile(data) {
        this.currentProfileId = data.id; // Track ID instead of object ref
        this.currentProfileData = data;  // Store current data for reference

        const modal = document.getElementById('profile-modal');
        const nameEl = document.getElementById('p-username');
        const levelEl = document.getElementById('p-level');
        const bioEl = document.getElementById('p-bio');
        const badgesEl = document.getElementById('p-badges-row');
        const actionBtn = document.getElementById('p-btn-action');
        const muteBtn = document.getElementById('p-btn-mute');
        const closeBtn = document.getElementById('p-close-btn');
        const avatarContainer = document.getElementById('p-avatar-canvas-container');
        const killsEl = document.getElementById('p-kills');
        const deathsEl = document.getElementById('p-deaths');

        // Null checks
        if (!modal || !nameEl || !levelEl || !actionBtn || !muteBtn) {
            console.error('Profile modal elements missing!');
            return;
        }

        // populate content
        const idStr = String(data.id || '');
        nameEl.textContent = data.name || `Frog ${idStr.substring(0, 4)}`;
        levelEl.textContent = `LEVEL ${data.level || 1}`;
        bioEl.textContent = data.bio || 'No bio set.';

        if (killsEl) killsEl.textContent = data.kills || 0;
        if (deathsEl) deathsEl.textContent = data.deaths || 0;

        const kdEl = document.getElementById('p-kd');
        if (kdEl) {
            const kills = data.kills || 0;
            const deaths = data.deaths || 0;
            const kd = deaths > 0 ? (kills / deaths).toFixed(2) : (kills > 0 ? kills.toFixed(2) : "0.00");
            kdEl.textContent = kd;
        }

        // --- BADGE RENDERING (No background, just emojis) ---
        if (badgesEl) {
            let badgeArray = [];
            try {
                badgeArray = Array.isArray(data.badges) ? data.badges : JSON.parse(data.badges || '[]');
            } catch (e) { badgeArray = []; }

            badgesEl.innerHTML = '';
            // Only show up to 4 badges
            const displayBadges = badgeArray.slice(0, 4);

            displayBadges.forEach(emoji => {
                const badge = document.createElement('div');
                badge.className = 'profile-badge-new';
                badge.textContent = emoji;
                badgesEl.appendChild(badge);
            });
        }

        // --- AVATAR PREVIEW (3D 360 Spin) ---
        if (avatarContainer) {
            this.showFrogPreviewInModal(data, avatarContainer);
        }

        // --- MUTE BUTTON ---
        const isMuted = this.network && this.network.mutedPlayers && this.network.mutedPlayers.has(data.id);
        muteBtn.innerHTML = isMuted ? '<span>🔊</span> Unmute Chat' : '<span>🔇</span> Mute Chat';

        muteBtn.onclick = (e) => {
            e.stopPropagation();
            if (this.network) {
                this.network.toggleMute(data.id);
                // Update UI immediately (toggle state)
                const nowMuted = this.network.mutedPlayers.has(data.id);
                muteBtn.innerHTML = nowMuted ? '<span>🔊</span> Unmute Chat' : '<span>🔇</span> Mute Chat';
            }
        };

        // --- ACTION BUTTON (Add Friend / Chat) ---
        // Helper to update button text
        const updateActionBtn = (isFriend) => {
            if (isFriend) {
                actionBtn.innerHTML = '<span>💬</span> Send Message';
            } else {
                actionBtn.innerHTML = '<span>✚</span> Add Friend';
            }
        };

        // Initial state
        updateActionBtn(data.isFriend);

        // Logic
        actionBtn.onclick = (e) => {
            e.stopPropagation();
            // Check if authenticated
            if (window.game && !window.game.isAuthenticated) {
                this.showToast('Register an account to interact!');
                return;
            }

            if (data.isFriend) {
                // Open DM
                if (this.network) {
                    this.network.openDM(data.id, data.name);
                    this.closeProfile();
                }
            } else {
                // Send Request
                if (this.network && this.network.socket) {
                    this.network.socket.emit('sendFriendRequest', data.name, (result) => {
                        if (result.success) {
                            this.showToast(`Friend request sent to ${data.name}!`);
                            actionBtn.innerHTML = '<span>🕒</span> Sent';
                        } else {
                            this.showToast(result.error || 'Failed to send');
                        }
                    });
                }
            }
        };

        // Check friendship status if undefined (async)
        // Use userId for persistent friendship check, fallback to id
        const targetId = data.userId || data.id;
        if (data.isFriend === undefined && this.network && this.network.socket && targetId) {
            this.network.socket.emit('checkFriendship', targetId, (result) => {
                if (result && result.isFriend) {
                    data.isFriend = true;
                    updateActionBtn(true);
                }
            });
        }

        // --- CLOSE LOGIC ---
        if (closeBtn) closeBtn.onclick = () => this.closeProfile();

        // Open Modal
        modal.style.display = 'block';
        // Force reflow
        void modal.offsetWidth;
        modal.classList.add('active');
    }

    closeProfile() {
        const modal = document.getElementById('profile-modal');
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => { modal.style.display = 'none'; }, 300);
        }
        this.currentProfileId = null;
        this.currentProfileData = null;

        // Stop preview animation
        if (this.previewFrameId) {
            cancelAnimationFrame(this.previewFrameId);
            this.previewFrameId = null;
        }
    }

    showFrogPreviewInModal(data, container) {
        // Clear existing preview
        container.innerHTML = '';

        // Setup mini Three.js scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 10);
        camera.position.set(0, 0.4, 3.5); // Further back to reduce zoom
        camera.lookAt(0, 0.1, 0);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(120, 120); // Scaled down matching new UI
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);

        // Lights
        const ambient = new THREE.AmbientLight(0xffffff, 1.0);
        scene.add(ambient);
        const direct = new THREE.DirectionalLight(0xffffff, 1.5);
        direct.position.set(2, 2, 5);
        scene.add(direct);

        // Get frog model - clone from bodyMesh or create fallback
        let previewModel;

        // Find existing frog in world to clone skin/color accurately
        const frog = this.frogs[data.id];

        if (frog && frog.bodyMesh) {
            previewModel = frog.bodyMesh.clone();
        } else if (this.frogModel) {
            previewModel = this.frogModel.clone();
            // Apply color if model cloned from source
            if (data.color) {
                previewModel.traverse(child => {
                    if (child.isMesh && child.name.includes('Body')) {
                        child.material = child.material.clone();
                        child.material.color.set(data.color);
                    }
                });
            }
        } else {
            // Fallback: create a simple colored box
            const geometry = new THREE.BoxGeometry(0.8, 0.6, 1.0);
            const material = new THREE.MeshLambertMaterial({ color: data.color || '#4CAF50' });
            previewModel = new THREE.Mesh(geometry, material);
        }

        previewModel.position.set(0, -0.1, 0); // Center slightly
        previewModel.scale.set(1.2, 1.2, 1.2); // Reduced scale
        scene.add(previewModel);

        // Animation Loop
        const animatePreview = () => {
            if (this.currentProfileId !== data.id) {
                renderer.dispose();
                return;
            }

            previewModel.rotation.y += 0.02; // 360 spinning
            renderer.render(scene, camera);
            this.previewFrameId = requestAnimationFrame(animatePreview);
        };
        animatePreview();
    }

    updateLocalFrogAura() {
        if (!this.localFrog || !this.localFrog.mesh) return;

        // Create aura light if it doesn't exist
        if (!this.localAura) {
            this.localAura = new THREE.PointLight(Config.auraColor, Config.auraIntensity, Config.auraDistance);
            this.scene.add(this.localAura);
        }

        // Only show aura if frog is not dead
        if (this.localFrog.isDead) {
            this.localAura.visible = false;
        } else {
            this.localAura.visible = true;
            // Update position to follow frog (slightly above)
            this.localAura.position.copy(this.localFrog.mesh.position);
            this.localAura.position.y += 0.5;

            // Sync with Config values
            this.localAura.color.set(Config.auraColor);
            this.localAura.distance = Config.auraDistance;

            // Subtle pulse based on Config base intensity
            const time = performance.now() / 1000;
            const pulse = Math.sin(time * 4.0) * (Config.auraIntensity * 0.2);
            this.localAura.intensity = Config.auraIntensity + pulse;
        }
    }
}
