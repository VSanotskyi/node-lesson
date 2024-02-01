const express = require("express");
const moment = require("moment");
const fs = require("fs/promises");
const cors = require("cors");

const books = require("./books");

const app = express();

// const corsMiddleware = cors();
// app.use(corsMiddleware);

app.use(cors());

/*
 app.use((req, res, next) => {
 console.log("first middleware");
 next();
 });
 app.use((req, res, next) => {
 console.log("second middleware");
 next();
 });
 */

/*
 app.use(async (req, res, next) => {
 const {method, url} = req;
 const date = moment().format("DD-MM-YYYY_hh:mm:ss");
 await fs.appendFile("./public/server.log", `\n${method}, ${url}, ${date}`);
 next();
 });
 */

app.get("/products", (req, res) => {
    console.log("products");
    res.json([]);
});

app.get("/books", (req, res) => {
    console.log("books");
    res.json(books);
});

app.use((req, res, next) => {
    res.status(404).json({
        message: "Not found",
    });
});

app.listen(3000, () => {
    console.log("start server");
});