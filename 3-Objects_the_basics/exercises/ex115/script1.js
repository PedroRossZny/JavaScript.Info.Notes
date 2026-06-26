let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
};

for (let code in codes) {
    alert(code); // 1, 41, 44, 49
}

let user = {
    name: "John",
    surname: "Smith"
};
user.age = 25; // add one more

// non-integer properties are listed in the creation order
for (let prop in user) {
    alert( prop ); // name, surname, age
}