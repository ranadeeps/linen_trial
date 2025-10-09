import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#e2eced",
    },
    secondary: { main: "#135638" },
    text: {
      primary: "#135638",
      secondary: "#e2eced",
    },
  },
  components: {
    // 👈 ADD THIS SECTION TO REMOVE FOCUS BACKGROUND ON BUTTONS/INTERACTIVE COMPONENTS
    MuiButtonBase: {
      defaultProps: {
        // Disabling the ripple will also remove the focus background
        // but it removes the mouse-click animation too.
        // We'll focus on just overriding the color.
      },
      styleOverrides: {
        root: {
          // This targets the root of the ButtonBase when it has keyboard focus
          "&.Mui-focusVisible": {
            // Set the background color to transparent to remove the default highlight
            backgroundColor: "transparent !important",
            // Also ensure the visual outline isn't obscured by the background
            outline: "2px solid #135638", // You might want to keep a custom outline for accessibility
            borderRadius: "50%", // Assuming it's a circle like a radio button
          },
        },
      },
    },
    // --------------------------------------------------------------------------

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#135638", // labels use highlight color
          "&.Mui-focused": { color: "#135638" },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          // This targets the entire wrapper on focus
          "&.Mui-focusVisible": {
            backgroundColor: "transparent !important",
          },
          // This targets the area around the radio/checkbox input itself when focused
          "& .MuiButtonBase-root": {
            "&.Mui-focusVisible": {
              backgroundColor: "transparent !important",
            },
          },
          // This targets the label text area on focus
          "& .MuiFormControlLabel-label": {
            "&.Mui-focusVisible": {
              backgroundColor: "transparent !important",
            },
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: { color: "#135638" },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#135638",
          "&.Mui-checked": { color: "#135638" }, // checked
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: "#135638", // unchecked
          "&.Mui-checked": {
            color: "#135638", // checked
          },
          // Target the focus-visible state on the radio button's root element
          "&.Mui-focusVisible": {
            backgroundColor: "transparent !important", // Remove the highlight
            // Ensure any default outline is visible or set your own for a11y
            outline: "2px solid #135638",
            outlineOffset: "2px",
            borderRadius: "50%",
          },
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
    body2: {
      letterSpacing: "0.1em",
    },
  },
});
