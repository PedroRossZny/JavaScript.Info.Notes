alert("Hello");
// is the same as
window.alert("Hello");

var gVar = 5;

alert(window.gVar); // 5 (become a property of the global object)

let gLet = 5;

alert(window.gLet); // undefined (doens't become a property of the global object)

// make current user information global, to let all scripts access
window.currentUser = {
    name: "John"
};

// somewhere else in code
alert(currentUser.name); // John

// or, if we have a local variable with the name "currentUser"
// get it from window explicity (safe!)
alert(window.currentUser.name); // John
