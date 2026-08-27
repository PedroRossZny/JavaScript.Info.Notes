(function() {

    var message = "Hello";

    alert(message); // Hello

})();

/*
// Tries to declare and immediately call a function
function() { // <-- SyntaxError: Function statements require a function name

    var message = "Hello";

    alert(message); // Hello

}();
*/

/*
// syntax error because of parentheses below
function go() {

}(); // <-- can't call Function Declaration immediately
*/

// Ways to create IIFE

(function() {
    alert("Parentheses around the function");
})();

(function() {
    alert("Parentheses around the whole thing");
}());

!function() {
    alert("Bitwise NOT operator starts the expression");
}();

+function() {
    alert("Unary plus starts the expression");
}();
