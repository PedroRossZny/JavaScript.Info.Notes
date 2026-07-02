let user = {
    name: "John",
    age: 30,

    sayHi() {
        // "this" is the "current object"
        alert(this.name);
    }

};

user.sayHi(); // John

/*
let user = {
    name: "John",
    age: 30,

    sayHi() {
        alert(user.name); // "user" instead of "this"
    }

};
*/
