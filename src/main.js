import './World.js';
import './Input.js';
import './Network.js';
import './Frog.js';

import { World } from './World.js';
import { Network } from './Network.js';
import { Input } from './Input.js';

import * as THREE from 'three';
import GUI from 'lil-gui';
import { Config } from './Config.js';

// Store default config values for comparison
const DefaultConfig = JSON.parse(JSON.stringify(Config));

// Initialize Game Systems
const world = new World();
const input = new Input();
const network = new Network(world);
world.network = network; // Link network to world for combat sync

// Tongue debug toggle (F3 key)
window.addEventListener('toggle-tongue-debug', () => {
    Config.tongueDebugEnabled = !Config.tongueDebugEnabled;
    console.log(`🐸 Tongue debug: ${Config.tongueDebugEnabled ? 'ON' : 'OFF'}`);
});

// GUI Setup
const gui = new GUI({ title: '🐸 Dev Config' });
// Config starts hidden, toggle with Alt+V
gui.hide();

// Helper function to add tooltip and double-click reset to controllers
function addTooltip(controller, tooltip) {
    // lil-gui controller structure: controller.domElement is the widget container
    // controller.$name is the label, controller.$widget is the input area

    // Set tooltip on the name/label element
    if (controller.$name) {
        controller.$name.title = tooltip;
        controller.$name.style.cursor = 'help';
    }

    // Also set on the widget container
    if (controller.domElement) {
        controller.domElement.title = tooltip;
    }

    // Find the slider/input widget for double-click reset
    const widget = controller.domElement.querySelector('input');
    if (widget) {
        widget.title = tooltip;

        // Add double-click to reset on the widget
        widget.addEventListener('dblclick', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const key = controller.property;
            if (DefaultConfig[key] !== undefined) {
                Config[key] = DefaultConfig[key];
                controller.updateDisplay();
                if (controller._onChange) {
                    controller._onChange(Config[key]);
                }
                console.log(`Reset ${key} to default: ${DefaultConfig[key]}`);
            }
        });
    }

    // Add double-click on the label too
    if (controller.$name) {
        controller.$name.addEventListener('dblclick', (e) => {
            const key = controller.property;
            if (DefaultConfig[key] !== undefined) {
                Config[key] = DefaultConfig[key];
                controller.updateDisplay();
                if (controller._onChange) {
                    controller._onChange(Config[key]);
                }
                console.log(`Reset ${key} to default: ${DefaultConfig[key]}`);
            }
        });
    }

    return controller;
}



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

// Hemisphere Light Folder
const hemiFolder = gui.addFolder('Hemisphere Light 🌓');
hemiFolder.add(Config, 'hemiIntensity', 0, 3).name('Intensity').onChange(v => {
    if (world.hemiLight) world.hemiLight.intensity = v;
});
hemiFolder.addColor(Config, 'hemiSkyColor').name('Sky Color').onChange(v => {
    if (world.hemiLight) world.hemiLight.color.set(v);
});
hemiFolder.addColor(Config, 'hemiGroundColor').name('Ground Color').onChange(v => {
    if (world.hemiLight) world.hemiLight.groundColor.set(v);
});
hemiFolder.close();

// Rim Light Folder
const rimFolder = gui.addFolder('Rim Light 💡');
rimFolder.add(Config, 'rimIntensity', 0, 5).name('Intensity').onChange(v => {
    if (world.rimLight) world.rimLight.intensity = v;
});
rimFolder.addColor(Config, 'rimColor').name('Color').onChange(v => {
    if (world.rimLight) world.rimLight.color.set(v);
});
rimFolder.add(Config, 'rimPosX', -100, 100).name('Pos X').onChange(v => {
    if (world.rimLight) world.rimLight.position.x = v;
});
rimFolder.add(Config, 'rimPosY', 0, 100).name('Pos Y').onChange(v => {
    if (world.rimLight) world.rimLight.position.y = v;
});
rimFolder.add(Config, 'rimPosZ', -100, 100).name('Pos Z').onChange(v => {
    if (world.rimLight) world.rimLight.position.z = v;
});
rimFolder.close();

// Player Aura Folder
const auraFolder = gui.addFolder('Player Aura 🌟');
auraFolder.add(Config, 'auraIntensity', 0, 10).name('Intensity');
auraFolder.add(Config, 'auraDistance', 1, 20).name('Distance');
auraFolder.addColor(Config, 'auraColor').name('Color');
auraFolder.close();

// Sky & Fog Folder
const skyFolder = gui.addFolder('Sky & Fog ☁️');
skyFolder.addColor({ color: '#' + world.scene.background.getHexString() }, 'color').name('Background Color').onChange(v => {
    world.scene.background.set(v);
    world.scene.fog.color.set(v);
    // Update shader uniform to match sky for toon masking
    if (world.composer) {
        const pass = world.composer.passes.find(p => p.uniforms && p.uniforms.uSkyColor);
        if (pass) {
            const c = new THREE.Color(v);
            pass.uniforms.uSkyColor.value.set(c.r, c.g, c.b);
        }
    }
});
skyFolder.add(world.scene.fog, 'near', 0, 100).name('Fog Near');
skyFolder.add(world.scene.fog, 'far', 50, 500).name('Fog Far');
skyFolder.close();

// === SHADER FX CONTROLS ===
const shaderFolder = gui.addFolder('Shader FX');
shaderFolder.add(Config, 'useShader').name('Enable Post-FX');

// Cycles Rendering Quality (SAO)
const cyclesFolder = shaderFolder.addFolder('Cycles Mode (SAO) 💎');
cyclesFolder.add(Config, 'saonEnabled').name('Enable SAO').onChange(v => {
    if (world.saoPass) world.saoPass.enabled = v;
});

if (world.saoPass && world.saoPass.params) {
    cyclesFolder.add(world.saoPass.params, 'saoIntensity', 0, 0.1).name('AO Strength');
    cyclesFolder.add(world.saoPass.params, 'saoBias', -1, 1).name('AO Bias');
    cyclesFolder.add(world.saoPass.params, 'saoKernelRadius', 1, 100).name('AO Radius');
    cyclesFolder.add(world.saoPass.params, 'saoScale', 1, 50).name('AO Scale');
}
cyclesFolder.close();

// Toon/Cel-Shade Toggles
const toonFolder = shaderFolder.addFolder('Toon Style 🎨');
toonFolder.add(Config, 'toonEnabled').name('Enable Cel-Shade').onChange(v => {
    if (world.customPass) world.customPass.uniforms.uToonEnabled.value = v ? 1.0 : 0.0;
});
toonFolder.add(Config, 'outlineEnabled').name('Enable Outlines').onChange(v => {
    if (world.customPass) world.customPass.uniforms.uOutlineEnabled.value = v ? 1.0 : 0.0;
});
toonFolder.add(Config, 'outlineIntensity', 0, 1).name('Outline Darkness').onChange(v => {
    if (world.customPass) world.customPass.uniforms.uOutlineIntensity.value = v;
});
toonFolder.close();

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

