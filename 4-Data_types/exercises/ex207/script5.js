let options = {
    title: "Menu"
};

let {width = prompt("Width?"), title = prompt("title?")} = options;

alert(title); // Menu
alert(width); // (whatever the result of prompt is)
