import Box from "@mui/material/Box";
import Carousel from "./Carousel";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../Themes";
import Navbar from "./Navbar";
import { ProductGrid } from "./ProductGrid";
import { Route, Routes } from "react-router";
// import BreadCrumb from "./BreadCrumb";

export const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%", margin: "0%" }}>
        <Carousel />
        <Navbar />
        {/* <BreadCrumb /> */}
        <Routes>
          <Route path="/" element={<ProductGrid></ProductGrid>} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
};
