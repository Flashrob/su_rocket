import { useState } from "react";
import "./App.css";
import { Pokemon } from "./components/Pokemon";
import { Secret } from "./components/Secret";

const pokemonList = [
  "https://s1.piq.land/2010/12/27/Q1Iy6ILz1OaoCLIS1tDw4Rbp_400x400.png",
  "https://s1.piq.land/2016/06/25/lHOcalcuYVPpIap8H4AVIUJD_400x400.png",
  "https://art.pixilart.com/024a0554a48cc9b.png",
];

function App() {
  const pokemonImages = pokemonList.map((pokemonURL) => {
    return <Pokemon key={pokemonURL} imageURL={pokemonURL} />;
  });

  return <>{pokemonImages}</>;
}

export default App;

/* 
  const pokemonImages = [
      {showPokemon && <img src={https://s1.piq.land/2010/12/27/Q1Iy6ILz1OaoCLIS1tDw4Rbp_400x400.png} />}
      <button onClick={handleClick}>{showPokemon ? "Show" : "Hide"}</button>,<>
      {showPokemon && <img src={https://s1.piq.land/2016/06/25/lHOcalcuYVPpIap8H4AVIUJD_400x400.png} />}
      <button onClick={handleClick}>{showPokemon ? "Show" : "Hide"}</button>
    </>,<>
      {showPokemon && <img src={https://art.pixilart.com/024a0554a48cc9b.png} />}
      <button onClick={handleClick}>{showPokemon ? "Show" : "Hide"}</button>
    </>]

*/
