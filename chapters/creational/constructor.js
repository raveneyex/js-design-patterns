class Cyborg{
    constructor(name, age, extra) {
        this.name = name;
        this.age = age;
        if (extra && extra instanceof Object) {
            Object.assign(this, extra);
        }
    }
    
    sayHi() {
        console.log(`Hi, my name is ${this.name}`);
    }

    sayAge() {
        console.log(`Hi, my age is ${this.age}`);
    }
}
console.info('Class Cyborg has been defined for you');
console.groupCollapsed('Cyborg class data');
console.log("Cyborg's prototype:", Cyborg.prototype);
console.log("Cyborg instanceof Function", Cyborg instanceof Function);
console.groupEnd();
console.groupCollapsed('A Cyborg Instance: Molly');
let molly = new Cyborg('Molly Millions', undefined, {weapon: 'blades'});
console.log('Molly:', molly);
console.log('molly instanceof Cyborg:', molly instanceof Cyborg);
console.log('Cyborg.prototype === Object.getPrototypeOf(molly):', Cyborg.prototype === Object.getPrototypeOf(molly));
console.groupEnd();
console.info('Create some instances and inspect them...');