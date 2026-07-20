function Calculator() {
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    };

    this.calculate = function(str) {
        let operation = str.split(' ');
        if (this.methods[operation[1]]) {
            return this.methods[operation[1]](+operation[0], +operation[2]);
        }
    };

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
    
}

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
