function aclean(arr) {
    let arrayClean = new Map();

    for (let w of arr) {
        let key = w.toLowerCase().split('').sort().join('');
        arrayClean.set(key, w);
    }

    return Array.from(arrayClean.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
