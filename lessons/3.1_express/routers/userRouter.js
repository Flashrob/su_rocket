const router = require("express").Router();
const userController = require("../controllers/userController.js");

router.get("/", userController.getAllUsers);
router.get("/:name", userController.getOneUserByName);
router.post("/", userController.createUser);
router.put("/:name", userController.updateUserByName);
router.delete("/:name", userController.deleteUserByName);

module.exports = router;
