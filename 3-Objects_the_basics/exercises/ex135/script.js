let id = Symbol("id");

let user = {
    name: "John",
    [id]: 123 // not "id":123
}
