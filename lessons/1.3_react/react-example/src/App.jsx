import "./App.css";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Link,
} from "react-router-dom";
import Profile from "./components/Profile.jsx";
import Root from "./components/Root.jsx";
import User from "./components/User.jsx";


export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" element={<>
          <h1>Welcome back Home</h1>
          <Link to="/user/Brandon/pets/Woofy">Go to user page</Link>
        </>} />
        <Route
          path="/profile"
          element={<Profile />} >
          <Route
            path="edit"
            element={
              <div>
                <h3>Edit Profile</h3>
                <p>Edit me now</p>
              </div>
            }
          />
          <Route
            path="view"
            element={
              <div>
                <h3>View Profile</h3>
                <p>View me now</p>
              </div>
            }
          />
        </Route>
        <Route path="/user/:username/pets/:petname" element={<User />} />
      </Route>
    )
  );

  return (
    <>
      <h1>Hello World</h1>
      <RouterProvider router={router} />
    </>
  );
}