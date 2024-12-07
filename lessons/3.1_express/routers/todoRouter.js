const router = require("express").Router();
const {
  getAll,
  create,
  getOne,
  updateOne,
  deleteOne,
} = require("../controllers/todoController.js");

router.get("/", getAll);
router.post("/", create);
router.get("/:id", getOne);
router.put("/:id", updateOne);
router.delete("/:id", deleteOne);

module.exports = router;
