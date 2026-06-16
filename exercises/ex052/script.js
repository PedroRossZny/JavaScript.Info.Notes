// result = (a !== null && a !== undefined) ? a : b;

let user;

alert(user ?? "Anonymous"); // Anonymous (user is undefined)

user = "John";

alert(user ?? "Anonymous"); // John (user is not null/undefined)

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

// shows the first truthy value:
alert(firstName || lastName || nickName || "Anonymous"); // Supercoder

let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0
