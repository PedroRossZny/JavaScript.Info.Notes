let [firstName, surname] = [];

alert(firstName); // undefined
alert(surname); // undefined

// default values
[name = "Guest", surname = "Anonymous"] = ["Julius"];

alert(name); // Julius (from array)
alert(surname); // Anonymous (default used)
