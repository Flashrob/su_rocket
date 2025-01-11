const router = require("express").Router();
const {
  getAll,
  getOne,
  create,
  update,
  destroy,
} = require("../controllers/pokemonController.js");

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", destroy);

module.exports = router;
