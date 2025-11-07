import { AppBar, Box, Drawer, IconButton, Link, List, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import logo from "../../assets/Images/logo1.png"
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";


const pages = [
  {
      menu:"Products",
      id:"#Landing-product"
  },
  {
      menu:"How it Works",
      id:"#Landing-working"
  },
  {
      menu:"Why us",
      id:"#Landing-whyus"
  },
    {
      menu:"FAQ",
      id:"#Landing-FAQ"
  }
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "linear-gradient(to right, #f8f9fa, #e9ecef)",
          boxShadow: "none",
          color: "#555",
          padding: 0,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <img
              src={logo}
              alt="Logo"
              style={{ height: 50, width: "auto", borderRadius: "50%" }}
            />
            <Typography variant="h6" fontFamily="Roboto, sans-serif">
              Snapship
            </Typography>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 4,
            }}
          >
            {pages.map((page) => (
              <Link
                key={page.menu}
                href={page.id}
                underline="none"
                sx={{
                  color: "#333",
                  textTransform: "none",
                  "&:hover": { color: "gray" },
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                {page.menu}
              </Link>
            ))}
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <Link
              href="#Landing-contact"
              underline="none"
              sx={{
                color: "#333",
                textTransform: "none",
                "&:hover": { color: "gray" },
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Contact Us
            </Link>
          </Box>

          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: "black" }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: { width: 240, background: "#f8f9fa", color: "black" },
        }}
      >
        <Box display="flex" justifyContent="flex-end" p={2}>
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {pages.map((page) => (
            <ListItemButton
              key={page.menu}
              component="a"
              href={page.id}
              onClick={() => setOpen(false)}
            >
              <ListItemText
                primary={page.menu}
                sx={{ fontFamily: "Roboto, sans-serif" }}
              />
            </ListItemButton>
          ))}
          <ListItemButton component="a" href="#Landing-contact">
            <ListItemText primary="Contact Us" />
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
};