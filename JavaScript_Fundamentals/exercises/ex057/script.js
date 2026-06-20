/*
for (begin; condition; step) {
    // ... loop body ...
}
*/

for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    alert(i);
}

// for (let i = 0; i < 3; i++) alert(i)

// run begin
// let i = 0
// if condition → run body and run step
// if (i < 3) { alert(i); i++}
// if condition → run body and run step
// if (i < 3) { alert(i); i++}
// if condition → run body and run step
// if (i < 3) { alert(i); i++}
// ...finish, because now i == 3