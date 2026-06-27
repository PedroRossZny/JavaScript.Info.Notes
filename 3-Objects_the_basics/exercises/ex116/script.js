let message = "Hello!";
let phrase = message;

let user = {
    name: "John"
};

let admin = user; // copy the reference

admin.name = 'Pete'; // changed by the "admin" reference

alert(user.name); // 'Pete', changes are seen from the "user" reference 