import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import "./App.css";

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const userContext = useContext(UserContext);
  console.log(userContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${userContext.user} again!`}</h2>
      <button onClick={() => userContext.setUser("Brandon")}>
        Set user to Brandon
      </button>
    </>
  );
}

function App() {
  return (
    <>
      <Component1 />
    </>
  );
}

export default App;
