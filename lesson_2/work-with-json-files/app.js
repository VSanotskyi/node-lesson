const books = require("./books/index");

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
    }
};

// invokeAction({action: "read"});
// invokeAction({action: "getById", id: "u9kgwNWGi3uUUwh0b8V49"});
// invokeAction({action: "add", title: "Book2", author: "author2"});
// invokeAction({action: "remove", id: "FJnGX5abryH4ufr_fNLc4"});
// invokeAction(
//     {
//         action: "updateByID",
//         id: "5lNeCIn5fjtXCJCIHiq-W",
//         title: "Book5",
//         author: "author2",
//     });
// invokeAction(
//     {
//         action: "rmById",
//         id: "5lNeCIn5fjtXCJCIHiq-W",
//     });