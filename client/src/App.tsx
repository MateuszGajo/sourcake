import { CssBaseline } from "@mui/material";
import AppThemeProvider from "./config/ThemeProvider";
import RouteProvider from "./presentation/routes/routeProvider";
import "./config/i18n";

function App() {
  return (
    <div className="App">
      <AppThemeProvider>
        <RouteProvider />
      </AppThemeProvider>
      <CssBaseline />
    </div>
  );
}

export default App;
