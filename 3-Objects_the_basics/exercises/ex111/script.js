function makeUser(name, age) {
    return {
        name: name,
        age: age,
        // ...other properties
    };
}

let user = makeUser("John", 30);
alert(user.name); // John

/*
function makeUser(name, age) {
    return {
        name, // same as name: name
        age, // same as age: age
        // ...
    };
}

let user = {
    name, // same as name: name
    age: 30
};
*/