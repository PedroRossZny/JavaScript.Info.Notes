// Function Declaration
function sum(a, b) {
    return a + b;
}

// Function Expression
let sum = function(a, b) {
    return a + b;
};

sayHi("John"); // Hello, John

function sayHi(name) {
    alert(`Hello, ${name}`);
}

/*
sayHi("John"); // error

let sayHi = function(name) { // (*) no magic any more
    alert(`Hello, ${name}`);
};
*/

let age = prompt("What is your age?", 18);

// conditionally declare a function
if (age < 18) {

    function welcome() {
        alert("Hello!");
    }

} else {

    function welcome() {
        alert("Greetings!");
    }

}

// ...use it later
// welcome(); // Error: welcome is not defined