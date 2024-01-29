import users from "./users.mjs";
import {getCurrentMonth} from "./date/index.mjs";

console.log(users.clients);

const month = getCurrentMonth();
console.log(month);