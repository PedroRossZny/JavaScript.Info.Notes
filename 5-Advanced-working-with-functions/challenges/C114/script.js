function byField(fieldName) {
    return function(a, b) {
        return (a[fieldName] > b[fieldName]) ? 1 : -1;
    }
}

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

users.sort(byField('name'));
alert(users.map(user => user.name));

users.sort(byField('age'));
alert(users.map(user => user.age));
