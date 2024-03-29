const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {User} = require("../models/user");
const {HttpError, ctrlWrapper} = require("../helpers");

const {SECRET_KEY} = process.env;

const register = async (req, res) => {
    const {email, password, name} = req.body;

    const user = await User.findOne({email});

    if (user) throw HttpError(409, "Email already in use");

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({name, email, password: hashPassword});

    res.status(201).json({
        name: newUser.name,
        email: newUser.email,
    });
};

const login = async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});

    if (!user) throw HttpError(401, "Email or password invalid");

    const passwordCompare = await bcrypt.compare(password, user.password);

    if (!passwordCompare) throw HttpError(401, "Email or password invalid");

    const payload = {
        id: user.id,
    };

    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: 60 * 60});

    await User.findByIdAndUpdate(user._id, {token});

    res.json({token});
};

const getCurrent = async (req, res) => {
    const {email, name} = req.user;

    res.json({email, name});
};

const logout = async (req, res) => {
    const {_id} = req.user;

    await User.findByIdAndUpdate(_id, {token: null});

    res.json({message: "Logout success"});
};

module.exports = {
    register: ctrlWrapper(register),
    login: ctrlWrapper(login),
    getCurrent: ctrlWrapper(getCurrent),
    logout: ctrlWrapper(logout),
};