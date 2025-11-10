import {
  AppBar,
  Avatar,
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  BottomNavigation,
  BottomNavigationAction,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CollectionsIcon from "@mui/icons-material/Collections";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import SettingsIcon from "@mui/icons-material/Settings";
import { useTheme } from "@mui/material/styles";

const drawerWidth = 250;

export const AppLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: "Uploads", icon: <CloudUploadIcon />, path: "/App/uploads" },
    { text: "Albums", icon: <CollectionsIcon />, path: "/App/albums" },
    { text: "Orders", icon: <LocalShippingIcon />, path: "/App/orders" },
    { text: "Cart", icon: <ShoppingCartCheckoutIcon />, path: "/App/cart" },
    { text: "Settings", icon: <SettingsIcon />, path: "/App/settings" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  // 🧭 Sync menu selection with current URL path
  useEffect(() => {
    const currentPath = location.pathname;
    const index = menuItems.findIndex((item) =>
      currentPath.toLowerCase().includes(item.path.toLowerCase())
    );
    setSelectedIndex(index >= 0 ? index : 0);
  }, [location.pathname]);

  const handleMenuClick = (index: number, path: string) => {
    setSelectedIndex(index);
    navigate(path);
  };

  const drawer = (
    <Box
      sx={{
        height: "100%",
        background: "rgba(255,255,255,0.15)",
        backdropFilter: "blur(12px)",
        borderRight: "1px solid rgba(255,255,255,0.15)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 2,
      }}
    >
      <List sx={{ width: "100%" }}>
        {menuItems.map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => handleMenuClick(index, item.path)}
              sx={{
                mx: 2,
                mb: 1,
                borderRadius: "12px",
                background:
                  selectedIndex === index
                    ? "linear-gradient(90deg, #1976d2, #42a5f5)"
                    : "transparent",
                color: selectedIndex === index ? "#fff" : "#333",
                boxShadow:
                  selectedIndex === index
                    ? "0 4px 12px rgba(25,118,210,0.3)"
                    : "none",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateX(6px)",
                  background:
                    selectedIndex === index
                      ? "linear-gradient(90deg, #1976d2, #42a5f5)"
                      : "rgba(25,118,210,0.1)",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: selectedIndex === index ? "#fff" : "#1976d2",
                  minWidth: "40px",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontWeight: 600,
                  fontFamily: "Poppins, sans-serif",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "linear-gradient(180deg, #f7f9fc 0%, #edf2f7 100%)",
      }}
    >
      <CssBaseline />

      {/* ✅ AppBar */}
      <AppBar
        position="fixed"
        sx={{
          width: "100%",
          background:
            "linear-gradient(90deg, rgba(25,118,210,0.9), rgba(66,165,245,0.85))",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          zIndex: 1201,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: { xs: 2, sm: 4, md: 6 },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              fontFamily: "Poppins, sans-serif",
              letterSpacing: 0.8,
              color: "#fff",
            }}
          >
            SnapShip
          </Typography>

          <Box display="flex" alignItems="center" gap={1.5}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 500,
                fontFamily: "Poppins, sans-serif",
                display: { xs: "none", sm: "block" },
                color: "#fff",
              }}
            >
              Pushpak
            </Typography>
            <Avatar
              alt="Pushpak"
              src="https://i.pravatar.cc/100?img=3"
              sx={{
                width: 46,
                height: 46,
                border: "2px solid rgba(255,255,255,0.8)",
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>

      {/* ✅ Desktop Drawer */}
      {!isMobile && (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              mt: 8,
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(10px)",
              borderRight: "1px solid rgba(255,255,255,0.2)",
            },
          }}
        >
          {drawer}
        </Drawer>
      )}

      {/* ✅ Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          mt: 8,
          mb: isMobile ? 7 : 0,
          ml: !isMobile ? `${drawerWidth}px` : 0,
          p: { xs: 2, sm: 3 },
          minHeight: "calc(100vh - 64px)",
          overflowY: "auto",
          transition: "all 0.3s ease",
        }}
      >
        <Outlet />
      </Box>

      {/* ✅ Bottom Navigation (Mobile Only) */}
    {isMobile && (
    <Box
        sx={{
        position: "fixed",
        bottom: 10,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        zIndex: 1200,
        }}
    >
        <BottomNavigation
        showLabels={false}
        value={selectedIndex}
        onChange={(_, newValue) => {
            handleMenuClick(newValue, menuItems[newValue].path);
        }}
        sx={{
            width: "90%",
            maxWidth: 900, // ✅ Matches your main card width
            borderRadius: "20px",
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            py: 0.5,
        }}
        >
        {menuItems.map((item, index) => (
            <BottomNavigationAction
            key={index}
            icon={item.icon}
            sx={{
                color: selectedIndex === index ? "#1976d2" : "#666",
                "& .MuiSvgIcon-root": {
                fontSize: "1.8rem",
                transition: "0.3s",
                transform:
                    selectedIndex === index ? "scale(1.2)" : "scale(1)",
                },
            }}
            />
        ))}
        </BottomNavigation>
    </Box>
    )}
    </Box>
  );
};
