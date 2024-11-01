export const PokemonList = ({ pokemonData }) => {
  const pokemonList = pokemonData.map((pokemon) => {
    return <p>{pokemon}</p>;
  });

  return pokemonList;
};
