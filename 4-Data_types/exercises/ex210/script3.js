/*
showMenu({}); // ok, all values are default

showMenu(); // this would give an error
*/

function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
    alert( `${title} ${width} ${height}` );
}

showMenu(); // Menu 100 200
