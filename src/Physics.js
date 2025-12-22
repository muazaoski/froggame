import * as CANNON from 'cannon-es';
import { Config } from './Config.js';

export class Physics {
    constructor() {
        this.world = new CANNON.World();
        this.world.gravity.set(0, Config.gravity, 0);
        this.world.broadphase = new CANNON.NaiveBroadphase();
        this.world.solver.iterations = 30; // Increased for better stability with fast movement

        // Materials
        this.groundMaterial = new CANNON.Material('ground');
        this.frogMaterial = new CANNON.Material('frog');

        this.updateMaterials();

        // No hardcoded ground plane here anymore. 
        // We rely on createPhysicsForMesh in World.js to generate terrain physics from the GLB.
    }

    updateMaterials() {
        // Remove old contact material if exists? 
        // Cannon doesn't make it easy to remove, better to just reuse and update properties.
        // But we need the reference.

        let contact = this.world.contactmaterials.find(
            c => c.materials.includes(this.groundMaterial) && c.materials.includes(this.frogMaterial)
        );

        if (!contact) {
            contact = new CANNON.ContactMaterial(
                this.groundMaterial,
                this.frogMaterial,
                {
                    friction: Config.friction,
                    restitution: Config.restitution,
                    contactEquationStiffness: 1e7, // Harder contact to prevent sinking
                    contactEquationRelaxation: 3
                }
            );
            this.world.addContactMaterial(contact);
        } else {
            contact.friction = Config.friction;
            contact.restitution = Config.restitution;
        }

        // Frog-to-frog collision (for player collision)
        let frogContact = this.world.contactmaterials.find(
            c => c.materials[0] === this.frogMaterial && c.materials[1] === this.frogMaterial
        );
        if (!frogContact) {
            frogContact = new CANNON.ContactMaterial(
                this.frogMaterial,
                this.frogMaterial,
                { friction: 0.1, restitution: 0.5 }
            );
            this.world.addContactMaterial(frogContact);
        }
    }

    step(dt) {
        // Apply dynamic gravity change
        this.world.gravity.set(0, Config.gravity, 0);
        // Note: updateMaterials() removed from per-frame call for performance
        // Materials are set once in constructor

        // Reduced substeps for better performance (3 is enough for most cases)
        this.world.step(1 / 60, dt, 3);
    }
}
