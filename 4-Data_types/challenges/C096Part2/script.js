// To get the number of seconds, we can generate a date using the current day and time 00:00:00, then substract it from “now”.

// The difference is the number of milliseconds from the beginning of the day, that we should divide by 1000 to get seconds:

function getSecondsToday() {
    let now = new Date();

    // create an object using the current day/month/year
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let diff = now - today; // ms difference
    return Math.round(diff / 1000); // make seconds
}

alert( getSecondsToday() );
