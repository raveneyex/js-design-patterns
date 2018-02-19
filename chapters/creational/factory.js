class Drone {
    constructor(options) {
        Object.assign(this, options);
    }
}

class AquaticDrone extends Drone {}
class FlyingDrone extends Drone  {}
class JungleDrone extends Drone  {}
     
class DroneFactory {
    constructor(classType = '') {
        switch(classType) {
            case 'aquatic':
                this.droneClass = AquaticDrone;
                break;
            case 'jungle':
                this.droneClass = JungleDrone;
                break;
            case 'flying':
                this.droneClass = FlyingDrone;
                break;
            default:
                this.droneClass = FlyingDrone;
                break;
        }
    }

    createInstance(options) {
        let instance;
        switch(options.type) {
            case 'aquatic':
                instance = new AquaticDrone(options);
                break;
            case 'jungle':
                instance = new JungleDrone(options);
                break;
            case 'flying':
                instance = new FlyingDrone(options);
                break;
            default:
                instance = new this.droneClass(options);
                break;
        }
        return instance;
    }
}
const genericFactory = new DroneFactory();
const aquaticFactory = new DroneFactory('aquatic');
const jungleFactory = new DroneFactory('jungle');
const flyingFactory = new DroneFactory('flying');
let predator = genericFactory.createInstance({
    owner: 'Royal Airforce', 
    color: 'Blood Red'
});
let submarine = genericFactory.createInstance({
    type: 'aquatic',
    owner: 'Navy SEALS',
    color: 'Deep Blue'
});
let jungle = genericFactory.createInstance({
    type: 'jungle',
    owner: 'Marines',
    tag: 'The Wild Dog'
});
console.groupCollapsed('A Drone Factory');
console.log('The Factory:', genericFactory);
console.log('The production');
console.log('A Predator', predator);
console.log('A Submarine', submarine);
console.log('The Wild Dog:', jungle);
console.groupCollapsed('Production data');
console.log('submarine instanceof AquaticDrone:',submarine instanceof AquaticDrone);
console.log('submarine instanceof Drone:', submarine instanceof Drone);
console.log('jungle instanceof JungleDrone:', jungle instanceof JungleDrone);
console.log('jungle instanceof Drone:', jungle instanceof Drone);
console.log('predator instanceof FlyingDrone:', predator instanceof FlyingDrone);
console.log('predator instanceof Drone:', predator instanceof Drone);
console.groupEnd();
console.groupEnd();