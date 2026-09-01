function sayHi() {
    alert("Hi");

    // let's count how many times we run
    sayHi.counter++;
}
sayHi.counter = 0; // initial value

sayHi(); // Hi
sayHi(); // Hi

alert( `Called ${sayHi.counter} times` ); // Called 2 times

function makeCounter() {
    // instead of:
    // let count = 0

    function counter() {
        return counter.count++;
    };

    counter.count = 0;

    return counter;
}

let counter = makeCounter();
alert( counter() ); // 0
alert( counter() ); // 1

counter.count = 10
alert( counter() ); // 10
