import { useState } from "react";
import "./App.css";
import { Secret } from "./components/Secret";

function App() {
  const [showPokemon, setShowPokemon] = useState(true);

  const handleClick = () => {
    setShowPokemon(!showPokemon);
  };

  return (
    <>
      <h1>React App</h1>
      {showPokemon && (
        <img src="https://s1.piq.land/2010/12/27/Q1Iy6ILz1OaoCLIS1tDw4Rbp_400x400.png" />
      )}
      <button onClick={handleClick}>{showPokemon ? "Hide" : "Show"}</button>
    </>
  );
}

export default App;
