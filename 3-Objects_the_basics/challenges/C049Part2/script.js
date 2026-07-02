// The solution is to return the object itself from every call.

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert( this.step );
        return this;
    }
};

// We also can write a single call per line. For long chains it's more readable:

ladder
    .up()
    .up()
    .down()
    .showStep() // 1
    .down()
    .showStep() // 0
    