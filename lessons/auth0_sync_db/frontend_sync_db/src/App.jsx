import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import "./App.css";

function App() {
  const { isAuthenticated, logout, loginWithRedirect, getAccessTokenSilently } =
    useAuth0();

  const checkUser = async () => {
    if (isAuthenticated) {
      let token = await getAccessTokenSilently();

      // check if the user has no name
      // -> redirect to page that collects user information first; onboarding
      console.log(token);
    } else {
      console.log("no user logged in");
    }
  };

  useEffect(() => {
    checkUser();
  }, []);
  return (
    <>
      <h1>Hello world</h1>
      {isAuthenticated && (
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Log Out
        </button>
      )}
      <button onClick={() => loginWithRedirect()}>Login/Register</button>
    </>
  );
}

export default App;

// test@test.com Abc-1234
