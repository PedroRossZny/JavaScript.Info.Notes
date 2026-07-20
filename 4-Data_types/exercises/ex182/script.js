/*
let value = arr.reduce(function(accumulator, item, index, array) {
    // ...
}, [initial]);
*/

let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

alert(result); // 15

result = arr.reduce((sum, current) => sum + current);

alert( result ); // 15

/*
lar arr = [];

// Error: Reduce of empty array with no initial value
// if the initial value existed, reduce would return it for the empty arr.
arr.reduce((sum, current) => sum + current);
*/
