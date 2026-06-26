// "key" in object

let user = {name: "John", age: 30};

alert( "age" in user); // true, user.age exists
alert( "blabla" in user); // false, user.blabla doens't exist

let key = "age";
alert( key in user ); // true, property "age" exists

let obj = {
    test: undefined
};

alert( obj.test ); // it's undefined, so - no such property?

alert( "test" in obj ); // true, the property does exist!