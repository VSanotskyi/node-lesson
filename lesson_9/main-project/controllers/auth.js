const bcrypt = require("bcrypt");
const path = require("node:path");
const fs = require("node:fs/promises");
const jwt = require("jsonwebtoken");
const gravatar = require("gravatar");

const {User} = require("../models/user");
const {HttpError, ctrlWrapper} = require("../helpers");

const {SECRET_KEY} = process.env;

const avatarsDir = path.join(__dirname, "../", "public", "avatars");

const register = async (req, res) => {
    const {email, password, name} = req.body;

    const user = await User.findOne({email});

    if (user) throw HttpError(409, "Email already in use");

    const hashPassword = await bcrypt.hash(password, 10);
    const avatarUrl = gravatar.url(email);

    const newUser = await User.create({
        name, email,
        password: hashPassword,
        avatar: avatarUrl,
    });

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

const updateAvatar = async (req, res) => {
    const {_id} = req.user;
    const {path: tempUpload, originalname} = req.file;
    const fileName = `${_id}_${originalname}`;
    const resultUpload = path.join(avatarsDir, fileName);

    await fs.rename(tempUpload, resultUpload);

    const avatarUrl = path.join("avatars", fileName);

    await User.findByIdAndUpdate(_id, {avatar: avatarUrl});
    res.json({avatar: avatarUrl});
};

module.exports = {
    register: ctrlWrapper(register),
    login: ctrlWrapper(login),
    getCurrent: ctrlWrapper(getCurrent),
    logout: ctrlWrapper(logout),
    updateAvatar: ctrlWrapper(updateAvatar),
};