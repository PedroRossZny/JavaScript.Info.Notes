let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();

// It depends on the execution mode:
// - In strict mode (with "use strict" at the top of the file, or in any ES module) -> ERROR: "sayHi is not defined".
// - In non-strict ("sloppy") mode, the default for plain scripts without "use strict" -> it shows "Hello, John" normally.
// sayHi is declared inside the if block. In strict mode, a function declared inside a block is trapped inside that block, the same way a let variable would be — so calling sayHi() outside the if finds nothing, and throws a ReferenceError.
// In non-strict mode, there's a legacy compatibility rule called Annex B: to avoid breaking old code (from before ES6, when function inside a block didn't have real block scope), the engine also "leaks" that function declaration out to the scope surrounding the if. That's why sayHi() works in that mode.
// This special rule only applies to function declarations inside blocks. There's no equivalent for let/const: user, declared with let inside the if, would never leak outside — in either mode.
// javascript.info's exercise environment runs code in strict mode (or as a module), which is why the "official" answer is the error — that's the modern behavior ES6 intended to standardize.
