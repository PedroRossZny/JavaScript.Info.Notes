function sumInput() {
    let number;
    let numbers = [];
    let sum = 0;

    while (true) {

        number = prompt("A number please?", 0);

        if (isNaN(number) || number == '' || number == null) {
            break;
        }

        numbers.push(+number)
    }

    for (let num of numbers) {
        sum += num;
    }

    return sum;

}

alert(sumInput());
