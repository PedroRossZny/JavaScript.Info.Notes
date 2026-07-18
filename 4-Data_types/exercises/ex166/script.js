let arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
    alert( arr[i] );
}

let fruits = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruits) {
    alert( fruit );
}

for (let key in arr) {
    alert( arr[key] ); // Apple, Orange, Pear
}
