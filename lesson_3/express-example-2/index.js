const express = require("express");
const books = require("./books");

const app = express();

app.get("/books", (req, res) => {
    // const dataBaseRes = null;
    // res.send(dataBaseRes);
    // res.json(dataBaseRes);

    // res.send(books);
    res.json(books);
});

app.listen(3000, () => {
    console.log("start server!");
});