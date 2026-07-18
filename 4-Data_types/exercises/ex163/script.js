let arr = new Array();
// let arr = [];

let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum

fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]

fruits[3] = 'Lemon'; // now ["Apple", "Orange", "Pear", "Lemon"]

fruits = ["Apple", "Orange", "Plum"];

alert( fruits.length ); // 3

alert( fruits ); // Apple,Orange,Plum

// mix of values
arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

// get the object at index 1 and then its name
alert( arr[1].name ); // John

// get the function at index 3 and run it
arr[3](); // hello

fruits = [
    "Apple",
    "Orange",
    "Plum",
];
