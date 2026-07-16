let str = 'Widget with id';

alert( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
alert( str.indexOf('widget') ); // -1, not found, the search is case-sensitive

alert( str.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)

alert( str.indexOf('id', 2) ) // 12

str = 'As sly as a fox, as strong as an ox';

let target = 'as'; // let's look for it

let pos = 0;
while (true) {
    let foundPos = str.indexOf(target, pos);
    if (foundPos == -1) break;

    alert( `Found at ${foundPos}` );
    pos = foundPos + 1; // continue the search from the next position
}

pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
    alert( pos );
}

str = "Widget with id";

if (str.indexOf("Widget")) {
    alert("We found it"); // doens't work!
}

if (str.indexOf("Widget") != -1) {
    alert("We found it"); // works now!
}

alert( "Widget with id".includes("Widget") ); // true

alert( "Hello".includes("Bye") ); // false

alert( "Widget".includes("id") ); // true
alert( "Widget".includes("id", 3) ); // false, from position 3 there is no "id"

alert( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
alert( "Widget".endsWith("get") ); // true, "Widget" ends with "get"
