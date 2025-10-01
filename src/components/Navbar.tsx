import { useState } from "react";
import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import SignInWithPhone from "./SignInWithPhone";
import SignedInMenu from "./SignedInMenu";
import { logout } from "../utils/authentication";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [signedInPhone, setSignedInPhone] = useState<string | null>(null);

  return (
    <AppBar position="static" color="inherit" elevation={1}>
      <Toolbar>
        <Typography sx={{ fontWeight: "bold" }}>THE TRUE TOUCH</Typography>
        <Box sx={{ py: 1, ml: "auto" }}>
          {signedInPhone ? (
            // <Typography>Signed in as {signedInPhone}</Typography>
            <SignedInMenu onLogout={logout} phone="ds"></SignedInMenu>
          ) : (
            <Button variant="outlined" onClick={() => setOpen(true)}>
              Sign in
            </Button>
          )}

          <SignInWithPhone
            open={open}
            onClose={() => setOpen(false)}
            onSuccess={(phone) => {
              setSignedInPhone(phone);
              setOpen(false);
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
