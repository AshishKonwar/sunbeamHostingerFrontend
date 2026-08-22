import React, { useEffect, useState, useCallback } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Dialog,
  IconButton,
} from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import CloseIcon from "@mui/icons-material/Close";
import { useSwipeable } from "react-swipeable";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import {
  SERVICES_DATA,
  SERVICES_CONFIG,
} from "../constants/servicesData";

export default function ServicesPage() {
  const [openGallery, setOpenGallery] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    if (!currentImages.length) return;

    setCurrentIndex((prev) =>
      prev === currentImages.length - 1 ? 0 : prev + 1
    );
  }, [currentImages]);

  const handlePrev = useCallback(() => {
    if (!currentImages.length) return;

    setCurrentIndex((prev) =>
      prev === 0 ? currentImages.length - 1 : prev - 1
    );
  }, [currentImages]);

  const closeGallery = useCallback(() => {
    setOpenGallery(false);
  }, []);

  const openServiceGallery = useCallback((images) => {
    if (!images?.length) return;

    setCurrentImages(images);
    setCurrentIndex(0);
    setOpenGallery(true);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!openGallery) return;

      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "Escape") {
        closeGallery();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [openGallery, handleNext, handlePrev, closeGallery]);

  return (
    <Box
      component="main"
      sx={{
        mt: {
          xs: 0,
          md: 4,
        },
        py: {
          xs: 5,
          sm: 6,
          md: 8,
        },
        background:
          "linear-gradient(135deg, #051121, #0a2540, #012a4a)",
      }}
    >
      {/* =========================
          IMAGE GALLERY DIALOG
      ========================== */}
      <Dialog
        open={openGallery}
        onClose={closeGallery}
        maxWidth="md"
        fullWidth
        aria-labelledby="service-gallery-title"
        {...handlers}
        sx={{
          "& .MuiDialog-paper": {
            background: "#000",
            borderRadius: 3,
            overflow: "hidden",
            margin: {
              xs: 1.5,
              sm: 3,
            },
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            background: "#000",
          }}
        >
          {/* Accessible Gallery Title */}
          <Typography
            id="service-gallery-title"
            component="h2"
            sx={{
              position: "absolute",
              width: 1,
              height: 1,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              border: 0,
            }}
          >
            Sun Beam Printing Press service gallery
          </Typography>

          {/* Gallery Image */}
          {currentImages.length > 0 && (
            <Box
              component="img"
              src={currentImages[currentIndex]}
              alt={`Sun Beam Printing Press service image ${
                currentIndex + 1
              }`}
              sx={{
                display: "block",
                width: "100%",
                maxHeight: {
                  xs: "75vh",
                  sm: "80vh",
                },
                objectFit: "contain",
              }}
            />
          )}

          {/* Previous Button */}
          <IconButton
            onClick={handlePrev}
            aria-label="Previous service image"
            sx={{
              position: "absolute",
              top: "50%",
              left: {
                xs: 8,
                sm: 15,
              },
              transform: "translateY(-50%)",
              width: {
                xs: 34,
                sm: 45,
              },
              height: {
                xs: 34,
                sm: 45,
              },
              borderRadius: "50%",
              background: "#00AEEF",
              color: "#fff",

              "&:hover": {
                background: "#008fbd",
              },
            }}
          >
            <ArrowBackIosNewIcon
              sx={{
                fontSize: {
                  xs: 15,
                  sm: 21,
                },
              }}
            />
          </IconButton>

          {/* Next Button */}
          <IconButton
            onClick={handleNext}
            aria-label="Next service image"
            sx={{
              position: "absolute",
              top: "50%",
              right: {
                xs: 8,
                sm: 15,
              },
              transform: "translateY(-50%)",
              width: {
                xs: 34,
                sm: 45,
              },
              height: {
                xs: 34,
                sm: 45,
              },
              borderRadius: "50%",
              background: "#00AEEF",
              color: "#fff",

              "&:hover": {
                background: "#008fbd",
              },
            }}
          >
            <ArrowForwardIosIcon
              sx={{
                fontSize: {
                  xs: 15,
                  sm: 21,
                },
              }}
            />
          </IconButton>

          {/* Close Button */}
          <IconButton
            onClick={closeGallery}
            aria-label="Close service gallery"
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "#fff",
              background: "rgba(0,0,0,0.45)",

              "&:hover": {
                background: "rgba(0,0,0,0.7)",
              },
            }}
          >
            <CloseIcon
              sx={{
                fontSize: {
                  xs: 20,
                  sm: 24,
                },
              }}
            />
          </IconButton>
        </Box>
      </Dialog>

      {/* =========================
          PAGE CONTENT
      ========================== */}
      <Container
        maxWidth="lg"
        sx={{
          px: {
            xs: 2.5,
            sm: 4,
            md: 6,
            lg: 8,
          },
        }}
      >
        {/* =========================
            PAGE INTRODUCTION
        ========================== */}
        <Box
          component="header"
          sx={{
            maxWidth: 850,
            mx: "auto",
            textAlign: "center",
            mb: {
              xs: 6,
              md: 8,
            },
          }}
        >
          {/* Main SEO Heading */}
          <Typography
            component="h1"
            sx={{
              fontWeight: 700,
              color: "#fff",
              mt: 1,
              mb: 2,
              fontSize: {
                xs: "1.7rem",
                sm: "2rem",
                md: "2.4rem",
              },
              lineHeight: 1.25,
            }}
          >
            Printing Services in Guwahati
          </Typography>

          {/* Introduction */}
          <Typography
            component="p"
            sx={{
              color: "#ddd",
              fontSize: {
                xs: "0.88rem",
                sm: "0.92rem",
                md: "1rem",
              },
              lineHeight: 1.7,
              maxWidth: 740,
              mx: "auto",
              mb: 0,
            }}
          >
            {SERVICES_CONFIG.pageDescription ||
              "Sun Beam Printing Press provides professional offset, digital and commercial printing services in Guwahati, Assam. We offer reliable printing solutions for businesses, organizations and individuals."}
          </Typography>
        </Box>

        {/* =========================
            SERVICES
        ========================== */}
        <Box
          component="section"
          aria-label="Printing services offered by Sun Beam Printing Press"
        >
          {SERVICES_DATA.map((service, index) => (
            <Box
              component="article"
              key={service.id}
              sx={{
                mb: {
                  xs: 7,
                  md: 9,
                },
              }}
            >
              <Grid
                container
                spacing={{
                  xs: 3,
                  md: 5,
                }}
                alignItems="center"
                sx={{
                  flexDirection:
                    index % 2 === 0
                      ? "row"
                      : "row-reverse",
                }}
              >
                {/* =========================
                    SERVICE IMAGE
                ========================== */}
                <Grid
                  item
                  xs={12}
                  md={6}
                >
                  <Box
                    component="button"
                    type="button"
                    onClick={() =>
                      openServiceGallery(service.images)
                    }
                    aria-label={`View ${service.title} service gallery`}
                    sx={{
                      position: "relative",
                      display: "block",
                      width: "100%",
                      height: {
                        xs: 210,
                        sm: 250,
                        md: 310,
                      },
                      padding: 0,
                      overflow: "hidden",
                      border: 0,
                      borderRadius: 3,
                      background: "#111",
                      cursor: "pointer",
                      textAlign: "left",

                      "&:focus-visible": {
                        outline: "2px solid #01A9D8",
                        outlineOffset: "3px",
                      },

                      "&:hover img": {
                        transform: "scale(1.04)",
                      },

                      "&:hover .service-image-overlay": {
                        opacity: 1,
                      },

                      "&:focus-visible .service-image-overlay": {
                        opacity: 1,
                      },
                    }}
                  >
                    {/* Service Image */}
                    <Box
                      component="img"
                      src={service.images?.[0]}
                      alt={`${service.title} services at Sun Beam Printing Press in Guwahati`}
                      loading={
                        index === 0
                          ? "eager"
                          : "lazy"
                      }
                      decoding="async"
                      sx={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition:
                          "transform 0.4s ease",
                      }}
                    />

                    {/* Image Overlay */}
                    <Box
                      className="service-image-overlay"
                      aria-hidden="true"
                      sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "rgba(0,0,0,0.4)",
                        opacity: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition:
                          "opacity 0.3s ease",
                      }}
                    >
                      <ZoomInIcon
                        sx={{
                          fontSize: {
                            xs: 34,
                            sm: 40,
                          },
                          color: "#fff",
                        }}
                      />
                    </Box>
                  </Box>
                </Grid>

                {/* =========================
                    SERVICE CONTENT
                ========================== */}
                <Grid
                  item
                  xs={12}
                  md={6}
                >
                  {/* Service Heading */}
                  <Typography
                    component="h2"
                    sx={{
                      fontWeight: 700,
                      color: "#01A9D8",
                      mb: {
                        xs: 1.2,
                        md: 1.5,
                      },
                      fontSize: {
                        xs: "1.15rem",
                        sm: "1.3rem",
                        md: "1.55rem",
                      },
                      lineHeight: 1.35,
                    }}
                  >
                    {service.title}
                  </Typography>

                  {/* Service Description */}
                  {service.about && (
                    <Typography
                      component="p"
                      sx={{
                        color: "#ddd",
                        mb: 1.5,
                        fontSize: {
                          xs: "0.86rem",
                          sm: "0.9rem",
                          md: "0.95rem",
                        },
                        lineHeight: 1.7,
                      }}
                    >
                      {service.about}
                    </Typography>
                  )}

                  {/* Service Items */}
                  {service.items?.length > 0 && (
                    <Box
                      component="ul"
                      sx={{
                        pl: {
                          xs: 2.5,
                          md: 3,
                        },
                        mt: 1.5,
                        mb: 0,
                        color: "#ccc",
                      }}
                    >
                      {service.items.map((item, i) => (
                        <Box
                          component="li"
                          key={i}
                          sx={{
                            mb: 0.6,
                            lineHeight: 1.6,
                            fontSize: {
                              xs: "0.82rem",
                              sm: "0.86rem",
                              md: "0.9rem",
                            },
                          }}
                        >
                          {item}
                        </Box>
                      ))}
                    </Box>
                  )}
                </Grid>
              </Grid>
            </Box>
          ))}
        </Box>

        {/* =========================
            LOCAL SEO SECTION
        ========================== */}
        <Box
          component="section"
          aria-labelledby="guwahati-printing-title"
          sx={{
            mt: 2,
            pt: {
              xs: 5,
              md: 6,
            },
            borderTop:
              "1px solid rgba(255,255,255,0.12)",
            maxWidth: 850,
            mx: "auto",
            textAlign: "center",
          }}
        >
          <Typography
            id="guwahati-printing-title"
            component="h2"
            sx={{
              color: "#01A9D8",
              fontWeight: 700,
              mb: 1.5,
              fontSize: {
                xs: "1.3rem",
                sm: "1.45rem",
                md: "1.7rem",
              },
              lineHeight: 1.35,
            }}
          >
            Professional Printing Services in Guwahati
          </Typography>

          <Typography
            component="p"
            sx={{
              color: "#ddd",
              lineHeight: 1.7,
              fontSize: {
                xs: "0.86rem",
                sm: "0.9rem",
                md: "0.95rem",
              },
              mb: 0,
            }}
          >
            Sun Beam Printing Press provides dependable printing
            solutions in Guwahati, Assam, for businesses,
            organizations and individuals. Our services include
            offset printing, digital printing and a range of
            commercial and stationery printing requirements.
            With years of experience in the printing industry,
            we focus on quality, precision and reliable service.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}