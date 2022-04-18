import { red, amber, grey } from "@mui/material/colors";

import {
  responsiveFontSizes,
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";

const lightMuiTheme = createTheme({
  palette: {
    primary: {
      main: "#FFF",
    },
    secondary: {
      main: amber[500],
      light: "#feefc3",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#FFF",
    },
  },
  typography: {
    overline: {
      fontWeight: 500,
      fontSize: "0.7rem",
    },
  },
  shape: {
    borderRadius: "0.5rem",
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
});

export const light = responsiveFontSizes(lightMuiTheme);
