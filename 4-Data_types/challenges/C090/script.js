function topSalary(salaries) {
    let array = Object.entries(salaries);
    if (array.length == 0) return null;

    let name, salary;
    let highestValue = 0;
    for (let person of array) {
        if (person[1] >= highestValue) {
            [name, salary] = person;
            highestValue = salary;
        }
    }

    return name;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert(topSalary(salaries));
