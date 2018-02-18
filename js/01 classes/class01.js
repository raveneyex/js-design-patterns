(function() {
    /* use strict; */
    class Cyborg{
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        
        sayHi() {
            console.log(`Hi, my name is ${this.name}`);
        }
        
        sayAge() {
            console.log(`Hi, my age is ${this.age}`);
        }
    }

    let molly = new Cyborg('Molly', 23);
    
    console.log('molly:', JSON.stringify(molly));
    console.log('Is molly an instance of Cyborg?', (molly instanceof Cyborg));
    
})();