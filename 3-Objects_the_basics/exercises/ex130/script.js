let user = {}; // user has no address

alert( user?.address?.street ); // undefined (no error)

let html = document.querySelector('.elem')?.innerHTML; // will be undefined, if there's no element

user = null;

alert( user?.address ); // undefined
alert( user?.address.street ); // undefined

/*
// ReferenceError: user is not defined
user?.address;
*/
