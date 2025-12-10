import './World.js';
import './Input.js';
import './Network.js';
import './Frog.js';

import { World } from './World.js';
import { Network } from './Network.js';
import { Input } from './Input.js';

import GUI from 'lil-gui';
import { Config } from './Config.js';

// Store default config values for comparison
const DefaultConfig = JSON.parse(JSON.stringify(Config));

// Initialize Game Systems
const world = new World();
const input = new Input();
const network = new Network(world);

// GUI Setup
const gui = new GUI({ title: '🐸 Dev Config' });

const physicsFolder = gui.addFolder('Physics');
physicsFolder.add(Config, 'gravity', -30, 0);
physicsFolder.add(Config, 'friction', 0, 1);
physicsFolder.add(Config, 'restitution', 0, 1);

const moveFolder = gui.addFolder('Movement');
moveFolder.add(Config, 'moveSpeed', 100, 5000);
moveFolder.add(Config, 'jumpVelocity', 0, 20);
moveFolder.add(Config, 'rotationSpeed', 1, 30);

const animFolder = gui.addFolder('Animation');
animFolder.add(Config, 'hopHeight', 0, 1);
animFolder.add(Config, 'hopSpeed', 1, 30);
animFolder.add(Config, 'talkSpeed', 1, 30);
animFolder.add(Config, 'legKickForce', 0, 1).name('Kick Force');
animFolder.add(Config, 'legKickDecay', 0.1, 10).name('Kick Decay');
animFolder.add(Config, 'walkLegSpeed', 0.1, 2).name('Walk Speed Mult');
animFolder.add(Config, 'walkLegHeight', 0, 1).name('Walk Height');

physicsFolder.add(Config, 'linearDamping', 0, 1).name('Sliding (Damping)').onChange(v => {
    if (world.localFrog && world.localFrog.body) {
        world.localFrog.body.linearDamping = v;
    }
});

const envFolder = gui.addFolder('Environment');
envFolder.add(Config, 'sunIntensity', 0, 5).onChange(v => {
    // Need to find light in world
    // We didn't store it in a public var, but we can traverse or just find by type
    world.scene.traverse(obj => {
        if (obj.isDirectionalLight) obj.intensity = v;
    });
});
envFolder.add(Config, 'ambientIntensity', 0, 2).onChange(v => {
    world.scene.traverse(obj => {
        if (obj.isAmbientLight) obj.intensity = v;
    });
});
// Update light immediately to sync with initial Config
world.scene.traverse(obj => {
    if (obj.isDirectionalLight) obj.intensity = Config.sunIntensity;
    if (obj.isAmbientLight) obj.intensity = Config.ambientIntensity;
});

// === SHADER FX CONTROLS ===
const shaderFolder = gui.addFolder('Shader FX');
shaderFolder.add(Config, 'useShader').name('Enable Post-FX');

// Color Grading Sub-folder
const colorFolder = shaderFolder.addFolder('Color Grading');
colorFolder.add(Config, 'shaderSaturation', 0, 2).name('Saturation');
colorFolder.add(Config, 'shaderBrightness', -0.5, 0.5).name('Brightness');
colorFolder.add(Config, 'shaderContrast', 0.5, 2).name('Contrast');
colorFolder.add(Config, 'shaderGamma', 0.5, 2).name('Gamma');

// Color Tint / Temperature Sub-folder
const tintFolder = shaderFolder.addFolder('Color Tint');
tintFolder.add(Config, 'shaderTemperature', -1, 1).name('Temperature');
tintFolder.add(Config, 'shaderTintR', 0, 2).name('Red Tint');
tintFolder.add(Config, 'shaderTintG', 0, 2).name('Green Tint');
tintFolder.add(Config, 'shaderTintB', 0, 2).name('Blue Tint');
tintFolder.close();

// Vignette Sub-folder
const vignetteFolder = shaderFolder.addFolder('Vignette');
vignetteFolder.add(Config, 'vignetteEnabled').name('Enabled');
vignetteFolder.add(Config, 'vignetteIntensity', 0, 1).name('Intensity');
vignetteFolder.add(Config, 'vignetteRadius', 0, 1).name('Radius');
vignetteFolder.add(Config, 'vignetteSoftness', 0, 1).name('Softness');
vignetteFolder.close();

// Chromatic Aberration Sub-folder
const chromaFolder = shaderFolder.addFolder('Chromatic Aberration');
chromaFolder.add(Config, 'chromaticEnabled').name('Enabled');
chromaFolder.add(Config, 'chromaticIntensity', 0, 0.02).name('Intensity');
chromaFolder.add(Config, 'chromaticRadial').name('Radial Mode');
chromaFolder.close();

// Film Grain Sub-folder
const grainFolder = shaderFolder.addFolder('Film Grain');
grainFolder.add(Config, 'grainEnabled').name('Enabled');
grainFolder.add(Config, 'grainIntensity', 0, 0.3).name('Intensity');
grainFolder.add(Config, 'grainSpeed', 0.1, 5).name('Speed');
grainFolder.add(Config, 'grainSize', 0.5, 5).name('Size');
grainFolder.close();

