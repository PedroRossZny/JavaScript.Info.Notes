// let func = (arg1, arg2, ...func, argN) => expression;

/*
let func = funcrtion(arg1, arg2, ..., argN) {
    return expression;
};
*/

let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
    return a + b;
};
*/

alert(sum(1, 2)); // 3

let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }

alert (double(3)); // 6

let sayHi = () => alert("Hello");

sayHi();

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
    () => alert('Hello!') :
    () => alert("Greetings!");

welcome();