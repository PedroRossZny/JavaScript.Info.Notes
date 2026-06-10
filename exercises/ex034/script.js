let counter = 2;
counter++; // works the same as counter +1, but is shorter
alert( counter ); // 3

let counter = 2;
counter--;
alert( counter ); // 1

let counter = 1;
let a = ++counter; // (*)

alert(a); // 2

let counter2 = 1;
let a2 = counter2++; // (*) changed ++counter to counter++

alert(a2); // 1

let counter3 = 0;
counter3++;
++counter3;
alert( counter3 ); // 2, the lines above did the same

let counter4 = 0
alert( ++counter4 ); // 1

let counter5 = 0;
alert( counter5++ ); // 0

let num = 1
alert( 2 * ++num ); // 4

let num2 = 1
alert( 2 * num2++ ); // 2, because num2++ returns the "old" value

// RECOMMENDED
let num3 = 1;
alert( 2 * num3 );
num3++;
