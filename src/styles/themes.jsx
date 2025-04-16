import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#111415",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
  spacing: [0, 4, 8, 16, 32, 64],
});
export default theme;
