for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

        let input = prompt(`Value at coords (${i}, ${j})`, '');

        // what if we want to exit from here to Done (below)?
    }
}

alert('Done!');

/*
labelName: for (...) {
    ...
}
*/

outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

        let input = prompt(`Value at coords (${i}, ${j})`, '');

        // if an empty string or canceled, then break out of both loops
        if (!input) break outer; // (*)

        // do something with the value...
    }
}

alert('Done!');

/*
outer:
for (let i = 0; i < 3; i++) {...}
*/

/*
break label; // jump to the label below (doesn't work)

label: for (...)

label: {
    // ...
    break label; // works
    // ...
}
*/