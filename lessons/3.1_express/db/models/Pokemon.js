const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pokemonSchema = new Schema(
  { name: String, type: String },
  {
    versionKey: false,
  }
);
const Pokemon = mongoose.model("Pokemon", pokemonSchema);

module.exports = Pokemon;
