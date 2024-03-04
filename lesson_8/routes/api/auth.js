const express = require("express");

const {validateBody, auth} = require("../../middlewares");
const {schemas} = require("../../models/user");

const ctrl = require("../../controllers/auth");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);
router.get("/current", auth, ctrl.getCurrent);
router.post("/logout", auth, ctrl.logout);

module.exports = router;