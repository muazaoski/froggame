import * as THREE from 'three';

export class AudioManager {
    constructor(camera) {
        this.camera = camera;
        this.listener = new THREE.AudioListener();
        this.camera.add(this.listener);

        this.sounds = {};
        this.masterVolume = 0.5;
        this.isMuted = false;

        // Sound manifest
        this.manifest = {
            // Frog
            'hop': '/soundfx/Small Hop.aiff',
            'grunt1': '/soundfx/froggrunt-01.mp3',
            'grunt2': '/soundfx/froggrunt-02.mp3',
            'land': '/soundfx/landground.mp3',
            'splash': '/soundfx/watersplash.wav',

            // Tongue
            'tongue_shoot': '/soundfx/whiplashtongue.wav',
            'tongue_hit_surface': '/soundfx/tongueimpactsurface.mp3',
            'tongue_hit_player1': '/soundfx/tonguehitplayer1.mp3',
            'tongue_hit_player2': '/soundfx/tonguehitplayer2.mp3',
            'tongue_miss': '/soundfx/tonguemiss.mp3',

            // Combat
            'punch': '/soundfx/punchbase.mp3',
            'punch_crit': '/soundfx/punchcritical.wav',
            'death': '/soundfx/deathjingle.mp3',
            'respawn': '/soundfx/respawn.wav',

            // Items
            'ball_kick1': '/soundfx/ballkick-01.mp3',
            'ball_kick2': '/soundfx/ballkick-02.mp3',
            'ball_drop': '/soundfx/balldrop.mp3',
            'ball_swoosh': '/soundfx/ballswoosh.mp3',
            'scooter_mount': '/soundfx/mountscooter.wav',
            'scooter_engine': '/soundfx/scooterengine.mp3',

            // UI
            'ui_click': '/soundfx/clickbutton-ui.aiff',
            'ui_error': '/soundfx/error_toast.wav',
            'ui_success': '/soundfx/toast_success.flac',
            'login_success': '/soundfx/login_success.wav',
            'levelup': '/soundfx/levelup.mp3',
            'message': '/soundfx/message_received.wav',
            'friend_req': '/soundfx/new_friend_req.wav',

            // Ambiance
            'ambiance': '/soundfx/ambienceforest.wav'
        };

        this.loader = new THREE.AudioLoader();
        this.loadAll();
    }

    async loadAll() {
        const promises = Object.entries(this.manifest).map(([name, url]) => {
            return new Promise((resolve) => {
                this.loader.load(url, (buffer) => {
                    this.sounds[name] = buffer;
                    resolve();
                }, undefined, (err) => {
                    console.warn(`Failed to load sound: ${name} from ${url}`, err);
                    resolve(); // Continue anyway
                });
            });
        });
        await Promise.all(promises);
    }

    play(name, options = {}) {
        if (this.isMuted || !this.sounds[name]) return null;

        const sound = new THREE.Audio(this.listener);
        sound.setBuffer(this.sounds[name]);

        const volume = (options.volume !== undefined ? options.volume : 1.0) * this.masterVolume;
        sound.setVolume(volume);

        if (options.loop) sound.setLoop(true);

        // Pitch randomization
        if (options.randomizePitch !== false) {
            const pitch = 0.9 + Math.random() * 0.2; // 0.9 to 1.1
            sound.playbackRate = pitch;
        }

        sound.play();
        return sound;
    }

    playSpatial(name, position, options = {}) {
        if (this.isMuted || !this.sounds[name]) return null;

        const sound = new THREE.PositionalAudio(this.listener);
        sound.setBuffer(this.sounds[name]);

        const volume = (options.volume !== undefined ? options.volume : 1.0) * this.masterVolume;
        sound.setVolume(volume);

        const refDistance = options.refDistance || 10;
        sound.setRefDistance(refDistance);

        if (options.loop) sound.setLoop(true);

        if (options.randomizePitch !== false) {
            const pitch = 0.9 + Math.random() * 0.2;
            sound.playbackRate = pitch;
        }

        // Create a temporary object to hold the sound at the position
        const tempObj = new THREE.Object3D();
        tempObj.position.copy(position);
        this.camera.parent.add(tempObj); // Add to scene (camera.parent is usually scene)

        tempObj.add(sound);
        sound.play();

        sound.onEnded = () => {
            tempObj.remove(sound);
            if (tempObj.parent) tempObj.parent.remove(tempObj);
        };

        return sound;
    }

    setMasterVolume(v) {
        this.masterVolume = THREE.MathUtils.clamp(v, 0, 1);
        this.listener.setMasterVolume(this.isMuted ? 0 : this.masterVolume);
    }

    toggleMute() {
        this.isMuted = !this.isMuted;
        this.listener.setMasterVolume(this.isMuted ? 0 : this.masterVolume);
        return this.isMuted;
    }
}
