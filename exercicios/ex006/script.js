// WRONG WAY

/* alert("Hello")

[1, 2].forEach(alert); */

// HOW IT IS INTERPRETED

// alert("Hello")[1, 2].forEach(alert);

// THE RIGHT WAY

alert("Hello");

[1, 2].forEach(alert);
