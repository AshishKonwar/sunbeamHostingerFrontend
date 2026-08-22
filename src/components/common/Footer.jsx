import React, { useState, useEffect, useRef } from "react";
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
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
<<<<<<< HEAD

import { Link as RouterLink, useLocation } from "react-router-dom";
import * as pdfjsLib from "pdfjs-dist";

import { CERTIFICATES } from "../../constants/trustBadgesData";

=======
import { Link as RouterLink, useLocation } from "react-router-dom";
import * as pdfjsLib from "pdfjs-dist";

import { CERTIFICATES } from "../../constants/trustBadgesData";

>>>>>>> a591240d7acbd39cd7eac50e7cadd346c3dc261c
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function PdfThumbnail({ file }) {
  const canvasRef = useRef(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
<<<<<<< HEAD

    async function render() {
      try {
        const pdf = await pdfjsLib.getDocument(file).promise;

        if (cancelled) return;

        const page = await pdf.getPage(1);

        if (cancelled) return;

        const canvas = canvasRef.current;

        if (!canvas) return;

        const base = page.getViewport({ scale: 1 });

        const scale = 120 / base.height;

        const viewport = page.getViewport({
          scale,
        });

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({
          canvasContext: canvas.getContext("2d"),
          viewport,
        }).promise;
      } catch (error) {
        if (!cancelled) {
          setError(true);
        }
      }
    }

    render();

    return () => {
      cancelled = true;
    };
  }, [file]);

  if (error) {
    return (
      <Box
        sx={{
          width: {
            xs: 120,
            sm: 140,
          },

          height: {
            xs: 90,
            sm: 100,
          },

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          bgcolor: "rgba(255,255,255,0.06)",

          borderRadius: 1.5,
        }}
      >
        <PictureAsPdfIcon
          aria-hidden="true"
          sx={{
            fontSize: {
              xs: 32,
              sm: 38,
            },

            color: "#e57373",
          }}
        />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: {
          xs: 120,
          sm: 140,
          md: 150,
        },

        height: {
          xs: 90,
          sm: 100,
          md: 105,
        },

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        bgcolor: "#fff",

        borderRadius: 1.5,

        overflow: "hidden",

        p: 0.5,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain",
        }}
      />
=======
    async function render() {
      try {
        const pdf = await pdfjsLib.getDocument(file).promise;
        if (cancelled) return;
        const page = await pdf.getPage(1);
        if (cancelled) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const base = page.getViewport({ scale: 1 });
        const scale = 120 / base.height;          // target ~120px tall thumb
        const vp = page.getViewport({ scale });

        canvas.width = vp.width;
        canvas.height = vp.height;
        await page.render({ canvasContext: canvas.getContext("2d"), viewport: vp }).promise;
      } catch (e) {
        if (!cancelled) setError(true);
      }
    }
    render();
    return () => { cancelled = true; };
  }, [file]);

  if (error)
    return (
      <Box sx={{ width: 140, height: 100, display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "rgba(255,255,255,0.08)", borderRadius: 2 }}>
        <PictureAsPdfIcon sx={{ fontSize: 40, color: "#e57373" }} />
      </Box>
    );

  return (
    <Box sx={{ width: { xs: 140, md: 170 }, height: { xs: 100, md: 120 }, display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "white", borderRadius: 2, overflow: "hidden", p: 1 }}>
      <canvas ref={canvasRef} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
>>>>>>> a591240d7acbd39cd7eac50e7cadd346c3dc261c
    </Box>
  );
}

<<<<<<< HEAD
const footerLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About Us",
    path: "/about",
  },
  {
    label: "Printing Services",
    path: "/services",
  },
  {
    label: "Gallery",
    path: "/gallery",
  },
  {
    label: "Resources",
    path: "/resources",
  },
  {
    label: "Contact Us",
    path: "/contact",
  },
  {
    label: "Get a Quote",
    path: "/quotation",
  },
=======
// const footerLinks = {
//   "Let Us Help": [{ label: "Contact Us", path: "/contact" }],
//   "Our Company": [{ label: "About Us", path: "/about" }],
// };

 const footerLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
  { label: "Get a Quote", path: "/quotation" },
>>>>>>> a591240d7acbd39cd7eac50e7cadd346c3dc261c
];

const socialLinks = [
  {
    label: "Instagram",
    icon: <InstagramIcon />,
    href: "https://www.instagram.com/sunbeamprintingpress/",
  },
];

