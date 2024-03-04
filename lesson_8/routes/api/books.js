const express = require("express");

const ctrl = require("../../controllers/books");

const {validateBody, isValidId, auth} = require("../../middlewares");

const {schemas} = require("../../models/book");

const router = express.Router();

router.get("/", auth, ctrl.getAll);

router.get("/:id", auth, isValidId, ctrl.getById);

router.post("/", auth, validateBody(schemas.addSchema), ctrl.add);

router.put("/:id", auth, isValidId, validateBody(schemas.updateSchema), ctrl.updateById);

router.delete("/:id", auth, isValidId, ctrl.deleteById);

module.exports = router;