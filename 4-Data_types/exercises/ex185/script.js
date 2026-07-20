function arrayEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

alert( arrayEqual([1, 2], [1, 2]) ); // true
