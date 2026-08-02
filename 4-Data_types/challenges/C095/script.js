function getLastDayOfMonth(year, month) {
    let day = maxday = 0;

    while (true) {
        let date = new Date(year, month)
        date.setDate(date.getDate() + day)
        if (date.getMonth() == month) {
            maxday += 1;
        } else {
            break;
        }

        day += 1;
    }

    return maxday;
}

alert(getLastDayOfMonth(2012, 1));