// Sharpen Sub-folder
const sharpenFolder = shaderFolder.addFolder('Sharpen');
sharpenFolder.add(Config, 'sharpenEnabled').name('Enabled');
sharpenFolder.add(Config, 'sharpenIntensity', 0, 1).name('Intensity');
sharpenFolder.close();

// Bloom Sub-folder
const bloomFolder = shaderFolder.addFolder('Bloom');
bloomFolder.add(Config, 'bloomEnabled').name('Enabled');
bloomFolder.add(Config, 'bloomIntensity', 0, 2).name('Intensity');
bloomFolder.add(Config, 'bloomThreshold', 0, 1).name('Threshold');
bloomFolder.add(Config, 'bloomRadius', 0, 1).name('Radius');
bloomFolder.close();

// Shadow Controls
const shadowFolder = gui.addFolder('Shadows');
shadowFolder.add(Config, 'shadowEnabled').name('Enable Shadows').onChange(v => {
    world.renderer.shadowMap.enabled = v;
    if (world.dirLight) world.dirLight.castShadow = v;
    // Need to rebuild materials for shadow toggle
    world.scene.traverse(obj => {
        if (obj.material) obj.material.needsUpdate = true;
    });
});
shadowFolder.add(Config, 'shadowMapSize', [512, 1024, 2048, 4096]).name('Map Resolution').onChange(v => {
    if (world.dirLight) {
        world.dirLight.shadow.mapSize.width = v;
        world.dirLight.shadow.mapSize.height = v;
        world.dirLight.shadow.map?.dispose();
        world.dirLight.shadow.map = null;
    }
});
shadowFolder.add(Config, 'shadowType', ['Basic', 'PCF', 'PCFSoft', 'VSM']).name('Shadow Type').onChange(v => {
    world.renderer.shadowMap.type = world.getShadowMapType(v);
    world.renderer.shadowMap.needsUpdate = true;
    world.scene.traverse(obj => {
        if (obj.material) obj.material.needsUpdate = true;
    });
});
shadowFolder.add(Config, 'shadowRadius', 0, 16).name('Blur Radius').onChange(v => {
    if (world.dirLight) world.dirLight.shadow.radius = v;
});
shadowFolder.add(Config, 'shadowBlurSamples', 1, 32, 1).name('Blur Samples').onChange(v => {
    if (world.dirLight) world.dirLight.shadow.blurSamples = v;
});
shadowFolder.add(Config, 'shadowIntensity', 0, 1).name('Shadow Darkness').onChange(v => {
    if (world.dirLight) world.dirLight.shadow.intensity = v;
});
shadowFolder.add(Config, 'shadowBias', -0.01, 0.01).name('Depth Bias').onChange(v => {
    if (world.dirLight) world.dirLight.shadow.bias = v;
});
shadowFolder.add(Config, 'shadowNormalBias', 0, 0.1).name('Normal Bias').onChange(v => {
    if (world.dirLight) world.dirLight.shadow.normalBias = v;
});

// Shadow Camera bounds (advanced)
const shadowCamFolder = shadowFolder.addFolder('Camera Bounds');
shadowCamFolder.add(Config, 'shadowCameraNear', 0.1, 10).name('Near').onChange(v => {
    if (world.dirLight) {
        world.dirLight.shadow.camera.near = v;
        world.dirLight.shadow.camera.updateProjectionMatrix();
    }
});
shadowCamFolder.add(Config, 'shadowCameraFar', 10, 500).name('Far').onChange(v => {
    if (world.dirLight) {
        world.dirLight.shadow.camera.far = v;
        world.dirLight.shadow.camera.updateProjectionMatrix();
    }
});
shadowCamFolder.add(Config, 'shadowCameraSize', 10, 200).name('Frustum Size').onChange(v => {
    if (world.dirLight) {
        world.dirLight.shadow.camera.top = v;
        world.dirLight.shadow.camera.bottom = -v;
        world.dirLight.shadow.camera.left = -v;
        world.dirLight.shadow.camera.right = v;
        world.dirLight.shadow.camera.updateProjectionMatrix();
    }
});
shadowCamFolder.close();

// Camera Controls
const cameraFolder = gui.addFolder('Camera');
cameraFolder.add(Config, 'cameraDistance', Config.cameraMinDistance, Config.cameraMaxDistance).name('Distance').onChange(v => {
    world.cameraDistance = v;
});
cameraFolder.add(Config, 'cameraMinDistance', 1, 20).name('Min Zoom');
cameraFolder.add(Config, 'cameraMaxDistance', 20, 100).name('Max Zoom');
cameraFolder.add(Config, 'cameraZoomSpeed', 0.5, 5).name('Zoom Speed');
cameraFolder.add(Config, 'cameraRotateSpeed', 0.001, 0.02).name('Rotate Speed');
cameraFolder.add(Config, 'cameraLerp', 0.01, 0.3).name('Smoothness');
cameraFolder.add({
    resetCamera: () => {
        world.cameraOrbitAngle = 0;
        world.cameraPitchAngle = 0.6;
        world.cameraDistance = Config.cameraDistance;
    }
}, 'resetCamera').name('🔄 Reset View');
cameraFolder.close();

