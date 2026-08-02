// An alternative solution would be to get hours/minutes/seconds and convert them to seconds:

function getSecondsToday() {
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}

alert( getSecondsToday() );
