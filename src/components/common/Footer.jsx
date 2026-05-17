import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Link,
  Divider,
  IconButton,
  Dialog,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import CloseIcon from "@mui/icons-material/Close";
import { Link as RouterLink } from "react-router-dom";

import cert1 from "../../assets/pictures/certificate1.jpg";
import cert2 from "../../assets/pictures/certificate2.jpg";

const footerLinks = {
  "Let Us Help": [
    { label: "Contact Us", path: "/contact" },
  ],
  "Our Company": [
    { label: "About Us", path: "/about" },
  ],
};

const socialLinks = [
  { icon: <InstagramIcon />, href: "https://www.instagram.com/sunbeamprintingpress/" },
];

export default function Footer() {
  // 🔥 Dialog state
  const [open, setOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const handleOpen = (img) => {
    setSelectedCert(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCert(null);
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#051121",
        color: "#fbfbf9e8",
      }}
    >
      {/* MAIN FOOTER */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4} alignItems="center">

          {/* LEFT - Intro */}
          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <Typography variant="h6" fontWeight={700}>
                You need it. We print it. You love it.
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Sun Beam Printing Press is here to help every step of the way.
              </Typography>
            </Stack>
          </Grid>

          {/* MIDDLE - Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <Grid item xs={12} sm={6} md={2} key={title}>
              <Stack spacing={2}>
                <Typography variant="subtitle1" fontWeight={600}>
                  {title}
                </Typography>
                <Stack spacing={1}>
                  {links.map((link) => (
                    <Link
                      key={link.label}
                      component={RouterLink}
                      to={link.path}
                      color="inherit"
                      sx={{
                        textDecoration: "none",
                        fontSize: "0.875rem",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          textDecoration: "underline",
                          color: "#4fc3f7",
                        },
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Stack>
              </Stack>
            </Grid>
          ))}

          {/* RIGHT - CERTIFICATES */}
          <Grid item xs={12} md={4}>
            <Stack spacing={2} alignItems="center">
              <Typography variant="subtitle1" fontWeight={600}>
                Our Certifications
              </Typography>

              <Stack direction="row" spacing={2}>
                {[cert1, cert2].map((img, index) => (
                  <Box
                    key={index}
                    component="img"
                    src={img}
                    alt="certificate"
                    onClick={() => handleOpen(img)} // ✅ opens dialog
                    sx={{
                      width: { xs: 140, md: 170 },
                      height: { xs: 100, md: 120 },
                      objectFit: "contain",
                      borderRadius: 2,
                      background: "white",
                      p: 1.2,
                      cursor: "pointer",
                      transition: "all 0.3s ease",

                      "&:hover": {
                        transform: "scale(1.08)",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                      },
                    }}
                  />
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.2)" }} />

      {/* BOTTOM BAR */}
      <Container maxWidth="lg" sx={{ py: 3 }}>
        <Grid container spacing={3} alignItems="center">

          {/* LEFT */}
          <Grid item xs={12} md={6}>
            <Typography variant="caption" sx={{ opacity: 0.8 }}>
              A Printing press company © 2007-present Sun Beam Printing Press. All rights reserved.
            </Typography>
          </Grid>

          {/* RIGHT */}
          <Grid item xs={12} md={6}>
            <Stack
              direction="row"
              spacing={2}
              justifyContent={{ xs: "center", md: "flex-end" }}
              alignItems="center"
            >
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  size="small"
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "white",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  px: 2,
                  py: 1,
                  bgcolor: "rgba(255,255,255,0.1)",
                  borderRadius: 1,
                }}
              >
                <Typography variant="body2">in</Typography>
                <Typography variant="body2">India</Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* 🔥 CERTIFICATE DIALOG */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        PaperProps={{
          sx: {
            background: "rgba(5, 17, 33, 0.95)",
            borderRadius: 3,
            border: "1px solid rgba(79, 195, 247, 0.3)",
          },
        }}
      >
        {/* Close button */}
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "white",
            zIndex: 1,
            background: "rgba(0,0,0,0.5)",
            "&:hover": { background: "rgba(0,0,0,0.7)" },
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Image */}
        {selectedCert && (
          <Box sx={{ p: 2 }}>
            <Box
              component="img"
              src={selectedCert}
              alt="certificate"
              sx={{
                width: "100%",
                maxHeight: "80vh",
                objectFit: "contain",
                borderRadius: 2,
              }}
            />
          </Box>
        )}
      </Dialog>
    </Box>
  );
}