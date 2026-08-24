function makeWorker() {
  let name = "Pete";

  return function() {
    alert(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // what will it show?

// It will show "Pete".
// What decides which outer variables a function can see is the place where it was CREATED (defined in the code) — never the place from where it's called.
// The anonymous function returned by makeWorker was created right there nested inside makeWorker's body. That permanently fixes its internal[[Environment]] reference to point to makeWorker's execution environment — forever, no matter who calls this function later, or from where.
// When work() is called, the search for "name" starts in the anonymous function's own environment (which has no local "name"), goes up to makeWorker's execution environment, and finds name = "Pete" there. The search stops at that point: the global scope — where work() is actually called from, and where a different name = "John" exists — is never consulted, because it isn't part of this function's scope chain.
// If work() were called from anywhere else, with any other "name" in the caller's scope, the result would always be the same: "Pete". The call site simply doesn't factor into it.