// Spectator Camera (Login Screen Background)
const spectatorFolder = gui.addFolder('Spectator Camera 👁️');
spectatorFolder.add(Config, 'spectatorDistance', 20, 200).name('Distance');
spectatorFolder.add(Config, 'spectatorPitch', 0.1, 1.5).name('Pitch');
spectatorFolder.add(Config, 'spectatorSpeed', 0.01, 0.3).name('Orbit Speed');
spectatorFolder.add(Config, 'spectatorHeight', -20, 50).name('Look At Height');
spectatorFolder.close();

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
combatFolder.add(Config, 'punchDamageMin', 1, 20, 1).name('Base Damage Min');
combatFolder.add(Config, 'punchDamageMax', 5, 30, 1).name('Base Damage Max');
combatFolder.add(Config, 'criticalDamageMin', 10, 40, 1).name('Crit Damage Min');
combatFolder.add(Config, 'criticalDamageMax', 15, 50, 1).name('Crit Damage Max');
combatFolder.add(Config, 'criticalChance', 0, 0.5).name('Crit Chance');
combatFolder.add(Config, 'knockbackForce', 5, 30).name('Knockback Force');
combatFolder.add(Config, 'knockbackUpward', 0, 15).name('Knockback Up');
combatFolder.add(Config, 'respawnTime', 1, 10).name('Respawn Time');
combatFolder.add(Config, 'deathFadeDuration', 0.5, 3).name('Death Fade');
combatFolder.close();

// Scooter Settings
const scooterFolder = gui.addFolder('Scooter 🛴');
scooterFolder.add(Config, 'scooterSpeed', 5, 40).name('Speed');
scooterFolder.add(Config, 'scooterTurnSpeed', 1, 10).name('Turn Speed');
scooterFolder.add(Config, 'scooterMaxTurn', 0.1, 1).name('Max Turn Angle');
scooterFolder.add(Config, 'scooterWheelSpeed', 5, 30).name('Wheel Spin Speed');
scooterFolder.add(Config, 'scooterAcceleration', 2, 20).name('Acceleration');
scooterFolder.add(Config, 'scooterDeceleration', 1, 15).name('Deceleration');
scooterFolder.add(Config, 'scooterSpawnRadius', 1, 5).name('Spawn Radius');
scooterFolder.close();

// Ball Physics
const ballFolder = gui.addFolder('Ball ⚽');

addTooltip(
    ballFolder.add(Config, 'ballRadius', 0.2, 2).name('Radius').onChange(v => {
        if (world.ball) {
            if (world.ball.fallbackSphere) {
                world.ball.fallbackSphere.geometry.dispose();
                world.ball.fallbackSphere.geometry = new THREE.SphereGeometry(v, 32, 32);
            }
        }
    }),
    'Ball size. Low=small, High=big. Double-click to reset.'
);

addTooltip(
    ballFolder.add(Config, 'ballMass', 0.1, 2).name('Mass').onChange(v => {
        if (world.ball && world.ball.body) {
            world.ball.body.mass = v;
            world.ball.body.updateMassProperties();
        }
    }),
    'Ball weight. Low=flies far, High=hard to kick. Double-click to reset.'
);

addTooltip(
    ballFolder.add(Config, 'ballLinearDamping', 0, 1).name('Linear Damping').onChange(v => {
        if (world.ball && world.ball.body) {
            world.ball.body.linearDamping = v;
        }
    }),
    'How fast ball slows. Low=rolls forever, High=stops quick. Double-click to reset.'
);

addTooltip(
    ballFolder.add(Config, 'ballAngularDamping', 0, 1).name('Angular Damping').onChange(v => {
        if (world.ball && world.ball.body) {
            world.ball.body.angularDamping = v;
        }
    }),
    'How fast spin stops. Low=spins long, High=stops spinning. Double-click to reset.'
);

addTooltip(
    ballFolder.add(Config, 'ballBounciness', 0, 1).name('Bounciness'),
    'Bounce amount. Low=dead ball, High=super bouncy. Double-click to reset.'
);

addTooltip(
    ballFolder.add(Config, 'ballFriction', 0, 1).name('Friction'),
    'Ground grip. Low=slides, High=rolls properly. Double-click to reset.'
);

addTooltip(
    ballFolder.add(Config, 'ballKickForce', 5, 30).name('Kick Force'),
    'Kick power. Low=weak kicks, High=powerful kicks. Double-click to reset.'
);

addTooltip(
    ballFolder.add(Config, 'ballKickUpward', 0, 15).name('Kick Upward'),
    'Upward kick force. Low=ground shot, High=pop fly. Double-click to reset.'
);

addTooltip(
    ballFolder.add(Config, 'ballSpawnHeight', 5, 50).name('Spawn Height'),
    'Ball spawn/reset height. Low=near ground, High=from sky. Double-click to reset.'
);

addTooltip(
    ballFolder.add(Config, 'ballResetHeight', -50, 0).name('Reset Height'),
    'Y position that triggers reset. Lower=can fall far. Double-click to reset.'
);

ballFolder.add({
    resetBall: () => {
        if (world.ball) {
            world.ball.body.position.set(5, Config.ballSpawnHeight, 0);
            world.ball.body.velocity.set(0, 0, 0);
            world.ball.body.angularVelocity.set(0, 0, 0);
        }
    }
}, 'resetBall').name('🔄 Reset Ball Position');

ballFolder.close();

// Scooter Rider Position (only applies when riding scooter)
const scooterRiderFolder = gui.addFolder('Scooter Rider Position');
scooterRiderFolder.add(Config, 'scooterRiderY', -1, 2, 0.05).name('Frog Y Offset');
scooterRiderFolder.add(Config, 'scooterLegOffsetX', -1, 1, 0.05).name('Leg X Offset');
scooterRiderFolder.add(Config, 'scooterLegOffsetY', -1, 1, 0.05).name('Leg Y Offset');
scooterRiderFolder.add(Config, 'scooterLegOffsetZ', -1, 1, 0.05).name('Leg Z Offset');
scooterRiderFolder.add(Config, 'scooterLegRotationX', -Math.PI, Math.PI, 0.05).name('Leg Rotation X');
scooterRiderFolder.add(Config, 'scooterLegRotationY', -Math.PI, Math.PI, 0.05).name('Leg Rotation Y');
scooterRiderFolder.add(Config, 'scooterLegRotationZ', -Math.PI, Math.PI, 0.05).name('Leg Rotation Z');
scooterRiderFolder.close();

const grassFolder = gui.addFolder('🌿 Grass Interaction');
grassFolder.add(Config, 'grassBendingStrength', 0, 10).name('Bending Strength');
grassFolder.add(Config, 'grassBendingRadius', 1, 10).name('Bending Radius');
grassFolder.add(Config, 'grassWindSpeed', 0, 5).name('Wind Speed');
grassFolder.add(Config, 'grassWindStrength', 0, 1).name('Wind Strength');
grassFolder.close();



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

