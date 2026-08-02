let user = {
  name: "John Smith",
  age: 35
};

user = JSON.stringify(user);
alert(user);

let json = JSON.parse(user)
alert(json.name)
