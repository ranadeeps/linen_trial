import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    text: {
      primary: "#000000",
      secondary: "#00E676",
    },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#000000", // labels use highlight color
          "&.Mui-focused": { color: "#000000" },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: { color: "#000000" },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#000000",
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: "#000000", // unchecked
          "&.Mui-checked": { color: "#000000" }, // checked
        },
      },
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
