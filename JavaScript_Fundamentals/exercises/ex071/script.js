function showMessage(text) {
    // ...

    if (text === undefined) {
        text = 'empty message';
    }

    alert(text);
}

showMessage(); // empty message

/*
function showMessage(text) {
    // if text is undefined or otherwise falsy, set it to 'empty'
    text = text || 'empty';
    ...
}
*/

function showCount(count) {
    // if count undefined or null, show "unknown"
    alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown