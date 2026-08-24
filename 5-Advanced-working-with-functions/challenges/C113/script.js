function inBetween(a, b) {
    return function(currentValue) {
        if (currentValue >= a && currentValue <= b) {
            return true;
        } else {
            return false;
        }
    }
}

function inArray(arr) {
    return function(currentValue) {
        if (arr.includes(currentValue)) {
            return true;
        } else {
            return false;
        }
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2
