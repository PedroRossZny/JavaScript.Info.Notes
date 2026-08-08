# Rest Parameters and Spread Syntax

Many built-in JavaScript functions accept an arbitrary number of arguments. In this lesson we learn how to do the same in our own functions, and how to pass arrays as arguments to functions that expect a list of separate values.

## Exercise 230 — Rest Parameters

A function can be called with any number of arguments without causing an error — but only the arguments matching a declared parameter are actually used; the extra ones are simply dropped.

To keep the extra arguments instead of losing them, we use **rest parameters**: three dots followed by the name of the array that will hold them. This "gathers" the remaining arguments into a real array.

This lets us:
- Gather *all* arguments into a single array.
- Take the first few arguments as named variables and collect only the rest.

**Rule:** rest parameters must always come last in the parameter list.

*Shown in ex230.*

## Exercise 231 — The `arguments` Object

There's a special, array-like object called `arguments`, available inside every regular function, which holds all the arguments by index.

Before rest parameters existed, `arguments` was the only way to access every argument passed to a function — but it has drawbacks:
- Although it's array-like and iterable, `arguments` doesn't support array methods like `.map()` or `.filter()`.
- It always contains *all* the arguments; unlike rest parameters, you can't capture them partially.

If you access `arguments` inside an arrow function, it's taken from the **enclosing (outer) function** instead. We already know arrow functions don't have their own `this` — now we also know they don't have their own `arguments` object either.

*Shown in ex231.*

## Exercise 232 — Spread Syntax in Function Calls

When a function expects a list of separate arguments rather than a single array, but what we have is an array, we use **spread syntax** to pass it in.

It uses the same `...` as rest parameters but does the opposite: inside a function call, it *expands* an iterable into a list of individual arguments.

With spread syntax we can:
- Pass several iterables in the same call.
- Mix spread values together with regular values.
- Merge arrays into a new one.
- Expand any iterable, not just arrays — for example, a string.

**Spread vs. `Array.from()`:** both can turn an iterable into an array, but `Array.from()` also works on plain array-like objects, while spread syntax only works on iterables.

*Shown in ex232.*

## Exercise 233 — Spread Syntax for Copying

Spread syntax can do the same job as `Object.assign()` — more simply, which is why we prefer it whenever possible:

- Copy an object: `Object.assign({}, obj)` → `{...obj}`
- Copy an array: `Object.assign([], arr)` → `[...arr]`

It works by expanding the array or object into a list of elements, then collecting the result back into a new array or object.

*Shown in ex233.*
