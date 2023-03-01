import { useAtom } from "jotai";
import { useLocation, Navigate } from "react-router-dom";
import { user } from "../store/user";

export function RequireAuth({ children }: { children: JSX.Element }) {
  const [userr, setUser] = useAtom(user);
  let location = useLocation();
  console.log(userr);

  return children;

  if (!user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}
