(function() {
    /* use strict; */
    function Cyborg(name, age){
        this.name = name;
        this.age = age;
    }
    
    Cyborg.prototype.sayHi = function () {
        console.log(`Hi, my name is ${this.name}`);
    };
        
    Cyborg.prototype.sayAge = function() {
        console.log(`Hi, my age is ${this.age}`);
    };

    let molly = new Cyborg('Molly', 23);
    
    console.log('molly:', JSON.stringify(molly));
    console.log('Is molly an instance of Cyborg?', (molly instanceof Cyborg));
    
})();