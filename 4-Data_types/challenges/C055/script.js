alert( 1.35.toFixed(1) ); // 1.4

alert( 6.35.toFixed(1) ); // 6.3

// Because of its binary representation, 6.35 is stored internally as something like 6.34999999999999..., so when we round 6.35 we are actually rounding 6.3499..., which causes it to round down. 1.35, on the other hand, is stored internally as something slightly above 1.35, so it rounds up correctly.

// To fix this we multiply the number by 10, since we want only one decimal place, apply the rounding, and then divide back by 10. This way we work with 63.5, whose rounding behaves correctly.

alert( Math.round(6.35 * 10) / 10); // 6.4
