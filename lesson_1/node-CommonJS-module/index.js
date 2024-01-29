// console.log("Welcome");
// const users = require("./users");
// console.log(users);
//
// const {admins} = require("./users");
// console.log(admins);

const date = require("./date");

// const month = date.getCurrentMonth(); // 1
const month = require("./date").getCurrentMonth(); // 1
console.log(month);