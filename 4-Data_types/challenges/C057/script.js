/*
let i = 0;
while (i != 10) {
    i += 0.2;
}
*/

// Because of the loss of precision that occurs with 0.2, which is an infinite binary fraction stored in memory as 0.20000000000000001110. As we can see, it is slightly larger than 0.2, and when we add this number on each iteration, it will never reach exactly 10 due to this difference accumulating over time.

// Below is how we can verify that 0.2 has a loss of precision:

alert(0.2.toFixed(20));