// Dev Config Toggle - Alt + V
let guiVisible = false;
window.addEventListener('keydown', (e) => {
    if (e.altKey && (e.key === 'v' || e.key === 'V')) {
        e.preventDefault();
        guiVisible = !guiVisible;
        if (guiVisible) {
            gui.show();
        } else {
            gui.hide();
        }
    }
});

// Game Loop
let lastTime = 0;
let spectatorOrbitAngle = 0; // For auto-orbiting camera in spectator mode

function animate(time) {
    requestAnimationFrame(animate);
    let dt = (time - lastTime) / 1000;
    lastTime = time;

    // Cap delta time to prevent huge jumps when tab is inactive
    // This fixes the "freeze" issue when switching tabs
    if (dt > 0.1) dt = 0.1; // Max 100ms per frame

    world.step(dt, input);
    network.update(dt);

    // Send local updates if player exists
    if (world.localFrog) {
        const lookTarget = world.getMouseIntersection(input);
        world.localFrog.update(dt, input, lookTarget, world.cameraOrbitAngle);

        // Handle tongue input
        if (input.consumeTongue() && lookTarget) {
            world.localFrog.shootTongue(lookTarget, world);
        }
        // Release grapple when right mouse released
        if (!input.tongueHeld && world.localFrog.tongue.state === 'attached') {
            world.localFrog.releaseTongue();
        }

        // Send inputs to server (for activity tracking)
        network.sendInput(input, world.cameraOrbitAngle);

        // Send position update - CLIENT AUTHORITATIVE MOVEMENT
        // Server validates and relays to other players
        network.sendUpdate(world.localFrog);
    } else {
        // SPECTATOR MODE - Auto-orbit camera around world center
        spectatorOrbitAngle += dt * Config.spectatorSpeed;
        world.cameraOrbitAngle = spectatorOrbitAngle;
        world.cameraPitchAngle = Config.spectatorPitch;
        world.cameraDistance = Config.spectatorDistance;

        // Update camera position for spectator view
        const targetPos = { x: 0, y: Config.spectatorHeight, z: 0 };
        const orbitX = targetPos.x + Math.sin(world.cameraOrbitAngle) * world.cameraDistance;
        const orbitZ = targetPos.z + Math.cos(world.cameraOrbitAngle) * world.cameraDistance;
        const orbitY = targetPos.y + Math.sin(world.cameraPitchAngle) * world.cameraDistance;

        world.camera.position.set(orbitX, orbitY, orbitZ);
        world.camera.lookAt(targetPos.x, targetPos.y, targetPos.z);
    }

    // Update remote frogs (always, even in spectator mode)
    Object.values(world.frogs).forEach(frog => {
        if (!frog.isLocal) {
            frog.updateRemote(dt);
        }
    });
}

animate(0);

// Expose for debugging
window.game = { world, input, network };

// --- LOGIN / AUTH LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
    const loginModal = document.getElementById('login-modal');
    const tabLogin = document.getElementById('tab-login');
    const tabRegister = document.getElementById('tab-register');
    const authMessage = document.getElementById('auth-message');
    const accountStats = document.getElementById('account-stats');
    const nameInput = document.getElementById('player-name');
    const passwordInput = document.getElementById('player-password');
    const passwordToggle = document.getElementById('password-toggle');
    const colorInput = document.getElementById('player-color');
    const btnAuth = document.getElementById('btn-auth');
    const btnGuest = document.getElementById('btn-guest');

    if (!btnAuth || !loginModal) {
        console.warn("Login elements not found!");
        return;
    }

    let isLoginMode = true; // true = login, false = register
    let isAuthenticated = false;
    let currentUser = null;

    // Expose auth status to global game object
    if (window.game) {
        Object.defineProperty(window.game, 'isAuthenticated', {
            get: () => isAuthenticated
        });
    }

    // Tab switching
    function setAuthMode(loginMode) {
        isLoginMode = loginMode;
        tabLogin.classList.toggle('active', loginMode);
        tabRegister.classList.toggle('active', !loginMode);
        btnAuth.textContent = 'PLAY';
        hideMessage();
    }

    tabLogin.addEventListener('click', () => setAuthMode(true));
    tabRegister.addEventListener('click', () => setAuthMode(false));

    // Password visibility toggle
    passwordToggle.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passwordToggle.textContent = '🙈';
        } else {
            passwordInput.type = 'password';
            passwordToggle.textContent = '👁️';
        }
    });

    // Color Circle Selection
    const colorCircles = document.querySelectorAll('.color-circle');
    colorCircles.forEach(circle => {
        circle.addEventListener('click', () => {
            // Update selection UI
            colorCircles.forEach(c => c.classList.remove('selected'));
            circle.classList.add('selected');

            // Update hidden input
            const color = circle.dataset.color;
            if (colorInput) colorInput.value = color;
        });
    });

    // Show message (error or success) - TOAST STYLE
    let authMessageTimeout = null;
    function showMessage(text, isError = true) {
        if (authMessageTimeout) clearTimeout(authMessageTimeout);

        authMessage.textContent = text;
        authMessage.classList.remove('hiding');
        authMessage.className = 'auth-message ' + (isError ? 'error' : 'success') + ' visible';

        // Auto hide after 3 seconds
        authMessageTimeout = setTimeout(() => {
            hideMessage();
        }, 3000);

        // Play UI Sound
        if (world && world.audio) {
            world.audio.play(isError ? 'ui_error' : 'ui_success');
        }
    }

    function hideMessage() {
        authMessage.classList.add('hiding');
        authMessage.classList.remove('visible');
    }

    // Show account stats after login
    function showAccountStats(user) {
        const fliesEl = document.getElementById('stat-flies');
        const killsEl = document.getElementById('stat-kills');
        const deathsEl = document.getElementById('stat-deaths');

        if (fliesEl) fliesEl.textContent = user.flies || 0;
        if (killsEl) killsEl.textContent = user.kills || 0;
        if (deathsEl) deathsEl.textContent = user.deaths || 0;

        if (accountStats) accountStats.style.display = 'flex';

        // Update color picker with saved color
        if (user.color) {
            colorInput.value = user.color;
            // Update circles selection
            const targetCircle = Array.from(colorCircles).find(c => c.dataset.color === user.color);
            if (targetCircle) {
                colorCircles.forEach(c => c.classList.remove('selected'));
                targetCircle.classList.add('selected');
            }
        }
    }

    // Handle authentication (login or register)
    async function handleAuth() {
        const username = nameInput.value.trim();
        const password = passwordInput.value;
        const color = colorInput.value;

        if (!username || !password) {
            showMessage('Please enter username and password');
            return;
        }

        btnAuth.disabled = true;
        btnAuth.textContent = isLoginMode ? 'Logging in...' : 'Registering...';
        hideMessage();

        const eventName = isLoginMode ? 'login' : 'register';
        const data = isLoginMode
            ? { username, password }
            : { username, password, color };

        // Use Socket.IO callback
        network.socket.emit(eventName, data, (result) => {
            btnAuth.disabled = false;
            btnAuth.textContent = 'PLAY';

            if (result.success) {
                isAuthenticated = true;
                currentUser = result.user;
                // Expose user ID for DM system
                if (window.game) {
                    window.game.currentUserId = result.user.id;
                }
                showMessage(isLoginMode ? 'Welcome back!' : 'Account created!', false);
                showAccountStats(result.user);

                // Play login success sound
                if (world && world.audio) {
                    world.audio.play('login_success');
                }

                // Wait a moment then start game
                setTimeout(() => startGame(true), 800);
            } else {
                showMessage(result.error || 'Authentication failed');
            }
        });
    }

    // Start the game (authenticated or guest)
    function startGame(authenticated = false) {
        // Guests get random name, authenticated users use their username
        const name = authenticated ? currentUser.username : `Guest${Math.floor(Math.random() * 9999)}`;
        const color = colorInput.value;

        // Exit spectator mode - remove blur and show UI
        document.body.classList.remove('spectator-mode');

        // Hide modal
        loginModal.style.display = 'none';

        // Show mobile controls if on mobile
        if (input.isMobile) {
            input.showMobileControls();

            // Attempt to go fullscreen on first interaction
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen().catch(() => { });
            }
        }

        // Reset camera to normal game view (undo spectator zoom out)
        world.cameraDistance = 16; // Normal game distance (matches Config default)
        world.cameraPitchAngle = 0.6;

        // Join Network Game
        network.join(name, color);

        // Focus game
        document.getElementById('canvas-container').focus();
    }

    // Guest mode - play without account
    function playAsGuest() {
        isAuthenticated = false;
        currentUser = null;
        startGame(false);
    }

    // Event listeners
    btnAuth.addEventListener('click', handleAuth);
    btnGuest.addEventListener('click', playAsGuest);

    // Enter key to submit
    nameInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            if (passwordInput.value) {
                handleAuth();
            } else {
                passwordInput.focus();
            }
        }
    });

    passwordInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleAuth();
    });

    // Auto-save progress periodically for authenticated users
    setInterval(() => {
        if (isAuthenticated && world.localFrog) {
            network.socket.emit('saveProgress', {
                flies: world.localFrog.flies || 0
            });
        }
    }, 30000); // Every 30 seconds

    // Save on color change for authenticated users
    colorInput.addEventListener('change', () => {
        if (isAuthenticated) {
            network.socket.emit('updateColor', colorInput.value);
        }
    });
});

