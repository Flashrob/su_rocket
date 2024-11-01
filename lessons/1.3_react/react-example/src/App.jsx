import { useState } from "react";
import "./App.css";
import { AddPokemon } from "./components/AddPokemon";
import { PokemonList } from "./components/PokemonList";

const pokemonData = ["charizard", "pikachu", "squirtle"];

function App() {
  const [pokemons, setPokemons] = useState(pokemonData);
  return (
    <>
      <h1>React App</h1>
      <AddPokemon pokemons={pokemons} setPokemons={setPokemons} />
      <PokemonList pokemonData={pokemons} />
    </>
  );
}

export default App;
