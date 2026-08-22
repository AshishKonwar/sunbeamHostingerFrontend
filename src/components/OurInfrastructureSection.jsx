import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import Slider from "react-slick";

import MOPM01 from "../assets/pictures/MOPM.jpg";
import MOPM02 from "../assets/pictures/MOPM02.jpg";
import MOPM03 from "../assets/pictures/MOPM03.jpg";

import image1 from "../assets/pictures/2a.jpg";
import image2 from "../assets/pictures/2b.jpg";
import image3 from "../assets/pictures/2c.jpg";
import image4 from "../assets/pictures/2d.jpg";

import image5 from "../assets/pictures/image5.jpg";
import image6 from "../assets/pictures/image6.jpg";
import image7 from "../assets/pictures/image7.jpg";

import image8 from "../assets/pictures/image8.jpg";
import image9 from "../assets/pictures/image9.jpg";
import image10 from "../assets/pictures/image10.jpg";
import image11 from "../assets/pictures/image11.jpg";
import image12 from "../assets/pictures/image12.jpg";
import image13 from "../assets/pictures/image13.jpg";

import image14 from "../assets/pictures/image14.jpg";
import image15 from "../assets/pictures/image15.jpg";
import image16 from "../assets/pictures/image16.jpg";
import image17 from "../assets/pictures/image17.jpg";
import image18 from "../assets/pictures/image18.jpg";

import bgImage from "../assets/pictures/collagepic01.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const services = [
  {
    id: 1,
    title: "Multicolour Offset Printing Machines",
    description:
      "Advanced sheetfed offset printing equipment for high-quality multicolour commercial printing.",
    slides: [
      {
        image: MOPM01,
        description:
          "Komori Lithrone GL 37 – Sheetfed Offset (4 Colour), Sheet Size: 25 × 37 inches",
      },
      {
        image: MOPM02,
        description:
          "Sheetfed Offset Bicolour – 22 × 32 inches",
      },
      {
        image: MOPM03,
        description:
          "Sheetfed Offset Monocolour – 19 × 28 inches (2 Units)",
      },
    ],
  },

  {
    id: 2,
    title: "Pre-Press Technology",
    description:
      "Modern computer-to-plate technology supporting accurate and efficient printing preparation.",
    slides: [
      {
        image: image1,
        description:
          "Computer to Plate (CTP) System – Platesetter & Plate Processor",
      },
      {
        image: image2,
        description:
          "Computer to Plate (CTP) System – Platesetter & Plate Processor",
      },
      {
        image: image3,
        description:
          "Computer to Plate (CTP) System – Platesetter & Plate Processor",
      },
      {
        image: image4,
        description:
          "Computer to Plate (CTP) System – Platesetter & Plate Processor",
      },
    ],
  },

  {
    id: 3,
    title: "Digital Printing",
    description:
      "Professional digital printing equipment for high-quality short-run and commercial printing requirements.",
    slides: [
      {
        image: image5,
        description:
          "Digital Machine 4 Colour – Konica Minolta",
      },
      {
        image: image6,
        description:
          "Computer to Plate (CTP) System – Platesetter & Plate Processor",
      },
      {
        image: image7,
        description:
          "Digital Machine Monocolour – Konica Minolta",
      },
    ],
  },

  {
    id: 4,
    title: "Finishing & Binding Machines",
    description:
      "Professional finishing and binding equipment for polished, durable printed materials.",
    slides: [
      {
        image: image8,
        description:
          "Lamination Machine – 36 inch",
      },
      {
        image: image9,
        description:
          "Perfect Binding Machine – Wellbound (6 Clamp)",
      },
      {
        image: image10,
        description:
          "Perfect Binding Machine – Single Clamp (Hi Tech)",
      },
      {
        image: image11,
        description:
          "Book Knitting Machine",
      },
      {
        image: image12,
        description:
          "Book Threading Machine",
      },
      {
        image: image13,
        description:
          "Book Threading Machine",
      },
    ],
  },

  {
    id: 5,
    title: "Cutting, Folding & Post-Press",
    description:
      "Advanced cutting, folding, creasing and post-press equipment for precise finishing.",
    slides: [
      {
        image: image14,
        description:
          "Cutting Machine (Programming) – 44 inch",
      },
      {
        image: image15,
        description:
          "Cutting Machine (Semi Automatic) – 32 inch",
      },
      {
        image: image16,
        description:
          "Folding Machine (Automatic & Manual)",
      },
      {
        image: image17,
        description:
          "Automated Creasing & Perforating Machine",
      },
      {
        image: image18,
        description:
          "Laser Die-Cutting Machine",
      },
    ],
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
};

