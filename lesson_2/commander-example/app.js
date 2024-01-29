const books = require("./books/index");
const {program} = require("commander");

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

program
    .option("-a, --action, <type>")
    .option("-i, --id, <type>")
    .option("-t, --title, <type>")
    .option("-at, --author, <type>");

program.parse();

const options = program.opts();

invokeAction(options);
