/*
switch(x) {
    case 'value1': // if (x === 'value1')
        ...
        [break]

    case 'value2': // if (x === ' value2')
        ...
        [break]

    default:
        ...
        [break]
}
*/

let a = 2 + 2;

switch (a) {
    case 3:
        alert('Too small');
        break;
    case 4:
        alert('Exactly!');
        break;
    case 5:
        alert('Too big');
        break;
    default:
        alert("I don't know such values");
}

switch (a) {
    case 3:
        alert('Too small');
    case 4:
        alert('Exactly!');
    case 5:
        alert('Too big');
    default:
        alert("I don't know such values");
}

alert('Exactly!');
alert('Too big');
alert("I don't know such values");

a = "1"
let b = 0

switch (+a) {
    case b + 1:
        alert("this run, because +a is 1, exactly equals b+1");
        break;

    default:
        alert("this doesn't run");
}