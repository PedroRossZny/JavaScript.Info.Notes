for (let i = 0; i < 5; i++) alert(i); // 0, 1, 2, 3, 4

for (let i = 0; i < 5; ++i) alert(i); // 0, 1, 2, 3, 4

// Yes, in this case, the `for` loop works a little differently. Both start at 0 and end at 4, since the alert comes before the step. Even if the step is in `i++` or `++i`, the result remains the same, as the step is separate from the condition. During its evaluation, `i++` will no longer show the previous value but the summed value, since that already occurred within the step.