// === PLAYER TABLE ===
const playerTable = document.getElementById('player-table');
const playerList = document.getElementById('player-list');
let playerTableVisible = true;

// Toggle player table with Tab key
window.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        e.preventDefault();
        togglePlayerTable();
    }
});

// Toggle player table on tap (mobile)
if (playerTable) {
    playerTable.addEventListener('click', () => {
        if (input.isMobile) {
            togglePlayerTable();
        }
    });
}

function togglePlayerTable() {
    playerTableVisible = !playerTableVisible;
    if (playerTableVisible) {
        playerTable.classList.remove('hidden');
    } else {
        playerTable.classList.add('hidden');
    }
}

// Generate frog icon SVG with custom color
function createFrogIcon(color, isWhite = false) {
    // Convert hex color to RGB for manipulation
    const baseColor = isWhite ? '#ffffff' : (color || '#4CAF50');
    const darkColor = isWhite ? '#cccccc' : shadeColor(baseColor, -30);

    return `<svg viewBox="0 0 108.9 74.65" style="width: 16px; height: 11px;">
        <rect fill="${baseColor}" x="13.68" y="20.71" width="81.55" height="48"/>
        <rect fill="${darkColor}" y="40.84" width="24.77" height="33.81"/>
        <rect fill="#fff" x="26.71" width="24.77" height="33.81"/>
        <rect fill="#fff" x="59.35" width="24.77" height="33.81"/>
        <rect fill="${darkColor}" x="84.13" y="40.84" width="24.77" height="33.81"/>
        <rect fill="#000" x="35.29" y="13.1" width="7.61" height="7.61"/>
        <rect fill="#000" x="67.94" y="13.1" width="7.61" height="7.61"/>
    </svg>`;
}

// Helper function to darken/lighten a color
function shadeColor(color, percent) {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.max(0, Math.min(255, (num >> 16) + amt));
    const G = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + amt));
    const B = Math.max(0, Math.min(255, (num & 0x0000FF) + amt));
    return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
}

// Update header with frog icon
const tableHeader = document.querySelector('#player-table .table-header');
if (tableHeader) {
    tableHeader.innerHTML = createFrogIcon('#ffffff', true) + ' Froggies';
}

// Update player list
function updatePlayerList() {
    if (!playerList) return;

    playerList.innerHTML = '';

    // Get local player ID
    const localId = network.socket?.id;

    // Add all players
    for (const id in world.frogs) {
        const frog = world.frogs[id];
        const isLocal = id === localId;

        const li = document.createElement('li');
        li.className = 'player-item';

        // Frog icon with player color
        const iconSpan = document.createElement('span');
        iconSpan.className = 'player-icon';
        iconSpan.innerHTML = createFrogIcon(frog.color);
        li.appendChild(iconSpan);

        // Level badge
        const levelSpan = document.createElement('span');
        levelSpan.className = 'player-level';
        levelSpan.textContent = `LV${frog.level || 1}`;
        levelSpan.style.cssText = 'font-size: 9px; background: linear-gradient(135deg, #ffd700, #ff9500); color: #000; padding: 1px 4px; border-radius: 4px; margin-right: 6px; font-weight: bold;';
        li.appendChild(levelSpan);

        // Name
        const nameSpan = document.createElement('span');
        nameSpan.className = 'player-name';
        nameSpan.textContent = frog.name || `Frog ${id.substr(0, 4)}`;
        li.appendChild(nameSpan);

        // Ping indicator
        const pingSpan = document.createElement('span');
        pingSpan.className = 'player-ping';

        // Get ping from allPings (shared by server) or local ping
        const ping = isLocal ? (network.ping || 0) : (network.allPings[id] || 0);
        pingSpan.textContent = ping > 0 ? `${ping}ms` : '—';
        pingSpan.style.color = ping <= 0 ? '#888' : (ping < 70 ? '#4CAF50' : ping <= 100 ? '#FFA500' : '#F44336');

        li.appendChild(pingSpan);

        playerList.appendChild(li);
    }
}

// Update player list when players change
const originalAddRemoteFrog = world.addRemoteFrog.bind(world);
world.addRemoteFrog = function (id, data) {
    const result = originalAddRemoteFrog(id, data);
    updatePlayerList();
    return result;
};

const originalAddLocalFrog = world.addLocalFrog.bind(world);
world.addLocalFrog = function (id, color, data) {
    const result = originalAddLocalFrog(id, color, data);
    updatePlayerList();
    return result;
};

