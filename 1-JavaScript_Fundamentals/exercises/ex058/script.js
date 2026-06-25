for (let i = 0; i < 3; i++) {
    alert(i); // 0, 1, 2
}
alert(i); // error, no such variable

let i = 0;

for (i = 0; i < 3; i++) { // use an existing variable
    alert(i); // 0, 1, 2
}

alert(i); // 3, visible, because declared outside of the loop