import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    text: {
      primary: "#000000",
      secondary: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Montserrat",
    h5: {
      letterSpacing: "0.1em",
    },
    h6: {
      letterSpacing: "0.1em",
    },
    body1: {
      letterSpacing: "0.1em",
    },
  },
});
