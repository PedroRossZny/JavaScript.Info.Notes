function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Did parents allow you?');
    }
}

// Using a question mark operator '?':

function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}

// Using OR || (the shortest variant):

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

// Note that tha parentheses around age > 18 are not requiered here. They exist for better readability.