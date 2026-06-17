let i = 3;

while (i) {
    alert(i--); // first 3, then 2, and finally 1.
}

// The value is 1 because when we pass through i-- it decreases the current value by 1, but shows the value before the decrease. When the value 1 was displayed, the variable i already had a value of 0, which for the while loop means a false value, interrupting the repetition.