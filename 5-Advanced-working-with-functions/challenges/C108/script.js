function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // ?
alert( counter2() ); // ?

// Yes, they're independent. The second counter also shows 0, 1.
// The independence doesn't come from "two variables holding the same function" — counter and counter2 actually hold two DIFFERENT function objects. That's because makeCounter() is called twice, and each call creates a brand-new execution context, with its own Lexical Environment and its own count variable, starting at 0. The function returned by each call is also a new object, with its own [[Environment]] pointing only to that specific count.
// That's why the two counters never touch each other: by the time counter() has already been called twice (leaving its internal count at 2), counter2's count is still untouched at 0, because it came from a completely separate call to makeCounter().
// (If we had instead written "let counter2 = counter;" — just copying the reference, without calling makeCounter() again — then both would point to the same count, and counter2() would continue right where counter left off, showing 2, 3 instead of 0, 1.)
