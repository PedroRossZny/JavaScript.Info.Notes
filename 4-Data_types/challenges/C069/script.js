function camelize(str) {
    str =  str.split('-');

    let firstWord = str.shift()
    str = str.map(word => word = word[0].toUpperCase() + word.slice(1));
    str.unshift(firstWord)

    return str.join('');
}

alert(camelize("background-color"))
alert(camelize("list-style-image"))
alert(camelize("-webkit-transition"))
