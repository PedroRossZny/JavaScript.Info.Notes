function makeCounter() {
    let count = 0;

    function counter() {
        counter.set = function (value) {
            count = value;
        }
        counter.decrease = function () {
            count--;
        }
        return count++;
    }

    counter.set = 0;
    counter.decrease = 0;

    return counter;
}

let counter = makeCounter();

alert(counter());
alert(counter());
counter.set(10);
alert(counter());
counter.decrease();
alert(counter());