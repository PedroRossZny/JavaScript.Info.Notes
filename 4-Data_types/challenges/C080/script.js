function unique(arr) {
    let uniques = [];

    for (let i = 0; i < arr.length; i++) {
        if (!(uniques.includes(arr[i]))) {
            uniques.push(arr[i]);
        }
    }

    return uniques;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O
