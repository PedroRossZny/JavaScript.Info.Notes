// The simple but wrong solution

// The simplest, but wrong solution would be to generate a value from min to max and round it:

function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.round(rand);
}

alert( randomInteger(1, 3) );

// The function works, but it is incorrect. The probability to get edge values min and max is two times less than any other.

// If you run the example above many times, you would easily see that 2 appears the most often.

// That happens because Math.round() gets random numbers from the interval 1..3 and rounds them as follows:

// values from 1    ... to 1.4999999999  become 1
// values from 1.5  ... to 2.4999999999  become 2
// values from 2.5  ... to 2.9999999999  become 3

// Now we can clearly see that 1 gets twice less values than 2. And the same with 3.