const originalRemoveFrog = world.removeFrog.bind(world);
world.removeFrog = function (id) {
    const result = originalRemoveFrog(id);
    updatePlayerList();
    return result;
};

// Update player list periodically to refresh ping values
setInterval(updatePlayerList, 2000);

// === DEATH SCREEN ===
const deathScreen = document.getElementById('death-screen');

function showDeathScreen() {
    if (deathScreen) {
        deathScreen.classList.add('active');
    }
}

function hideDeathScreen() {
    if (deathScreen) {
        deathScreen.classList.remove('active');
    }
}

// Expose to global for Frog to call
window.showDeathScreen = showDeathScreen;
window.hideDeathScreen = hideDeathScreen;

// === SETTINGS MENU ===
const settingsOverlay = document.getElementById('settings-overlay');
const settingsBtn = document.getElementById('settings-btn');
const settingsClose = document.getElementById('settings-close');
const btnRespawn = document.getElementById('btn-respawn');
const qualityOptions = document.querySelectorAll('.settings-option[data-quality]');

let settingsOpen = false;

function openSettings() {
    if (settingsOverlay) {
        settingsOpen = true;
        settingsOverlay.style.display = 'flex';
        // Force reflow for animation
        settingsOverlay.offsetHeight;
        settingsOverlay.classList.add('visible');
    }
}

function closeSettings() {
    if (settingsOverlay) {
        settingsOpen = false;
        settingsOverlay.classList.remove('visible');
        setTimeout(() => {
            if (!settingsOpen) {
                settingsOverlay.style.display = 'none';
            }
        }, 300);
    }
}

function toggleSettings() {
    if (settingsOpen) {
        closeSettings();
    } else {
        openSettings();
    }
}

// Settings button click
if (settingsBtn) {
    settingsBtn.addEventListener('click', toggleSettings);
}

// Close button click
if (settingsClose) {
    settingsClose.addEventListener('click', closeSettings);
}

// Close on overlay click (outside panel)
if (settingsOverlay) {
    settingsOverlay.addEventListener('click', (e) => {
        if (e.target === settingsOverlay) {
            closeSettings();
        }
    });
}

// ESC key to toggle settings
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Don't toggle if chat input is focused
        const chatInput = document.getElementById('chat-input');
        if (chatInput && document.activeElement === chatInput) {
            return;
        }
        toggleSettings();
    }
});

// Respawn button
if (btnRespawn) {
    btnRespawn.addEventListener('click', () => {
        if (world.localFrog && !world.localFrog.isDead) {
            // Clear lastAttackerId to prevent XP award for suicide
            world.localFrog.lastAttackerId = null;
            // Force respawn by dying (no kill credit)
            world.localFrog.takeDamage(999, null, false, false, null);
            closeSettings();
        } else if (world.localFrog && world.localFrog.isDead) {
            // Already dead, just close settings
            closeSettings();
        }
    });
}

// Logout/Leave button
const btnLogout = document.getElementById('btn-logout');
if (btnLogout) {
    btnLogout.addEventListener('click', () => {
        // Emit logout to server (saves stats for authenticated users)
        if (network.socket) {
            network.socket.emit('logout');
        }
        // Reload page to go back to login
        window.location.reload();
    });
}

