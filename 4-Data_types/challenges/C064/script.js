let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length ); // ?

// It will show the number 4. As we have already seen, arrays are objects, and objects work by reference. When we assign the same object as the value of another variable, we are indicating that both variables reference the same data. So even if we modify the array through the other variable, the change will be reflected everywhere that references the same object.
