const books = require("./books/index");
const yargs = require("yargs");
const {hideBin} = require("yargs/helpers");

const invokeAction = async ({action, id, title, author}) => {
    switch (action) {
        case "read":
            const allBooks = await books.getAll();
            console.log(allBooks);
            return;
        case "getById":
            const book = await books.getById(id);
            console.log(book);
            return;
        case "add":
            const newBook = await books.add({title, author});
            console.log(newBook);
            return;
        case "updateByID":
            const updateBook = await books.updateByID(id, {title, author});
            console.log(updateBook);
            return;
        case "rmById":
            const rmBook = await books.rmById(id);
            console.log(rmBook);
            return;
        default:
            console.log("unknown action");
    }
};

const arr = hideBin(process.argv);
const {argv} = yargs(arr);

invokeAction(argv);