// === BACKGROUND MUSIC ===
const bgMusic = new Audio('/song/bgsong1.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.2; // Default 20%

const musicBtn = document.getElementById('music-btn');
const volumeSlider = document.getElementById('volume-slider');
const volumeValue = document.getElementById('volume-value');
const volumeIcon = document.getElementById('volume-icon');

let musicMuted = false;
let musicStarted = false;

// Update volume icon based on volume/mute state
function updateVolumeIcon() {
    if (musicMuted || bgMusic.volume === 0) {
        volumeIcon.textContent = '🔇';
        musicBtn.textContent = '🔇';
        musicBtn.classList.add('muted');
    } else if (bgMusic.volume < 0.3) {
        volumeIcon.textContent = '🔈';
        musicBtn.textContent = '🎵';
        musicBtn.classList.remove('muted');
    } else if (bgMusic.volume < 0.7) {
        volumeIcon.textContent = '🔉';
        musicBtn.textContent = '🎵';
        musicBtn.classList.remove('muted');
    } else {
        volumeIcon.textContent = '🔊';
        musicBtn.textContent = '🎵';
        musicBtn.classList.remove('muted');
    }
}

// Toggle music mute
function toggleMusic() {
    if (!musicStarted) {
        // First interaction - start music
        bgMusic.play().catch(e => console.warn('Music autoplay blocked:', e));
        musicStarted = true;
        musicMuted = false;
    } else {
        musicMuted = !musicMuted;
        bgMusic.muted = musicMuted;

        // Also mute game SFX
        if (world && world.audio) {
            world.audio.toggleMute();
        }
    }
    updateVolumeIcon();
}

// Music button click
if (musicBtn) {
    musicBtn.addEventListener('click', toggleMusic);
}

// Volume slider change
if (volumeSlider) {
    volumeSlider.addEventListener('input', (e) => {
        const volume = e.target.value / 100;
        bgMusic.volume = volume;
        if (volumeValue) {
            volumeValue.textContent = `${e.target.value}%`;
        }

        // Also update game SFX volume
        if (world && world.audio) {
            world.audio.setMasterVolume(volume);
        }

        // Unmute if adjusting volume while muted
        if (musicMuted && volume > 0) {
            musicMuted = false;
            bgMusic.muted = false;
            if (world && world.audio && world.audio.isMuted) {
                world.audio.toggleMute();
            }
        }

        updateVolumeIcon();

        // Start music on first volume change if not started
        if (!musicStarted && volume > 0) {
            bgMusic.play().catch(e => console.warn('Music autoplay blocked:', e));
            musicStarted = true;
        }
    });
}

// Volume icon click to mute
if (volumeIcon) {
    volumeIcon.addEventListener('click', () => {
        toggleMusic();
    });
}

// M key to toggle music
window.addEventListener('keydown', (e) => {
    if (e.key === 'm' || e.key === 'M') {
        // Don't toggle if chat input is focused
        const chatInput = document.getElementById('chat-input');
        if (chatInput && document.activeElement === chatInput) {
            return;
        }
        toggleMusic();
    }
});

// Start music when joining game (after user interaction)
const originalJoin = network.join.bind(network);
network.join = function (name, color) {
    const result = originalJoin(name, color);

    // Start music after join (user has interacted)
    if (!musicStarted) {
        bgMusic.play().catch(e => console.warn('Music autoplay blocked:', e));
        musicStarted = true;
    }

    return result;
};

// Initialize volume display
updateVolumeIcon();

// =====================================================
// PROFILE EDITOR & FRIEND LIST UI
// =====================================================

// Profile Editor Elements
const profileEditorBtn = document.getElementById('profile-editor-btn');
const profileEditorOverlay = document.getElementById('profile-editor-overlay');
const profileEditorClose = document.getElementById('profile-editor-close');
const profileColorPicker = document.getElementById('profile-color-picker');
const profileBioInput = document.getElementById('profile-bio-input');
const btnSaveProfile = document.getElementById('btn-save-profile');

// Friend List Elements
const friendListBtn = document.getElementById('friend-list-btn');
const friendListOverlay = document.getElementById('friend-list-overlay');
const friendListClose = document.getElementById('friend-list-close');
const tabFriends = document.getElementById('tab-friends');
const tabRequests = document.getElementById('tab-requests');
const friendsContent = document.getElementById('friends-content');
const requestsContent = document.getElementById('requests-content');
const requestCount = document.getElementById('request-count');

// Open Profile Editor
if (profileEditorBtn && profileEditorOverlay) {
    profileEditorBtn.addEventListener('click', () => {
        // Check if guest
        if (window.game && !window.game.isAuthenticated) {
            if (world && world.showToast) {
                world.showToast('Register an account to edit your profile!');
            }
            return;
        }

        // Fetch fresh data from server to avoid stale state (crucial for bio/badges)
        if (network && network.socket && world.localFrog.userId) {
            network.socket.emit('getProfile', world.localFrog.userId, (data) => {
                if (data) {


                    // Update Cache
                    if (world.localFrog) {
                        world.localFrog.bio = data.bio || '';
                        world.localFrog.badges = data.badges || [];
                        world.localFrog.color = data.color || world.localFrog.color;
                    }

                    // Populate UI
                    const color = data.color || world.localFrog.color || '#4CAF50';
                    if (profileColorPicker) profileColorPicker.value = color;

                    // Update profile circles UI
                    const circles = document.querySelectorAll('#profile-color-circles .color-circle');
                    circles.forEach(c => {
                        c.classList.toggle('selected', c.dataset.color.toLowerCase() === color.toLowerCase());
                    });

                    if (profileBioInput) {
                        profileBioInput.value = data.bio || '';
                    }

                    const savedBadges = data.badges || [];
                    selectedBadges = [...savedBadges]; // Copy to global selectedBadges

                    // Update badge UI
                    document.querySelectorAll('.badge-item:not(.locked)').forEach(badge => {
                        const badgeEmoji = badge.textContent;
                        if (savedBadges.includes(badgeEmoji)) {
                            badge.classList.add('selected');
                        } else {
                            badge.classList.remove('selected');
                        }
                    });

                    profileEditorOverlay.classList.add('active');
                } else {
                    console.warn('⚠️ Failed to fetch fresh profile for editor, using cache');
                    openEditorWithCache();
                }
            });
        } else {
            openEditorWithCache();
        }

        function openEditorWithCache() {
            // Load current color from local frog
            if (world.localFrog) {
                const color = world.localFrog.color || '#4CAF50';
                if (profileColorPicker) profileColorPicker.value = color;

                // Update profile circles UI
                const circles = document.querySelectorAll('#profile-color-circles .color-circle');
                circles.forEach(c => {
                    c.classList.toggle('selected', c.dataset.color.toLowerCase() === color.toLowerCase());
                });

                // Load saved bio
                if (profileBioInput) {
                    profileBioInput.value = world.localFrog.bio || '';
                }

                // Load saved badges
                const savedBadges = world.localFrog.badges || [];
                selectedBadges = [...savedBadges]; // Copy to global selectedBadges

                // Update badge UI - mark saved badges as selected
                document.querySelectorAll('.badge-item:not(.locked)').forEach(badge => {
                    const badgeEmoji = badge.textContent;
                    if (savedBadges.includes(badgeEmoji)) {
                        badge.classList.add('selected');
                    } else {
                        badge.classList.remove('selected');
                    }
                });
            }
            profileEditorOverlay.classList.add('active');
        }
    });
}

// Close Profile Editor
if (profileEditorClose && profileEditorOverlay) {
    profileEditorClose.addEventListener('click', () => {
        profileEditorOverlay.classList.remove('active');
    });
    // Click outside to close
    profileEditorOverlay.addEventListener('click', (e) => {
        if (e.target === profileEditorOverlay) {
            profileEditorOverlay.classList.remove('active');
        }
    });
}

// Save Profile
if (btnSaveProfile) {
    btnSaveProfile.addEventListener('click', () => {
        const newColor = profileColorPicker?.value || '#4CAF50';
        const newBio = profileBioInput.value.trim();

        // Update local frog color and bio
        if (world.localFrog) {
            world.localFrog.color = newColor;
            world.localFrog.bio = newBio;
            world.localFrog.badges = selectedBadges;
        }

        // Send to server (if authenticated)
        if (network && network.socket) {
            network.socket.emit('updateProfile', {
                color: newColor,
                bio: newBio,
                badges: selectedBadges
            });
        }

        // Show toast
        if (world && world.showToast) {
            world.showToast('Profile saved!');
        }

        // Close panel
        if (profileEditorOverlay) {
            profileEditorOverlay.classList.remove('active');
        }
    });
}

// Profile Tab Switching
document.querySelectorAll('.profile-sidebar .profile-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active from all tabs and contents
        document.querySelectorAll('.profile-sidebar .profile-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.profile-tab-content').forEach(c => c.classList.remove('active'));

        // Add active to clicked tab
        tab.classList.add('active');

        // Show corresponding content
        const tabName = tab.dataset.tab;
        const content = document.getElementById(`tab-content-${tabName}`);
        if (content) content.classList.add('active');
    });
});

// Badge Selection - Up to 4 badges
const MAX_BADGES = 4;
let selectedBadges = [];

document.querySelectorAll('.badge-item:not(.locked)').forEach(badge => {
    badge.addEventListener('click', () => {
        const badgeEmoji = badge.textContent;
        const isSelected = badge.classList.contains('selected');

        if (isSelected) {
            // Remove from selection
            badge.classList.remove('selected');
            selectedBadges = selectedBadges.filter(b => b !== badgeEmoji);
        } else {
            // Add to selection if under limit
            if (selectedBadges.length < MAX_BADGES) {
                badge.classList.add('selected');
                selectedBadges.push(badgeEmoji);
            } else {
                if (world && world.showToast) {
                    world.showToast(`Maximum ${MAX_BADGES} badges allowed!`);
                }
            }
        }
    });
});

// Profile Color Selection (In-game)
const profileColorCircles = document.querySelectorAll('#profile-color-circles .color-circle');
profileColorCircles.forEach(circle => {
    circle.addEventListener('click', () => {
        const color = circle.dataset.color;

        // Update selection UI
        profileColorCircles.forEach(c => c.classList.remove('selected'));
        circle.classList.add('selected');

        // Update hidden picker for save logic
        const profileColorPicker = document.getElementById('profile-color-picker');
        if (profileColorPicker) profileColorPicker.value = color;

        // Live preview
        if (world.localFrog && world.localFrog.setColor) {
            world.localFrog.setColor(color);
        }
    });
});

