import { countUser, getUserCount } from './visitsCount.js'

// weakMap.set(john, "secrets documents");
// if john dies, secret documents will be destroyed automatically

// 📁 main.js
let john = { name: "John" };

countUser(john); // count his visits
alert(getUserCount(john));

// later john leaves us
john = null;
