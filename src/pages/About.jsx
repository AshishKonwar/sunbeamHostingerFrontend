import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

import TrustBadges from "../components/common/TrustBadges";
import {
  ABOUT_CONFIG,
  ABOUT_SECTIONS,
  ABOUT_INTRO,
  ABOUT_IMAGES,
  GUIDING_PRINCIPLES,
  CUSTOMER_SEGMENTS,
  CERTIFICATIONS_INFO
} from "../constants/aboutData";

export default function About() {
  return (
    <Box sx={{ mt: { xs: 0, md: 6 }, background: "linear-gradient(135deg, #051121, #0a2540, #012a4a)", minHeight: "100vh", py: 7 }}>
      <Container maxWidth="lg">

        {/* Heading */}
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            color: "white",
            mt: 3,
            mb: 6,
          }}
        >
          {ABOUT_CONFIG.pageTitle}
        </Typography>

        {/* Team Image */}
        <Box
          component="img"
          src={ABOUT_IMAGES.teamPhoto}
          alt={`${ABOUT_CONFIG.companyName} Team`}
          sx={{
            width: "100%",
            height: { xs: 300, md: 500 },
            objectFit: "cover",
            borderRadius: 3,
            boxShadow: "0 12px 30px rgba(0,0,0,0.5)",
            mb: 6,
          }}
        />

        {/* Introduction Content */}
        <Box sx={{ maxWidth: 900, mx: "auto" }}>
          <Typography
            variant="body1"
            sx={{
              color: "#ddd",
              lineHeight: 1.9,
              fontSize: "1.05rem",
              textAlign: "justify",
            }}
          >
            <strong>{ABOUT_CONFIG.companyName}</strong> {ABOUT_INTRO.paragraph1}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#ddd",
              lineHeight: 1.9,
              fontSize: "1.05rem",
              textAlign: "justify",
              mt: 3,
            }}
          >
            Today, <strong>{ABOUT_CONFIG.companyName}</strong> {ABOUT_INTRO.paragraph2}
          </Typography>
        </Box>

        {/* Mission Section */}
        <Box sx={{ maxWidth: 900, mx: "auto", mt: 8 }}>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              color: "#4fc3f7",
              mb: 3,
            }}
          >
            {ABOUT_SECTIONS.mission.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#ddd",
              lineHeight: 1.9,
              fontSize: "1.05rem",
              textAlign: "justify",
            }}
          >
            {ABOUT_SECTIONS.mission.content}
          </Typography>
        </Box>

        {/* Vision Section */}
        <Box sx={{ maxWidth: 900, mx: "auto", mt: 8 }}>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              color: "#4fc3f7",
              mb: 3,
            }}
          >
            {ABOUT_SECTIONS.vision.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#ddd",
              lineHeight: 1.9,
              fontSize: "1.05rem",
              textAlign: "justify",
            }}
          >
            {ABOUT_SECTIONS.vision.content}
          </Typography>
        </Box>

        {/* Quality Policy Section */}
        <Box sx={{ maxWidth: 900, mx: "auto", mt: 8 }}>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              color: "#4fc3f7",
              mb: 3,
            }}
          >
            {ABOUT_SECTIONS.qualityPolicy.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#ddd",
              lineHeight: 1.9,
              fontSize: "1.05rem",
              textAlign: "justify",
            }}
          >
            {ABOUT_SECTIONS.qualityPolicy.content}
          </Typography>
        </Box>

        {/* Guiding Principles Section */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2,
            mt: 9,
          }}
        >
          {GUIDING_PRINCIPLES.map((principle) => (
            <Box
              key={principle.id}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: 2.5,
                py: 1,
                borderRadius: "50px",
                background: "rgba(79, 195, 247, 0.1)",
                border: "1px solid rgba(79, 195, 247, 0.4)",
                backdropFilter: "blur(8px)",
                whiteSpace: "nowrap",
                transition: "0.3s",
                "&:hover": {
                  background: "rgba(79, 195, 247, 0.2)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <WorkspacePremiumIcon sx={{ color: "#4fc3f7", fontSize: 18 }} />
              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: "0.8rem", md: "0.95rem" },
                  fontWeight: 500,
                }}
              >
                {principle.text}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Our Customers Section */}
        <Box sx={{ maxWidth: 900, mx: "auto", mt: 8 }}>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              color: "#4fc3f7",
              mb: 3,
            }}
          >
            Our Customers
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {CUSTOMER_SEGMENTS.map((customer) => (
              <Grid item xs={12} sm={6} md={4} key={customer.id}>
                <Card
                  sx={{
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: 2,
                    height: "100%",
                  }}
                >
                  <CardContent sx={{ textAlign: "center", p: 2 }}>
                    <Typography variant="body1" sx={{ color: "white" }}>
                      {customer.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Certifications Info */}
        <Box sx={{ maxWidth: 900, mx: "auto", mt: 8, mb: 6 }}>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              color: "#4fc3f7",
              mb: 3,
            }}
          >
            {CERTIFICATIONS_INFO.title}
          </Typography>
          <Card
            sx={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: 2,
              border: "1px solid rgba(79, 195, 247, 0.3)",
            }}
          >
            <CardContent sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2, p: 3 }}>
              <WorkspacePremiumIcon sx={{ color: "#4fc3f7", fontSize: 40 }} />
              <Typography variant="h6" sx={{ color: "white" }}>
                {ABOUT_CONFIG.companyName} {CERTIFICATIONS_INFO.description}
              </Typography>
            </CardContent>
          </Card>
        </Box>

      </Container>

      {/* TrustBadges Component with Certificates */}
      <TrustBadges />
    </Box>
  );
}