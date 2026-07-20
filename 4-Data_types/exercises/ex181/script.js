let names = 'Bilbo, Gandalf, Nazgul';

let arr = names.split(', ');

for (let name of arr) {
    alert( `A message to ${name}.` ); // A message to Bilbo (and other names)
}

arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);

alert(arr); // Bilbo, Gandalf

let str = "test";

alert( str.split('') ); // t,e,s,t

arr = ['Bilbo', 'Gandalf', 'Nazgul'];

str = arr.join(';'); // glue the array into a string using ;

alert( str ); // Bilbo;Gandalf;Nazgul
