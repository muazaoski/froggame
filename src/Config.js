export const Config = {
    // Physics
    gravity: -21.39,
    friction: 0.0,
    restitution: 0.336,

    // Movement
    moveSpeed: 1143.7,
    jumpVelocity: 15.08,
    rotationSpeed: 9.323,
    airControl: 0.5,

    // Animation
    hopHeight: 0.545,
    hopSpeed: 11.817,
    talkSpeed: 4.335,

    // Physics Details
    linearDamping: 0.93,

    // Leg Animation
    legKickForce: 0.889,
    legKickDecay: 6.1093,
    walkLegSpeed: 1.0424,
    walkLegHeight: 0.754,

    // Environment
    sunIntensity: 4.5,
    ambientIntensity: 1.5,

    // Shadows
    shadowEnabled: true,
    shadowMapSize: 4096,
    shadowType: 'Basic',
    shadowRadius: 2.0, // Sharper shadows
    shadowBlurSamples: 8,
    shadowBias: -0.00032,
    shadowNormalBias: 0,
    shadowIntensity: 0.45,
    shadowCameraNear: 1.6444,
    shadowCameraFar: 119.27,
    shadowCameraSize: 55.03,
    shadowCameraLeft: -50,
    shadowCameraRight: 50,
    shadowCameraTop: 50,
    shadowCameraBottom: -50,
    shadowAutoUpdate: true,
    shadowCascades: 1,

    // Shader FX - Post Processing
    useShader: true,

    // Color Grading
    shaderSaturation: 1.65, // More vibrant
    shaderBrightness: 0.05,
    shaderContrast: 1.25,  // Higher contrast
    shaderGamma: 1.1,

    // Color Tint / Temperature
    shaderTintR: 1.0,
    shaderTintG: 1.0,
    shaderTintB: 1.0,
    shaderTemperature: -0.1, // Slight cool pop

    // Vignette Effect
    vignetteEnabled: true,
    vignetteIntensity: 0.25,
    vignetteRadius: 1.0,
    vignetteSoftness: 0.35,

    // Chromatic Aberration
    chromaticEnabled: false,
    chromaticIntensity: 0.005,
    chromaticRadial: true,

    // Film Grain
    grainEnabled: false, // Cleaner toon look

    // Sharpen Filter
    sharpenEnabled: true,
    sharpenIntensity: 0.8, // Crisper lines

    // Bloom (glow effect)
    bloomEnabled: true,
    bloomIntensity: 0.4,
    bloomThreshold: 0.2,
    bloomRadius: 0.05,

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
    jiggleDamping: 5,
    jiggleBounce: 0.8,
    jiggleMovementResponse: 1.0,
    jiggleWalkWobble: 0.1968,
    jiggleWalkSpeed: 10,

    // Tongue Mechanics (Reworked - ref1.md spec)
    tongueRange: 12.0,              // Max tongue reach
    tongueExtendDuration: 0.15,     // 150ms extension animation
    tongueRetractDuration: 0.10,    // 100ms retraction animation
    tongueConeAngle: 18,            // Degrees from forward (forgiving cone)
    tongueMagnetRadius: 0.5,        // Snap radius for aim forgiveness
    tongueAngleWeight: 0.7,         // Scoring weight for angle (lower = better)
    tongueDistanceWeight: 0.3,      // Scoring weight for distance
    tongueGrappleForce: 25,         // Pull force when attached to wall/hook
    tongueGrabForce: 15,            // Pull force applied to grabbed frogs
    tongueCooldown: 0.5,            // Seconds between tongue uses
    tongueColor: '#ff6b9d',         // Pink tongue color
    tongueTipSize: 0.15,            // Size of tongue tip sphere
    tongueThicknessBase: 0.08,      // Base thickness near mouth
    tongueThicknessTip: 0.04,       // Tapered thickness at tip
    tongueDebugEnabled: false,      // Toggle debug visualization (F3)
    jiggleReturnSpeed: 8,

    // Punch/Kick Animation
    punchSwingDistance: 2.537,
    punchSwingSpeed: 6.35,
    punchReturnSpeed: 9.38,
    punchCooldown: 0.3,
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
    ballRadius: 0.8282,
    ballMass: 0.6225,
    ballLinearDamping: 0.533,
    ballAngularDamping: 0.975,
    ballBounciness: 0.7,
    ballFriction: 0.422,
    ballKickForce: 21.4,
    ballKickUpward: 6.885,
    ballSpawnHeight: 30,
    ballResetHeight: -20,

    // Scooter Settings
    scooterSpeed: 18,              // Movement speed on scooter
    scooterTurnSpeed: 3,           // How fast turns
    scooterMaxTurn: 0.5,           // Max handle rotation (radians)
    scooterWheelSpeed: 15,         // Wheel rotation speed
    scooterAcceleration: 8,        // How fast it speeds up
    scooterDeceleration: 5,        // How fast it slows down
    scooterSpawnRadius: 2,         // Radius of spawn area trigger
    scooterDismountKey: 'KeyE',    // Key to dismount

    // Scooter Rider Position (frog on scooter)
    scooterRiderY: 0.75,           // Y offset of frog above scooter
    scooterLegOffsetX: 0.0,        // Left/Right offset of legs
    scooterLegOffsetY: 0.0,        // Up/Down offset of legs
    scooterLegOffsetZ: -0.75,      // Forward/Back offset of legs
    scooterLegRotationX: 1.15840734641021,   // Leg rotation on X axis (radians)
    scooterLegRotationY: 0.0584073464102071, // Leg rotation on Y axis (radians)
    scooterLegRotationZ: 0.0584073464102071, // Leg rotation on Z axis (radians)
};
