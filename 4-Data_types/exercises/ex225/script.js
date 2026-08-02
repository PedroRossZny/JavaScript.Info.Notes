// let value = JSON.parse(str[, reviver]);

// stringify array
let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

alert( numbers[1] ); // 1

let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user = JSON.parse(userData);

alert( user.friends[1] ); // 1

let json = `{
    name: "John", // mistake: property name without quotes
    "surname": 'Smith', // mistake: single quotes in value (must be double)
    'isAdmin': false, // mistake: single quotes in keys (must be double)
    "birthday": new Date(2000, 2, 3), // mistake: no "new" is allowed, only bare values
    "friends": [0,1,2,3] // here all fine
}`;
