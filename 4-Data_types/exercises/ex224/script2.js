let room = {
    number: 23,
    toJSON() {
        return this.number;
    }
};

let meetup = {
    title: "Conference",
    room
};

alert( JSON.stringify(room) ); // 23

alert( JSON.stringify(meetup) );
/*
    {
        "title":"Conference",
        "room": 23
    }
*/
