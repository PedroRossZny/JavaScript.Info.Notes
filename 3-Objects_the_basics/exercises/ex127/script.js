function BigUser() {
    
    this.name = "John";

    return { name: "Godzilla" }; // <-- returns this object
}

alert( new BigUser().name ); // Godzilla, got that object


function SmallUser() {

    this.name = "John";

    return; // <-- returns this
}

alert( new SmallUser().name ); // John

/*
let user = new User; // <-- no parentheses
// same as
let user = new User();
*/
