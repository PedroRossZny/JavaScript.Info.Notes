let arr = ["a", "b"];

arr.push(function() {
    alert( this );
});

arr[2](); // ?

// The result will be: a,b,function() { alert( this ); }, because an array can store different types of data, including functions. When we add a function to an array and then call it by its index with parentheses, and that function contains an alert with this, we are actually displaying the entire array as a string, with all its data including the function itself. Since arrays are objects, this behaves the same way it does in a generic object — referring to the object before the dot, which in this case is the array itself.
