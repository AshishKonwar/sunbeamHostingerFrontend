import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import {
  CAROUSEL_CONFIG,
  CAROUSEL_IMAGES,
  FEATURED_SERVICES
} from "../constants/serviceCarousalData";

function OurServicesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, CAROUSEL_CONFIG.autoPlayInterval);
    
    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setActiveIndex((prev) =>
      prev === 0 ? CAROUSEL_IMAGES.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Box
      sx={{
        py: { xs: 3, md: 8 },
        background: "linear-gradient(180deg, #061727 0%, #04101c 100%)",
      }}
    >
      <Container maxWidth="xl">

        <Box
          sx={{
            mb: 5,
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={CAROUSEL_IMAGES[activeIndex]}
            alt={`Carousel slide ${activeIndex + 1}`}
            sx={{
              width: "100%",
              height: { xs: 200, md: 400 },
              objectFit: "cover",
              transition: "0.5s ease-in-out",
            }}
          />

          <Button
            onClick={handlePrevious}
            aria-label="Previous slide"
            sx={{
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
              color: "#fff",
              minWidth: "30px",
            }}
          >
            ◀
          </Button>

          <Button
            onClick={handleNext}
            aria-label="Next slide"
            sx={{
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              color: "#fff",
              minWidth: "30px",
            }}
          >
            ▶
          </Button>

          <Box
            sx={{
              position: "absolute",
              bottom: 10,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              gap: 1,
            }}
          >
            {CAROUSEL_IMAGES.map((_, index) => (
              <Box
                key={index}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background:
                    index === activeIndex ? "#00bcd4" : "rgba(255,255,255,0.5)",
                  cursor: "pointer",
                  transition: "0.3s",
                  "&:hover": {
                    background: index === activeIndex ? "#00bcd4" : "rgba(255,255,255,0.8)",
                  }
                }}
              />
            ))}
          </Box>
        </Box>

        <Typography
          sx={{
            mb: 3,
            fontWeight: 700,
            textAlign: "center",
            color: "#fff",
            fontSize: { xs: "16px", md: "24px" },
          }}
        >
          {CAROUSEL_CONFIG.sectionTitle}
        </Typography>

        <Grid container spacing={2}>
          {FEATURED_SERVICES.map((service) => (
            <Grid item xs={4} sm={4} md={4} key={service.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  background: "rgba(255,255,255,0.08)",
                  borderRadius: 2,
                  border: "1px solid rgba(255,255,255,0.1)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: "#00bcd4",
                  },
                }}
              >
                <Box
                  component="img"
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  sx={{
                    width: "100%",
                    height: { xs: 90, md: 180 },
                    objectFit: "cover",
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                  }}
                />

                <CardContent sx={{ p: { xs: 1, md: 2 } }}>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      mb: 0.5,
                      color: "#00bcd4",
                      fontSize: { xs: "10px", md: "16px" },
                    }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: "9px", md: "14px" },
                      opacity: 0.85,
                      lineHeight: 1.4,
                      color: "#fff",
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Button
            component={RouterLink}
            to={CAROUSEL_CONFIG.seeMoreLink}
            sx={{
              px: 3.5,
              py: 1.2,
              borderRadius: "30px",
              textTransform: "capitalize",
              fontWeight: 600,
              letterSpacing: "0.3px",
              color: "rgba(255,255,255,0.9)",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.8)",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "rgba(79,195,247,0.15)",
                color: "#ffffff",
                transform: "translateY(-2px)",
                boxShadow: "0 5px 20px rgba(79,195,247,0.4)",
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