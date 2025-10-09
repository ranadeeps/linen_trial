// import { useState } from "react";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import logo from "../assets/mark_svg.svg";
// import SignInWithPhone from "./SignInWithPhone";
// import SignedInMenu from "./SignedInMenu";
// import { logout } from "../utils/authentication";

const Navbar = () => {
  // const [open, setOpen] = useState(false);
  // const [signedInPhone, setSignedInPhone] = useState<string | null>(null);

  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={1}
      sx={{ backgroundColor: "primary.main" }}
    >
      <Toolbar>
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{
            height: 45, // adjust height
            width: "auto", // optional, keeps aspect ratio if square
            marginRight: 0.5, // spacing between logo and text
          }}
        />

        <Typography sx={{ fontWeight: "bold" }}>THE TRUE TOUCH</Typography>
        <Box sx={{ py: 1, ml: "auto" }}>
          {/* {signedInPhone ? (
            // <Typography>Signed in as {signedInPhone}</Typography>
            <SignedInMenu onLogout={logout} phone="ds"></SignedInMenu>
          ) : (
            <Button variant="outlined" onClick={() => setOpen(true)}>
              Sign in
            </Button>
          )} */}

          {/* <SignInWithPhone
            open={open}
            onClose={() => setOpen(false)}
            onSuccess={(phone) => {
              setSignedInPhone(phone);
              setOpen(false);
            }}
          /> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
