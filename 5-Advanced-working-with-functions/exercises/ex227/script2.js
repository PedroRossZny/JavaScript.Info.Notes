function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

alert( pow(2, 3) ); // 8

/*
              if n==1  = x
             /
pow(x, n) =
             \
              else     = x * pow(x, n - 1)
*/

/*
function pow(x, n) {
    return (n == 1) ? x : (x * pow(x, n - 1));
}
*/
