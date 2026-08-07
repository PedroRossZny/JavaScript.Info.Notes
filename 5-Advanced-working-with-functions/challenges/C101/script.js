function sumTo(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }

    return sum;
}

/*
alert(sumTo(1));
alert(sumTo(2));
alert(sumTo(3));
alert(sumTo(4));
alert(sumTo(100));
*/

function sumToRecursion(n) {
    return (n == 1) ? n : (n + sumToRecursion(n - 1));
}


alert(sumToRecursion(1));
alert(sumToRecursion(2));
alert(sumToRecursion(3));
alert(sumToRecursion(4));
alert(sumToRecursion(100));
// alert(sumToRecursion(100000));


function sumToProgression(n) {
    return n * ((1 + n) / 2);
}

/*
alert(sumToProgression(1));
alert(sumToProgression(2));
alert(sumToProgression(3));
alert(sumToProgression(4));
alert(sumToProgression(100));
*/

function bench(f) {
    let number = 100;

    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(number);
    return Date.now() - start;
}

alert( `Time of sumTo: ${bench(sumTo)}ms`);
alert( `Time of sumToRecursion: ${bench(sumToRecursion)}ms`);
alert( `Time of sumToProgression: ${bench(sumToProgression)}ms`);

// Speed ranking (fastest to slowest): sumToProgression > sumTo > sumToRecursion

// - sumToProgression is the fastest: it performs a single arithmetic operation, with no loop and no nested calls, so it barely touches memory.
// - sumTo is in the middle: it uses a for loop that runs through the whole operation, storing the running total in a variable and adding to it on each iteration. It does have some overhead, but it's simple and cheap.
// - sumToRecursion is the slowest. Recursion is useful in many cases, but here it makes the operation much slower, because it uses a lot more memory: every time the function calls itself, the engine has to store its execution context on a data structure called the call stack, and that adds overhead for each nested call.

// Can we use recursion to compute sumTo(100000)? No — the maximum recursion depth is limited by the JavaScript engine, and 100000 exceeds the maximum number of nested calls allowed.
