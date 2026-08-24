let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi(); // what will it show: "John" or "Pete"?

// Yes, it will show "Pete".
// The sayHi function doesn't store a copy of the value of "name" at the moment it was created. Instead, it keeps an internal reference ([[Environment]]) to the Lexical Environment where the variable "name" lives.
// Every time sayHi() is actually called, it goes to that environment and reads the current value of "name" at that exact moment — never a value "saved" from when the function was defined.
// Since the reassignment (name = "Pete") happens before the call to sayHi(), the value it reads is "Pete". This would hold true even if sayHi() were only called much later (for example, inside a setTimeout or after a network response): the result would always be the most recent value of "name" at that instant, never the old one, because there's no copy — it's always a live read from the Lexical Environment.