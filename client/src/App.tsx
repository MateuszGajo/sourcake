import { CssBaseline } from "@mui/material";
import AppThemeProvider from "./providers/ThemeProvider";
import RouteProvider from "./routes/routeProvider";
import "./providers/i18n";
import { useEffect } from "react";
import axios from "axios";
import { useAtom } from "jotai";
import { user as userAtom } from "./store/user";

function App() {
  const [user, setUser] = useAtom(userAtom);

  useEffect(() => {
    const asyncFunc = async () => {
      const res = await axios.get("http://localhost:8000/auth/generateCSRF", {
        withCredentials: true,
        headers: {
          csrfToken: localStorage.getItem("csrfToken"),
        },
      });

      const csrfToken = res.data.csrfToken;
      if (csrfToken) localStorage.setItem("csrfToken", csrfToken);
    };

    const verifyLogin = async () => {
      const res = await axios.get("http://localhost:8000/auth/verify", {
        withCredentials: true,
        headers: {
          csrfToken: localStorage.getItem("csrfToken"),
        },
      });
    };

    asyncFunc();
    verifyLogin();
  }, []);

  const login = () => {
    axios.defaults.withCredentials = true;
    axios.post("http://localhost:8000/auth/login", {
      withCredentials: true,
      method: "post",
      body: {
        aa: "aaa",
      },
    });
  };

  const checkCSRF = () => {
    axios.get("http://localhost:8000/auth/checkCSRF", {
      withCredentials: true,
    });
  };

  return (
    <div className="App">
      <button onClick={login}>Login</button>
      <button onClick={checkCSRF}>Check CSRF</button>
      <AppThemeProvider>
        <RouteProvider />
      </AppThemeProvider>
      <CssBaseline />
    </div>
  );
}

export default App;
