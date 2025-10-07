import Box from "@mui/material/Box";
import Carousel from "./Carousel";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../Themes";
import Navbar from "./Navbar";
// import { ProductGrid } from "./ProductGrid";
import { Route, Routes } from "react-router";
import { PreLaunch } from "./PreLaunch";
import { Footer } from "./Footer";
// import BreadCrumb from "./BreadCrumb";

export const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          margin: "0%",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Carousel />
        <Navbar />
        {/* <BreadCrumb /> */}
        <Routes>
          {/* <Route path="/" element={<ProductGrid></ProductGrid>} /> */}
          <Route path="/" element={<PreLaunch></PreLaunch>} />
        </Routes>
        <Footer></Footer>
      </Box>
    </ThemeProvider>
  );
};
