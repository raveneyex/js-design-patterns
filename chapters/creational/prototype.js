const shallowBody = {
    name: undefined,
    age: undefined,
    conciousness: null,
    receiveConciousness: function(consciense) {
        this.conciousness = consciense;
    },
    speak: function() {
        console.log('Testing speech module...');
    }
};
const Prototyper = ((proto) => {
    return {
        clone: () => {
            return Object.create(proto);
        }
    }
})(shallowBody);

const clone = Object.create(shallowBody);
console.info('A function Prototyper has been defined for you.');
console.info('Capable of creating clones of a given Object');
console.groupCollapsed('An example');
console.log('The prototype:', shallowBody);
console.log('The speach of the shallowBody:');
shallowBody.speak()
console.log('A clone:', clone);
console.log('The speach of the clone:');
clone.speak()
console.log('Object.getPrototypeOf(clone) === shallowBody:', Object.getPrototypeOf(clone) === shallowBody);
console.info('What does this mean?');
console.info('It means that changing shallowBody will in turn change the clones.');
const extraClone = Prototyper.clone();
console.log('Another clone:', extraClone);
console.groupEnd();