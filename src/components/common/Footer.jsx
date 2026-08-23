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

import { Link as RouterLink, useLocation } from "react-router-dom";
import * as pdfjsLib from "pdfjs-dist";

import { CERTIFICATES } from "../../constants/trustBadgesData";

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function PdfThumbnail({ file }) {
  const canvasRef = useRef(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

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
    </Box>
  );
}

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

  const location = useLocation();

  const handleOpen = (cert) => {
    setSelectedCert(cert);
    setOpen(true);
  };

  const handleClose = () => {
  setOpen(false);
    setSelectedCert(null);
  };

  const isPathActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  return (
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
              spacing={{ xs: 1.2, md: 1.5 }}
              alignItems="center"
              textAlign="center"
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
                  mb: 0,
                }}
              >
                Printing Press in Guwahati
              </Typography>

              <Typography
                component="p"
                sx={{
                  color: "#01A9D8",
                  fontWeight: 700,
                  fontSize: {
                    xs: "0.9rem",
                    sm: "0.95rem",
                    md: "1rem",
                  },
                  lineHeight: 1.4,
                  mb: 0,
                }}
              >
                Sun Beam Printing Press
              </Typography>

              <Typography
                component="p"
                sx={{
                  color: "rgba(255,255,255,0.75)",
                  fontSize: {
                    xs: "0.78rem",
                    sm: "0.82rem",
                    md: "0.88rem",
                  },
                  lineHeight: 1.7,
                  maxWidth: 560,
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
                }}
              >
                {CERTIFICATES.map((cert) => (
                  <Box
                    key={cert.id}
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
                      },
                    }}
                  >
                    {cert.type === "image" ? (
                      <Box
                        component="img"
                        src={cert.image}
                        alt={cert.title}
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

                          display: "block",
                        }}
                      />
                    ) : (
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
          xs: 3,
          md: 3.5,
        },
      }}
    >
    <Stack
      alignItems="center"
      spacing={2}
    >
    {/* SOCIAL + LOCATION */}

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
              bgcolor: "rgba(79,195,247,0.12)",
              color: "#4fc3f7",
            },

            "&:focus-visible": {
              outline: "2px solid #4fc3f7",
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
          bgcolor: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.1)",
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
            color: "rgba(255,255,255,0.7)",
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

    {/* COPYRIGHT */}

    <Typography
        component="p"
        sx={{
          color: "rgba(255,255,255,0.55)",
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
        © {new Date().getFullYear()} Sun Beam Printing Press.
        All Rights Reserved.
      </Typography>

      {/* WEBSITE DEVELOPMENT */}

      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          component="h2"
          sx={{
            fontSize: "0.875rem",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "#fff",
          }}
        >
          Website Development
        </Typography>

        <Typography
          component="p"
          sx={{
            mt: 1.5,
            mb: 0,
            fontSize: "0.75rem",
            color: "#94a3b8",
          }}
        >
          Designed & developed with care by
        </Typography>

        <Box
          sx={{
            mt: 1.5,
            display: "inline-flex",
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 2,
            backgroundColor: "#fff",
            px: 1.5,
            py: 0.75,
            boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
          }}
        >
          <Box
            component="img"
            src="/DibruDigitalLogo.png"
            alt="Dibru Digital"
            sx={{
              height: 36,
              width: "auto",
              objectFit: "contain",
              display: "block",
            }}
          />
        </Box>
      </Box>
    </Stack>
  </Container>

      {/* =====================================================
          CERTIFICATE DIALOG
      ====================================================== */}

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        aria-labelledby="certificate-dialog-title"
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
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>

        {selectedCert && (
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
              {selectedCert.title}
            </Typography>

            {selectedCert.type === "image" ? (
              <Box
                component="img"
                src={selectedCert.image}
                alt={selectedCert.title}
                sx={{
                  display: "block",

                  width: "100%",

                  maxHeight: "75vh",

                  objectFit: "contain",

                  borderRadius: 2,

                  mx: "auto",
                }}
              />
            ) : (
              <Box
                component="iframe"
                src={selectedCert.file}
                title={selectedCert.title}
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
              />
            )}
          </Box>
        )}
      </Dialog>
    </Box>
  );
}
