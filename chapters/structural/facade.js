class SonicRifle {
    constructor() {
        this.charged = false;
    }
    charge() {
        console.log('Charging Blast...');
        this.charged = true;
    }
    shoot() {
        if(!this.charged) {
            this.charge();
        }
        console.log('Sonic Blast!!');
        this.charged = false;
    }
}
class Revolver {
    constructor() {
        this.loads = 6;
    }
    load() {
        this.loads = 6;
    }
    shoot() {
        if (this.loads > 0) {
            this.loads -= 1;
            console.log('Pew Pew!');
        } else {
            console.log('Out of Ammo');
        }
    }
}

class Cyborg {
    constructor(name) {
        this.name = name;
        this.rifle = new SonicRifle();
        this.revolver = new Revolver();
    }
    sonicBlast() {
        this.rifle.shoot();
    }
    shoot() {
        this.revolver.shoot();
    }
}

console.groupCollapsed('A Cyborg shooting...');
const johnny = new Cyborg('Johnny');
johnny.sonicBlast();
johnny.shoot();
johnny.shoot();
johnny.shoot();
johnny.shoot();
johnny.shoot();
johnny.shoot();
johnny.shoot();
console.groupEnd();