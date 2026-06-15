// let accessAllowed;
let age = prompt('How old are you?', '');

/*
if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}
*/

// let result = condition ? value1 : value2;

let accessAllowed = (age > 18) ? true : false;

// the comparison operator "age > 18" executes first anyway
// (no need to wrap it into parentheses)
// let accessAllowed = age > 18 ? true : false;

// the same
// let accessAllowed = age > 18;

alert(accessAllowed);