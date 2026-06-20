function sum(a, b) {
    let result = a + b;

    return result;
}

let sum = function(a, b) {
    let result = a + b

    return result;
};

// expression on the right side
let sum = (a, b) => a + b;

// or multi-line syntax with { ... }, need return here:
let sum = (a, b) => {
    // ...
    return a + b;
}

// without arguments
let sayHi = () => alert("Hello");

// with a single argument
let double = n => n * 2;