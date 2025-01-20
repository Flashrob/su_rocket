import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={import.meta.env.VITE_SOME_DOMAIN}
    clientId={import.meta.env.VITE_SOME_CLIENT_ID}
    authorizationParams={{
      redirect_uri: "http://localhost:5173",
      audience: import.meta.env.VITE_SOME_AUDIENCE,
      scope:
        "read:current_user update:current_user_metadata openid profile email",
    }}
  >
    <StrictMode>
      <App />
    </StrictMode>
  </Auth0Provider>
);
