let options = {
    title: "Menu"
};

let {width: w = 100, height: h = 200, title} = options;

alert(title); // Menu
alert(w); // 100
alert(h); // 200

options = {
    name: "Menu",
    width: 100,
    height: 200
};

// only extract title as a variable
let { name } = options;

alert(name); // Menu