// Outfit Save Button
const btnSaveOutfit = document.getElementById('btn-save-outfit');
if (btnSaveOutfit) {
    btnSaveOutfit.addEventListener('click', () => {
        const newColor = profileColorPicker?.value || '#4CAF50';

        // Update local frog
        if (world.localFrog) {
            world.localFrog.color = newColor;
        }

        // Send to server
        if (network && network.socket) {
            network.socket.emit('updateProfile', { color: newColor });
        }

        if (world && world.showToast) {
            world.showToast('Outfit saved!');
        }
    });
}

// Open Friend List
if (friendListBtn && friendListOverlay) {
    friendListBtn.addEventListener('click', () => {
        // Check if guest
        if (window.game && !window.game.isAuthenticated) {
            if (world && world.showToast) {
                world.showToast('Register an account to use friend features!');
            }
            return;
        }

        friendListOverlay.classList.add('active');
        // Request fresh friend data
        if (network && network.socket) {
            network.socket.emit('getFriends');
            network.socket.emit('getFriendRequests');
        }
    });
}

// Close Friend List
if (friendListClose && friendListOverlay) {
    friendListClose.addEventListener('click', () => {
        friendListOverlay.classList.remove('active');
    });
    // Click outside to close
    friendListOverlay.addEventListener('click', (e) => {
        if (e.target === friendListOverlay) {
            friendListOverlay.classList.remove('active');
        }
    });
}

// Friend tabs switching
if (tabFriends && tabRequests && friendsContent && requestsContent) {
    tabFriends.addEventListener('click', () => {
        tabFriends.classList.add('active');
        tabRequests.classList.remove('active');
        friendsContent.style.display = 'flex';
        requestsContent.style.display = 'none';
    });

    tabRequests.addEventListener('click', () => {
        tabRequests.classList.add('active');
        tabFriends.classList.remove('active');
        requestsContent.style.display = 'flex';
        friendsContent.style.display = 'none';
    });
}

// Listen for friend list updates from server
if (network && network.socket) {
    network.socket.on('friendList', (friends) => {
        if (!friendsContent) return;

        if (friends.length === 0) {
            friendsContent.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">🐸</div>
                    <div>No friends yet. Click on players to add them!</div>
                </div>
            `;
            return;
        }

        friendsContent.innerHTML = friends.map(f => `
            <div class="friend-item" data-friend-id="${f.id}" data-friend-name="${f.username}" data-friend-color="${f.color || '#4CAF50'}" style="cursor: pointer;">
                <div class="friend-avatar" style="background: ${f.color || '#4CAF50'}">🐸</div>
                <div class="friend-info">
                    <div class="friend-name">${f.username}</div>
                    <div class="friend-status ${f.online ? 'online' : ''}">${f.online ? 'Online' : 'Offline'}</div>
                </div>
                <div class="friend-actions">
                    <button class="friend-action-btn accept dm-btn" data-id="${f.id}" data-name="${f.username}" title="Message">💬</button>
                    <button class="friend-action-btn decline remove-btn" data-id="${f.id}" data-name="${f.username}" title="Remove Friend">✕</button>
                </div>
            </div>
        `).join('');

        // Add click handlers for DM button
        friendsContent.querySelectorAll('.dm-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                // Close friend list
                if (friendListOverlay) friendListOverlay.classList.remove('active');
                window.openDMChat(btn.dataset.id, btn.dataset.name);
            });
        });

        // Add click handlers for Remove button
        friendsContent.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const friendName = btn.dataset.name;
                if (confirm(`Remove ${friendName} from friends?`)) {
                    network.socket.emit('removeFriend', btn.dataset.id);
                    network.socket.emit('getFriendList'); // Refresh
                }
            });
        });

        // Friend item click opens profile popup
        friendsContent.querySelectorAll('.friend-item').forEach(item => {
            item.addEventListener('click', () => {
                // Close friend list
                if (friendListOverlay) friendListOverlay.classList.remove('active');

                // Request full profile data from server
                const friendId = item.dataset.friendId;
                network.socket.emit('getProfile', friendId, (profileData) => {
                    if (profileData && world && world.openProfile) {
                        world.openProfile({
                            id: item.dataset.friendId, // fallback
                            userId: friendId,
                            name: profileData.username || item.dataset.friendName,
                            color: profileData.color || item.dataset.friendColor,
                            level: profileData.level || 1,
                            bio: profileData.bio || '',
                            badges: profileData.badges || [],
                            isFriend: true
                        });
                    }
                });
            });
        });
    });

    network.socket.on('friendRequests', (requests) => {
        // Update notification dot on friend button FIRST (always)
        const notificationDot = document.getElementById('friend-notification-dot');
        if (notificationDot) {
            notificationDot.style.display = requests.length > 0 ? 'block' : 'none';
        }

        // Update request count badge
        if (requestCount) {
            requestCount.textContent = requests.length > 0 ? `(${requests.length})` : '';
        }

        if (!requestsContent) return;

        if (requests.length === 0) {
            requestsContent.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">📭</div>
                    <div>No pending friend requests</div>
                </div>
            `;
            return;
        }

        requestsContent.innerHTML = requests.map(r => `
            <div class="friend-item">
                <div class="friend-avatar" style="background: ${r.color || '#4CAF50'}">🐸</div>
                <div class="friend-info">
                    <div class="friend-name">${r.username}</div>
                    <div class="friend-status">Wants to be friends</div>
                </div>
                <div class="friend-actions">
                    <button class="friend-action-btn accept" data-id="${r.id}" title="Accept">✓</button>
                    <button class="friend-action-btn decline" data-id="${r.id}" title="Decline">✕</button>
                </div>
            </div>
        `).join('');

        // Add event listeners for accept/decline buttons
        requestsContent.querySelectorAll('.accept').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                network.socket.emit('acceptFriendRequest', btn.dataset.id);
            });
        });

        requestsContent.querySelectorAll('.decline').forEach(btn => {
            btn.addEventListener('click', () => {
                network.socket.emit('declineFriend', btn.dataset.id);
            });
        });
    });

    // Friend request accepted notification
    network.socket.on('friendRequestAccepted', (data) => {
        if (world && world.showToast) {
            world.showToast(`You and ${data.by?.username || 'someone'} are friends now! 🎉`);
        }
        // Refresh friend list
        network.socket.emit('getFriendList');
    });

    // === UNREAD DMs TRACKING ===
    let totalUnreadDMs = 0;

    network.socket.on('unreadDMs', (data) => {
        totalUnreadDMs = data.total || 0;
        updateNotificationDot();
    });

    network.socket.on('dmReceived', (message) => {
        // If DM panel is open for this friend, add message
        const dmPanel = document.getElementById('dm-chat-panel');
        const currentFriendId = dmPanel.dataset.friendId;

        if (dmPanel.classList.contains('active') && currentFriendId == message.sender_id) {
            appendDMMessage(message, false);
            network.socket.emit('markDMRead', message.sender_id);
        } else {
            // Auto-open DM panel from the sender
            window.openDMChat(message.sender_id, message.sender_name);
            // Increment unread count
            totalUnreadDMs++;
            updateNotificationDot();
        }
    });

    // === XP/LEVEL SYSTEM ===
    network.socket.on('xpGained', (data) => {
        // Show XP toast
        const toast = document.createElement('div');
        toast.className = 'xp-toast';
        toast.textContent = `+${data.amount} XP`;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2000);

        // Update local frog level
        if (world.localFrog) {
            world.localFrog.level = data.level;
        }

        // Update HUD level display
        updateLevelDisplay(data.level, data.xp, data.xpToNext);

        // Update Stats tab (we just got XP from a kill)
        const statLevel = document.getElementById('stat-level');
        const statXp = document.getElementById('stat-xp');
        const statKills = document.getElementById('stat-kills');
        const statKd = document.getElementById('stat-kd');

        if (statLevel) statLevel.textContent = data.level;
        if (statXp) statXp.textContent = data.xp;
        if (statKills) {
            const kills = parseInt(statKills.textContent || '0') + 1;
            statKills.textContent = kills;

            // Update K/D ratio
            const deathEl = document.getElementById('stat-deaths');
            const deaths = parseInt(deathEl?.textContent || '0');
            if (statKd) {
                statKd.textContent = deaths > 0 ? (kills / deaths).toFixed(2) : kills.toFixed(2);
            }
        }

        // Refresh player list to show updated level badge
        updatePlayerList();
    });

    // Handle local player death to update stats tab immediately
    network.socket.on('playerDied', (data) => {
        const id = typeof data === 'object' ? data.id : data;

        // If it was US who died, update the deaths stat
        if (id === network.socket.id) {
            const statDeaths = document.getElementById('stat-deaths');
            const statKills = document.getElementById('stat-kills');
            const statKd = document.getElementById('stat-kd');

            if (statDeaths) {
                const deaths = parseInt(statDeaths.textContent || '0') + 1;
                statDeaths.textContent = deaths;

                if (statKills && statKd) {
                    const kills = parseInt(statKills.textContent || '0');
                    statKd.textContent = deaths > 0 ? (kills / deaths).toFixed(2) : kills.toFixed(2);
                }
            }
        }
    });

    function updateLevelDisplay(level, xp, xpToNext) {
        const levelBadge = document.getElementById('level-badge');
        const xpFill = document.getElementById('xp-fill');
        if (levelBadge) levelBadge.textContent = `Lv.${level}`;
        if (xpFill) xpFill.style.width = `${(xp / xpToNext) * 100}%`;
    }
}

