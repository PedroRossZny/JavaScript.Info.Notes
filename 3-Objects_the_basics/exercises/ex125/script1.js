function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false

/*
function User(name) {
    // this = {}; (implictly)

    // add properties to this
    this.name = name;
    this.isAdmin = false;

    // return this; (implicity)
}

let user = {
    name: "Jack",
    isAdmin: false
};
*/
