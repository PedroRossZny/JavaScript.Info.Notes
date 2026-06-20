let i = 0; // we have i already declared and assigned

for (; i < 3; i++) { // no need for "begin"
    alert(i); // 0, 1, 2
}

i = 0

for (; i < 3;) {
    alert(i++);
}

/*
for (;;) {
    // repeats without limits
}
*/