let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

// We would use a WeakMap — not only does it automatically remove an entry when the object is removed from the third-party code, but it can also store arbitrary values beyond just true or false like WeakSet, while using the object itself as the key.

let readWhen = new WeakMap();

readWhen.set(messages[0], new Date());
readWhen.set(messages[1], new Date());
readWhen.set(messages[2], new Date());

alert(readWhen.get(messages[0]));
alert(readWhen.get(messages[1]));
alert(readWhen.get(messages[2]));

messages.shift();

alert(readWhen.get(messages[0]));
alert(readWhen.get(messages[1]));
alert(readWhen.get(messages[2]));
