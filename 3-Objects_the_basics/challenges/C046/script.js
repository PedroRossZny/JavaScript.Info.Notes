function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof(obj[key]) === "number") {
            obj[key] *= 2;
        }
    }
}

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

for (let key in menu) {
    alert(`${key} = ${menu[key]}`);
}

multiplyNumeric(menu);

for (let key in menu) {
    alert(`${key} = ${menu[key]}`);
}

// after the call
/*
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};
*/