let i = 0
while (++i < 5) alert(i); // 1, 2, 3, 4

i = 0
while (i++ < 5) alert(i); // 1, 2, 3, 4, 5

// No, the first one goes up to the number 4 starting from 1, and the second one goes up to the number 5 starting from 1. This happens because ++i increments the original value by 1 and returns the value already added, while i++ also increments by 1 but returns the previous value within the comparison. However, when viewed a second time in the alert, it will appear with the value already added, making it possible to reach 5 without problems.