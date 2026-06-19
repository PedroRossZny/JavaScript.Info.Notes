function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm('Did parents allow you?');
    }
}

function checkAge(age) {
    if (age > 18) {
        return true;
    }
    // ...
    return confirm('Did parents allow you?');
}

// No, it will work the same way. The difference is that in the first case, it performs the check, and if it returns false, the else code is executed. In the second case, if it's false, the code will continue and go through the return statement. In this case, if it's true, the function will return the value true, and the function's activity is interrupted as well, so we won't encounter the other return statement present in the same function.