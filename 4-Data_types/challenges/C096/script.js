function getSecondsToday() {
    let date1 = new Date();
    let date2 = new Date();

    date2.setHours(0, 0, 0, 0);
    let diff = date1.getTime() - date2.getTime();
    return Math.round(diff / 1000);
}

alert(getSecondsToday())
