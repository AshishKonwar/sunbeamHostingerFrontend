import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  Dialog,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

import { GALLERY_IMAGES, GALLERY_CONFIG, GALLERY_CATEGORIES } from "../constants/galleryData";

export default function MyGallery() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState(GALLERY_CATEGORIES.ALL);

  const filteredImages = filter === GALLERY_CATEGORIES.ALL 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  const handleFilterChange = (event, newFilter) => {
    if (newFilter !== null) {
      setFilter(newFilter);
    }
  };

  return (
    <Box sx={{ mt: { xs: 0, md: 6 }, background: "linear-gradient(135deg, #051121, #0a2540, #012a4a)", minHeight: "100vh", py: 7 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            color: "white",
            mt: 3,
            mb: 3,
          }}
        >
          {GALLERY_CONFIG.title}
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#4fc3f7",
            mb: 5,
          }}
        >
          {GALLERY_CONFIG.subtitle}
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
          <ToggleButtonGroup 
            value={filter}
            exclusive
            onChange={handleFilterChange}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 0,
            }}
          >
            {GALLERY_CONFIG.categories.map((cat) => (
              <ToggleButton
                key={cat}
                value={cat}
                sx={{
                  px: 3.5,
                  py: 1.2,
                  margin: 0.5,
                  borderRadius: "30px",
                  textTransform: "capitalize",
                  fontWeight: 500,
                  letterSpacing: "0.3px",
                  border: "1px solid rgba(255,255,255,0.8)",
                  color: "rgba(255,255,255,0.8)",
                  background: "rgba(255,255,255,0.05)",
                  transition: "all 0.3s ease",

                  "&:hover": {
                    background: "rgba(79,195,247,0.15)",
                    color: "#ffffff",
                    transform: "scale(1.05)",
                    border: "1px solid #ffffff",
                  },

                  "&.Mui-selected": {
                    background: "linear-gradient(135deg, #4fc3f7, #01A9D8)",
                    color: "#fff",
                    border: "1px solid transparent",
                    boxShadow: "0 5px 20px rgba(79, 195, 247, 0.5)",
                  },

                  "&.Mui-selected:hover": {
                    background: "linear-gradient(135deg, #4fc3f7, #01A9D8)",
                    transform: "scale(1.05)",
                  },
                }}
              >
                {cat}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>

        <Grid container spacing={1} sx = {{ background: "linear-gradient(135deg, #14498faf, #0a2540, #075692)", p: 5, ml: 1, borderRadius: "10px" }}>
          {filteredImages.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card
                onClick={() => handleOpen(item)}
                sx={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: 2,
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.35s ease",
                  
                  "&:hover": {
                    transform: "translateY(-8px) scale(1.02)",
                    boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
                  },

                  "&:hover img": {
                    transform: "scale(1.08)",
                  },

                  "&:hover .zoom-icon": {
                    opacity: 1,
                  },
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title}
                    loading="lazy"
                    sx={{
                      height: 250,
                      objectFit: "cover",
                      transition: "transform 0.4s ease",
                    }}
                  />

                  <Box
                    className="zoom-icon"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0,0,0,0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0,
                      transition: "0.3s",
                    }}
                  >
                    <ZoomInIcon sx={{ fontSize: 50, color: "white" }} />
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="md"
          PaperProps={{
            sx: {
              background: "rgba(5, 17, 33, 0.95)",
              borderRadius: 3,
              border: "1px solid rgba(79, 195, 247, 0.3)",
              maxWidth: "90vw",
            },
          }}
        >
          <IconButton
            onClick={handleClose}
            aria-label="Close gallery image"
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "white",
              zIndex: 1,
              background: "rgba(0,0,0,0.5)",
              "&:hover": {
                background: "rgba(0,0,0,0.7)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          {selectedImage && (
            <Box sx={{ p: 2 }}>
              <CardMedia
                component="img"
                image={selectedImage.image}
                alt={selectedImage.title}
                sx={{
                  width: "100%",
                  maxHeight: "70vh",
                  objectFit: "contain",
                  borderRadius: 2,
                }}
              />
            </Box>
          )}
        </Dialog>
      </Container>
    </Box>
  );
}