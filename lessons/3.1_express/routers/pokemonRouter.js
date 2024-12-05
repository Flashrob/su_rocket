const router = require("express").Router();
const pokemonController = require("../controllers/pokemonController.js");

router.get("/", pokemonController.getAllPokemon);
router.get("/:name", pokemonController.getOnePokemonByName);
router.post("/", pokemonController.createPokemon);
router.put("/:name", pokemonController.updatePokemonByName);
router.delete("/:name", pokemonController.deletePokemonByName);

module.exports = router;
