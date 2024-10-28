import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [submittedTitle, setSubmittedTitle] = useState("");
  return (
    <>
      <h1>React App</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSubmittedTitle(value);
          setValue("");
        }}
      >
        <input
          type="text"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>

      <input
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setSubmittedTitle(value);
          setValue("");
        }}
      >
        Submit
      </button>
      {submittedTitle && <h1>{submittedTitle}</h1>}
    </>
  );
}

export default App;
