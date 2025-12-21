export const Config = {
    // Physics
    gravity: -21.39,
    friction: 0.0,
    restitution: 0.336,

    // Movement
    moveSpeed: 1143.7,
    jumpVelocity: 19.5,
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
    sunIntensity: 2.97,
    ambientIntensity: 2.0,

    // Shadows
    shadowEnabled: true,
    shadowMapSize: 4096,
    shadowType: 'Basic',
    shadowRadius: 4.0,
    shadowBlurSamples: 32,
    shadowBias: 0.0000800000000000002,
    shadowNormalBias: 0.0428,
    shadowIntensity: 0.478,
    shadowCameraNear: 1.6444,
    shadowCameraFar: 119.27,
    shadowCameraSize: 55.03,
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
    saonEnabled: true,

    // Hemisphere Light
    hemiSkyColor: 1427122,
    hemiGroundColor: 12125188,
    hemiIntensity: 3,

    // Rim Light
    rimColor: 15468809,
    rimIntensity: 2.54,
    rimPosX: 18.8,
    rimPosY: 18.9,
    rimPosZ: 4.2,

    // Local Frog Aura
    auraIntensity: 0.0, // Disabled as requested
    auraDistance: 6.0,
    auraColor: 0x00f2ff,

    // Shader FX - Post Processing
    useShader: true,

    // Color Grading
    shaderSaturation: 1.15, // Cinematic saturation
    shaderBrightness: 0.05,
    shaderContrast: 1.1,  // Natural contrast
    shaderGamma: 1.0,
    shaderTintR: 1.0,
    shaderTintG: 1.0,
    shaderTintB: 1.0,
    shaderTemperature: 0.0,

    // Vignette Effect
    vignetteEnabled: true,
    vignetteIntensity: 0.267,
    vignetteRadius: 0.661,
    vignetteSoftness: 0.35,

    // Chromatic Aberration
    chromaticEnabled: false,
    chromaticIntensity: 0.005,
    chromaticRadial: true,

    // Film Grain
    grainEnabled: false, // Cleaner toon look
    grainIntensity: 0.02,
    grainSpeed: 0.1,
    grainSize: 3.5,

    // Sharpen Filter
    sharpenEnabled: false,
    sharpenIntensity: 1, // Full sharpen

    // Bloom (glow effect)
    bloomEnabled: false,
    bloomIntensity: 1.566,
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
    tongueRange: 16.0,              // Increased for more "Spider-Frog" feel
    tongueExtendDuration: 0.12,     // Snappier extension
    tongueRetractDuration: 0.08,    // Faster retraction
    tongueConeAngle: 12,            // Tighter cone = more intent required
    tongueAssistRadius: 2.0,        // NEW: Radius to look for targets around the cursor impact point
    tongueMagnetRadius: 0.8,        // Sticky snap for interactive objects
    tongueAngleWeight: 0.85,        // Heavily prioritize what's in the center of the crosshair
    tongueDistanceWeight: 0.15,     // Distance matters much less than precision aim
    tongueGrappleForce: 25,         // Pull force when attached to wall/hook
    tongueSwingForce: 12,           // Sideways force from WASD during grapple
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
    scooterTurnSpeed: 3,
    scooterMaxTurn: 0.5,           // Max handle rotation (radians)
    scooterWheelSpeed: 15,         // Wheel rotation speed
    scooterVisualOffsetY: -0.45,    // NEW: Offset to push model down to floor level

    scooterAcceleration: 8,        // How fast it speeds up
    scooterDeceleration: 5,        // How fast it slows down
    scooterSpawnRadius: 2,         // Radius of spawn area trigger
    scooterDismountKey: 'KeyE',    // Key to dismount

    // Scooter Rider Position (frog on scooter)
    scooterRiderY: -0.15,          // Lowered to sit on the board
    scooterLegOffsetX: 0.2,        // Wider legs
    scooterLegOffsetY: 0.15,       // Pull legs up (sitting)
    scooterLegOffsetZ: -0.6,       // Tuck legs back a bit
    scooterLegRotationX: 1.8,      // Sit rotation
    scooterLegRotationY: 0.4,      // Spread legs
    scooterLegRotationZ: 0.2,      // Tilt
    scooterAssOffsetY: 0.1,        // Offset for butt meshes
    scooterAssOffsetZ: -0.2,       // Pull butt back
    scooterBanking: 0.25,          // More lean!
};
