import Box from "@mui/material/Box";
import Carousel from "./Carousel";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../Themes";
import Navbar from "./Navbar";
// import { ProductGrid } from "./ProductGrid";
import { Route, Routes } from "react-router";
import { PreLaunch } from "./PreLaunch";
import { Footer } from "./Footer";
import { FeedbackForm } from "./FeedbackForm";
import { Snackbar } from "@mui/material";
import React from "react";
// import BreadCrumb from "./BreadCrumb";

export const Home = () => {
  // interface State extends SnackbarOrigin {
  //   open: boolean;
  //   message: string;
  // }
  const [snackBar, setSnackBar] = React.useState({
    open: false,
    message: "",
  });
  const openSnackBar = (message: string) => {
    setSnackBar({ open: true, message });
  };

  const closeSnackBar = () => {
    setSnackBar({ ...snackBar, open: false });
  };
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
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={snackBar.open}
          autoHideDuration={3000}
          message={snackBar.message}
          onClose={closeSnackBar}
        />
        <Carousel />
        <Navbar />
        {/* <BreadCrumb /> */}
        <Routes>
          {/* <Route path="/" element={<ProductGrid></ProductGrid>} /> */}
          <Route path="/" element={<PreLaunch></PreLaunch>} />
          <Route
            path="/feedback"
            element={
              <FeedbackForm snackBarFunction={openSnackBar}></FeedbackForm>
            }
          />
        </Routes>
        <Footer></Footer>
      </Box>
    </ThemeProvider>
  );
};
