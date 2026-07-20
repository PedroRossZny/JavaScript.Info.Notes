function filterRangeInPlace(arr, a, b) {
    let filtered = arr.filter(item => ( item >= a && item <= b));
    arr.length = 0;
    for (let item of filtered) {
        arr.push(item);
    }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]
console.log(arr);
