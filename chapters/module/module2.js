const module = (function() {
    let mod = {};
    let secretVar = 'A Secret';
    function privateFunction() {
        console.log('This is a private function');
    };

    mod.getSecret = () => {
        return secretVar;
    };
    mod.publicFunction = () => {
        console.log('This is a public fn');
    };
    mod.publicFunction2 = () => {
        console.log('Public Function 2');
        privateFunction();
    };
    mod.fn3 = () => {
        console.log('FN3');
        mod.publicFunction2();
    }
    return mod;
})();
console.groupCollapsed('Module operations');
console.log('The module', module);
console.log('Trying to access secretVar property:', module.secretVar);
console.log('Properly accesing secretVar:', module.getSecret());
console.log('Trying to override secretVar:', module.secretVar = 'Override');
console.log('Accesing secretVar:', module.getSecret());
console.log('Accessing public method:');
module.publicFunction();
module.publicFunction2();
module.fn3();
// console.log('Trying to access private method:', module.privateFunction());
console.groupEnd();