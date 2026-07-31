// we have an array with a name and surname
let arr = ["John", "Smith"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // John
alert(surname); // Smith

[firstName, surname] = "John Smith".split(' ');
alert(firstName); // John
alert(surname); // Smith

/**
 * let firstName = arr[0];
 * let surname = arr[1];
 */

// second element is not needed
[firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert( title ); // Consul

let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);

let user = {};
[user.name, user.surname] = "John Smith".split(' ');

alert(user.name); // John
alert(user.surname); // Smith

user = {
    name: "John",
    age: 30
};

// loop over the keys-and-values
for (let [key, value] of Object.entries(user)) {
    alert(`${key}:${value}`); // name:John, the age:30
}

user = new Map();
user.set("name", "John");
user.set("age", "30");

// Map iterates as [key, value] pairs, very convenient for destructuring
for (let [key, value] of user) {
    alert(`${key}:${value}`); // name:John, then age:30
}

let guest = "Jane";
let admin = "Pete";

// Let's swap the values: make guest=Pete, admin=Jane
[guest, admin] = [admin, guest];

alert(`${guest} ${admin}`); // Pete Jane (successfully swapped!)
