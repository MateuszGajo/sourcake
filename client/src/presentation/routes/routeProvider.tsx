import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SignIn from "../authentication/pages/SignIn";
import Main from "../layout/Main";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<Main />}>
        <Route path="/login" element={<SignIn />}></Route>
      </Route>
    </Route>
  )
);

const RouteProvider = () => <RouterProvider router={router} />;

export default RouteProvider;
