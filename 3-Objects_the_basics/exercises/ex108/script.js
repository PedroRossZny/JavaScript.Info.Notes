let user = { // an object
    name: "John", // by key "name" store value "John"
    age: 30 // by key "age" store value 30
};

// get property values of the object
alert( user.name ); // John
alert( user.age ) // 30

user.isAdmin = true;

delete user.age;

/*
let user = {
    name: "John",
    age: 30,
    "likes birds": true // multiword property name must be quoted
};

let user = {
    name: "John",
    age: 30,
}
*/