export default function Footer() {
  const [open, setOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

<<<<<<< HEAD
  const location = useLocation();

  const handleOpen = (cert) => {
    setSelectedCert(cert);
    setOpen(true);
  };
=======
  const handleOpen  = (cert) => { setSelectedCert(cert); setOpen(true); };
  const handleClose = ()     => { setOpen(false); setSelectedCert(null); };
>>>>>>> a591240d7acbd39cd7eac50e7cadd346c3dc261c

  const location = useLocation();

  const isPathActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  return (
<<<<<<< HEAD
    <Box
      component="footer"
      sx={{
        width: "100%",
        maxWidth: "100%",
        overflowX: "hidden",

        backgroundColor: "#051121",

        color: "#fbfbf9e8",
      }}
    >
      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <Container
        maxWidth="lg"
        sx={{
          px: {
            xs: 2.5,
            sm: 3,
            md: 4,
          },

          py: {
            xs: 4,
            sm: 4.5,
            md: 5,
          },
        }}
      >
        <Grid
          container
          spacing={{
            xs: 4,
            md: 5,
          }}
          justifyContent="center"
        >
          {/* =================================================
              COMPANY INFORMATION
          ================================================== */}

            <Grid
              item
              xs={12}
              md={5}
            >
            <Stack
              spacing={{
                xs: 1.2,
                md: 1.5,
              }}
              alignItems={{
                xs: "center",
                md: "flex-start",
              }}
              textAlign={{
                xs: "center",
                md: "left",
              }}
            >
            <Typography
              component="h2"
              sx={{
                color: "#fff",
                fontWeight: 700,
                fontSize: {
                  xs: "1rem",
                  sm: "1.05rem",
                  md: "1.1rem",
                },
                lineHeight: 1.4,
              }}
            >
              Printing Press in Guwahati
            </Typography>

            <Typography
              component="p"
              sx={{
                color: "#01A9D8",
                fontWeight: 600,
                fontSize: {
                  xs: "0.78rem",
                  sm: "0.8rem",
                  md: "0.84rem",
                },
                lineHeight: 1.5,
                mb: 0,
              }}
            >
              Sun Beam Printing Press
            </Typography>

            <Typography
              component="p"
              sx={{
                color: "rgba(255,255,255,0.72)",
                fontSize: {
                  xs: "0.76rem",
                  sm: "0.8rem",
                  md: "0.84rem",
                },
                lineHeight: 1.7,
                maxWidth: 520,
                mb: 0,
              }}
            >
              Sun Beam Printing Press is a professional printing press in
              Guwahati, Assam, offering offset printing, digital printing,
              commercial printing, stationery printing, brochures, business
              cards, and other printing solutions.
            </Typography>
            </Stack>
          </Grid>

          {/* =================================================
              CERTIFICATIONS
          ================================================== */}

          <Grid
            item
            xs={12}
            md={7}
          >
            <Stack
              spacing={1.5}
              alignItems="center"
            >
              <Typography
                component="h2"
                sx={{
                  color: "#fff",

                  fontWeight: 600,

                  fontSize: {
                    xs: "0.9rem",
                    sm: "0.95rem",
                    md: "1rem",
                  },

                  lineHeight: 1.4,
                }}
              >
                Our Certifications
              </Typography>

              <Box
                sx={{
                  display: "flex",

                  flexWrap: "wrap",

                  gap: {
                    xs: 1,
                    sm: 1.2,
                  },

                  justifyContent: "center",

                  width: "100%",
                  maxWidth: "100%",
=======
    <Box component="footer" sx={{ backgroundColor: "#051121", color: "#fbfbf9e8" }}>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={4} sx={{ mb: 3 }}>
            <Stack
                spacing={2}
                alignItems="center"
                textAlign="center"
              >
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  You need it. We print it. You love it.
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    opacity: 0.9,
                    textAlign: "center",
                    maxWidth: 700,
                    mx: "auto",
                  }}
                >
                  Sun Beam Printing Press is here to help every step of the way.
                </Typography>
              </Stack>
          </Grid>      

          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <Typography variant="subtitle1" fontWeight={600} textAlign="center">
                Our Certifications
              </Typography>

              {/* Scrollable row of all certs */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1.5,
                  justifyContent: "center",
>>>>>>> a591240d7acbd39cd7eac50e7cadd346c3dc261c
                }}
              >
                {CERTIFICATES.map((cert) => (
                  <Box
                    key={cert.id}
<<<<<<< HEAD
                    component="button"
                    type="button"
                    onClick={() => handleOpen(cert)}
                    aria-label={`View ${cert.title}`}
                    sx={{
                      display: "block",

                      border: 0,

                      padding: 0,

                      margin: 0,

                      background: "transparent",

                      cursor: "pointer",

                      borderRadius: 1.5,

                      overflow: "hidden",

                      transition:
                        "transform 0.25s ease, box-shadow 0.25s ease",

                      "&:hover": {
                        transform:
                          "translateY(-3px)",

                        boxShadow:
                          "0 6px 18px rgba(0,0,0,0.35)",
                      },

                      "&:focus-visible": {
                        outline:
                          "2px solid #4fc3f7",

                        outlineOffset: 3,
=======
                    onClick={() => handleOpen(cert)}
                    sx={{
                      cursor: "pointer",
                      borderRadius: 2,
                      overflow: "hidden",
                      border: "1px solid rgba(79,195,247,0.3)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.06)",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
                        borderColor: "#4fc3f7",
>>>>>>> a591240d7acbd39cd7eac50e7cadd346c3dc261c
                      },
                    }}
                  >
                    {cert.type === "image" ? (
                      <Box
                        component="img"
                        src={cert.image}
                        alt={cert.title}
<<<<<<< HEAD
                        loading="lazy"
                        decoding="async"
                        sx={{
                          width: {
                            xs: 120,
                            sm: 140,
                            md: 150,
                          },

                          height: {
                            xs: 90,
                            sm: 100,
                            md: 105,
                          },

                          objectFit: "contain",

                          bgcolor: "#fff",

                          p: 0.5,

=======
                        sx={{
                          width: { xs: 140, md: 170 },
                          height: { xs: 100, md: 120 },
                          objectFit: "contain",
                          bgcolor: "white",
                          p: 1,
>>>>>>> a591240d7acbd39cd7eac50e7cadd346c3dc261c
                          display: "block",
                        }}
                      />
                    ) : (
<<<<<<< HEAD
                      <PdfThumbnail
                        file={cert.file}
                      />
                    )}

                    <Typography
                      component="span"
                      sx={{
                        display: "block",

                        width: {
                          xs: 120,
                          sm: 140,
                          md: 150,
                        },

                        fontSize: {
                          xs: "0.6rem",
                          sm: "0.64rem",
                          md: "0.68rem",
                        },

                        color:
                          "rgba(255,255,255,0.7)",

                        textAlign: "center",

                        px: 0.5,

                        py: 0.4,

                        bgcolor:
                          "rgba(0,0,0,0.35)",

                        whiteSpace: "nowrap",

                        overflow: "hidden",

                        textOverflow: "ellipsis",
=======
                      <PdfThumbnail file={cert.file} />
                    )}

                    <Typography
                      sx={{
                        fontSize: "0.65rem",
                        color: "rgba(255,255,255,0.6)",
                        textAlign: "center",
                        px: 0.5,
                        py: 0.4,
                        bgcolor: "rgba(0,0,0,0.4)",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: { xs: 140, md: 170 },
>>>>>>> a591240d7acbd39cd7eac50e7cadd346c3dc261c
                      }}
                    >
                      {cert.title}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>

<<<<<<< HEAD
      {/* =====================================================
          FOOTER NAVIGATION
      ====================================================== */}

      <Box
        sx={{
          borderTop:
            "1px solid rgba(255,255,255,0.12)",

          borderBottom:
            "1px solid rgba(255,255,255,0.12)",

          px: {
            xs: 2,
            sm: 3,
            md: 4,
          },

          py: {
            xs: 1.5,
            md: 1.8,
          },

          overflowX: "hidden",
        }}
      >
        <Box
          component="nav"
          aria-label="Footer navigation"
          sx={{
            display: "flex",

            justifyContent: "center",

            alignItems: "center",

            flexWrap: "wrap",

            gap: {
              xs: 0.8,
              sm: 1.2,
              md: 1.5,
            },

            maxWidth: 1000,

            mx: "auto",
          }}
        >
          {footerLinks.map((link, index) => {
            const isActive =
              isPathActive(link.path);

            return (
              <React.Fragment key={link.path}>
                <Link
                  component={RouterLink}
                  to={link.path}
                  aria-current={
                    isActive
                      ? "page"
                      : undefined
                  }
                  sx={{
                    position: "relative",

                    color: isActive
                      ? "#01A9D8"
                      : "#fff",

                    textDecoration: "none",

                    fontWeight: isActive
                      ? 700
                      : 500,

                    fontSize: {
                      xs: "0.7rem",
                      sm: "0.74rem",
                      md: "0.78rem",
                    },

                    lineHeight: 1.4,

                    px: {
                      xs: 0.4,
                      sm: 0.6,
                    },

                    py: 0.3,

                    whiteSpace: "nowrap",

                    "&:hover": {
                      color: isActive
                        ? "#01A9D8"
                        : "#fff",
                    },

                    "&::after": {
                      content: '""',

                      position: "absolute",

                      left: 0,

                      bottom: -2,

                      width: isActive
                        ? "100%"
                        : "0%",

                      height: "2px",

                      backgroundColor:
                        "#01A9D8",

                      transition:
                        "width 0.25s ease",
                    },

                    "&:hover::after": {
                      width: "100%",
                    },

                    "&:focus-visible": {
                      outline:
                        "2px solid #4fc3f7",

                      outlineOffset: 3,

                      borderRadius: 1,
                    },
                  }}
                >
                  {link.label}
                </Link>

                {index !==
                  footerLinks.length - 1 && (
                  <Typography
                    component="span"
                    aria-hidden="true"
                    sx={{
                      color:
                        "rgba(255,255,255,0.3)",

                      fontSize: {
                        xs: "0.65rem",
                        md: "0.7rem",
                      },
                    }}
                  >
                    |
                  </Typography>
                )}
              </React.Fragment>
            );
          })}
        </Box>
      </Box>

      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}

      <Container
        maxWidth="lg"
        sx={{
          px: {
            xs: 2.5,
            sm: 3,
            md: 4,
          },

          py: {
            xs: 2,
            md: 2.5,
          },
        }}
      >
        <Stack
          spacing={{
            xs: 1.2,
            md: 1.5,
          }}
          alignItems="center"
        >
          {/* Social + Location */}
          <Stack
            direction="row"
            spacing={1.5}
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
          >
            {socialLinks.map((social) => (
              <IconButton
                key={social.label}
                size="small"
                component="a"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Sun Beam Printing Press on ${social.label}`}
                sx={{
                  color: "#fff",

                  width: 32,
                  height: 32,

                  "&:hover": {
                    bgcolor:
                      "rgba(79,195,247,0.12)",

                    color: "#4fc3f7",
                  },

                  "&:focus-visible": {
                    outline:
                      "2px solid #4fc3f7",
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

                gap: 0.7,

                px: 1.2,

                py: 0.5,

                bgcolor:
                  "rgba(255,255,255,0.06)",

                border:
                  "1px solid rgba(255,255,255,0.1)",

                borderRadius: 1.5,
              }}
            >
              <Typography
                component="span"
                sx={{
                  color: "#01A9D8",

                  fontWeight: 700,

                  fontSize: {
                    xs: "0.7rem",
                    md: "0.74rem",
                  },
                }}
              >
                IN
              </Typography>

              <Typography
                component="span"
                sx={{
                  color:
                    "rgba(255,255,255,0.7)",

                  fontSize: {
                    xs: "0.7rem",
                    md: "0.74rem",
                  },
                }}
              >
                India
              </Typography>
            </Box>
          </Stack>

          {/* Copyright */}
          <Typography
            component="p"
            sx={{
              color:
                "rgba(255,255,255,0.55)",

              fontSize: {
                xs: "0.65rem",
                sm: "0.68rem",
                md: "0.72rem",
              },

              lineHeight: 1.5,

              textAlign: "center",

              mb: 0,
            }}
          >
            © {new Date().getFullYear()} Sun Beam
            Printing Press. All Rights Reserved.
          </Typography>
        </Stack>
      </Container>

      {/* =====================================================
          CERTIFICATE DIALOG
      ====================================================== */}
=======

<Box
  sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 1,
    py: 2,
  }}
>
  {footerLinks.map((link, index) => {
  const isActive =
    link.path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(link.path);

  return (
    <React.Fragment key={link.label}>
      <Link
        component={RouterLink}
        to={link.path}
        sx={{
          position: "relative",
          textDecoration: "none",
          color: isActive ? "#01A9D8" : "#fff",
          fontWeight: isActive ? 700 : 500,
          px: 1,

          "&:hover": {
            color: isActive ? "#01A9D8" : "#fff",
          },

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
        {link.label}
      </Link>

      {index !== footerLinks.length - 1 && (
        <Typography sx={{ opacity: 0.5 }}>|</Typography>
      )}
    </React.Fragment>
      );
    })}
        </Box>
      <Divider sx={{ borderColor: "rgba(255,255,255,0.2)" }} />

      {/* BOTTOM BAR */}
      <Container maxWidth="lg" sx={{ py: 3 }}>
  <Stack spacing={2} alignItems="center">
    {/* Social Icons */}
    <Stack direction="row" spacing={2} alignItems="center">
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

    {/* Copyright */}
    <Typography
      variant="caption"
      sx={{
        opacity: 0.8,
        textAlign: "center",
      }}
    >
      © 2026 Sun Beam Printing Press. All Rights Reserved.
    </Typography>
  </Stack>
</Container>
>>>>>>> a591240d7acbd39cd7eac50e7cadd346c3dc261c

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
<<<<<<< HEAD
        aria-labelledby="certificate-dialog-title"
=======
>>>>>>> a591240d7acbd39cd7eac50e7cadd346c3dc261c
        PaperProps={{
          sx: {
            width: "100%",

            maxWidth: {
              xs: "calc(100% - 24px)",
              sm: "900px",
            },

            background:
              "rgba(5,17,33,0.97)",

            borderRadius: 3,

            border:
              "1px solid rgba(79,195,247,0.3)",

            overflow: "hidden",
          },
        }}
      >
        <IconButton
          onClick={handleClose}
          aria-label="Close certificate"
          sx={{
<<<<<<< HEAD
            position: "absolute",

            top: 8,
            right: 8,

            zIndex: 2,

            color: "#fff",

            bgcolor:
              "rgba(0,0,0,0.45)",

            width: 34,
            height: 34,

            "&:hover": {
              bgcolor:
                "rgba(0,0,0,0.7)",
            },

            "&:focus-visible": {
              outline:
                "2px solid #4fc3f7",
            },
=======
            position: "absolute", top: 8, right: 8, zIndex: 1,
            color: "white", background: "rgba(0,0,0,0.5)",
            "&:hover": { background: "rgba(0,0,0,0.7)" },
>>>>>>> a591240d7acbd39cd7eac50e7cadd346c3dc261c
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>

        {selectedCert && (
<<<<<<< HEAD
          <Box
            sx={{
              p: {
                xs: 1.5,
                sm: 2.5,
                md: 3,
              },
            }}
          >
            <Typography
              id="certificate-dialog-title"
              component="h2"
              sx={{
                color: "#fff",

                textAlign: "center",

                fontWeight: 600,

                fontSize: {
                  xs: "0.9rem",
                  sm: "1rem",
                  md: "1.1rem",
                },

                mb: 2,
              }}
            >
=======
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ color: "white", textAlign: "center", mb: 2 }}>
>>>>>>> a591240d7acbd39cd7eac50e7cadd346c3dc261c
              {selectedCert.title}
            </Typography>

            {selectedCert.type === "image" ? (
              <Box
                component="img"
                src={selectedCert.image}
                alt={selectedCert.title}
<<<<<<< HEAD
                sx={{
                  display: "block",

                  width: "100%",

                  maxHeight: "75vh",

                  objectFit: "contain",

                  borderRadius: 2,

                  mx: "auto",
                }}
=======
                sx={{ width: "100%", maxHeight: "80vh", objectFit: "contain", borderRadius: 2 }}
>>>>>>> a591240d7acbd39cd7eac50e7cadd346c3dc261c
              />
            ) : (
              <Box
                component="iframe"
                src={selectedCert.file}
                title={selectedCert.title}
<<<<<<< HEAD
                sx={{
                  display: "block",

                  width: "100%",

                  height: {
                    xs: "60vh",
                    sm: "70vh",
                  },

                  border: "none",

                  borderRadius: 1,
                }}
=======
                sx={{ width: "100%", height: "75vh", border: "none", borderRadius: 1, display: "block" }}
>>>>>>> a591240d7acbd39cd7eac50e7cadd346c3dc261c
              />
            )}
          </Box>
        )}
      </Dialog>
    </Box>
  );
}