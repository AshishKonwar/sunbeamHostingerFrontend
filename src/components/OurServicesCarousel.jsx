import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import {
  CAROUSEL_CONFIG,
  CAROUSEL_IMAGES,
  FEATURED_SERVICES,
} from "../constants/serviceCarousalData";

function OurServicesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(
        (prev) => (prev + 1) % CAROUSEL_IMAGES.length
      );
    }, CAROUSEL_CONFIG.autoPlayInterval);

    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setActiveIndex((prev) =>
      prev === 0 ? CAROUSEL_IMAGES.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex(
      (prev) => (prev + 1) % CAROUSEL_IMAGES.length
    );
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Box
      component="section"
      aria-labelledby="featured-services-title"
      sx={{
        py: {
          xs: 5,
          sm: 6,
          md: 8,
        },
        background:
          "linear-gradient(180deg, #061727 0%, #04101c 100%)",
      }}
    >
      <Container
        maxWidth="xl"
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
            IMAGE CAROUSEL
        ========================== */}
        <Box
          sx={{
            mb: {
              xs: 4,
              md: 5,
            },
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            position: "relative",
            background: "#081d31",
          }}
        >
          <Box
            component="img"
            src={CAROUSEL_IMAGES[activeIndex]}
            alt={`Sun Beam Printing Press ${
              FEATURED_SERVICES[activeIndex]?.title ||
              "printing services"
            } in Guwahati`}
            loading={activeIndex === 0 ? "eager" : "lazy"}
            decoding="async"
            sx={{
              display: "block",
              width: "100%",
              height: {
                xs: 200,
                sm: 280,
                md: 400,
              },
              objectFit: "cover",
              transition: "opacity 0.5s ease-in-out",
            }}
          />

          {/* Previous Button */}
          <Button
            onClick={handlePrevious}
            aria-label="Previous printing service image"
            sx={{
              position: "absolute",
              left: {
                xs: 6,
                sm: 10,
              },
              top: "50%",
              transform: "translateY(-50%)",
              minWidth: {
                xs: 30,
                sm: 36,
              },
              width: {
                xs: 30,
                sm: 36,
              },
              height: {
                xs: 30,
                sm: 36,
              },
              borderRadius: "50%",
              color: "#fff",
              background: "rgba(0,0,0,0.4)",
              fontSize: {
                xs: "0.7rem",
                sm: "0.85rem",
              },
              zIndex: 2,

              "&:hover": {
                background: "rgba(0,0,0,0.65)",
              },
            }}
          >
            ◀
          </Button>

          {/* Next Button */}
          <Button
            onClick={handleNext}
            aria-label="Next printing service image"
            sx={{
              position: "absolute",
              right: {
                xs: 6,
                sm: 10,
              },
              top: "50%",
              transform: "translateY(-50%)",
              minWidth: {
                xs: 30,
                sm: 36,
              },
              width: {
                xs: 30,
                sm: 36,
              },
              height: {
                xs: 30,
                sm: 36,
              },
              borderRadius: "50%",
              color: "#fff",
              background: "rgba(0,0,0,0.4)",
              fontSize: {
                xs: "0.7rem",
                sm: "0.85rem",
              },
              zIndex: 2,

              "&:hover": {
                background: "rgba(0,0,0,0.65)",
              },
            }}
          >
            ▶
          </Button>

          {/* Carousel Indicators */}
          <Box
            component="div"
            aria-label="Printing service carousel navigation"
            sx={{
              position: "absolute",
              bottom: {
                xs: 8,
                sm: 10,
              },
              left: 0,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              zIndex: 2,
            }}
          >
            {CAROUSEL_IMAGES.map((_, index) => (
              <Box
                key={index}
                component="button"
                type="button"
                onClick={() => handleDotClick(index)}
                aria-label={`View printing service slide ${
                  index + 1
                }`}
                aria-current={
                  index === activeIndex ? "true" : undefined
                }
                sx={{
                  width: {
                    xs: 8,
                    sm: 10,
                  },
                  height: {
                    xs: 8,
                    sm: 10,
                  },
                  p: 0,
                  border: 0,
                  borderRadius: "50%",
                  background:
                    index === activeIndex
                      ? "#00bcd4"
                      : "rgba(255,255,255,0.5)",
                  cursor: "pointer",
                  transition: "0.3s",

                  "&:hover": {
                    background:
                      index === activeIndex
                        ? "#00bcd4"
                        : "rgba(255,255,255,0.8)",
                  },

                  "&:focus-visible": {
                    outline: "2px solid #fff",
                    outlineOffset: "2px",
                  },
                }}
              />
            ))}
          </Box>
        </Box>

        {/* =========================
            SECTION HEADING
        ========================== */}
        <Typography
          id="featured-services-title"
          component="h2"
          sx={{
            mb: {
              xs: 2.5,
              md: 3,
            },
            fontWeight: 700,
            textAlign: "center",
            color: "#fff",
            fontSize: {
              xs: "1.45rem",
              sm: "1.65rem",
              md: "1.9rem",
            },
            lineHeight: 1.3,
          }}
        >
          {CAROUSEL_CONFIG.sectionTitle}
        </Typography>

        {/* =========================
            FEATURED SERVICES
        ========================== */}
        <Grid
          container
          columnSpacing={{
            xs: 1.5,
            sm: 2,
            md: 3,
          }}
          rowSpacing={{
            xs: 2.5,
            sm: 3,
            md: 4,
          }}
          justifyContent="center"
          alignItems="stretch"
        >
          {FEATURED_SERVICES.map((service) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={service.id}
              sx={{
                display: "flex",
              }}
            >
              <Card
                component="article"
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  background: "rgba(255,255,255,0.08)",
                  borderRadius: 2,
                  border:
                    "1px solid rgba(255,255,255,0.1)",
                  overflow: "hidden",
                  transition: "0.3s",

                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: "#00bcd4",
                    boxShadow:
                      "0 8px 24px rgba(0,0,0,0.25)",
                  },
                }}
              >
                {/* Service Image */}
                <Box
                  component="img"
                  src={service.image}
                  alt={`${service.title} services at Sun Beam Printing Press in Guwahati`}
                  loading="lazy"
                  decoding="async"
                  sx={{
                    display: "block",
                    width: "100%",
                    height: {
                      xs: 150,
                      sm: 160,
                      md: 180,
                    },
                    objectFit: "cover",
                  }}
                />

                {/* Service Content */}
                <CardContent
                  sx={{
                    p: {
                      xs: 1.5,
                      sm: 1.7,
                      md: 2,
                    },
                    flexGrow: 1,
                  }}
                >
                  <Typography
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 0.7,
                      color: "#00bcd4",
                      fontSize: {
                        xs: "0.9rem",
                        sm: "0.95rem",
                        md: "1rem",
                      },
                      lineHeight: 1.4,
                    }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    component="p"
                    sx={{
                      fontSize: {
                        xs: "0.75rem",
                        sm: "0.8rem",
                        md: "0.85rem",
                      },
                      opacity: 0.85,
                      lineHeight: 1.55,
                      color: "#fff",
                      mb: 0,
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* =========================
            SEE MORE BUTTON
        ========================== */}
        <Box
          sx={{
            textAlign: "center",
            mt: {
              xs: 3,
              md: 4,
            },
          }}
        >
          <Button
            component={RouterLink}
            to={CAROUSEL_CONFIG.seeMoreLink}
            aria-label="View all printing services from Sun Beam Printing Press"
            sx={{
              px: {
                xs: 2.5,
                sm: 3,
              },
              py: {
                xs: 0.9,
                sm: 1,
              },
              borderRadius: "30px",
              textTransform: "capitalize",
              fontWeight: 600,
              fontSize: {
                xs: "0.82rem",
                sm: "0.88rem",
              },
              letterSpacing: "0.2px",
              color: "rgba(255,255,255,0.9)",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.8)",
              transition: "all 0.3s ease",

              "&:hover": {
                background: "rgba(79,195,247,0.15)",
                color: "#ffffff",
                transform: "translateY(-2px)",
                boxShadow:
                  "0 5px 20px rgba(79,195,247,0.4)",
              },

              "&:active": {
                transform: "scale(0.97)",
              },
            }}
          >
            {CAROUSEL_CONFIG.seeMoreText}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default React.memo(OurServicesCarousel);