let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

// We can use a WeakSet, since when the third-party code removes a message, it will also be automatically removed from the WeakSet.

let readMessages = new WeakSet();

readMessages.add(messages[0]);

// Using has, it returns whether the specific object exists in the set, with true or false — perfect for answering the question "was it read?".

alert(readMessages.has(messages[0])); // true
alert(readMessages.has(messages[1])); // false
