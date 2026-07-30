function count(obj) {
    return Object.entries(obj).reduce((count, array) => count + 1, 0);
}

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2
