let user = {
    name: "John",

    toString() {
        return this.name;
    }
};

alert(user); // toString -> John
alert(user + 500); // toString -> John500
