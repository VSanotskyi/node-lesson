const {HttpError} = require("../helpers");

const validateBody = (schemas) => (req, res, next) => {
    const {error} = schemas.validate(req.body);
    if (error) {
        next(HttpError(400, error.message));
    }
    next();
};

module.exports = validateBody;