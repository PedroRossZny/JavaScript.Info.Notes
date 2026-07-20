function copySorted(arr) {
    let arrSorted = [];

    arrSorted = arrSorted.concat(arr);
    return arrSorted.sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)
