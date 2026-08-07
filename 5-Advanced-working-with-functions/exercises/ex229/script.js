let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

/*
let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
list.next.next.next.next = null;
*/

let secondList = list.next.next;
list.next.next = null

list.next.next = secondList;

// prepend the new value to the list
list = { value: "new item", next: list };

list.next = list.next.next;