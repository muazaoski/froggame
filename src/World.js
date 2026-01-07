import * as THREE from 'three/webgpu';
import { WebGPURenderer, PostProcessing } from 'three/webgpu';
import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three-stdlib';
import * as CANNON from 'cannon-es';
import { Physics } from './Physics.js';
import { Frog } from './Frog.js';
import { Ball } from './Ball.js';
import { Scooter } from './Scooter.js';
import { createWaterMaterial } from './WaterMaterial.js';
import {
    pass,
    saturation,
    viewportSafeUV,
    color,
    float,
    mix,
    smoothstep,
    distance,
    vec2,
    vec3,
    add,
    mul,
    sub,
    fract,
    sin,
    clamp,
    time,
    dot,
    uniform
} from 'three/tsl';
// WebGPU Post-Processing Effects (from three.js addons)
import { bloom } from 'three/addons/tsl/display/BloomNode.js';
import { fxaa } from 'three/addons/tsl/display/FXAANode.js';
import { dof } from 'three/addons/tsl/display/DepthOfFieldNode.js';
import { dotScreen } from 'three/addons/tsl/display/DotScreenNode.js';
import { rgbShift } from 'three/addons/tsl/display/RGBShiftNode.js';
import { sobel } from 'three/addons/tsl/display/SobelOperatorNode.js';
import { Config } from './Config.js';
import { ParticleSystem } from './ParticleSystem.js';
import { AudioManager } from './AudioManager.js';

export class World {
    constructor() {
        this.container = document.getElementById('canvas-container');

        // SCENE
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xffffff); // White sky
        this.scene.fog = new THREE.Fog(0xffffff, 40, 120);

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

        // RENDERER - Deferred to async init() for WebGPU
        this.renderer = null;
        this.rendererReady = false;

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
        this.ambientLight = ambientLight;

        // Hemisphere Light for natural sky/ground contrast
        const hemiLight = new THREE.HemisphereLight(Config.hemiSkyColor, Config.hemiGroundColor, Config.hemiIntensity);
        this.scene.add(hemiLight);
        this.hemiLight = hemiLight;

        // Main Directional Light (Sun)
        const dirLight = new THREE.DirectionalLight(0xffffff, Config.sunIntensity);
        dirLight.position.set(20, 30, 10);
        this.dirLight = dirLight;

        // Shadow settings from Config
        dirLight.castShadow = Config.shadowEnabled;
        dirLight.shadow.mapSize.width = Config.shadowMapSize;
        dirLight.shadow.mapSize.height = Config.shadowMapSize;
        dirLight.shadow.camera.near = Config.shadowCameraNear;
        dirLight.shadow.camera.far = Config.shadowCameraFar;
        dirLight.shadow.camera.left = -Config.shadowCameraSize;
        dirLight.shadow.camera.right = Config.shadowCameraSize;
        dirLight.shadow.camera.top = Config.shadowCameraSize;
        dirLight.shadow.camera.bottom = -Config.shadowCameraSize;
        dirLight.shadow.bias = Config.shadowBias;
        dirLight.shadow.normalBias = Config.shadowNormalBias;
        dirLight.shadow.radius = Config.shadowRadius;
        dirLight.shadow.blurSamples = Config.shadowBlurSamples;

        this.scene.add(dirLight);
        this.scene.add(dirLight.target);

        // PHYSICS
        this.physics = new Physics();

        // LOADING MANAGER
        this.loadingManager = new THREE.LoadingManager();
        this.setupLoadingManager();

        // Pass manager to entity loaders
        Frog.setLoaderManager(this.loadingManager);
        Scooter.setLoaderManager(this.loadingManager);
        Ball.setLoaderManager(this.loadingManager);

        // COLLISION GROUPS
        this.terrainMeshes = []; // For scooter alignment & dust
        this.wallMeshes = [];    // For camera occlusion
        this.waterMeshes = [];   // For water detection

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

        // WATER / DIVING
        this.waterLevel = null; // Will be set when water mesh is detected


        // RESIZE
        window.addEventListener('resize', () => this.onWindowResize());

