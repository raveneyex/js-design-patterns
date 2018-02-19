class Cyborg{
    constructor(serial, owner) {
        this.serial = serial;
        this.owner = owner;
        this.memory = 1024;
        this.weapons = [];
    }

    uploadConciousness(conciousness) {
        Object.defineProperty(this, 'conciousness', {
            enumerable: false,
            writable: false,
            value: conciousness
        });
    }
}

function EnhanceMemory(cyborg, enhancement) {
    cyborg.memory = cyborg.memory + enhancement;
    return cyborg;
}

function Chainsaw(cyborg) {
    cyborg.weapons = [...cyborg.weapons, 'Chainsaw'];
    cyborg.slash = () => {
        console.log('Maldito comunista ateo satanico castrochavista!!!');
    };
    return cyborg;
}

function SonicRifle(cyborg) {
    cyborg.weapons = [...cyborg.weapons, 'Sonic Rifle'];
    cyborg.shoot = () => {
        console.log('Pew Pew! (No se olviden de vestirlo de guerrillero!)');
    }
    return cyborg;
}

function MultiConciousness(cyborg, consciences) {
    cyborg.consciences = [
        cyborg.conciousness,
        ...consciences
    ];
    return cyborg;
}

let johnny = new Cyborg('12345', 'NASA');
console.groupCollapsed('Enhancing a basic Cyborg');
console.log('The Cyborg:', johnny);
johnny.uploadConciousness('RVN-666');
console.log('Uploading a conciousness:', johnny.conciousness);
console.groupCollapsed('Decorating Johnny w/ Weapons...');
console.log('MotoSierra:', Chainsaw(johnny));
console.log('Sonic Rifle:', SonicRifle(johnny));
console.groupEnd();
console.log('Enhancing Memory', EnhanceMemory(johnny, 2048));
console.log('Multiconciousness:', MultiConciousness(johnny, ['Uribeitor']));
johnny.shoot();
johnny.slash();
console.groupEnd();