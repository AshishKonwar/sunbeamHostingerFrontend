import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
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
import { Link as RouterLink } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Multicolour Offset Printing Machines",
    slides: [
      {
        image: MOPM01,
        description:
          "•	Komori Lithrone GL 37 – Sheetfed Offset (4 Colour) Sheet Size: 25 x 37 inches",
      },
      {
        image: MOPM02,
        description:
          "•	Sheetfed Offset Bicolour – 22 x 32 inches",
      },
       {
        image: MOPM03,
        description:
          "•	Sheetfed Offset Monocolour – 19 x 28 inches (2 Units)",
      },
    ],
  },
  {
    id: 2,
    title: "Pre Press Technology",
    slides: [
      {
        image: image1,
        description:
          "•	Computer to Plate (CTP) System (Platesetter & Plate Processor)",
      },
      {
        image: image2,
        description:
          "•	Computer to Plate (CTP) System (Platesetter & Plate Processor)",
      },
       {
        image: image3,
        description:
          "•	Computer to Plate (CTP) System (Platesetter & Plate Processor)",
      },
      {
        image: image4,
        description:
          "•	Computer to Plate (CTP) System (Platesetter & Plate Processor)",
      },
    ],
  },
  {
    id: 3,
    title: "Digital Printing",
    slides: [
      {
        image: image5,
        description:
          "•  Digital Machine 4 Colour – Konica Minolta",
      },
      {
        image: image6,
        description:
          "•	Computer to Plate (CTP) System (Platesetter & Plate Processor)",
      },
       {
        image: image7,
        description:
          "•	Digital Machine Monocolour – Konica Minolta",
      }
    ],
  },
  {
    id: 4,
    title: "Finishing & Binding Machines",
    slides: [
      {
        image: image8,
        description:
          "•	Lamination Machine – 36 inch",
      },
      {
        image: image9,
        description:
          "•	Perfect Binding Machine – Wellbound (6 Clamp)",
      },
      {
        image: image10,
        description:
          "•	Perfect Binding Machine – Single Clamp (Hi Tech)",
      },
      {
        image: image11,
        description:
          "•	Book Knitting Machine",
      },
      {
        image: image12,
        description:
          "•	Book Threading Machine",
      },
      {
        image: image13,
        description:
          "•	Book Threading Machine",
      }
    ],
  },
  {
    id: 5,
    title: "Cutting, Folding & Post Press",
    slides: [
      {
        image: image14,
        description:
          "•	Cutting Machine (Programming) – 44 inch",
      },
      {
        image: image15,
        description:
          "•	Cutting Machine (Semi Automatic) – 32 inch",
      },
      {
        image: image16,
        description:
          "•	Folding Machine (Automatic & Manual)",
      },
      {
        image: image17,
        description:
          "•	Automated Creasing & Perforating Machine",
      },
      {
        image: image18,
        description:
          "•	Laser Die-Cutting Machine",
      }
    ],
  }
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
      sx={{
        py: 8,
          backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgcolor: "rgba(6, 23, 39, 0.9)",
        }}
      />

      <Container sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            color: "white",
            mb: 2,
          }}
        >
           Our Printing Infrastructure
        </Typography>

        <Typography
                  variant="h6"
                  sx={{
                    textAlign: "center",
                    fontWeight: 600,
                    color: "#4fc3f7",
                    mb: 5,
                  }}
                >
                  Advanced Printing Infrastructure in Guwahati
                </Typography>

                <Box sx={{ maxWidth: 800, mx: "auto", mb: 6 }}>
                          <Typography
                            variant="body1"
                            sx={{
                              textAlign: "center",
                              color: "rgba(255,255,255,0.8)",
                              lineHeight: 1.8,
                            }}
                          >
                            Our facility is equipped with modern machinery including Komori Lithrone offset presses, advanced pre-press systems, and efficient post-press equipment ensuring high-quality output and fast turnaround times.
                          </Typography>
                  </Box>

        {/* Grid Layout */}
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="center"
        >
          {services.map((service) => (
            <Grid
              item
              xs={2}
              sm={4}
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
  component={RouterLink}
  to={service.route}
  sx={{
    borderRadius: 3,
    bgcolor: "rgba(255, 255, 255, 0.08)",
    color: "white",
    overflow: "hidden",
    backdropFilter: "blur(8px)",
    width: "100%",
    maxWidth: 330,
    height: 290,
    textDecoration: "none",

    transition: "all 0.35s ease",

    "&:hover": {
      transform: "translateY(-8px) scale(1.02)",
      boxShadow: "0 12px 30px rgba(0,0,0,0.5)",
    },
  }}
>
  <Box sx={{ position: "relative" }}>
    <Slider {...sliderSettings}>
      {service.slides.map((slide, index) => (
        <Box key={index} sx={{ position: "relative" }}>
          
          {/* Image */}
          <Box
            component="img"
            src={slide.image}
            alt={slide.title}
            sx={{
              width: "100%",
              height: 180,
              objectFit: "cover",
            }}
          />

          {/* Full gradient overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.35), rgba(0,0,0,0))",
            }}
          />

          {/* Text */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              p: 1,
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, color: "#fff" }}
            >
              {slide.title}
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: "#e0e0e0", fontSize: "0.8rem" }}
            >
              {slide.description}
            </Typography>
          </Box>  

        </Box>
      ))}
    </Slider>
  </Box>

    <CardContent>
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1,
      mt: 2
    }}
  >
    <CheckCircleIcon
      sx={{
        color: "#01A9D8",
        fontSize: 20,
      }}
    />

    <Typography
      variant="subtitle1"
      sx={{
        fontWeight: 700,
        color: "#fff",
      }}
    >
      {service.title}
    </Typography>
  </Box>
  </CardContent>
  </Card>
  );
}
