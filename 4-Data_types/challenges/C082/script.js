function unique(arr) {
    let setValues = new Set(arr);
    let arrValues = [];
    
    setValues.forEach((value, valueAgain, set) => {
        arrValues.push(value);
    });

    return arrValues;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O
