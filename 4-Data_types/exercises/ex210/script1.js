/*
function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
    // ...
}

showMenu("My Menu", undefined, undefined, ["item1", "item2"])
*/

// we pass object to function
let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
};

// ...and it immediately expands it to variables
function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
    // title, items - taken from options,
    // width, height - dafaults used
    alert( `${title} ${width} ${height}` ); // My Menu 200 100
    alert( items ); // Item1, Item2
}

showMenu(options);
