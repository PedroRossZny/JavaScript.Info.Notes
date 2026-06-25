function pow(number, power) {
    if (power > 0) {
        alert(number ** power);
    } else {
        alert(`Power ${power} is not supported, use a positive integer`);
    }
}

pow(prompt('x?'), prompt('n?'));