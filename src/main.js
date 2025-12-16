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

// GUI Setup
const gui = new GUI({ title: '🐸 Dev Config' });
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
        if (!input.tongueHeld && world.localFrog.tongueState === 'grappling') {
            world.localFrog.releaseTongue();
        }

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

// --- LOGIN LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
    const loginModal = document.getElementById('login-modal');
    const btnJoin = document.getElementById('btn-join');
    const nameInput = document.getElementById('player-name');
    const colorInput = document.getElementById('player-color');

    if (!btnJoin || !loginModal) {
        console.warn("Login elements not found!");
        return;
    }

    // Handle Join
    function joinGame() {
        const name = nameInput.value.trim() || 'Guest Frog';
        const color = colorInput.value;

        // Hide modal
        loginModal.style.display = 'none';

        // Show mobile controls if on mobile
        if (input.isMobile) {
            input.showMobileControls();
        }

        // Join Network Game
        network.join(name, color);

        // Start Input (optional, maybe focus canvas)
        document.getElementById('canvas-container').focus();
    }

    btnJoin.addEventListener('click', joinGame);
    nameInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') joinGame();
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
            // Force respawn by dying
            world.localFrog.takeDamage(999, null, false, false);
            closeSettings();
        } else if (world.localFrog && world.localFrog.isDead) {
            // Already dead, just close settings
            closeSettings();
        }
    });
}
