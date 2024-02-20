const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

const DB_HOST = "mongodb+srv://Vasyl:u7xi7l1VyBQyGG4E@cluster0.qdvxftb.mongodb.net/books_reader?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose.connect(DB_HOST)
    .then(() => console.log("Database connect"))
    .catch((e) => console.log(e.message));

app.listen(8080, () => {
    console.log("Server started on port 8080");
});