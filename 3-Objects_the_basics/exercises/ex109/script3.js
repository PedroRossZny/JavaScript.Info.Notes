let user = {
    name: "John",
    age: 30
};

let key = prompt("What do you want to know about the user?", "name");

// access by variable
alert( user[key] ); // John (if enter "name")

/*
let key = "name";
alert( user.key ) // undefined
*/