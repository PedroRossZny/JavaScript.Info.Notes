// result = a && b;

alert(true && true); // true
alert(false && true); // false
alert(true && false); // false
alert(false && false); // false

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
    alert('The time is 12:30');
}

if (1 && 0) {
    alert("won't work, because the result is falsy");
}