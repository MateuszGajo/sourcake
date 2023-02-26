import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SignIn from "../features/authentication/pages/SignIn";
import SignUp from "../features/authentication/pages/SignUp";
import Authentication from "../layout/Authentication";
import { RequireAuth } from "./RequiredAuth";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route
        element={
          <RequireAuth>
            <Authentication />
          </RequireAuth>
        }
      >
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
      </Route>
    </Route>
  )
);

const RouteProvider = () => <RouterProvider router={router} />;

export default RouteProvider;
