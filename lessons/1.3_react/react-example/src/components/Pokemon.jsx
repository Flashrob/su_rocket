import { useState } from "react";

export const Pokemon = (props) => {
  const [showPokemon, setShowPokemon] = useState(false);
  const handleClick = () => {
    setShowPokemon(!showPokemon);
  };
  return (
    <>
      {showPokemon && <img src={props.imageURL} />}
      <button onClick={handleClick}>{showPokemon ? "Show" : "Hide"}</button>
    </>
  );
};
