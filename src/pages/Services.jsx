import React, { useEffect, useState, useCallback } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Dialog
} from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import { useSwipeable } from "react-swipeable";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { SERVICES_DATA, SERVICES_CONFIG } from "../constants/servicesData";

export default function ServicesPage() {
  const [openGallery, setOpenGallery] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {  
    setCurrentIndex((prev) =>
      prev === currentImages.length - 1 ? 0 : prev + 1
    );
  }, [currentImages]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? currentImages.length - 1 : prev - 1
    );
  }, [currentImages]);

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!openGallery) return;

      if (e.key === "ArrowRight") handleNext();
      else if (e.key === "ArrowLeft") handlePrev();
      else if (e.key === "Escape") setOpenGallery(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openGallery, handleNext, handlePrev]);

  return (
    <Box
      sx={{
        mt: { xs: 0, md: 6 },
        py: 7,
        background: "linear-gradient(135deg, #051121, #0a2540, #012a4a)",
      }}
    >
      {/* 🔥 IMAGE DIALOG */}
      <Dialog
        open={openGallery}
        onClose={() => setOpenGallery(false)}
        maxWidth="md"
        {...handlers}
        sx={{
          "& .MuiDialog-paper": {
            background: "#000",
            borderRadius: 3,
            overflow: "hidden",
          },
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Box
            component="img"
            src={currentImages[currentIndex]}
            alt={`Service image ${currentIndex + 1}`}
            loading="lazy"
            sx={{
              width: "100%",
              maxHeight: "80vh",
              objectFit: "contain",
            }}
          />

          <Box onClick={handlePrev} sx={navBtn("left")}>
            <ArrowBackIosNewIcon sx={{ fontSize: { xs: 16, sm: 22 } }} />
          </Box>

          <Box onClick={handleNext} sx={navBtn("right")}>
            <ArrowForwardIosIcon sx={{ fontSize: { xs: 16, sm: 22 } }} />
          </Box>

          <Box onClick={() => setOpenGallery(false)} sx={closeBtn}>
            ✕
          </Box>
        </Box>
      </Dialog>

      <Container maxWidth="lg">
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            color: "white",
            mt: 2,
            mb: 9,
          }}
        >
          {SERVICES_CONFIG.pageTitle}
        </Typography>

        {SERVICES_DATA.map((service, index) => (
          <Grid
            container
            spacing={4}
            key={service.id}
            sx={{
              mb: 10,
              alignItems: "center",
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            }}
          >
            <Grid item xs={12} md={6}>
              <Box
                onClick={() => {
                  setCurrentImages(service.images);
                  setCurrentIndex(0);
                  setOpenGallery(true);
                }}
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 220, sm: 260, md: 320 },
                  overflow: "hidden",
                  borderRadius: 3,
                  background: "#111",
                  cursor: "pointer",
                }}
              >
                <Box
                  component="img"
                  src={service.images[0]}
                  alt={service.title}
                  loading="lazy"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "0.4s",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.4)",
                    opacity: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "0.3s",
                    "&:hover": { opacity: 1 },
                  }}
                >
                  <ZoomInIcon sx={{ fontSize: 32, color: "#fff" }} />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  fontWeight: 700,
                  color: "#01A9D8",
                  mb: 2,
                  typography: { xs: "h6", sm: "h5", md: "h4" },
                }}
              >
                {service.id}. {service.title}
              </Typography>

              <Typography sx={{ color: "#ddd", mb: 2 }}>
                <strong>About:</strong> {service.about}
              </Typography>

              {service.items.length > 0 && service.items.map((item, i) => (
                <Typography key={i} sx={{ color: "#ccc" }}>
                  • {item}
                </Typography>
              ))}
            </Grid>
          </Grid>
        ))}
      </Container>
    </Box>
  );
}

const navBtn = (side) => ({
  position: "absolute",
  top: "50%",
  [side]: { xs: 8, sm: 15 },
  transform: "translateY(-50%)",
  width: { xs: 32, sm: 45 },
  height: { xs: 32, sm: 45 },
  borderRadius: "50%",
  background: "#00AEEF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  fontSize: { xs: "1rem", sm: "1.3rem" },
  cursor: "pointer",
  opacity: 0.9,
});

const closeBtn = {
  position: "absolute",
  top: 10,
  right: 15,
  color: "#fff",
  fontSize: "1.4rem",
  cursor: "pointer",
};