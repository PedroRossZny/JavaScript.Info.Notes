// result = value1 && value2 & value3;

// if the first operand is truthy,
// AMD returns the second operand:
alert(1 && 0); // 0
alert(1 && 5); // 5

// is the o first operand is falsy,
// AND returns it. The second operand is ignored
alert(null && 5); // null
alert(0 && "no matter what"); // 0

alert(1 && 2 && null && 3); // null

alert(1 && 2 && 3); // 3, the last one

let x = 1;

// (x > 0) && alert('Greater than zero!');

if (x > 0) alert('Greater than zero!');