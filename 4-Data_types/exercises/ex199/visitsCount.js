// 📁 visitsCount.js

/*
let vistsCountMap = new Map(); // map: user => visits count

// increase the visits count
function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}
*/

let visitsCountMap = new WeakMap(); // weakmap: user => visits count

// increase the visits count
export function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}

export function getUserCount(user) {
    return visitsCountMap.get(user);
}
