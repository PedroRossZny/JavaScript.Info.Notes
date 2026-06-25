/*
it("Raises x to the power n", fucntion() {
    let x = 5;

    let result = x;
    assert.equal(pow(x, 1), result);

    result *= x;
    assert.equal(pow(x, 2), result);

    result *= x;
    assert.equal(pow(x, 3), result);
});
*/

// The problem with this test is that it groups three different test cases into a single `it` block, using multiple `assert` calls. If one assertion fails, the following ones will not be executed, making it harder to identify exactly which test case caused the error.
// The ideal approach is to separate each assertion into its own `it` block, making the tests independent and their results easier to understand. Since all the tests follow the same logic, we can also generate them using a `for` loop, avoiding code duplication.

describe("pow", function() {
    const x = 5;

    for(let i = 1; i <= 3; i++) {
        it(`Raises ${x} to the power ${i}`, function() {
            assert.equal(pow(x, i), x ** i);
        });
    }

});