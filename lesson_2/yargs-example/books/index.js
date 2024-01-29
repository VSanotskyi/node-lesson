const fs = require("fs/promises");
const path = require("path");
const {nanoid} = require("nanoid");

const booksPath = path.join(__dirname, "books.json");

const getAll = async () => {
    const data = await fs.readFile(booksPath);
    // console.log(data); // buffer
    return JSON.parse(data);
};

const getById = async (id) => {
    const bookId = String(id);
    const books = await getAll();

    const result = books.find(el => el.id === bookId);
    return result || null;
};

const add = async (data) => {
    const books = await getAll();
    const newBook = {
        id: nanoid(),
        ...data,
    };

    books.push(newBook);

    await fs.writeFile(booksPath, JSON.stringify(books, null, 2));

    return newBook;
};

const updateByID = async (id, data) => {
    const bookId = String(id);
    const books = await getAll();
    const index = books.findIndex(item => item.id === bookId);

    if (index === -1) return null;

    books[index] = {id: bookId, ...data};
    await fs.writeFile(booksPath, JSON.stringify(books, null, 2));

    return books[index];
};

const rmById = async (id) => {
    const bookId = String(id);
    const books = await getAll();
    const index = books.findIndex(item => item.id === bookId);

    if (index === -1) return null;

    const [result] = books.splice(index, 1);

    await fs.writeFile(booksPath, JSON.stringify(books, null, 2));

    return result;
};

module.exports = {
    getAll,
    getById,
    add,
    updateByID,
    rmById,
};