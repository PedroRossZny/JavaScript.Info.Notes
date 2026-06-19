// showMessage("Ann");

function showMessage(from, text = "no text given") {
    alert(from + ": " + text);
}

showMessage("Ann"); // Ann: no text given

showMessage("Ann", undefined); // Ann: no text given

/*
function showMessage(from, text = anotherFunction()) {
    // anotherFunction() only executed if no text given
    // its result becomes the value of text
}
*/

/*
function showMessage(from, text) {
    if (text === undefined) {
        text = 'no text given';
    }

    alert(from + ": " + text);
}

function showMessage(from, text) {
    // If the value of text is falsy, assign the default value
    // this assumes that text == "" is the same as no text at all
    text = text || 'no text given';
    ...
}
*/