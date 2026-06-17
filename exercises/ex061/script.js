for (let i = 0; i < 10; i++) {

    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;

    alert(i); // 1, then 3, 5, 7, 9
}

for (let i = 0; i < 10; i++) {

    if (i % 2) {
        alert(i);
    }

}

/*
if (i > 5) {
    alert(i);
} else {
    continue;
}

(i > 5) ? alert(i) : continue; // continue ins't allowed here
*/