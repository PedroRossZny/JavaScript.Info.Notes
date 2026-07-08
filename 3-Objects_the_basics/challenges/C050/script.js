function A() { }
function B() { }

let a = new A();
let b = new B();

alert( a == b );

// Yes, it is possible; even if the constructor functions are different, they can point to the same object if that object already occupies a specific memory location, since comparing objects checks whether they point to the same memory space rather than comparing their contents.

// A code example follows below:

let obj = {};

function C() {
    return obj;
}

function D() {
    return obj;
}

let c = new C();
let d = new D();

alert( c == d );
