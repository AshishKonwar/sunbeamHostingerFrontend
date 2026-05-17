import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material";
import {
  RESOURCES_CONFIG,
  FAQ_DATA,
  DESIGN_TIPS,
  FILE_PREPARATION,
  PRINTING_GLOSSARY
} from "../constants/resourcesData";

export default function Resources() {
  return (
    <Box
      sx={{
        mt: { xs: 0, md: 6 },
        py: 5,
        background: "linear-gradient(135deg, #051121, #0a2540, #012a4a)",
        minHeight: "100vh",
      }}
    >
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
          {RESOURCES_CONFIG.pageTitle}
        </Typography>

        {/* Page Description */}
        <Box sx={{ maxWidth: 900, mx: "auto", mb: 6 }}>
          <Typography
            sx={{
              textAlign: "center",
              color: "#4fc3f7",
              mb: 5,
            }}
          >
            {RESOURCES_CONFIG.pageDescription}
          </Typography>
        </Box>

        {/* FAQ SECTION */}
        <Typography sx={{ color: "#4fc3f7", fontWeight: 700, mb: 3, fontSize: "1.4rem" }}>
          {RESOURCES_CONFIG.faqSectionTitle}
        </Typography>

        <Grid container spacing={3} sx={{ mb: 6 }}>
          {FAQ_DATA.map((item) => (
            <Grid item xs={12} md={6} key={item.id}>
              <Card sx={{ background: "rgba(255,255,255,0.05)" }}>
                <CardContent>
                  <Typography sx={{ color: "#4fc3f7", fontWeight: 600 }}>
                    Q: {item.question}
                  </Typography>
                  <Typography sx={{ color: "#ddd", mt: 1 }}>
                    {item.answer}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* DESIGN TIPS */}
        <Typography sx={{ color: "#4fc3f7", fontWeight: 700, mb: 2, fontSize: "1.4rem" }}>
          {RESOURCES_CONFIG.designTipsTitle}
        </Typography>

        <Box sx={{ mb: 6 }}>
          <Typography sx={{ color: "#ddd", mb: 2 }}>
            {DESIGN_TIPS.intro}
          </Typography>

          <ul style={{ color: "#ddd", lineHeight: 2 }}>
            {DESIGN_TIPS.tips.map((tip) => (
              <li key={tip.id}>{tip.text}</li>
            ))}
          </ul>
        </Box>

        {/* FILE PREPARATION */}
        <Typography sx={{ color: "#4fc3f7", fontWeight: 700, mb: 2, fontSize: "1.4rem" }}>
          {RESOURCES_CONFIG.filePreparationTitle}
        </Typography>

        <Box sx={{ mb: 6 }}>
          <Typography sx={{ color: "#ddd", mb: 2 }}>
            {FILE_PREPARATION.intro}
          </Typography>

          <ul style={{ color: "#ddd", lineHeight: 2 }}>
            {FILE_PREPARATION.tips.map((tip) => (
              <li key={tip.id}>{tip.text}</li>
            ))}
          </ul>
        </Box>

        {/* GLOSSARY */}
        <Typography sx={{ color: "#4fc3f7", fontWeight: 700, mb: 3, fontSize: "1.4rem" }}>
          {RESOURCES_CONFIG.glossaryTitle}
        </Typography>

        <Grid container spacing={3}>
          {PRINTING_GLOSSARY.map((item) => (
            <Grid item xs={12} md={4} key={item.id}>
              <Card sx={{ background: "rgba(255,255,255,0.05)" }}>
                <CardContent>
                  <Typography sx={{ color: "#4fc3f7", fontWeight: 600 }}>
                    {item.term}
                  </Typography>
                  <Typography sx={{ color: "#ddd", mt: 1 }}>
                    {item.definition}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
}