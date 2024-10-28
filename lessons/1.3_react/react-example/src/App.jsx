import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [hasClicked, setHasClicked] = useState(false);
  const [unrelatedClick, setUnrelatedClick] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (hasClicked) {
      console.log("CLEARED THE INPUT");

      console.log("SUDDENLY GOT AN ERROR");
      setIsError(!isError);
    }

    setHasClicked(false);
  }, [hasClicked]);

  // useEffect( //Second way of writing the above
  //   function clearInput() {
  //     if (hasClicked) {
  //       console.log("CLEARED THE INPUT");
  //     }

  //     setHasClicked(false);
  //   },
  //   [hasClicked]
  // );

  return (
    <>
      <h1>React App</h1>

      <input
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setHasClicked(true);
          setValue("");
        }}
      >
        Submit
      </button>
      <p>{value}</p>

      <button
        onClick={() => {
          setUnrelatedClick(!unrelatedClick);
        }}
      >
        DON'T TRIGGER EFFECT
      </button>

      {isError && <h1 style={{ color: "red" }}>ERROR</h1>}
    </>
  );
}

export default App;
