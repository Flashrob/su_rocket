const router = require("express").Router();
const { getAll } = require("../controllers/categoryController.js");

router.get("/", getAll);

module.exports = router;
