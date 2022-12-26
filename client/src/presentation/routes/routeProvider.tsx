import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SignIn from "../authentication/pages/SignIn";
import Authentication from "../layout/Authentication";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<Authentication />}>
        <Route path="/login" element={<SignIn />}></Route>
      </Route>
    </Route>
  )
);

const RouteProvider = () => <RouterProvider router={router} />;

export default RouteProvider;
