/*
show(parameters,
    aligned, // 5 spaces padding at the left
    one,
    after,
    another
  ) {
    // ...
}
*/

function pow(x, n) {
    let result = 1;
    //              <--
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    //              <--
    return result;
}