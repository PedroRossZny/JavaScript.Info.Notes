function fib(n) {
    let a = b = 1;
    if (n <= 2) {
        return 1;
    } else {
        for (let i = 3; i <= n; i++) {
            [a, b] = [b, a + b]
        }
        return b;
    }
}

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757
