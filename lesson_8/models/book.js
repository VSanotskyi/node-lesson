const {Schema, model} = require("mongoose");
const Joi = require("joi");

const {handleMongooseError} = require("../middlewares");

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, {versionKey: false, timestamps: true});

bookSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
});

const updateSchema = Joi.object({
    title: Joi.string(),
    author: Joi.string(),
}).min(1).message("Must be title or author");

const schemas = {
    addSchema,
    updateSchema,
};

const Book = model("book", bookSchema);

module.exports = {
    Book,
    schemas,
};