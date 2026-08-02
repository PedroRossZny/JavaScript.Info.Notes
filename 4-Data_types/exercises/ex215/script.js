let date = new Date();
alert(+date); // the number of milliseconds, same as date.getTime()

let start = new Date(); // start measuring time

// do the job
for (let i = 0; i < 100000; i++) {
    let Something = i * i * i;
}

let end = new Date(); // end measuring time

alert( `The loop took ${end - start} ms` );
