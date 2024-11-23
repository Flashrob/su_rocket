const pokemonList = require("./database.js");

const getAllPokemon = (req, res) => {
  const { type } = req.query;
  if (!type) return res.json(pokemonList);

  const filteredPokemon = pokemonList.filter(
    (pokemon) => pokemon.type === type
  );

  res.json(filteredPokemon);
};

const getOnePokemonByName = (req, res) => {
  const { name } = req.params;
  if (!name) return res.status(400).send("Bad Request");
  // we can also run validation on name, to check if it is a string
  // we can also sanitize name, to convert any html or script tags into a plain string
  const pokemon = pokemonList.find((pokemon) => pokemon.name == name);

  if (!pokemon) return res.status(404).send("Pokemon not found");
  res.json(pokemon);
};

const createPokemon = (req, res) => {
  const pokemon = pokemonList.find((pokemon) => pokemon.name === name);
  if (pokemon) return res.status(400).send("Pokemon already exists");

  pokemonList.push(req.body);
  res.json(req.body);
};

const updatePokemonByName = (req, res) => {
  const { name } = req.params;
  const updatedPokemon = req.body;
  const pokemonIndex = pokemonList.findIndex(
    (pokemon) => pokemon.name === name
  );

  if (pokemonIndex == -1) return res.status(400).send("Pokemon not found");

  const pokemon = pokemonList[pokemonIndex];

  pokemonList[pokemonIndex] = { ...pokemon, ...updatedPokemon };

  res.json(pokemonList[pokemonIndex]);
};

const deletePokemonByName = (req, res) => {
  const { name } = req.params;
  const pokemonIndex = pokemonList.findIndex(
    (pokemon) => pokemon.name === name
  );

  if (pokemonIndex == -1) return res.status(400).send("Pokemon not found");

  pokemonList.splice(pokemonIndex, 1);

  res.json(pokemonList);
};

module.exports = {
  getAllPokemon,
  getOnePokemonByName,
  createPokemon,
  updatePokemonByName,
  deletePokemonByName,
};