        // RAYCASTER (For eye looking)
        this.raycaster = new THREE.Raycaster();
        this.mousePlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0); // Ground plane

        // FPS Tracking
        this.fpsCounter = document.getElementById('fps-counter');
        this.frameCount = 0;
        this.lastFpsUpdate = performance.now();


        // WATER ANIMATION
        // WATER UNIFORMS (TSL) - For real-time pattern adjustments
        this.waterUniforms = {
            color: uniform(new THREE.Color(Config.waterColor)),
            opacity: uniform(Config.waterOpacity),
            scale: uniform(Config.waterScale),
            frequency1: uniform(Config.waterFrequency1),
            frequency2: uniform(Config.waterFrequency2),
            frequency3: uniform(Config.waterFrequency3),
            speed1: uniform(Config.waterSpeed1),
            speed2: uniform(Config.waterSpeed2),
            speed3: uniform(Config.waterSpeed3),
            distortion: uniform(Config.waterDistortion),
            shimmerIntensity: uniform(Config.waterShimmerIntensity),
            shimmerThreshold: uniform(Config.waterShimmerThreshold),
            shimmerSoftness: uniform(Config.waterShimmerSoftness),
            foamIntensity: uniform(Config.waterFoamIntensity),
            foamRange: uniform(Config.waterFoamRange)
        };

        // Initialize Particle System for VFX
        this.particles = new ParticleSystem(this.scene);

        this.waterLevel = null;

        // Initialize Soccer Ball - spawn from sky in a random area
        const spawnX = (Math.random() - 0.5) * Config.ballSpawnRangeX * 2;
        const spawnZ = (Math.random() - 0.5) * Config.ballSpawnRangeZ * 2;
        this.ball = new Ball(this.physics, this.scene, { x: spawnX, y: Config.ballSpawnHeight, z: spawnZ });

        // AUDIO MANAGER
        this.audio = new AudioManager(this.camera, this.scene);
        this.ball.audio = this.audio;
    }

    /**
     * Async initialization for WebGPU renderer.
     * MUST be called and awaited before the game loop starts.
     */
    async init() {
        console.log('🚀 Initializing WebGPU Renderer...');

        if (!navigator.gpu) {
            throw new Error('WebGPU is not supported. Use Chrome 113+, Edge 113+, Firefox 141+, or Safari 26+.');
        }

        // Create and init WebGPU Renderer
        this.renderer = new WebGPURenderer({ antialias: false });
        await this.renderer.init();

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.0;

        // Enable Shadow Maps for WebGPU
        this.renderer.shadowMap.enabled = Config.shadowEnabled;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        this.container.appendChild(this.renderer.domElement);

        this.rendererReady = true;
        console.log('✅ WebGPU Renderer ready with shadows!');

        // Setup TSL Post-Processing
        this.setupPostProcessing();

        return this;
    }

    setupPostProcessing() {
        if (!this.renderer) return;

        // First call: Build the shader graph with uniform nodes
        if (!this.postProcessing) {
            this.postProcessing = new PostProcessing(this.renderer);

            // Create all uniforms for real-time control
            this.ppUniforms = {
                // Bloom
                bloomStrength: uniform(Config.bloomIntensity || 1.0),
                bloomThreshold: uniform(Config.bloomThreshold || 0.5),
                bloomEnabled: uniform(Config.bloomEnabled ? 1.0 : 0.0),
                // Chromatic Aberration
                chromaStrength: uniform(Config.chromaticIntensity || 0.005),
                chromaEnabled: uniform(Config.chromaticEnabled ? 1.0 : 0.0),
                // Film Grain
                grainStrength: uniform(Config.grainIntensity || 0.1),
                grainEnabled: uniform(Config.grainEnabled ? 1.0 : 0.0),
                // Vignette
                vignetteOffset: uniform(Config.vignetteOffset || 0.5),
                vignetteDarkness: uniform(Config.vignetteDarkness || 1.2),
                vignetteEnabled: uniform(Config.vignetteEnabled ? 1.0 : 0.0),
                // Color Grading
                saturationVal: uniform(Config.shaderSaturation || 1.0),
                brightness: uniform(Config.shaderBrightness || 0.0),
                contrast: uniform(Config.shaderContrast || 1.0),
                tintR: uniform(Config.shaderTintR || 1.0),
                tintG: uniform(Config.shaderTintG || 1.0),
                tintB: uniform(Config.shaderTintB || 1.0),
                temperature: uniform(Config.shaderTemperature || 0.0),
                // New Effects
                fxaaEnabled: uniform(Config.fxaaEnabled ? 1.0 : 0.0),
                dofEnabled: uniform(Config.dofEnabled ? 1.0 : 0.0),
                dofFocus: uniform(Config.dofFocus !== undefined ? Config.dofFocus : 500),
                dofAperture: uniform(Config.dofAperture !== undefined ? Config.dofAperture : 200),
                dofMaxBlur: uniform(Config.dofMaxBlur !== undefined ? Config.dofMaxBlur : 10),
                gtaoEnabled: uniform(Config.gtaoEnabled ? 1.0 : 0.0),
                sepiaEnabled: uniform(Config.sepiaEnabled ? 1.0 : 0.0),
                sepiaIntensity: uniform(Config.sepiaIntensity || 1.0),
                rgbShiftEnabled: uniform(Config.rgbShiftEnabled ? 1.0 : 0.0),
                rgbShiftAmount: uniform(Config.rgbShiftAmount || 0.005),
                dotScreenEnabled: uniform(Config.dotScreenEnabled ? 1.0 : 0.0),
                dotScreenScale: uniform(Config.dotScreenScale || 1.0),
                sobelEnabled: uniform(Config.sobelEnabled ? 1.0 : 0.0)
            };

            const u = this.ppUniforms;

            // Create scene pass (following official Three.js WebGPU pattern)
            const scenePass = pass(this.scene, this.camera);
            const scenePassColor = scenePass.getTextureNode();
            const scenePassViewZ = scenePass.getViewZNode();

            // Start with scene color
            let postFX = scenePassColor;

            // --- DOF (Depth of Field) - Early in chain before color grading ---
            // dof(colorNode, viewZNode, focusDistance, focalLength, bokehScale)
            this.dofPass = dof(postFX, scenePassViewZ, u.dofFocus, u.dofAperture, u.dofMaxBlur);
            postFX = mix(postFX, this.dofPass, u.dofEnabled);

            // --- BLOOM ---
            this.bloomPass = bloom(scenePassColor, u.bloomStrength, 0, u.bloomThreshold);
            postFX = add(postFX, mul(this.bloomPass, u.bloomEnabled));

            // --- VIGNETTE ---
            const uvNode = viewportSafeUV();
            const dist = distance(uvNode, vec2(0.5));
            const vignetteAmt = smoothstep(u.vignetteOffset, u.vignetteDarkness, dist);
            const vignetteColor = mix(postFX, color(0x000000), vignetteAmt);
            postFX = mix(postFX, vignetteColor, u.vignetteEnabled);

            // --- SATURATION ---
            postFX = saturation(postFX, u.saturationVal);

            // --- BRIGHTNESS ---
            postFX = add(postFX, u.brightness);

            // --- CONTRAST ---
            postFX = add(mul(sub(postFX, float(0.5)), u.contrast), float(0.5));

            // --- COLOR TINT (RGB multiplier) ---
            const tint = vec3(u.tintR, u.tintG, u.tintB);
            postFX = mul(postFX, tint);

            // --- TEMPERATURE (warm/cool shift) ---
            const tempShift = vec3(mul(u.temperature, float(0.1)), float(0.0), mul(u.temperature, float(-0.1)));
            postFX = add(postFX, tempShift);

            // Clamp before stylization effects
            postFX = clamp(postFX, float(0.0), float(1.0));

            // --- DOT SCREEN (Halftone) ---
            this.dotPass = dotScreen(postFX);
            this.dotPass.scale.value = Config.dotScreenScale || 1.0;
            postFX = mix(postFX, this.dotPass, u.dotScreenEnabled);

            // --- RGB SHIFT ---
            this.rgbPass = rgbShift(postFX);
            this.rgbPass.amount.value = Config.rgbShiftAmount || 0.005;
            postFX = mix(postFX, this.rgbPass, u.rgbShiftEnabled);

            // --- SOBEL EDGE DETECTION ---
            const sobelPass = sobel(postFX);
            postFX = mix(postFX, sobelPass, u.sobelEnabled);

            // --- FXAA (apply to final output) ---
            const fxaaPass = fxaa(postFX);
            const finalOutput = mix(postFX, fxaaPass, u.fxaaEnabled);

            // Set output
            this.postProcessing.outputNode = finalOutput;
            console.log('📺 Post-Processing initialized!');
        }
        // Note: GUI controls now update uniforms directly via world.ppUniforms
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


    setupWaterMaterial(mesh) {
        // Enhanced translucent blue water with subtle shimmer using TSL
        const waterMaterial = createWaterMaterial(this.waterUniforms);

        mesh.material = waterMaterial;
        mesh.renderOrder = 1;

        mesh.castShadow = false;
        mesh.receiveShadow = false;

        // Store the water level for diving detection
        mesh.updateMatrixWorld();
        const worldPos = new THREE.Vector3();
        mesh.getWorldPosition(worldPos);
        this.waterLevel = worldPos.y;
        console.log(`[WATER] Water surface detected at Y = ${this.waterLevel} (Basic Material)`);
    }

    loadLevel() {
        const loader = new GLTFLoader(this.loadingManager);
        loader.setMeshoptDecoder(MeshoptDecoder); // Enable meshopt compressed models
        this.wallMeshes = []; // Track walls for camera occlusion
        const grassInstances = [];
        let grassTemplate = null;
        const bushInstances = [];
        let bushTemplate = null;

        // PRELOAD ALL ENTITY MODELS during loading screen
        // These will be cached by their respective classes for instant cloning later
        Frog.loader.setMeshoptDecoder(MeshoptDecoder);
        Frog.loader.load('/models/frog.glb', (gltf) => {
            if (!gltf) return;
            const model = gltf.scene;
            if (!model) return;
            model.scale.set(0.5, 0.5, 0.5);
            model.position.y = -0.6;
            model.rotation.y = Math.PI;
            Frog.modelGeometry = model.clone();
            console.log('🐸 Frog model preloaded');
        });
        Frog.loader.load('/models/frog_draw.glb', (gltf) => {
            if (!gltf) return;
            const model = gltf.scene;
            if (!model) return;
            model.scale.set(0.5, 0.5, 0.5);
            model.position.y = -0.6;
            model.rotation.y = Math.PI;
            Frog.drawingModelGeometry = model.clone();
            console.log('🎨 Frog drawing model preloaded');
        });
        Scooter.loader.setMeshoptDecoder(MeshoptDecoder);
        Scooter.loader.load('/models/scooter.glb', (gltf) => {
            if (!gltf || !gltf.scene) return;
            Scooter.modelCache = gltf.scene.clone();
            console.log('🛴 Scooter model preloaded');
        });
        Ball.loader.setMeshoptDecoder(MeshoptDecoder);
        Ball.loader.load('/models/ball.glb', (gltf) => {
            if (!gltf || !gltf.scene) return;
            Ball.modelCache = gltf.scene.clone();
            console.log('⚽ Ball model preloaded');
        });

        loader.load('/models/world.glb', (gltf) => {
            if (!gltf || !gltf.scene) {
                console.error('World model loaded but gltf.scene is missing');
                return;
            }
            const level = gltf.scene;
            this.scene.add(level);

            level.traverse((child) => {
                if (child.isMesh) {
                    const nameLower = child.name.toLowerCase();
                    const isWater = nameLower.includes('water');
                    const isSpawn = nameLower.includes('scooterspawn');

                    child.castShadow = true;
                    child.receiveShadow = true;

                    // Make material support transparency for camera occlusion
                    if (child.material) {
                        child.material.transparent = true;
                        child.material.opacity = 1;
                        child.userData.originalOpacity = 1;
                        child.userData.targetOpacity = 1;

                        // TOON LOOK / CYCLES COLORS
                        if (nameLower.includes('terrain') || nameLower.includes('island')) {
                            child.material.color.setHex(0x55aa66); // Natural Forest Green
                            child.material.emissive.setHex(0x000000);
                            child.material.emissiveIntensity = 0.0;
                            child.material.roughness = 0.8;
                        }
                        if (isWater) {
                            this.setupWaterMaterial(child);
                            this.waterMeshes.push(child);
                        }
                    }

                    // Track terrain for physics/alignment
                    if (!isWater && !isSpawn) {
                        this.terrainMeshes.push(child);
                    }

                    // Track as wall for camera occlusion
                    if (!nameLower.includes('ground') && !nameLower.includes('floor')) {
                        this.wallMeshes.push(child);
                    }

                    // Detect scooter spawn zones
                    if (isSpawn) {
                        child.visible = false;
                        child.userData.isSpawnPlate = true;
                        const worldPos = new THREE.Vector3();
                        child.getWorldPosition(worldPos);
                        const zone = { position: worldPos, mesh: child };
                        this.scooterSpawnZones.push(zone);
                        setTimeout(() => this.spawnScooterAtZone(zone), 100);
                    }

                    // Physics Generation
                    if (child.name.startsWith('Ghost_') || isWater || nameLower.includes('bush')) {
                        // Pass (No physics for markers, water, or bushes)
                    } else if (!isSpawn) {
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
            const hookGeometry = new THREE.SphereGeometry(0.3, 8, 8);
            const hookMaterial = new THREE.MeshBasicMaterial({
                color: 0xffd700
            });
            const hook = new THREE.Mesh(hookGeometry, hookMaterial);
            hook.position.set(pos.x, pos.y, pos.z);
            hook.castShadow = false;

            // Add a hanging rope visual
            const ropeGeometry = new THREE.CylinderGeometry(0.03, 0.03, 2, 8);
            const ropeMaterial = new THREE.MeshBasicMaterial({ color: 0x8b4513 });
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

        // Find if we hit a physics object
        const wallTarget = this.localFrog.getWallTarget(this, tongueStart, targetDir);

        // If neither a snappy target nor a wall hit exists, HIDE the cursor (Stop sticking with air)
        if (potentialTargets.length === 0 && !wallTarget) {
            this.tongueCursorIndicator.visible = false;
            return;
        }

        const hasTargets = potentialTargets.length > 0;

        // Use physics raycast
        const from = new CANNON.Vec3(tongueStart.x, tongueStart.y, tongueStart.z);
        const to = new CANNON.Vec3(
            tongueStart.x + targetDir.x * Config.tongueRange,
            tongueStart.y + targetDir.y * Config.tongueRange,
            tongueStart.z + targetDir.z * Config.tongueRange
        );

        const result = new CANNON.RaycastResult();
        const ray = new CANNON.Ray(from, to);
        ray.intersectWorld(this.physics.world, {
            result,
            collisionFilterMask: ~this.physics.FILTER_FROG // Ignore all frogs for cursor placement
        });

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
                let snappedToTarget = false;
                if (hasTargets) {
                    const bestTarget = potentialTargets[0];
                    const assistRadius = Config.tongueAssistRadius || 2.0;
                    if (bestTarget.point.distanceTo(hitPoint) < assistRadius) {
                        this.tongueCursorIndicator.position.copy(bestTarget.point);
                        this.tongueCursorIndicator.quaternion.set(0, 0, 0, 1); // Face camera for floating targets
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
            console.warn(`Skipping physics for mesh "${mesh.name}": not enough vertices(${posAttr.count})`);
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
                console.warn(`Skipping physics for mesh "${mesh.name}": invalid vertex at index ${i} `);
                return;
            }

            vertices.push(x, y, z);
        }

        if (indexAttr && indexAttr.count > 0) {
            // Need at least 3 indices to form a triangle
            if (indexAttr.count < 3) {
                console.warn(`Skipping physics for mesh "${mesh.name}": not enough indices(${indexAttr.count})`);
                return;
            }

            for (let i = 0; i < indexAttr.count; i++) {
                const idx = indexAttr.getX(i);
                // Validate index is within bounds
                if (idx < 0 || idx >= posAttr.count) {
                    console.warn(`Skipping physics for mesh "${mesh.name}": index out of bounds at ${i} `);
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
                material: this.physics.groundMaterial,
                collisionFilterGroup: this.physics.FILTER_TERRAIN
            });
            body.addShape(shape);

            // Position/Rotation
            const pos = mesh.getWorldPosition(new THREE.Vector3());
            const quat = mesh.getWorldQuaternion(new THREE.Quaternion());

            body.position.copy(pos);
            body.quaternion.copy(quat);

            this.physics.world.addBody(body);
        } catch (error) {
            console.error(`Failed to create physics for mesh "${mesh.name}": `, error);
        }
    }

    getMouseIntersection(input) {
        if (!input) return null;

        // Setup raycaster from camera through mouse position
        this.raycaster.setFromCamera(input.mouse, this.camera);

        // Optimized raycasting: Only intersect with terrain and wall meshes
        if (!this._raycastTargets) {
            this._raycastTargets = [...this.terrainMeshes, ...this.wallMeshes];
        }
        const intersects = this.raycaster.intersectObjects(this._raycastTargets, false);

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

        // Free Aim Fallback: If no geometry hit, use a point far away in the ray direction
        // This allows 'shooting the sky' and aiming anywhere like a gun.
        if (this.localFrog) {
            const target = new THREE.Vector3();
            this.raycaster.ray.at(Config.tongueRange || 15, target);
            return target;
        }

        return null;
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

        // Give frog access to particle system and audio for VFX
        frog.particles = this.particles;
        frog.audio = this.audio;

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
        this.scene.add(frog.mesh);
        this.frogs[id] = frog;
        frog.world = this; // Set world before updating

        // Initial state sync
        frog.applySyncState(data);

        // Initial drawing state
        if (data.isDrawing) {
            frog.setDrawingMode(true);
            if (data.drawingData && this.network) {
                this.network.updateFrogTexture(frog, data.drawingData);
            }
        }

        // Remote frogs also get particles and audio for their effects
        frog.particles = this.particles;
        frog.audio = this.audio;

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
            const frogName = frog.name || `Frog ${id.substr(0, 4)} `;

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
z - index: 1000;
display: flex;
flex - direction: column;
gap: 10px;
pointer - events: none;
`;
            document.body.appendChild(container);
        }

        // Create toast element
        const toast = document.createElement('div');
        toast.className = `game - toast toast - ${type} `;
        toast.innerHTML = `
    < span class="toast-icon" > ${type === 'join' ? '🐸' : type === 'leave' ? '👋' : 'ℹ️'}</span >
        <span class="toast-message">${message}</span>
`;
        toast.style.cssText = `
background: ${type === 'join' ? 'linear-gradient(135deg, #22c55e, #16a34a)' :
                type === 'leave' ? 'linear-gradient(135deg, #f87171, #ef4444)' :
                    'linear-gradient(135deg, #3b82f6, #2563eb)'
            };
color: white;
padding: 12px 20px;
border - radius: 12px;
font - family: 'Segoe UI', sans - serif;
font - weight: 600;
font - size: 14px;
box - shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
display: flex;
align - items: center;
gap: 10px;
animation: toast - slide -in 0.3s ease - out;
transform - origin: right center;
`;

        // Add animation keyframes if not already added
        if (!document.getElementById('toast-styles')) {
            const style = document.createElement('style');
            style.id = 'toast-styles';
            style.textContent = `
@keyframes toast - slide -in {
    from { opacity: 0; transform: translateX(100 %); }
                    to { opacity: 1; transform: translateX(0); }
                }
@keyframes toast - slide - out {
                    from { opacity: 1; transform: translateX(0); }
                    to { opacity: 0; transform: translateX(100 %); }
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

        // DYNAMIC CAMERA: Adjust for swing state
        let dynamicDistance = this.cameraDistance;
        let cameraLerpSpeed = Config.cameraLerp;

        if (this.localFrog.isSwinging && this.localFrog.body) {
            // Get swing speed
            const vel = this.localFrog.body.velocity;
            const swingSpeed = Math.sqrt(vel.x * vel.x + vel.y * vel.y + vel.z * vel.z);

            // Zoom out when swinging fast (up to 30% more distance)
            const zoomOutFactor = Math.min(swingSpeed * 0.02, 0.3);
            dynamicDistance = this.cameraDistance * (1 + zoomOutFactor);

            // Smoother camera follow during swing (less jerky)
            cameraLerpSpeed = Config.cameraLerp * 0.6;
        }

        // Calculate camera position based on orbit angles
        const horizontalDistance = dynamicDistance * Math.cos(this.cameraPitchAngle);
        const verticalOffset = dynamicDistance * Math.sin(this.cameraPitchAngle);

        const cameraX = targetPos.x + horizontalDistance * Math.sin(this.cameraOrbitAngle);
        const cameraY = targetPos.y + verticalOffset;
        const cameraZ = targetPos.z + horizontalDistance * Math.cos(this.cameraOrbitAngle);

        // Smooth camera follow
        const targetCameraPos = new THREE.Vector3(cameraX, cameraY, cameraZ);
        if (this.shakeOffset) {
            targetCameraPos.add(this.shakeOffset);
        }
        this.camera.position.lerp(targetCameraPos, cameraLerpSpeed);

        // Always look at the frog
        this.camera.lookAt(targetPos);

        // Camera occlusion - fade walls between camera and player
        this.updateWallOcclusion(targetPos);
    }

    updateWallOcclusion(playerPos) {
        if (!this.wallMeshes || this.wallMeshes.length === 0) return;

        // Throttle occlusion checks to every 3 frames for performance
        this._occlusionFrame = (this._occlusionFrame || 0) + 1;
        if (this._occlusionFrame % 3 !== 0) return;

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

        // Update direction light to follow player
        if (this.localFrog && this.localFrog.mesh) {
            if (this.dirLight) {
                const targetPos = this.localFrog.mesh.position;
                const offset = new THREE.Vector3(20, 30, 10);
                this.dirLight.position.copy(targetPos).add(offset);
                this.dirLight.target.position.copy(targetPos);
                this.dirLight.target.updateMatrixWorld();
            }
        }

        // DIVING DETECTION
        if (this.waterLevel !== null && this.localFrog && this.localFrog.mesh) {
            const playerY = this.localFrog.mesh.position.y;
            const isUnderwater = playerY < this.waterLevel;

            // Update frog's underwater state
            if (this.localFrog.isUnderwater !== isUnderwater) {
                this.localFrog.isUnderwater = isUnderwater;
            }
        }

        // Update Ball
        if (this.ball) {
            this.ball.update(dt, this.waterLevel);

            if (this.isBallAuthority && this.network && this.ball.body) {
                const vel = this.ball.body.velocity;
                const isMoving = Math.abs(vel.x) > 0.1 || Math.abs(vel.y) > 0.1 || Math.abs(vel.z) > 0.1;
                if (isMoving) {
                    this.network.sendBallUpdate(this.ball.getSyncState());
                }
            }
        }

        // Update Scooters
        for (const scooter of this.scooters) {
            scooter.update(dt, input, this.terrainMeshes);
        }

        // Update Frogs (Visuals & Network interpolation)
        for (const id in this.frogs) {
            const frog = this.frogs[id];
            if (!frog.isLocal) {
                frog.update(dt, null, frog.targetLook);
            }
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

        // Update Tongue Cursor Indicator (Throttled)
        if (this.frameCount % 3 === 0) {
            this.updateTongueCursorIndicator(input);
        }

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
                const rendererName = this.renderer && this.renderer.isWebGPURenderer ? 'WebGPU' : 'WebGL';
                // Try to get GPU name if available in the renderer (WebGPU provides adapter info)
                const gpuName = this.renderer && this.renderer.adapter ? this.renderer.adapter.name : '';

                this.fpsCounter.style.display = Config.showFPS ? 'flex' : 'none';
                this.fpsCounter.style.flexDirection = 'column';
                this.fpsCounter.style.alignItems = 'flex-end';
                this.fpsCounter.innerHTML = `
                    <div style="font-weight: 900; color: #4ade80;">FPS: ${fps}</div>
                    <div style="font-size: 10px; opacity: 0.8; color: #60a5fa;">🚀 ${rendererName}</div>
                    ${gpuName ? `<div style="font-size: 9px; opacity: 0.6; color: #94a3b8;">📟 ${gpuName}</div>` : ''}
                `;
            }
            this.frameCount = 0;
            this.lastFpsUpdate = now;
        }

        // Render
        if (this.localFrog) {
            this.checkFrogClick(input);
        }

        // WebGPU: Render with Post-Processing
        if (this.postProcessing) {
            this.postProcessing.render();
        } else if (this.renderer) {
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
        if (this.renderer) {
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        }
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
            `scooter_${Date.now()}_${Math.random().toString(36).substr(2, 9)} `,
            randomColor,
            this.scene,
            this.physics
        );
        scooter.particles = this.particles;
        scooter.audio = this.audio;
        this.scooters.push(scooter);

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
        nameEl.textContent = data.name || `Frog ${idStr.substring(0, 4)} `;
        levelEl.textContent = `LEVEL ${data.level || 1} `;
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
                            this.showToast(`Friend request sent to ${data.name} !`);
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

        // Throttle update for performance
        this._auraUpdateFrame = (this._auraUpdateFrame || 0) + 1;
        if (this._auraUpdateFrame % 4 !== 0) return;

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
