function isEmpty(obj) {
    if (obj["8:30"] === undefined) {
        return true;
    } else {
        return false;
    }
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false