import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import VideoSection from "../ui/VideoSection";

export default function HeroSection() {

  return (
    <Box
      component="header"
      sx={{
        py: { xs: 6, sm: 8, md: 10, lg: 12 },
        bgcolor: "#051121",
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
            xl: 10,
          },
        }}
      >
        <Box
          component="section"
          aria-labelledby="hero-title"
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: {
              xs: 5,
              md: 6,
            },
            alignItems: "center",
          }}
        >
          {/* HERO CONTENT */}
          <Box
            sx={{
              textAlign: "left",
              maxWidth: 650,
            }}
          >
            {/* Primary SEO Heading */}
            <Typography
              id="hero-title"
              component="h1"
              sx={{
                fontWeight: 700,
                mb: 1.5,
                color: "#fbfbf9e8",
                lineHeight: 1.25,
                fontSize: {
                  xs: "1.7rem",
                  sm: "2rem",
                  md: "2.35rem",
                  lg: "2.6rem",
                },
              }}
            >
              Printing Press in Guwahati
              <br />
              Professional Printing & Stationery Services
            </Typography>

            {/* Business Name */}
            <Typography
              component="h2"
              sx={{
                fontWeight: 900,
                display: "block",
                color: "#01A9D8",
                letterSpacing: 0.5,
                lineHeight: 1.25,
                fontSize: {
                  xs: "1.45rem",
                  sm: "1.7rem",
                  md: "2rem",
                  lg: "2.2rem",
                },
              }}
            >
              Sun Beam Printing Press
            </Typography>

            {/* Supporting SEO Content */}
            <Typography
              component="p"
              sx={{
                color: "#fbfbf9e8",
                lineHeight: 1.7,
                maxWidth: 580,
                mt: 2.5,
                fontSize: {
                  xs: "0.9rem",
                  sm: "0.95rem",
                  md: "1rem",
                },
              }}
            >
              Sun Beam Printing Press provides professional{" "}
              <strong>offset and digital printing services in Guwahati</strong>{" "}
              for businesses, organizations, and individuals. From{" "}
              <strong>business cards and brochures</strong> to commercial and
              stationery printing, we deliver reliable, high-quality printing
              solutions across Guwahati and Assam.
            </Typography>

            {/* Additional Business Information */}
            <Typography
              component="p"
              sx={{
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.6,
                maxWidth: 580,
                mt: 1,
                fontSize: {
                  xs: "0.85rem",
                  sm: "0.9rem",
                  md: "0.95rem",
                },
              }}
            >
              Serving Assam since 2007 with modern printing technology,
              precision, and dependable service.
            </Typography>

            {/* CTA */}
            <Box sx={{ mt: 2.5 }}>
              <Stack
                direction="row"
                gap={2}
                flexWrap="wrap"
              >
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="outlined"
                  size="medium"
                  aria-label="Contact Sun Beam Printing Press in Guwahati"
                  sx={{
                    px: 3,
                    py: 1,
                    borderRadius: "30px",
                    textTransform: "capitalize",
                    fontWeight: 600,
                    fontSize: "0.9rem",
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
                      borderColor: "#ffffff",
                    },
                  }}
                >
                  Contact Us
                </Button>

                <Button
                  component={RouterLink}
                  to="/services"
                  variant="text"
                  size="medium"
                  aria-label="View printing services offered by Sun Beam Printing Press"
                  sx={{
                    px: 1.5,
                    py: 1,
                    color: "#01A9D8",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    textTransform: "capitalize",

                    "&:hover": {
                      background: "rgba(1,169,216,0.08)",
                      color: "#4fc3f7",
                    },
                  }}
                >
                  Our Printing Services
                </Button>
              </Stack>
            </Box>
          </Box>

          {/* HERO VIDEO */}
          <Box
            component="figure"
            sx={{
              position: "relative",
              borderRadius: 3,
              overflow: "hidden",
              height: {
                xs: 250,
                sm: 300,
                md: 360,
                lg: 400,
              },
              m: 0,
              background: "#0a2540",
            }}
          >
            <Box
              component="figcaption"
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
              Sun Beam Printing Press in Guwahati showcasing its
              professional printing facilities and services.
            </Box>

            {!videoLoaded && (
              <Skeleton
                height="100%"
                width="100%"
                baseColor="#0a2540"
                highlightColor="#0d3a5f"
                borderRadius={12}
              />
            )}

            <Box
              component="iframe"
              src="https://player.cloudinary.com/embed/?cloud_name=dahuajpp7&public_id=SunBeamVideo_2_yl4f0r&autoplay=true&muted=true&loop=true&controls=false"
              onLoad={() => setVideoLoaded(true)}
              sx={{
                width: "100%",
                height: "100%",
                border: "none",
                aspectRatio: "640 / 360",
                display: videoLoaded ? "block" : "none",
              }}
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
              title="Sun Beam Printing Press Video"
            />
            

            {videoLoaded && (
              <Box
                aria-hidden="true"
                sx={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0.4)",
                  pointerEvents: "none",
                }}
              />
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}