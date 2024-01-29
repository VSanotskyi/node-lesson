import users from "./users.js";
import {getCurrentMonth, isLeapYear} from "./date/index.js";

const month = getCurrentMonth();
console.log(month);
console.log(users.admins);