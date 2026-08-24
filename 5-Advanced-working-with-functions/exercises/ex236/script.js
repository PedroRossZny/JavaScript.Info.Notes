function f1() {
    let value = 123;

    return function() {
        alert(value);
    }
}

let g1 = f1(); // g.[[Environment]] stores a reference to the Lexical Environment
// of the corresponding f() call

function f2() {
    let value = Math.random();

    return function() { alert(value); };
}

// 3 functions in array, every one them links to Lexical Environment
// from the corrsponding f() run
let arr = [f2(), f2(), f2()];

function f3() {
    let value = 123;

    return function() {
        alert(value);
    }
}

let g2 = f3(); // while g function exists, tha value stays in memory

g2 = null; // ...and now the memory is cleaned up