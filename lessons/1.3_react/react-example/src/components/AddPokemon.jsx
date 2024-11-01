import { useState } from "react";

export const AddPokemon = ({ pokemons, setPokemons }) => {
  const [inputValue, setinputValue] = useState("");
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setinputValue(e.target.value)}
      />
      <button
        onClick={() => {
          setPokemons([...pokemons, inputValue]);
        }}
      >
        Add Pokemon
      </button>
    </>
  );
};
