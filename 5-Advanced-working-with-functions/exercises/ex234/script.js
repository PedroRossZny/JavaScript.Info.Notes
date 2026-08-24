{
    // do some job with local variables that should not be seen outside

    let message = "Hello"; // only visible in this block

    alert(message); // Hello
}

// alert(message); // Error: message is not defined

{
    // show message
    let message = "Hello";
    alert(message);
}

{
    // show another message
    let message = "Goodbye";
    alert(message);
}

// show message
let message = "Hello";
alert(message);

/*
// show another message
let message = "Goodbye"; // Error: variable already declared
alert(message);
*/

if (true) {
    let phrase = "Hello!";

    alert(phrase); // Hello!
}

// alert(phrase); // Error, no such variable!

for (let i = 0; i < 3; i++) {
    // the varible i is only visible inside this for
    alert(i); // 0, then 1, then 2
}

// alert(i); // Error, no such variable
