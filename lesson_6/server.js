const mongoose = require("mongoose");

const app = require("./app");

const {DB_URI, PORT = 8080} = process.env;

mongoose.set("strictQuery", true);

mongoose.connect(DB_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log("Server started on port 8080");
        });
    })
    .catch(err => {
        console.log(err.message);
        process.exit(1);
    });