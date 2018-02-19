const module = (function() {
    let secretVar = 'A Secret';
    
    function functionOne() {
        return 'One';
    }

    function functionTwo() {
        return 'Two';
    }

    function getSecret() {
        return secretVar;
    }

    return {
        one: functionOne,
        two: functionTwo,
        secret: getSecret
    };
})();
console.groupCollapsed('Module Operations');
console.log('Function One:', module.one());
console.log('Function Two:', module.two());
console.log('Get Secret:', module.secret());
console.groupEnd();