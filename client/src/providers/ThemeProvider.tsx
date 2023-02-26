import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF5F00",
      light: "#ff7f33",
      dark: "#e65600",
    },
    secondary: {
      main: "#00092C",
      light: "#1a2241",
      dark: "#000828",
    },
  },
});

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const AppThemeProvider = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default AppThemeProvider;
