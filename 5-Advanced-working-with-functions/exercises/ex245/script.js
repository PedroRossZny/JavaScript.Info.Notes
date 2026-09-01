function sayHi1() {
    alert("Hi");
}

alert(sayHi1.name); // sayHi

let sayHi2 = function() {
    alert("Hi");
};

alert(sayHi2.name); // sayHi (there's a name!)

function f(sayHi3 = function() {}) {
    alert(sayHi3.name); // sayHi (works!)
}

f();

let user = {

    sayHi() {
        // ...
    },

    sayBye: function() {
        // ...
    }

}

alert(user.sayHi.name); // sayHi
alert(user.sayBye.name); // sayBye

// function created inside array
let arr = [function() {}];

alert( arr[0].name ); // <empty string>
// the engine has no way to set up the right name, so there is none
