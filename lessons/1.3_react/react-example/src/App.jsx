import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import "./App.css";

const UserContext = createContext();

function Component1() {
  return <Component2 />;
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
  const userContext = useContext(UserContext);
  console.log(userContext.user);
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const userContext = useContext(UserContext);

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

const exampleUser = {
  email: "rob@rob.com",
  password: "12345",
  id: 1,
  name: "Rob",
};

function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <Component1 />
      <LoginPage />
    </UserContext.Provider>
  );
}

const LoginPage = () => {
  const userContext = useContext(UserContext);
  // userContext.user
  // userContext.setUser
  console.log(userContext);
  const login = async () => {
    try {
      const user = exampleUser;
      // await axios.post("localhost:3000/login", {
      //   email,
      //   password,
      // });
      userContext.setUser(user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      onClick={() => {
        login();
      }}
    >
      Login
    </button>
  );
};

export default App;
