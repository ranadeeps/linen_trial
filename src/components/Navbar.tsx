import React, { useState } from "react";
import { AppBar, Toolbar, Button, Menu, Grid, Box, Link } from "@mui/material";
import { NavItems } from "../static/NavItems";
import type { Module } from "../static/NavItems";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeModules, setActiveModules] = useState<Module[]>([]);
  const [open, setOpen] = useState(false);

  const handleOpen = (
    event: React.MouseEvent<HTMLElement>,
    modules: Module[]
  ) => {
    setAnchorEl(event.currentTarget);
    setActiveModules(modules);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setActiveModules([]);
    setOpen(false);
  };

  return (
    <AppBar position="static" color="inherit" elevation={1}>
      <Toolbar>
        {NavItems.map((item, i) => (
          <Button
            key={i}
            {...(item.url ? { href: item.url } : {})}
            onMouseEnter={(e) => handleOpen(e, item.modules)}
            sx={{ fontWeight: "bold", mx: 2 }}
          >
            {item.name}
          </Button>
        ))}

        <Menu
          anchorEl={anchorEl}
          open={open && Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{
            onMouseEnter: () => setOpen(true),
            onMouseLeave: handleClose,
          }}
          PaperProps={{ sx: { padding: 2, minWidth: 600 } }}
        >
          <Grid container spacing={3}>
            {activeModules.map((mod, j) => (
              <Grid sx={{ xs: 4 }} key={j}>
                <Box>
                  {mod.imageUrl && (
                    <Box
                      component="img"
                      src={mod.imageUrl}
                      alt={mod.name}
                      sx={{
                        width: "100%",
                        height: 120,
                        objectFit: "cover",
                        borderRadius: 2,
                        mb: 1,
                      }}
                    />
                  )}

                  {mod.url ? (
                    <Link
                      component="a"
                      href={mod.url}
                      underline="hover"
                      color="text.primary"
                      sx={{ fontWeight: "bold", display: "block", mb: 1 }}
                    >
                      {mod.name}
                    </Link>
                  ) : (
                    <Box
                      sx={{
                        fontWeight: "bold",
                        display: "block",
                        mb: 1,
                        cursor: "default",
                      }}
                    >
                      {mod.name}
                    </Box>
                  )}

                  {mod.sub_modules?.map((sub, k) =>
                    sub.url ? (
                      <Link
                        key={k}
                        component="a"
                        href={sub.url}
                        underline="hover"
                        color="text.secondary"
                        display="block"
                        sx={{ fontSize: 14, py: 0.3 }}
                      >
                        {sub.name}
                      </Link>
                    ) : (
                      <Box
                        key={k}
                        sx={{
                          fontSize: 14,
                          py: 0.3,
                          color: "text.secondary",
                          cursor: "default",
                        }}
                      >
                        {sub.name}
                      </Box>
                    )
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
