function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

alert( counter.up() ); // ?
alert( counter.up() ); // ?
alert( counter.down() ); // ?

let counter2 = new Counter();

alert( counter2.up() );

// It will show 1, then 2, then 1.
// What guarantees this is closure, not "this". this.up = ... and this.down = ... use "this" only to ATTACH the two functions as methods on the newly created object (that's what makes counter.up() and counter.down() callable). But inside the body of up and down, "this" is never used — they just do ++count and --count. What guarantees that both read and modify the SAME variable is the lexical scope chain: up and down were created during the same execution of Counter(), so they both share the same Lexical Environment and the same count variable.
// count never becomes a property of the object. counter.count is undefined — the only own keys on counter are "up" and "down". count stays a fully private variable, trapped inside the Lexical Environment of that Counter() execution; the only way to read or change it from outside is through up() and down(), because only those two functions hold a reference ([[Environment]]) to that specific environment. This mechanism is what lets you simulate a private variable, even without using private class fields (#count).
