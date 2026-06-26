function isEmpty(obj) {
    for (let key in obj) {
        return true;
    }
    return false;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum;

if (isEmpty(salaries)) {
    sum = (salaries.John + salaries.Ann + salaries.Pete)
} else {
    sum = 0;
}

alert(sum);