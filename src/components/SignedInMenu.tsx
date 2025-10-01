import React, { useState } from "react";
import { Typography, Button, Menu, MenuItem, Box } from "@mui/material";

type Props = {
  phone: string;
  onLogout: () => void;
};

export default function SignedInMenu({ phone, onLogout }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    onLogout();
  };

  return (
    <Box>
      <Button
        onClick={handleOpen}
        sx={{ textTransform: "none" }}
        color="inherit"
      >
        <Typography variant="body1" sx={{ mr: 1 }}>
          Signed in as
        </Typography>
        <Typography variant="body1" fontWeight="bold">
          {phone}
        </Typography>
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Box>
  );
}
