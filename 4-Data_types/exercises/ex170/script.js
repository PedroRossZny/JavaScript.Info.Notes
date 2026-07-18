alert( [] == [] ); // false
alert( [0] == [0] ); // false

alert( 0 == [] ); // true

alert('0' == [] ); // false

// after [] was converted to ''
alert( 0 == '' ); // true, as '' becomes converted to number 0

alert('0' == '' ); // false, no type conversion, different strings
