function random(min, max) {
    let num;

    do {
        num = Math.random() * max;
    } while (!(num >= min));

    return num;
}

alert( random(1, 5) );
alert( random(2, 5) );
alert( random(3, 5) );
alert( random(4, 5) );
