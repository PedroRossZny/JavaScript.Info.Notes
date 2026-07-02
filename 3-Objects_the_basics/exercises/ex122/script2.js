let user = {
    name: "John",
    age: 30,

    sayHi() {
        alert(user.name); // leads to an error
    }

};

let admin = user;
user = null; // overwrite to make things obvious

admin.sayHi(); // TypeError: Cannot read property 'name' of null
