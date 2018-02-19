class Calculator{
    factorial(number) {   
        return number <=2 ? number : number * this.factorial(number - 1)
    }
}

class CalcProxy{
    constructor(){
        this.calulator = new Calculator();
        this.factorialcache = {};
    }
    factorial (number) {
        if (!this.factorialcache[number]) {
            console.log('Defining for', number);
            this.factorialcache[number] = this.calulator.factorial(number);
        }
        return this.factorialcache[number];
    }
}
let calP = new CalcProxy();
console.log('6! = ', calP.factorial(6));
console.log('8! = ', calP.factorial(8));
console.log('6! = ', calP.factorial(6));