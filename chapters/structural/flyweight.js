//Flyweight
class Flyweight {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    getInfo() {
        return `My maker is ${this.make} and my model is ${this.model}`;
    }
}
const FlyweightFactory = (() => {
    const flyweights = {};
    const get = (make, model) => {
        if (!flyweights[make + model]) {
            flyweights[make + model] = 
                new Flyweight(make, model);
        }
        return flyweights[make + model];
    };
    const count = () => {
        return Object.keys(flyweights).length;
    };
    return {
        getFlyweight: get,
        getCount: count
    };
})();

class MemoryEnhancement {
    constructor(make, model, capacity, tag, serial) {
        this.flyweight = FlyweightFactory.getFlyweight(make, model);
        this.capacity = capacity;
        this.tag = tag;
        this.serial = serial;
    }

    get model() {
        return this.flyweight.model;
    }
    get make() {
        return this.flyweight.make;
    }
    get info() {
        return this.flyweight.getInfo();
    }
    set model(value) {
        throw new Error('Cannot override model property', value);
    }
    set make(value) {
        throw new Error('Cannot override make property', value);
    }
}
const MemoryShowcase = (() => {
    let count = 0;
    const availableEnhancements = {};
    const add = (make, model, capacity, tag, serial) => {
        availableEnhancements[serial] = new MemoryEnhancement(make, model, capacity, tag, serial);
        count += 1;
        console.log('Received a new enhancement for the store:', availableEnhancements[serial]);
    };
    const get = (serial) => {
        return availableEnhancements[serial];
    };
    const getCount = () => {
        return count;
    }
    return {
        addEnhancement: add,
        getEnhancement: get,
        getCount
    };
})();

console.groupCollapsed('A Memory Enhancements Virtual Store:');
MemoryShowcase.addEnhancement('Mitsubishi', 'WiseX1', 4096, 'The Wise Sage', 'sr01');
MemoryShowcase.addEnhancement('Mitsubishi', 'WiseX1', 2048, 'The Wise Guy', 'sr02');
MemoryShowcase.addEnhancement('Nikon', 'SG01', 8192, 'The Sage', 'sr03');
MemoryShowcase.addEnhancement('Nikon', 'SG01', 4096, 'Alexandria', 'sr04');
MemoryShowcase.addEnhancement('Nikon', 'SG01', 2048, 'Alexandria', 'sr05');
MemoryShowcase.addEnhancement('Nikon', 'SG01', 1024, 'Alexandria', 'sr06');
console.log('Available Units in the Store:', MemoryShowcase.getCount());
console.log('Number of Flyweights:', FlyweightFactory.getCount());
console.groupEnd();