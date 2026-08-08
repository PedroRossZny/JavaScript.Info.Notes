function showName() {
    alert( arguments.length );
    alert( arguments[0] );
    alert( arguments[1] );

    // it's iterable
    // for(let arg of arguments) alert(arg);
}

// shows: 2, Julius, Caesar
showName("Julius", "Caesar");

// shows: 1, Ilya, undefined (no second argument)
showName("Ilya");

function f() {
    let showArg = () => alert(arguments[0]);
    showArg();
}

f(1); // 1
