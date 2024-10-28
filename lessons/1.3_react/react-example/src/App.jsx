import { useState } from "react";
import "./App.css";
import { Secret } from "./components/Secret";

function App() {
  const [showSecret, setShowSecret] = useState(false);
  const [yourSecret, setYourSecret] = useState("");

  return (
    <>
      <h1>React App</h1>
      {/* {showSecret ? <Secret /> : null} */}
      {showSecret && <Secret />}
      <button onClick={() => setShowSecret(!showSecret)}>
        {showSecret ? "Click me to hide secret" : "Click me for a big secret"}
      </button>
      {showSecret && (
        <input
          onChange={(e) => setYourSecret(e.target.value)}
          placeholder="Now tell me your secret"
        />
      )}
      {yourSecret && showSecret && <p>Your secret: {yourSecret}</p>}
    </>
  );
}

export default App;