export default function OurInfrastuctureSection() {
  return (
    <Box
      component="section"
      aria-labelledby="infrastructure-title"
      sx={{
        py: { xs: 6, sm: 7, md: 8 },
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      {/* Background Overlay */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(6, 23, 39, 0.9)",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          px: {
            xs: 2.5,
            sm: 4,
            md: 6,
            lg: 8,
          },
        }}
      >
        {/* =========================
            SECTION HEADING
        ========================== */}
        <Typography
          id="infrastructure-title"
          component="h2"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            color: "#fff",
            mb: 1.2,
            fontSize: {
              xs: "1.5rem",
              sm: "1.7rem",
              md: "1.9rem",
            },
            lineHeight: 1.3,
          }}
        >
          Our Printing Infrastructure
        </Typography>

        {/* Local SEO Supporting Heading */}
        <Typography
          component="h3"
          sx={{
            textAlign: "center",
            fontWeight: 600,
            color: "#4fc3f7",
            mb: 3,
            fontSize: {
              xs: "1rem",
              sm: "1.05rem",
              md: "1.15rem",
            },
            lineHeight: 1.4,
          }}
        >
          Advanced Printing Infrastructure in Guwahati
        </Typography>

        {/* Description */}
        <Box
          sx={{
            maxWidth: 760,
            mx: "auto",
            mb: 5,
          }}
        >
          <Typography
            component="p"
            sx={{
              textAlign: "center",
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.7,
              fontSize: {
                xs: "0.88rem",
                sm: "0.92rem",
                md: "0.98rem",
              },
            }}
          >
            Our facility is equipped with modern printing machinery,
            including Komori Lithrone offset presses, advanced
            pre-press systems, digital printing equipment, and
            efficient post-press machinery. This infrastructure
            enables Sun Beam Printing Press to deliver high-quality
            printing with precision and reliable turnaround times
            in Guwahati, Assam.
          </Typography>
        </Box>

        {/* =========================
            INFRASTRUCTURE GRID
        ========================== */}
        <Grid
          container
          columnSpacing={{ xs: 2, sm: 2.5, md: 3 }}
          rowSpacing={{ xs: 3, sm: 4, md: 5 }}
          justifyContent="center"
          alignItems="stretch"
        >
          {services.map((service) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={service.id}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <InfrastructureCard service={service} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

function InfrastructureCard({ service }) {
  return (
    <Card
      component="article"
      aria-labelledby={`infrastructure-service-${service.id}`}
      sx={{
        borderRadius: 3,
        bgcolor: "rgba(255, 255, 255, 0.08)",
        color: "white",
        overflow: "hidden",
        backdropFilter: "blur(8px)",
        width: "100%",
        maxWidth: 330,
        minHeight: 290,
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        border: "1px solid rgba(79,195,247,0.18)",
        transition: "all 0.35s ease",

        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 12px 30px rgba(0,0,0,0.5)",
          borderColor: "rgba(79,195,247,0.45)",
        },
      }}
    >
      {/* =========================
          IMAGE SLIDER
      ========================== */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          mb: { xs: 2, sm: 2.5 },
        }}
      >
        <Slider {...sliderSettings}>
          {service.slides.map((slide, index) => (
            <Box
              key={`${service.id}-${index}`}
              sx={{
                position: "relative",
                width: "100%",
                overflow: "hidden",
              }}
            >
              {/* Image */}
              <Box
                component="img"
                src={slide.image}
                alt={`${service.title} at Sun Beam Printing Press in Guwahati - ${slide.description}`}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                sx={{
                  display: "block",
                  width: "100%",
                  height: {
                    xs: 175,
                    sm: 180,
                  },
                  objectFit: "cover",
                }}
              />

              {/* Gradient Overlay */}
              <Box
                aria-hidden="true"
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.88), rgba(0,0,0,0.35), rgba(0,0,0,0))",
                  pointerEvents: "none",
                }}
              />

              {/* Slide Information */}
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  p: {
                    xs: 1,
                    sm: 1.2,
                  },
                }}
              >
                <Typography
                  component="h4"
                  sx={{
                    fontWeight: 600,
                    color: "#fff",
                    fontSize: {
                      xs: "0.82rem",
                      sm: "0.86rem",
                    },
                    lineHeight: 1.35,
                    mb: 0.3,
                  }}
                >
                  {service.title}
                </Typography>

                <Typography
                  component="p"
                  sx={{
                    color: "#e0e0e0",
                    fontSize: {
                      xs: "0.68rem",
                      sm: "0.72rem",
                    },
                    lineHeight: 1.4,
                    mb: 0,
                  }}
                >
                  {slide.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>

      {/* =========================
          CARD CONTENT
      ========================== */}
      <CardContent
        sx={{
          flexGrow: 1,
          px: {
            xs: 1.5,
            sm: 2,
          },
          py: {
            xs: 1.5,
            sm: 2,
          },
          "&:last-child": {
            pb: {
              xs: 1.5,
              sm: 2,
            },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: 1,
          }}
        >
          <CheckCircleIcon
            aria-hidden="true"
            sx={{
              color: "#01A9D8",
              fontSize: 19,
              mt: 0.2,
              flexShrink: 0,
            }}
          />

          <Typography
            id={`infrastructure-service-${service.id}`}
            component="h3"
            sx={{
              fontWeight: 700,
              color: "#fff",
              fontSize: {
                xs: "0.9rem",
                sm: "0.95rem",
              },
              lineHeight: 1.4,
            }}
          >
            {service.title}
          </Typography>
        </Box>

        <Typography
          component="p"
          sx={{
            color: "rgba(255,255,255,0.68)",
            mt: 1,
            mb: 0,
            fontSize: {
              xs: "0.75rem",
              sm: "0.8rem",
            },
            lineHeight: 1.55,
          }}
        >
          {service.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
