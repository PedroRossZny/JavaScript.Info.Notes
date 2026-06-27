// Object.assign(dest, ...sources)

let user = { name: "John" };

let permission1 = { canView: true };
let permission2 = { canEdit: true };

// copies all properties from permission1 and permission2 into user
Object.assign(user, permission1, permission2);

// now user = { name: "John", canView: true, canEdit: true }
alert(user.name); // John
alert(user.canView); // true
alert(user.canEdit); // true