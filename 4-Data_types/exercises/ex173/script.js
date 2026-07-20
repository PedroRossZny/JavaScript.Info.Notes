// arr.concat(arg1, arg2...)

let arr = [1, 2];

// create an array from: arr and [3,4]
alert( arr.concat([3, 4]) ); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

let arrayLike1 = {
    0: "something",
    length: 1
};

alert( arr.concat(arrayLike1) ); // 1,2,[object Object]

let arrayLike2 = {
    0: "something",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    length: 2
};

alert( arr.concat(arrayLike2) ); // 1,2,something,else
