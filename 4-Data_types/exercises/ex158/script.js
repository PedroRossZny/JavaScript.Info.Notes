let str = 'Hi';

str[0] = 'h'; // error
alert( str[0] ); // doesn't work

str = 'h' + str[1]; // replace the string

alert( str ); // hi
