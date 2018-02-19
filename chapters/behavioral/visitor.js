class Visitor {
    visit(person) {
        console.log('Visiting:', person.name)
        //Do something with person...
    }
}
class Cyborg {
    constructor(name) {
        this.name = name;
    }
    accept(visitor) {
        visitor.visit(this);
    }
}
let molly = new Cyborg('molly');
let visitor = new Visitor();
molly.accept(visitor);