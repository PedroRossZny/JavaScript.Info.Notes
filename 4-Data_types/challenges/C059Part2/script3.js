// An alternative way could be to use Math.floor for a random number from min to max+1:

function randomInteger(min, max) {
    // here rand is from min to (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

alert( randomInteger(1, 3) );

// Now all intervals are mapped this way:

// values from 1  ... to 1.9999999999  become 1
// values from 2  ... to 2.9999999999  become 2
// values from 3  ... to 3.9999999999  become 3

// All intervals have the same length, making the final distribution uniform.
