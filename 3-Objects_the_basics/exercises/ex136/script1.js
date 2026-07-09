let id = Symbol("id");
let user = {
    name: "John",
    age: 30,
    [id]: 123
};

for (let key in user) alert(key); // name, age (no symbols)

// the direct access by the symbol works
alert( "Direct: " + user[id] ); // Direct: 123
