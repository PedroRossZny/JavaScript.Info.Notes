let str = `Hello`;

// the first character
alert( str[0] ); // H
alert( str.at(0) ); // H

// the last character
alert( str[str.length - 1] ); // o
alert( str.at(-1) );

alert( str[-2] ); // undefined
alert( str.at(-2) ); // l

for (let char of "Hello") {
    alert(char); // H, e, l, l, o (char becomes "H", then "e", then "l" etc)
}
