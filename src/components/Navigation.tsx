import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ListIcon from "@mui/icons-material/List";
import Toolbar from "@mui/material/Toolbar";
import "../assets/styles/Navigation.scss";

const drawerWidth = 240;
const navItems = [
  ["Expertise", "expertise"],
  ["History", "history"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

function Navigation({ parentToChild, modeChange }: any) {
  const { mode } = parentToChild;

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        const isScrolled = window.scrollY > navbar.clientHeight;
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const drawer = (
    <Box
      sx={{
        textAlign: "center",
        background: mode === "dark" ? "#121212" : "#fff",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <p style={{ padding: "1rem", fontWeight: "bold" }}>
          <ListIcon /> Menu
        </p>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item[0]} disablePadding>
              <ListItemButton
                onClick={() => scrollToSection(item[1])}
                sx={{
                  textAlign: "center",
                  "&:hover": {
                    background: mode === "dark" ? "#1e1e1e" : "#f5f5f5",
                  },
                }}
              >
                <ListItemText
                  primary={item[0]}
                  primaryTypographyProps={{
                    fontWeight: 600,
                    fontSize: "1.1rem",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>

      {/* Theme Toggle in Drawer */}
      <Box sx={{ py: 2 }}>
        <IconButton onClick={modeChange} className="theme-toggle-button">
          {mode === "dark" ? (
            <LightModeIcon />
          ) : (
            <DarkModeIcon />
          )}
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        id="navigation"
        elevation={0}
        sx={{
          transition: "all 0.3s ease",
          backgroundColor: scrolled
            ? mode === "dark"
              ? "#121212"
              : "#ffffffee"
            : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          color: mode === "dark" ? "#fff" : "#000",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: { xs: 2, sm: 5 },
          }}
        >
          {/* Left - Logo / Brand */}
          <Box sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>
            MyPortfolio
          </Box>

          {/* Right - Nav Links */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item[0]}
                onClick={() => scrollToSection(item[1])}
                sx={{
                  color: mode === "dark" ? "#fff" : "#333",
                  fontWeight: 500,
                  fontSize: "1rem",
                  textTransform: "none",
                  "&:hover": {
                    color: mode === "dark" ? "#0084ff" : "#1976d2",
                  },
                }}
              >
                {item[0]}
              </Button>
            ))}

            {/* Theme Toggle (Desktop) */}
            <IconButton onClick={modeChange} className="theme-toggle-button" sx={{ ml: 2 }}>
              {mode === "dark" ? (
                <LightModeIcon />
              ) : (
                <DarkModeIcon />
              )}
            </IconButton>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default Navigation;
