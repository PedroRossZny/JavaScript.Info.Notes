function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

alert(user.ref.name); // What's the result?

// The result will be an error, because this inside makeUser is not being used inside an object method — it is just a regular function called directly. What matters for this is not where it was written, but the moment it is called. Since makeUser() is called without any object before the dot, in strict mode this will be undefined, and trying to access user.ref.name will throw an error.
