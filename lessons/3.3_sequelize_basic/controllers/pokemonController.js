const { Pokemon } = require("../db/models/index.js");
const baseController = require("./baseController.js");
const pokemonController = baseController(Pokemon);

const customPokemonFunction = (req, res) => {
  // do some custom pokemon stuff
};

const customPokemonController = { ...pokemonController, customPokemonFunction };

module.exports = customPokemonController;
