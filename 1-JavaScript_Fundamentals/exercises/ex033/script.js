/*
let n = 2;
n = n + 5;
n = n * 2;
*/

let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

alert( n ); // 14

let n = 2;

n *= 3 + 5; // right part evaluated first, same as n *= 8

alert( n ); // 16
