alert( typeof 0 ); // "number"

alert( typeof new Number(0) ); // "object"!

let zero = new Number(0);

if (zero) { // zero is true, because it's an object
    alert( "zero is truthy!?!" );
}

let num = Number("123"); // convert a string to number

// alert(null.test); // error