// Helper function to update notification dot
function updateNotificationDot() {
    const dot = document.getElementById('friend-notification-dot');
    const requestCount = document.getElementById('request-count');
    const requestCountNum = requestCount ? parseInt(requestCount.textContent.replace(/[()]/g, '') || '0') : 0;

    if (dot) {
        dot.style.display = (requestCountNum > 0 || window.totalUnreadDMs > 0) ? 'block' : 'none';
    }
}

// Expose for global access
window.totalUnreadDMs = 0;

// === DM CHAT PANEL ===
const dmPanel = document.getElementById('dm-chat-panel');
const dmClose = document.getElementById('dm-close');
const dmInput = document.getElementById('dm-input');
const dmSend = document.getElementById('dm-send');
const dmMessages = document.getElementById('dm-messages');
const dmFriendName = document.getElementById('dm-friend-name');

// Open DM chat for a friend
window.openDMChat = function (friendId, friendName) {
    if (!dmPanel) return;

    dmPanel.dataset.friendId = friendId;
    if (dmFriendName) dmFriendName.textContent = friendName;
    dmPanel.classList.add('active');
    if (dmMessages) dmMessages.innerHTML = '<div class="empty-state">Loading messages...</div>';

    // Request message history
    if (network && network.socket) {
        network.socket.emit('getMessages', friendId);
    }
};

// Close DM panel
if (dmClose && dmPanel) {
    dmClose.addEventListener('click', () => {
        dmPanel.classList.remove('active');
    });
}

// Send DM
function sendDM() {
    const content = dmInput?.value.trim();
    const friendId = dmPanel?.dataset.friendId;

    if (!content || !friendId) return;

    if (network && network.socket) {
        network.socket.emit('sendDM', { friendId: parseInt(friendId), content });
    }
    if (dmInput) dmInput.value = '';
}

if (dmSend) dmSend.addEventListener('click', sendDM);
if (dmInput) dmInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendDM();
});

// Append message to DM panel
function appendDMMessage(message, isSent) {
    if (!dmMessages) return;

    // Clear empty state if present
    const emptyState = dmMessages.querySelector('.empty-state');
    if (emptyState) emptyState.remove();

    const msgEl = document.createElement('div');
    msgEl.className = `dm-message ${isSent ? 'sent' : 'received'}`;
    msgEl.textContent = message.content;
    dmMessages.appendChild(msgEl);
    dmMessages.scrollTop = dmMessages.scrollHeight;
}

// Listen for sent confirmation
if (network && network.socket) {
    network.socket.on('dmSent', (message) => {
        appendDMMessage(message, true);
    });

    network.socket.on('messageHistory', (messages) => {
        if (!dmMessages) return;
        dmMessages.innerHTML = '';

        if (messages.length === 0) {
            dmMessages.innerHTML = '<div class="empty-state">No messages yet. Say hi!</div>';
            return;
        }

        const myUserId = window.game?.currentUserId;
        messages.forEach(msg => {
            appendDMMessage(msg, msg.sender_id === myUserId);
        });
    });

    // Request unread DMs on load
    network.socket.emit('getUnreadDMs');
}

// === EMOTE WHEEL ===
const emoteBtn = document.getElementById('emote-btn');
const emoteWheel = document.getElementById('emote-wheel');

if (emoteBtn && emoteWheel) {
    emoteBtn.addEventListener('click', () => {
        emoteWheel.classList.toggle('active');
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
        if (!emoteWheel.contains(e.target) && e.target !== emoteBtn) {
            emoteWheel.classList.remove('active');
        }
    });

    // Emote selection
    emoteWheel.querySelectorAll('.emote-option').forEach(opt => {
        opt.addEventListener('click', () => {
            const emote = opt.dataset.emote;
            const emoji = opt.textContent;

            // Send emote as chat message
            if (network && network.socket) {
                network.socket.emit('chatMessage', emoji);
            }

            emoteWheel.classList.remove('active');
        });
    });
}

// T key to toggle emote wheel
window.addEventListener('keydown', (e) => {
    const isTyping = document.activeElement &&
        (document.activeElement.tagName === 'INPUT' ||
            document.activeElement.tagName === 'TEXTAREA');
    if (isTyping) return;

    if (e.key === 't' || e.key === 'T') {
        if (emoteWheel) emoteWheel.classList.toggle('active');
    }

    // M key to toggle Mute
    if (e.key === 'm' || e.key === 'M') {
        toggleMusic();
    }
});

