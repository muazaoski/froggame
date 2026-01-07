export const Config = {
    // Physics
    gravity: -30,
    friction: 0.0,
    restitution: 0.336,

    // Movement
    moveSpeed: 8.5,
    jumpVelocity: 19.5,
    rotationSpeed: 10.077,
    airControl: 0.5,

    // Animation
    hopHeight: 0.545,
    hopSpeed: 7.119,
    talkSpeed: 4.335,

    // Physics Details
    linearDamping: 0.93,

    // Leg Animation
    legKickForce: 0.466,
    legKickDecay: 7.4854,
    walkLegSpeed: 1.0424,
    walkLegHeight: 0.754,

    // Environment
    sunIntensity: 1.35,
    ambientIntensity: 4.365,

    // Shadows
    shadowEnabled: true,
    shadowMapSize: 2048,
    shadowType: 'Basic',
    shadowRadius: 4.0,
    shadowBlurSamples: 32,
    shadowBias: -0.01,
    shadowNormalBias: 0.0644,
    shadowIntensity: 0.8, // Increased for visibility
    shadowCameraNear: 1.6444,
    shadowCameraFar: 119.27,
    shadowCameraSize: 144.33,
    shadowCameraLeft: -50,
    shadowCameraRight: 50,
    shadowCameraTop: 50,
    shadowCameraBottom: -50,
    shadowAutoUpdate: true,
    shadowCascades: 1,

    // Cycles Mode Rendering (PBR)
    toonEnabled: false,
    outlineEnabled: false,
    outlineIntensity: 0.471,
    saonEnabled: false,

    // Hemisphere Light
    hemiSkyColor: 1427122,
    hemiGroundColor: 12198177,
    hemiIntensity: 0.94,

    // Rim Light
    rimColor: 16763402,
    rimIntensity: 1.885,
    rimPosX: 23.6,
    rimPosY: 18.9,
    rimPosZ: 4.2,

    // Local Frog Aura
    auraIntensity: 0.0, // Disabled as requested
    auraDistance: 6.0,
    auraColor: 0x00f2ff,

    // Shader FX - Post Processing
    useShader: true,

    // Color Grading
    shaderSaturation: 1.132,
    shaderBrightness: -0.5,
    shaderContrast: 0.656,
    shaderGamma: 1.0,
    shaderTintR: 0.996,
    shaderTintG: 0.968,
    shaderTintB: 1.0,
    shaderTemperature: -0.44,

    // Vignette Effect
    vignetteEnabled: false,
    vignetteIntensity: 0.267,
    vignetteRadius: 0.661,
    vignetteSoftness: 0.35,
    vignetteOffset: 1,
    vignetteDarkness: 1.2,    // TSL: Outer radius where vignette is fully dark

    // Chromatic Aberration
    chromaticEnabled: false,
    chromaticIntensity: 0.0364,
    chromaticRadial: true,

    // Film Grain
    grainEnabled: false, // Cleaner toon look
    grainIntensity: 0.1533,
    grainSpeed: 0.1,
    grainSize: 3.5,

    // Sharpen Filter
    sharpenEnabled: false,
    sharpenIntensity: 1, // Full sharpen

    // Bloom (glow effect)
    bloomEnabled: true,
    bloomIntensity: 0.027,
    bloomThreshold: 1,
    bloomRadius: 0.05,

    // FXAA Anti-Aliasing
    fxaaEnabled: true,

    // Depth of Field (values from user image)
    dofEnabled: true,
    dofFocus: 10,         // Focus distance: 10
    dofAperture: 227.1,   // Focal length: 227.1
    dofMaxBlur: 12.514,   // Bokeh scale: 12.514

    // GTAO - Ambient Occlusion
    gtaoEnabled: false,
    gtaoRadius: 0.25,
    gtaoIntensity: 1.0,

    // Sepia Tone
    sepiaEnabled: false,
    sepiaIntensity: 1.0,

    // RGB Shift
    rgbShiftEnabled: false,
    rgbShiftAmount: 0.005,

    // Dot Screen (Halftone)
    dotScreenEnabled: false,
    dotScreenScale: 1.0,

    // Sobel Edge Detection
    sobelEnabled: false,

    // Camera
    cameraHeight: 15,
    cameraDistance: 16.34,
    cameraLerp: 0.15471,

    // Camera Controls
    cameraMinDistance: 4.591,
    cameraMaxDistance: 20,
    cameraZoomSpeed: 1.7555,
    cameraRotateSpeed: 0.006662,
    cameraMinPitch: 0.1,
    cameraMaxPitch: 1.4,
    cameraOrbitAngle: 0,
    cameraPitchAngle: 0.6,

    // Spectator Camera (login screen background)
    spectatorDistance: 34.04,
    spectatorPitch: 0.1,
    spectatorSpeed: 0.22866,
    spectatorHeight: 8.7,

    // Jiggle Physics (Ass)
    jiggleEnabled: true,
    jiggleIntensity: 0.15,
    jiggleSpeed: 12,
    jiggleDamping: 10.198,
    jiggleBounce: 1.746,
    jiggleMovementResponse: 1.0,
    jiggleWalkWobble: 0.1968,
    jiggleWalkSpeed: 10,

    // Tongue Mechanics (Reworked - ref1.md spec)
    tongueRange: 18.0,
    tongueExtendDuration: 0.12,
    tongueRetractDuration: 0.05,    // Faster retraction on misses
    tongueConeAngle: 45,
    tongueAssistRadius: 3.5,
    tongueLaserSight: true,
    tongueLaserIntensity: 0.4,

    tongueMagnetRadius: 1.5,
    tongueAngleWeight: 0.85,
    tongueDistanceWeight: 0.15,
    tongueGrappleForce: 120,        // Zipping force (Fast Zip Mode)
    tongueSwingForce: 45,           // Swing steering force (Pendulum Mode)
    tongueGrappleMaxForce: 2e4,     // Constraint max force
    tongueMode: 'swing',            // 'zip' or 'swing'
    tongueGrabForce: 35,
    tongueCooldown: 0.15,


    tongueColor: '#ff6b9d',         // Pink tongue color
    tongueTipSize: 0.15,            // Size of tongue tip sphere
    tongueThicknessBase: 0.08,      // Base thickness near mouth
    tongueThicknessTip: 0.04,       // Tapered thickness at tip
    tongueDebugEnabled: false,      // Toggle debug visualization (F3)
    jiggleReturnSpeed: 8,

    // Punch/Kick Animation
    punchSwingDistance: 2.537,
    punchSwingSpeed: 5,
    punchReturnSpeed: 18.848,
    punchCooldown: 0.7597,
    punchLegRotation: 0.1,
    punchHitRadius: 2.0,           // Collision radius for punch hits

    // VFX Settings
    vfxEnabled: true,
    vfxDustCount: 3,
    vfxDustSize: 0.0905,
    vfxDustLife: 0.6,
    vfxImpactCount: 16,
    vfxImpactSize: 0.372,
    vfxImpactLife: 0.4915,
    vfxWalkInterval: 0.12,
    vfxGroundOffset: -0.45,   // Shift from center to floor
    vfxForwardOffset: 0.3,    // Shift away from the butt

    // Combat Settings
    maxHealth: 200,
    punchDamageMin: 6,         // Base damage min
    punchDamageMax: 10,        // Base damage max
    criticalDamageMin: 15,     // Critical damage min
    criticalDamageMax: 20,     // Critical damage max
    criticalChance: 0.15,      // 15% chance for critical hit
    knockbackForce: 15,
    knockbackUpward: 8,
    respawnTime: 2.035,
    deathFadeDuration: 1.0025,

    // Ball Settings
    ballRadius: 0.5,
    ballMass: 0.3812,
    ballLinearDamping: 0.533,
    ballAngularDamping: 0.975,
    ballBounciness: 0.7,
    ballFriction: 0.422,
    ballKickForce: 21.4,
    ballKickUpward: 6.885,
    ballSpawnHeight: 30,
    ballSpawnRangeX: 25, // Specified range -25 to 25
    ballSpawnRangeZ: 25,
    ballResetHeight: -20,

    // Scooter Settings
    scooterSpeed: 18,              // Movement speed on scooter
    scooterTurnSpeed: 3,
    scooterMaxTurn: 0.5,           // Max handle rotation (radians)
    scooterWheelSpeed: 15,         // Wheel rotation speed
    scooterVisualOffsetY: -0.45,    // NEW: Offset to push model down to floor level

    scooterAcceleration: 8,        // How fast it speeds up
    scooterDeceleration: 5,        // How fast it slows down
    scooterSpawnRadius: 2,         // Radius of spawn area trigger
    scooterDismountKey: 'KeyE',    // Key to dismount

    // Scooter Rider Position (frog on scooter)
    scooterRiderY: 0.55,
    scooterLegOffsetX: 0,
    scooterLegOffsetY: -0.1,
    scooterLegOffsetZ: -0.85,      // Keep reasonable depth
    scooterLegRotationX: 1.15840734641021,
    scooterLegRotationY: 0.2,      // Keep slight angle
    scooterLegRotationZ: 0.208407346410207,
    scooterAssOffsetY: 0.0,
    scooterAssOffsetZ: 0.0,
    scooterBanking: 0.18,

    // Water Settings
    waterColor: 0x1a8ccc,
    waterOpacity: 0.758,
    waterScale: 3.0057,
    waterFrequency1: 8.029,
    waterFrequency2: 100.0,
    waterFrequency3: 18.6,
    waterSpeed1: 2.46,
    waterSpeed2: -3.27,
    waterSpeed3: 2.46,
    waterDistortion: 1.0,
    waterShimmerIntensity: 0.059,
    waterShimmerThreshold: -0.322,
    waterShimmerSoftness: 0.796,
    waterFoamIntensity: 0.071, // New setting for foam
    waterFoamRange: 0.55,     // New setting for foam range

    showFPS: true,                  // Show FPS counter
};

