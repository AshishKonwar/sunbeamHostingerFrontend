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

import {
  GALLERY_IMAGES,
  GALLERY_CONFIG,
  GALLERY_CATEGORIES,
} from "../constants/galleryData";

export default function MyGallery() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState(GALLERY_CATEGORIES.ALL);

  const filteredImages =
    filter === GALLERY_CATEGORIES.ALL
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter(
          (img) => img.category === filter
        );

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
    <Box
      component="main"
      aria-labelledby="gallery-title"
      sx={{
        mt: {
          xs: 0,
          md: 4,
        },
        minHeight: "100vh",
        py: {
          xs: 5,
          sm: 6,
          md: 8,
        },
        background:
          "linear-gradient(135deg, #051121, #0a2540, #012a4a)",
      }}
    >
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
            PAGE HEADING
        ========================== */}
        <Box
          component="header"
          sx={{
            textAlign: "center",
            maxWidth: 800,
            mx: "auto",
            mb: {
              xs: 4,
              md: 5,
            },
          }}
        >
          <Typography
            id="gallery-title"
            component="h1"
            sx={{
              fontWeight: 700,
              color: "white",
              mt: 1,
              mb: 1.2,
              fontSize: {
                xs: "1.7rem",
                sm: "2rem",
                md: "2.35rem",
              },
              lineHeight: 1.3,
            }}
          >
            {GALLERY_CONFIG.title}
          </Typography>

          <Typography
            component="p"
            sx={{
              color: "#4fc3f7",
              fontSize: {
                xs: "0.95rem",
                sm: "1rem",
                md: "1.05rem",
              },
              lineHeight: 1.5,
              mb: 0,
            }}
          >
            {GALLERY_CONFIG.subtitle}
          </Typography>
        </Box>

        {/* =========================
            CATEGORY FILTERS
        ========================== */}
        <Box
          component="nav"
          aria-label="Gallery categories"
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: {
              xs: 4,
              md: 5,
            },
          }}
        >
          <ToggleButtonGroup
            value={filter}
            exclusive
            onChange={handleFilterChange}
            aria-label="Filter gallery by category"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 0.5,
            }}
          >
            {GALLERY_CONFIG.categories.map((cat) => (
              <ToggleButton
                key={cat}
                value={cat}
                sx={{
                  px: {
                    xs: 1.8,
                    sm: 2.5,
                    md: 3,
                  },
                  py: {
                    xs: 0.8,
                    sm: 1,
                  },
                  margin: 0.4,
                  borderRadius: "30px",
                  textTransform: "capitalize",
                  fontWeight: 500,
                  fontSize: {
                    xs: "0.75rem",
                    sm: "0.82rem",
                    md: "0.88rem",
                  },
                  letterSpacing: "0.2px",
                  border:
                    "1px solid rgba(255,255,255,0.8)",
                  color: "rgba(255,255,255,0.8)",
                  background:
                    "rgba(255,255,255,0.05)",
                  transition: "all 0.3s ease",

                  "&:hover": {
                    background:
                      "rgba(79,195,247,0.15)",
                    color: "#ffffff",
                    transform: "translateY(-1px)",
                    border:
                      "1px solid #ffffff",
                  },

                  "&.Mui-selected": {
                    background:
                      "linear-gradient(135deg, #4fc3f7, #01A9D8)",
                    color: "#fff",
                    border:
                      "1px solid transparent",
                    boxShadow:
                      "0 5px 20px rgba(79, 195, 247, 0.35)",
                  },

                  "&.Mui-selected:hover": {
                    background:
                      "linear-gradient(135deg, #4fc3f7, #01A9D8)",
                    color: "#fff",
                    transform:
                      "translateY(-1px)",
                  },
                }}
              >
                {cat}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>

        {/* =========================
            GALLERY GRID
        ========================== */}
        <Box
          component="section"
          aria-label="Sun Beam Printing Press gallery"
          sx={{
            background:
              "linear-gradient(135deg, #14498faf, #0a2540, #075692)",
            p: {
              xs: 1.5,
              sm: 2,
              md: 3,
            },
            borderRadius: 2,
          }}
        >
          <Grid
            container
            columnSpacing={{
              xs: 1.5,
              sm: 2,
              md: 2.5,
            }}
            rowSpacing={{
              xs: 1.5,
              sm: 2,
              md: 2.5,
            }}
            justifyContent="center"
          >
            {filteredImages.map((item) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={item.id}
              >
                <Card
                  component="article"
                  onClick={() => handleOpen(item)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${item.title}`}
                  onKeyDown={(event) => {
                    if (
                      event.key === "Enter" ||
                      event.key === " "
                    ) {
                      handleOpen(item);
                    }
                  }}
                  sx={{
                    width: "100%",
                    background:
                      "rgba(255,255,255,0.05)",
                    borderRadius: 2,
                    overflow: "hidden",
                    cursor: "pointer",
                    transition:
                      "all 0.35s ease",
                    border:
                      "1px solid rgba(255,255,255,0.08)",

                    "&:hover": {
                      transform:
                        "translateY(-5px)",
                      boxShadow:
                        "0 15px 40px rgba(0,0,0,0.4)",
                      borderColor:
                        "rgba(79,195,247,0.45)",
                    },

                    "&:hover img": {
                      transform: "scale(1.05)",
                    },

                    "&:hover .zoom-icon": {
                      opacity: 1,
                    },

                    "&:focus-visible": {
                      outline:
                        "2px solid #4fc3f7",
                      outlineOffset: "2px",
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={`${item.title} - Sun Beam Printing Press in Guwahati`}
                      loading="lazy"
                      decoding="async"
                      sx={{
                        display: "block",
                        width: "100%",
                        height: {
                          xs: 210,
                          sm: 220,
                          md: 250,
                        },
                        objectFit: "cover",
                        transition:
                          "transform 0.4s ease",
                      }}
                    />

                    {/* Zoom Overlay */}
                    <Box
                      className="zoom-icon"
                      aria-hidden="true"
                      sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "rgba(0,0,0,0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: 0,
                        transition:
                          "opacity 0.3s ease",
                      }}
                    >
                      <ZoomInIcon
                        sx={{
                          fontSize: {
                            xs: 40,
                            sm: 46,
                            md: 50,
                          },
                          color: "white",
                        }}
                      />
                    </Box>
                  </Box>

                  {/* Image Title */}
                  <Box
                    sx={{
                      px: {
                        xs: 1.2,
                        sm: 1.5,
                      },
                      py: {
                        xs: 1,
                        sm: 1.2,
                      },
                    }}
                  >
                    <Typography
                      component="h2"
                      sx={{
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: {
                          xs: "0.78rem",
                          sm: "0.82rem",
                          md: "0.88rem",
                        },
                        lineHeight: 1.4,
                        textAlign: "center",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* =========================
            IMAGE DIALOG
        ========================== */}
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="md"
          fullWidth
          aria-labelledby="gallery-dialog-title"
          PaperProps={{
            sx: {
              background:
                "rgba(5, 17, 33, 0.95)",
              borderRadius: 3,
              border:
                "1px solid rgba(79, 195, 247, 0.3)",
              maxWidth: "90vw",
              margin: {
                xs: 1.5,
                sm: 3,
              },
            },
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            aria-label="Close gallery image"
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "white",
              zIndex: 1,
              background:
                "rgba(0,0,0,0.5)",

              "&:hover": {
                background:
                  "rgba(0,0,0,0.7)",
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

          {selectedImage && (
            <Box
              sx={{
                p: {
                  xs: 1.5,
                  sm: 2,
                },
              }}
            >
              <Typography
                id="gallery-dialog-title"
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
                {selectedImage.title}
              </Typography>

              <CardMedia
                component="img"
                image={selectedImage.image}
                alt={`${selectedImage.title} - Sun Beam Printing Press`}
                sx={{
                  width: "100%",
                  maxHeight: "70vh",
                  objectFit: "contain",
                  borderRadius: 2,
                  display: "block",
                }}
              />
            </Box>
          )}
        </Dialog>
      </Container>
    </Box>
  );
}

