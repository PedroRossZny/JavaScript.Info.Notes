let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
};

let arr = Array.from(arrayLike); // (*)
alert(arr.pop()); // World (method works)

let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
};

arr = Array.from(range);
alert(arr);

// Array.from(obj[, mapFn, thisArg])

// assuming thet rage is taken from the example above

// square each number
arr = Array.from(range, num => num * num);

alert(arr); // 1,4,9,16,25

let str = '𝒳😂';

// splits str into array of characters
let chars = Array.from(str);

alert(chars[0]); // 𝒳
alert(chars[1]); // 😂
alert(chars.length); // 2

chars = []; // Array.from internally does the same loop
for (let char of str) {
    chars.push(char);
}

alert(chars);

function slice(str, start, end) {
    return Array.from(str).slice(start, end).join('');
}

str = '𝒳😂𩷶';

alert( slice(str, 1, 3) ); // 😂𩷶

// the native method does not support surrogate pairs
alert( str.slice(1, 3) ); // garbage (two pieces from different surrogate pairs)
