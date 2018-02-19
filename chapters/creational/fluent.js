class Cyborg {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.skills = [];
    }
    
    sayHi() {
        console.log(`Hi, my name is ${this.name}`);
        return this;
    }

    sayAge() {
        console.log(`And my age is ${this.age}`);
        return this;
    }

    addSkill(skill) {
        this.skills = [...this.skills, skill];
        return this;
    }

    saySkills() {
        console.log('And I have the following upgrades')
        this.skills.forEach((skill) => {
            console.log(skill);
        });
        return this.skills;
    }
}
console.info("Cyborg's methods are now fluent, test 'em out!");

console.groupCollapsed('Molly Instance');
let molly = new Cyborg('Molly', undefined);
molly
    .sayHi()
    .sayAge()
    .addSkill('Blade Nails')
    .addSkill('Enhanced Reflexes')
    .addSkill('Mirror Shade Vision Enhancement')
    .saySkills();
console.groupEnd();