let fruits = ["Apple", "Orange", "Pear"];

alert( fruits.pop() ); // remove "Pear" and alert it

alert( fruits ); // Apple, Orange

fruits.push("Pear");

alert( fruits ); // Apple, Orange, Pear

alert( fruits.shift() ); // remove Apple and alert it

alert( fruits ); // Orange, Pear

fruits.unshift('Apple');

alert( fruits ); // Apple, Orange, Pear

fruits = ["Apple"];

fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");

// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
alert( fruits );
