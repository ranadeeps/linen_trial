import Box from "@mui/material/Box";
import Carousel from "./Carousel";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Themes";
import Navbar from "./Navbar";

export const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%", margin: "0%" }}>
        <Carousel />
        <Navbar />
      </Box>
    </ThemeProvider>
  );
};
