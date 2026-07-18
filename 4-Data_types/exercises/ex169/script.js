let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

alert( matrix[0][1] ); // 2, second value of the first inner array

let arr = [1, 2, 3];

alert( arr ); // 1,2,3
alert( String(arr) === '1,2,3' ); // true

alert( [] + 1); // "1"
alert( [1] + 1 ); // "11"
alert( [1,2] + 1 ); // "1,21"

alert( "" + 1 ); // "1"
alert( "1" + 1 ); // "11"
alert( "1,2" + 1 ); // "1,21"
