let options = {
    title: "Menu",
    width: 100,
    height: 200
};

// { sourceProperty: targetVariable }
let {width: w, height: h, title} = options;

// width -> w
// heigth -> h
// title -> title

alert(title); // Menu
alert(w); // 100
alert(h); // 200