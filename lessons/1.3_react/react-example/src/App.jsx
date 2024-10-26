import { useState } from "react";
import "./App.css";
import { Secret } from "./components/Secret";

function App() {
  const [showSecret, setShowSecret] = useState(false);
  return (
    <>
      <h1>React App</h1>
      {showSecret ? <Secret /> : null}
      <button onClick={() => setShowSecret(!showSecret)}>
        Click me for a big secret
      </button>
    </>
  );
}

export default App;
