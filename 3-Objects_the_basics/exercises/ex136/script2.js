let id = Symbol("id");
let user = {
    [id]: 123
};

let clone = Object.assign({}, user);

alert( clone[id] ); // 123
