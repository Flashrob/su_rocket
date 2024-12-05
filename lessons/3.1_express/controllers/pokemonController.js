const PokemonModel = require("../db/models/Pokemon.js");

const getAllPokemon = async (req, res) => {
  const pokemonList = await PokemonModel.findAll(); // just an example of an abstraction I can create

  const { type } = req.query;
  if (!type) return res.json(pokemonList);

  const filteredPokemon = pokemonList.filter((pokemon) => {
    return pokemon.type === type;
  });

  res.json(filteredPokemon);
};

const getOnePokemonByName = async (req, res) => {
  const { name } = req.params;
  if (!name) return res.status(400).send("Bad Request");
  // we can also run validation on name, to check if it is a string
  // we can also sanitize name, to convert any html or script tags into a plain string

  const pokemonList = await PokemonModel.find({
    name: { $regex: new RegExp(name, "i") },
  });

  const pokemon = pokemonList.find(
    (pokemon) => pokemon.name.toLowerCase() == name.toLowerCase()
  );

  if (!pokemon) return res.status(404).send("Pokemon not found");
  res.json(pokemon);
};

const createPokemon = async (req, res) => {
  const { name } = req.body;
  const pokemonList = await PokemonModel.find();
  const pokemon = pokemonList.find((pokemon) => pokemon.name === name);
  if (pokemon) return res.status(400).send("Pokemon already exists");

  const newPokemon = await PokemonModel.create(req.body);
  res.json(newPokemon);
};

const updatePokemonByName = async (req, res) => {
  const { name } = req.params;
  const updatedPokemon = req.body;

  const pokemon = await PokemonModel.findOneAndUpdate(
    {
      name: { $regex: new RegExp(name, "i") },
    },
    updatedPokemon
  );

  if (!pokemon) return res.status(400).send("Pokemon not found");

  res.json(pokemon);
};

const deletePokemonByName = async (req, res) => {
  const { name } = req.params;

  const pokemon = await PokemonModel.findOneAndDelete({
    name: { $regex: new RegExp(`^${name}$`, "i") },
  });

  if (!pokemon) return res.status(400).send("Pokemon not found");

  res.json(pokemon);
};

module.exports = {
  getAllPokemon,
  getOnePokemonByName,
  createPokemon,
  updatePokemonByName,
  deletePokemonByName,
};
