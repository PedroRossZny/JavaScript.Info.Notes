let single = 'single-quoted';
let double = "boudle-quoted";

let backticks = `backticks`;

function sum(a, b) {
    return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

let guestList = `Guests:
  * John
  * Pete
  * Mary
`;

alert(guestList); // a list of guests, multiple lines

/*
let guestList = "Guests: // Error: Unexpected token ILLEGAL
  * John";
*/
