function sayHi() { // (1) create
    alert("Hello");
}

alert(sayHi); // shows the function code

let func = sayHi; // (2) copy

func(); // Hello // (3) run the copy (it works)!
sayHi(); // Hello // this still works too (why wouldn't it)