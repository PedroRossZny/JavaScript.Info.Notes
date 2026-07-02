// Answer: an error

/*
function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

alert(user.ref.name); // Error: Cannot read property 'name' of undefined
*/

// That's because rules that set this do not look at object definition. Only the moment of call matters.

// Here the value this inside makeUser() is undefined, because it is called as a function, not as a method with "dot" syntax.

// The value of this is one for the whole function, code blocks and object literals do not affect it.

// So ref: this actually takes current this of the function.

// We can rewrite the function and return the same this with undefined value:

/*
function makeUser() { // this time there's no object literal
    return this;
}

alert(makeUser().name); // Error: Cannot read property 'name' of undefined
*/

// As you can see the result of alert( makeUser().name ) is the same as the result of alert( user.ref.name ) from the previous example.

// Here's the opposite case:

function makeUser() {
    return {
        name: "John",
        ref() {
            return this;
        }
    };
}

let user = makeUser();

alert(user.ref().name); // John

// Now it work, because user.ref() is a method. And the value of this is set to the object before dot ".".