// Jiggle Physics
const jiggleFolder = gui.addFolder('Jiggle Physics 🍑');
jiggleFolder.add(Config, 'jiggleEnabled').name('Enable Jiggle');
jiggleFolder.add(Config, 'jiggleIntensity', 0, 0.5).name('Intensity');
jiggleFolder.add(Config, 'jiggleSpeed', 1, 30).name('Speed');
jiggleFolder.add(Config, 'jiggleDamping', 1, 15).name('Damping');
jiggleFolder.add(Config, 'jiggleBounce', 0, 2).name('Bounce');
jiggleFolder.add(Config, 'jiggleMovementResponse', 0, 3).name('Movement Response');
jiggleFolder.add(Config, 'jiggleWalkWobble', 0, 0.3).name('Walk Wobble (Z)');
jiggleFolder.add(Config, 'jiggleWalkSpeed', 1, 25).name('Walk Speed');
jiggleFolder.add(Config, 'jiggleReturnSpeed', 1, 20).name('Return Speed');
jiggleFolder.close();

// Punch/Kick Animation
const punchFolder = gui.addFolder('Punch/Kick 🦵');
punchFolder.add(Config, 'punchSwingDistance', 0.5, 4).name('Swing Distance');
punchFolder.add(Config, 'punchSwingSpeed', 5, 30).name('Swing Speed');
punchFolder.add(Config, 'punchReturnSpeed', 2, 20).name('Return Speed');
punchFolder.add(Config, 'punchCooldown', 0.1, 1).name('Cooldown');
punchFolder.add(Config, 'punchLegRotation', 0, 0.5).name('Leg Rotation');
punchFolder.add(Config, 'punchHitRadius', 1, 5).name('Hit Radius');
punchFolder.close();

// VFX Settings
const vfxFolder = gui.addFolder('VFX ✨');
vfxFolder.add(Config, 'vfxEnabled').name('Enable VFX');
vfxFolder.add(Config, 'vfxDustCount', 1, 15, 1).name('Dust Count');
vfxFolder.add(Config, 'vfxDustSize', 0.05, 0.5).name('Dust Size');
vfxFolder.add(Config, 'vfxDustLife', 0.1, 1.5).name('Dust Life');
vfxFolder.add(Config, 'vfxImpactCount', 2, 20, 1).name('Impact Count');
vfxFolder.add(Config, 'vfxImpactSize', 0.1, 0.5).name('Impact Size');
vfxFolder.add(Config, 'vfxImpactLife', 0.1, 1).name('Impact Life');
vfxFolder.add(Config, 'vfxWalkInterval', 0.05, 0.5).name('Walk Interval');
vfxFolder.close();

// Combat Settings
const combatFolder = gui.addFolder('Combat ⚔️');
combatFolder.add(Config, 'maxHealth', 50, 200, 10).name('Max Health');
combatFolder.add(Config, 'punchDamage', 5, 50, 5).name('Punch Damage');
combatFolder.add(Config, 'knockbackForce', 5, 30).name('Knockback Force');
combatFolder.add(Config, 'knockbackUpward', 0, 15).name('Knockback Up');
combatFolder.add(Config, 'respawnTime', 1, 10).name('Respawn Time');
combatFolder.add(Config, 'deathFadeDuration', 0.5, 3).name('Death Fade');
combatFolder.close();

const exportObj = {
    exportSettings: () => {
        // Find changed values only
        const changed = {};
        for (const key in Config) {
            if (Config[key] !== DefaultConfig[key]) {
                changed[key] = Config[key];
            }
        }

        if (Object.keys(changed).length === 0) {
            console.log("--- NO CHANGES ---");
            alert("No settings have been changed from defaults.");
        } else {
            console.log("--- CHANGED SETTINGS ---");
            console.log(JSON.stringify(changed, null, 4));
            alert(`${Object.keys(changed).length} settings changed! Check Console (F12)`);
        }
    },
    exportAll: () => {
        console.log("--- FULL CONFIG ---");
        console.log(JSON.stringify(Config, null, 4));
        alert("Full config exported to Console! (Press F12)");
    }
};
gui.add(exportObj, 'exportSettings').name('💾 Log Changed Settings');
gui.add(exportObj, 'exportAll').name('📋 Log All Settings');

// Game Loop
let lastTime = 0;
function animate(time) {
    requestAnimationFrame(animate);
    const dt = (time - lastTime) / 1000;
    lastTime = time;

    world.step(dt, input);
    network.update(dt);

    // Send local updates if player exists
    if (world.localFrog) {
        const lookTarget = world.getMouseIntersection(input);
        world.localFrog.update(dt, input, lookTarget, world.cameraOrbitAngle);
        network.sendUpdate(world.localFrog);
    }

    // Update remote frogs
    Object.values(world.frogs).forEach(frog => {
        if (!frog.isLocal) {
            frog.updateRemote(dt);
        }
    });
}

animate(0);

// Expose for debugging
window.game = { world, input, network };
