function sum(a) {
    let num = a

    let sum2 = function sum3(value) {
        num += value
        return sum3;
    }

    sum2.valueOf = function() {
        return num;
    }

    return sum2;
}

alert(sum(1)(2) == 3)  
alert(sum(1)(2)(3) == 6)