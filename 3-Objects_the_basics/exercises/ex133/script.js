// id is a symbol with the description "id"
let id = Symbol("id");

let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false

// alert(id); // TypeError: Cannot convert a Symbol value to a string

alert(id.toString()); // Symbol(id), now it works

alert(id.description); // id
