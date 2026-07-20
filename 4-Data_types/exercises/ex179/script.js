let arr = [ 1, 2, 15 ];

// the method reorders the content of arr
arr.sort();

alert( arr ); // 1, 15, 2

function compare(a, b) {
    if (a > b) return 1; // if the first value is greater than the second
    if (a == b) return 0; // if values are equal
    if (a < b) return -1; // if the first value is less than the second
}

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

arr = [ 1, 2, 15 ];

arr.sort(compareNumeric);

alert(arr); // 1, 2, 15

[1, -2, 15, 2, 0, 8].sort(function(a, b) {
    alert( a + " <> " + b);
    return a - b;
});

arr.sort(function(a, b) { return a - b; });

alert(arr); // 1, 2, 15

arr.sort( (a, b) => a - b);

let countries = ['Österreich', 'Andorra', 'Vietnam'];

alert(  countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (wrong)

alert( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (correct!)
