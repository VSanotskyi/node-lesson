const ctrlWrapper = ctrl => async (req, res, next) => {
    try {
        await ctrl(res, res, next);
    } catch (error) {
        next(error);
    }
};

module.exports = ctrlWrapper;