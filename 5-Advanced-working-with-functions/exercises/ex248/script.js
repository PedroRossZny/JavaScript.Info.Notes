let sayHi = function func(who) {
    if (who) {
        alert(`Hello, ${who}`);
    } else {
        func("Guest"); // use func to re-call itself
    }
};

sayHi(); // Hello, Guest

// But this won't work:
// func(); // Error, func is not defined (not visible outside of the function)

/*
let sayHi = function(who) {
    if (who) {
        alert(`Hello, ${who}`);
    } else {
        sayHi("Guest");
    }
};

let welcome = sayHi;
sayHi = null

welcome(); // Error, the nested sayHi call doesn't work any more!
*/

let welcome = sayHi;
sayHi = null;

welcome(); // Hello, Guest (nested call works)
