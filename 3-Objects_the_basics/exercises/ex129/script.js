/*
let user = {}; // a user without "address" property

alert(user.address.street); // Error!

// document.querySelector('.elem') is null if there's element
let html = document.querySelector('.elem').innerHTML; // error if it's null
*/

let user = {}; // user has no address

alert(user.address ? user.address.street : undefined);

let html = document.querySelector('.elem') ? document.querySelector('.elem').innerHTML : null;

alert(user.address ? user.address.street ? user.address.street.name : null : null);

alert(user.address && user.address.street && user.address.street.name ); // undefined (no error)
