// const fs = require("fs/promises"); // file system
// const fs = require("fs").promises; // file system
import fs from "fs/promises";

// read
// fs.readFile("./files/file.txt", "utf-8")
//     .then(console.log)
//     .catch(console.log);

// const fileOperations = async () => {
//     const buffer = await fs.readFile("./files/file.txt");
//     const text = buffer.toString();
//
//     // const text = await fs.readFile("./files/file.txt", "utf-8");
//
//     console.log(text);
// };

// fileOperations();

// ---
// add

// const addText = async () => {
//     const result = await fs.appendFile("./files/file2.txt", "\nsome text");
//     console.log(result); // undefined
// };
//
// addText();

// ---
// write

// const writeText = async () => {
//     const result = await fs.writeFile("./files/file1.txt", "new text");
//     console.log(result); // undefined
// };
//
// writeText();

// ---
