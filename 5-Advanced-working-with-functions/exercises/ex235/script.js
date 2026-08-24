function sayHi(firstName, lastName) {

    // helper nested function to use below
    function getFullName() {
        return firstName + " " + lastName;
    }

    alert( "Hello, " + getFullName() );
    alert( "Bye, " + getFullName() );

}

sayHi("Pedro", "Ross");

function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    };
}

let counter = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1
alert( counter() ); // 2
