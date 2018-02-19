const SingletonHiveMind = (function() {
    let instance;
    
    function createInstance() {
        class HiveMind {
            constructor() {
                this.serial = '666';
            }
        }
        let mind = new HiveMind();
        return mind;
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

let instance = SingletonHiveMind.getInstance();
let instance1 = SingletonHiveMind.getInstance();
let instance2 = SingletonHiveMind.getInstance();
console.groupCollapsed('A Hive Mind');
console.log('The Singleton factory:', SingletonHiveMind);
console.log('The instance:', instance);
console.log('As instance1:', instance1);
console.log('As instance2:', instance2);
console.log('instance === instance1:',instance === instance1);
console.log('instance1 === instance2:', instance1 === instance2);
console.log('instance2 === instance:', instance2 === instance);
console.groupEnd();