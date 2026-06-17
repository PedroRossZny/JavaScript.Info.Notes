let value;

do {
    value = prompt('Enter a number greater than 100.', '');
    if (value > 100 || !value) {
        alert('Until later!');
        break;
    } else {
        alert('Try again')
    }
} while (true);