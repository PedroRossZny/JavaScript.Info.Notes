let num = 1.23456;

alert( Math.round(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23

num = 12.34;
alert( num.toFixed(1) ); // "12.3"

num = 12.36;
alert( num.toFixed(1) ); // "12.4"

num = 12.34;
alert( num.toFixed(5) ); // "12.34000", added zeroes to make exactly 5 digits
