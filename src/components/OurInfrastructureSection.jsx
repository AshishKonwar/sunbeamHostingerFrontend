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
        py: {
          xs: 4,
          sm: 6,
          md: 8,
        },
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
            xs: 2,
            sm: 4,
            md: 6,
            lg: 8,
          },
        }}
      >
        {/* SECTION HEADING */}
        <Typography
          id="infrastructure-title"
          component="h2"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            color: "#fff",
            mb: {
              xs: 0.8,
              md: 1.2,
            },
            fontSize: {
              xs: "1.35rem",
              sm: "1.6rem",
              md: "1.9rem",
            },
            lineHeight: 1.3,
          }}
        >
          Our Printing Infrastructure
        </Typography>

        {/* SEO SUPPORTING HEADING */}
        <Typography
          component="h3"
          sx={{
            textAlign: "center",
            fontWeight: 600,
            color: "#4fc3f7",
            mb: {
              xs: 2,
              md: 3,
            },
            fontSize: {
              xs: "0.9rem",
              sm: "1rem",
              md: "1.15rem",
            },
            lineHeight: 1.4,
          }}
        >
          Advanced Printing Infrastructure in Guwahati
        </Typography>

        {/* DESCRIPTION */}
        <Box
          sx={{
            maxWidth: 760,
            mx: "auto",
            mb: {
              xs: 3,
              md: 5,
            },
          }}
        >
          <Typography
            component="p"
            sx={{
              textAlign: "center",
              color: "rgba(255,255,255,0.8)",
              lineHeight: {
                xs: 1.55,
                md: 1.7,
              },
              fontSize: {
                xs: "0.8rem",
                sm: "0.9rem",
                md: "0.98rem",
              },
            }}
          >
            Our facility is equipped with modern printing machinery,
            including Komori Lithrone offset presses, advanced pre-press
            systems, digital printing equipment, and efficient post-press
            machinery. This infrastructure enables Sun Beam Printing Press
            to deliver high-quality printing with precision and reliable
            turnaround times in Guwahati, Assam.
          </Typography>
        </Box>

        {/* INFRASTRUCTURE GRID */}
        <Grid
          container
          columnSpacing={{
            xs: 1.5,
            sm: 2.5,
            md: 3,
          }}
          rowSpacing={{
            xs: 2,
            sm: 3,
            md: 4,
          }}
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
        borderRadius: {
          xs: 2,
          md: 3,
        },
        bgcolor: "rgba(255,255,255,0.08)",
        color: "white",
        overflow: "hidden",
        backdropFilter: "blur(8px)",
        width: "100%",
        maxWidth: 330,

        /* Removed minHeight: 290 */
        display: "flex",
        flexDirection: "column",

        border: "1px solid rgba(79,195,247,0.18)",

        transition: "all 0.35s ease",

        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 12px 30px rgba(0,0,0,0.5)",
          borderColor: "rgba(79,195,247,0.45)",
        },
      }}
    >
      {/* IMAGE SLIDER */}
<Box
  sx={{
    position: "relative",
    width: "100%",
    height: {
      xs: 150,
      sm: 175,
      md: 180,
    },
    overflow: "hidden",
    lineHeight: 0,

    "& .slick-slider": {
      width: "100%",
      height: "100%",
      margin: 0,
      padding: 0,
    },

    "& .slick-list": {
      width: "100%",
      height: "100%",
      margin: 0,
      padding: 0,
      overflow: "hidden",
    },

    "& .slick-track": {
      margin: 0,
      padding: 0,
    },

    "& .slick-slide": {
      margin: 0,
      padding: 0,
    },

    "& .slick-slide > div": {
      margin: 0,
      padding: 0,
    },

    /* Keep dots INSIDE the image area */
    "& .slick-dots": {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 4,
      width: "100%",
      height: 14,
      margin: 0,
      padding: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 10,
      lineHeight: 1,
    },

    "& .slick-dots li": {
      width: 14,
      height: 14,
      margin: "0 2px",
      padding: 0,
    },

    "& .slick-dots li button": {
      width: 14,
      height: 14,
      padding: 0,
    },

    "& .slick-dots li button:before": {
      fontSize: 7,
      width: 14,
      height: 14,
      lineHeight: "14px",
      color: "rgba(255,255,255,0.65)",
      opacity: 1,
    },

    "& .slick-dots li.slick-active button:before": {
      color: "#4fc3f7",
      opacity: 1,
    },
  }}
>
  <Slider {...sliderSettings}>
    {service.slides.map((slide, index) => (
      <Box
        key={`${service.id}-${index}`}
        sx={{
          position: "relative",
          width: "100%",
          height: {
            xs: 150,
            sm: 175,
            md: 180,
          },
          overflow: "hidden",
          lineHeight: 0,
          margin: 0,
          padding: 0,
        }}
      >
        {/* IMAGE */}
        <Box
          component="img"
          src={slide.image}
          alt={`${service.title} at Sun Beam Printing Press in Guwahati - ${slide.description}`}
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
          sx={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            margin: 0,
            padding: 0,
          }}
        />

        {/* GRADIENT */}
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

        {/* SLIDE TEXT */}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: {
              xs: 18,
              sm: 20,
            },
            px: {
              xs: 1,
              sm: 1.25,
            },
            zIndex: 3,
            lineHeight: 1.3,
          }}
        >
          <Typography
            component="h4"
            sx={{
              fontWeight: 600,
              color: "#fff",
              fontSize: {
                xs: "0.72rem",
                sm: "0.82rem",
              },
              lineHeight: 1.3,
              mb: 0.25,
            }}
          >
            {service.title}
          </Typography>

          <Typography
            component="p"
            sx={{
              color: "#e0e0e0",
              fontSize: {
                xs: "0.62rem",
                sm: "0.7rem",
              },
              lineHeight: 1.3,
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

      {/* CARD CONTENT */}
      <CardContent
  sx={{
    flexGrow: 1,
    px: {
      xs: 1.25,
      sm: 1.75,
    },
    pt: {
      xs: 1,
      sm: 1.4,
    },
    pb: {
      xs: 1.25,
      sm: 1.5,
    },

    "&:last-child": {
      pb: {
        xs: 1.25,
        sm: 1.5,
      },
    },
  }}
>
  <Box
    sx={{
      display: "flex",
      alignItems: "flex-start",
      gap: {
        xs: 0.6,
        sm: 0.8,
      },
    }}
  >
    <CheckCircleIcon
      aria-hidden="true"
      sx={{
        color: "#01A9D8",
        fontSize: {
          xs: 17,
          sm: 19,
        },
        mt: 0.15,
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
          xs: "0.8rem",
          sm: "0.9rem",
        },
        lineHeight: 1.3,
      }}
    >
      {service.title}
    </Typography>
  </Box>

  <Typography
    component="p"
    sx={{
      color: "rgba(255,255,255,0.68)",
      mt: 0.6,
      mb: 0,
      fontSize: {
        xs: "0.68rem",
        sm: "0.76rem",
      },
      lineHeight: 1.45,
    }}
  >
    {service.description}
  </Typography>
</CardContent>
    </Card>
  );
}

