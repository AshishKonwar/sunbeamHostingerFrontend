import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { Link as RouterLink, useLocation } from "react-router-dom";

import logo from "../../assets/pictures/logo.jpeg";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

const menuItems = [
  { label: "Home", path: "/" },
  { label: "About & Overview", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Resources", path: "/resources" },
  { label: "Contact", path: "/contact" },
  { label: "Get a Quote", path: "/quotation" },
];

  return (
    <AppBar
      position="fixed"
      elevation={10}
      sx={{
        backgroundColor: "#061727",
      }}
    >
      {/* 🔝 TOP BAR */}
      <Toolbar
        sx={{
          gap: { xs: 1, md: 4 },
          minHeight: { xs: 60, md: 72 },
          px: { xs: 2, md: 4 },
        }}
      >
        {/* Mobile Menu Button */}
        <IconButton
          sx={{ display: { xs: "flex", md: "none" }, color: "#fff" }}
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Box component="img" src={logo} sx={{ height: { xs: 24, md: 30 } }} />
          <Typography sx={{ fontSize: 10, fontWeight: 600, color: "#fbfbf9e8" }}>
            SUNBEAM
          </Typography>
        </Box>
      </Toolbar>

      {/* 🔥 DESKTOP MENU */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          gap: 4,
          py: 1,
        }}
      >
        {menuItems.map((item) => {
          const isActive =
            item.path === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(item.path);

          return (
            <Box
              key={item.label}
              component={RouterLink}
              to={item.path}
              sx={{
                position: "relative",
                textDecoration: "none",
                color: isActive ? "#01A9D8" : "#fff",
                fontWeight: isActive ? 700 : 500,
                px: 1,

                /* ❌ No color change on hover */
                "&:hover": {
                  color: isActive ? "#01A9D8" : "#fff",
                },

                /* 🔥 underline */
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: -4,
                  width: isActive ? "100%" : "0%",
                  height: "2px",
                  backgroundColor: "#01A9D8",
                  transition: "width 0.3s ease",
                },

                "&:hover::after": {
                  width: "100%",
                },
              }}
            >
              {item.label}
            </Box>
          );
        })}
      </Box>

      {/* 🔥 MOBILE DRAWER */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, bgcolor: "#061727", height: "100%", color: "#fff" }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
            <IconButton onClick={() => setOpen(false)} sx={{ color: "#fff" }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {menuItems.map((item) => {
              const isActive =
                item.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(item.path);

              return (
                <ListItem
                  key={item.label}
                  component={RouterLink}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  sx={{
                    bgcolor: isActive ? "#01A9D8" : "transparent",
                    color: "#fff",
                    borderRadius: 1,
                    mx: 1,
                    my: 0.5,

                    "&:hover": {
                      bgcolor: "#01A9D8",
                    },
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>

      {/* 🔥 MARQUEE */}
      <Box
        sx={{
          backgroundColor: "#01A9D8",
          overflow: "hidden",
          whiteSpace: "nowrap",
          height: 35,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontWeight: 700,
            px: 2,
            fontSize: { xs: 12, md: 14 },
            animation: "scrollText 20s linear infinite",
          }}
        >
          SUN BEAM PRINTING PRESS - Complete Printing & Press Solutions | Guwahati
        </Typography>

        <style>
          {`
            @keyframes scrollText {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
          `}
        </style>
      </Box>
    </AppBar>
  );
}