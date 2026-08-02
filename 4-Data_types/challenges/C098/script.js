function formatDate(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();

    if (diff < 1000) {
        return "right now";
    } else if (diff < (60 * 1000)) {
        return `${Math.floor(diff / 1000)} sec. ago`;
    } else if (diff < (60 * 60 * 1000)) {
        return `${Math.floor(diff / (60 * 1000))} min. ago`
    } else {
        let day = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate();
        let month = ((date.getMonth() + 1) < 10) ? '0' + (date.getMonth() + 1): (date.getMonth() + 1);
        let year = ((date.getFullYear() % 100) < 10) ? '0' + (date.getFullYear() % 100) : (date.getFullYear() % 100);
        let hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
        let minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();

        return `${day}.${month}.${year} ${hours}:${minutes}`;
    }
}

alert( formatDate(new Date(new Date - 1)) ); // "right now"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

// yesterday's date like 31.12.16 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );
