let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    date: new Date(Date.UTC(2017, 0, 1)),
    room
};

alert( JSON.stringify(meetup) );
/*
    {
        "title":"Conference",
        "date":"2017-01-01T00:00:00.000Z",
        "room": {"number":23}
    }
*/