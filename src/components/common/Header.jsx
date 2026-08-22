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

import {
  Link as RouterLink,
  useLocation,
} from "react-router-dom";

import logo from "../../assets/pictures/logo.jpeg";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Printing Services", path: "/services" },
    { label: "Gallery", path: "/gallery" },
    { label: "Resources", path: "/resources" },
    { label: "Contact Us", path: "/contact" },
    { label: "Get a Quote", path: "/quotation" },
  ];

  const isPathActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  return (
    <AppBar
      component="header"
      position="fixed"
      elevation={10}
      sx={{
        width: "100%",
        maxWidth: "100%",
        overflowX: "hidden",
        backgroundColor: "#061727",
      }}
    >
      {/* =====================================================
          DESKTOP + MOBILE HEADER
      ====================================================== */}

      <Toolbar
        sx={{
          minHeight: {
            xs: 60,
            md: 72,
          },

          px: {
            xs: 2,
            sm: 3,
            md: 3,
            lg: 4,
          },

          gap: {
            xs: 1,
            md: 3,
            lg: 4,
          },

          width: "100%",
          maxWidth: 1500,

          mx: "auto",

          boxSizing: "border-box",
        }}
      >
        {/* =================================================
            MOBILE MENU BUTTON
        ================================================== */}

        <IconButton
          aria-label="Open navigation menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          sx={{
            display: {
              xs: "flex",
              md: "none",
            },

            color: "#fff",

            flexShrink: 0,
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* =================================================
            LOGO
        ================================================== */}

        <Box
            component={RouterLink}
            to="/"
            aria-label="Sun Beam Printing Press - Home"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              flexShrink: 0,
              width: {
                xs: 70,
                sm: 80,
                md: 90,
              },
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Sun Beam Printing Press logo"
              loading="eager"
              decoding="async"
              sx={{
                display: "block",

                height: {
                  xs: 25,
                  sm: 28,
                  md: 32,
                },

                width: "auto",

                maxWidth: {
                  xs: 65,
                  sm: 75,
                  md: 85,
                },

                objectFit: "contain",
              }}
            />

            <Typography
              component="span"
              sx={{
                display: "block",

                color: "#fbfbf9e8",

                fontWeight: 700,

                fontSize: {
                  xs: "0.52rem",
                  sm: "0.56rem",
                  md: "0.62rem",
                },

                lineHeight: 1,

                letterSpacing: {
                  xs: "0.2px",
                  md: "0.3px",
                },

                mt: 0.3,

                whiteSpace: "nowrap",
              }}
            >
              SUNBEAM
            </Typography>
          </Box>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================== */}

        <Box
          component="nav"
          aria-label="Main navigation"
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },

            alignItems: "center",

            justifyContent: "center",

            flex: 1,

            gap: {
              md: 2,
              lg: 3.5,
              xl: 4.5,
            },

            minWidth: 0,
          }}
        >
          {menuItems.map((item) => {
            const isActive =
              isPathActive(item.path);

            return (
              <Box
                key={item.path}
                component={RouterLink}
                to={item.path}
                aria-current={
                  isActive
                    ? "page"
                    : undefined
                }
                sx={{
                  position: "relative",

                  display: "block",

                  textDecoration: "none",

                  color: isActive
                    ? "#01A9D8"
                    : "#fff",

                  fontWeight: isActive
                    ? 700
                    : 500,

                  fontSize: {
                    md: "0.78rem",
                    lg: "0.85rem",
                    xl: "0.88rem",
                  },

                  lineHeight: 1.4,

                  px: {
                    md: 0.4,
                    lg: 0.6,
                  },

                  py: 0.5,

                  whiteSpace: "nowrap",

                  flexShrink: 0,

                  "&:hover": {
                    color: isActive
                      ? "#01A9D8"
                      : "#fff",
                  },

                  "&::after": {
                    content: '""',

                    position: "absolute",

                    left: 0,

                    bottom: -5,

                    width: isActive
                      ? "100%"
                      : "0%",

                    height: "2px",

                    backgroundColor:
                      "#01A9D8",

                    transition:
                      "width 0.3s ease",
                  },

                  "&:hover::after": {
                    width: "100%",
                  },

                  "&:focus-visible": {
                    outline:
                      "2px solid #4fc3f7",

                    outlineOffset: 4,

                    borderRadius: 1,
                  },
                }}
              >
                {item.label}
              </Box>
            );
          })}
        </Box>
      </Toolbar>

      {/* =====================================================
          MOBILE DRAWER
      ====================================================== */}

      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          component: "nav",

          "aria-label":
            "Mobile navigation",

          sx: {
            width: {
              xs: 260,
              sm: 280,
            },

            maxWidth: "85vw",

            backgroundColor:
              "#061727",

            color: "#fff",

            overflowX: "hidden",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",

            justifyContent: "flex-end",

            p: 1,
          }}
        >
          <IconButton
            onClick={() => setOpen(false)}
            aria-label="Close navigation menu"
            sx={{
              color: "#fff",
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <List
          sx={{
            px: 1,
            py: 0,
          }}
        >
          {menuItems.map((item) => {
            const isActive =
              isPathActive(item.path);

            return (
              <ListItem
                key={item.path}
                component={RouterLink}
                to={item.path}
                onClick={() => setOpen(false)}
                aria-current={
                  isActive
                    ? "page"
                    : undefined
                }
                sx={{
                  bgcolor: isActive
                    ? "#01A9D8"
                    : "transparent",

                  color: "#fff",

                  borderRadius: 1,

                  mx: 0,

                  my: 0.5,

                  textDecoration: "none",

                  "&:hover": {
                    bgcolor: "#01A9D8",
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    sx: {
                      fontSize:
                        "0.88rem",

                      fontWeight:
                        isActive
                          ? 700
                          : 500,
                    },
                  }}
                />
              </ListItem>
            );
          })}
        </List>
      </Drawer>

      {/* =====================================================
          MARQUEE
      ====================================================== */}

      <Box
        component="aside"
        aria-label="Sun Beam Printing Press information"
        sx={{
          width: "100%",

          maxWidth: "100%",

          backgroundColor:
            "#01A9D8",

          overflow: "hidden",

          whiteSpace: "nowrap",

          height: {
            xs: 32,
            md: 35,
          },

          display: "flex",

          alignItems: "center",
        }}
      >
        <Typography
          component="div"
          sx={{
            color: "#fff",

            fontWeight: 700,

            px: 2,

            fontSize: {
              xs: 11,
              md: 13,
            },

            lineHeight: 1,

            animation:
              "scrollText 20s linear infinite",

            willChange: "transform",

            whiteSpace: "nowrap",
          }}
        >
          SUN BEAM PRINTING PRESS - Complete
          Printing & Press Solutions | Guwahati
        </Typography>

        <Box
          component="style"
          sx={{
            display: "none",
          }}
        >
          {`
            @keyframes scrollText {
              0% {
                transform: translateX(100%);
              }

              100% {
                transform: translateX(-100%);
              }
            }
          `}
        </Box>
      </Box>
    </AppBar>
  );
}