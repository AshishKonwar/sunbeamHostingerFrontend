import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

import {
  RESOURCES_CONFIG,
  FAQ_DATA,
  DESIGN_TIPS,
  FILE_PREPARATION,
  PRINTING_GLOSSARY,
} from "../constants/resourcesData";

export default function Resources() {
  return (
    <Box
      component="main"
      aria-labelledby="resources-title"
      sx={{
        mt: {
          xs: 0,
          md: 4,
        },
        py: {
          xs: 5,
          sm: 6,
          md: 8,
        },
        minHeight: "100vh",
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
            PAGE HEADER
        ========================== */}
        <Box
          component="header"
          sx={{
            maxWidth: 850,
            mx: "auto",
            textAlign: "center",
            mb: {
              xs: 5,
              md: 7,
            },
          }}
        >
          <Typography
            id="resources-title"
            component="h1"
            sx={{
              color: "#fff",
              fontWeight: 700,
              mt: 1,
              mb: 1.5,
              fontSize: {
                xs: "1.7rem",
                sm: "2rem",
                md: "2.35rem",
              },
              lineHeight: 1.3,
            }}
          >
            {RESOURCES_CONFIG.pageTitle}
          </Typography>

          <Typography
            component="p"
            sx={{
              color: "#4fc3f7",
              fontSize: {
                xs: "0.88rem",
                sm: "0.92rem",
                md: "1rem",
              },
              lineHeight: 1.7,
              mb: 0,
            }}
          >
            {RESOURCES_CONFIG.pageDescription}
          </Typography>
        </Box>

        {/* =========================
            FAQ SECTION
        ========================== */}
        <Box
          component="section"
          aria-labelledby="faq-section-title"
          sx={{
            mb: {
              xs: 6,
              md: 8,
            },
          }}
        >
          <Typography
            id="faq-section-title"
            component="h2"
            sx={{
              color: "#4fc3f7",
              fontWeight: 700,
              mb: {
                xs: 2,
                md: 3,
              },
              fontSize: {
                xs: "1.2rem",
                sm: "1.35rem",
                md: "1.55rem",
              },
              lineHeight: 1.35,
            }}
          >
            {RESOURCES_CONFIG.faqSectionTitle}
          </Typography>

          <Grid
            container
            columnSpacing={{
              xs: 2,
              sm: 2.5,
              md: 3,
            }}
            rowSpacing={{
              xs: 2,
              sm: 2.5,
              md: 3,
            }}
            alignItems="stretch"
          >
            {FAQ_DATA.map((item) => (
              <Grid
                item
                xs={12}
                md={6}
                key={item.id}
                sx={{
                  display: "flex",
                }}
              >
                <Card
                  component="article"
                  sx={{
                    width: "100%",
                    height: "100%",
                    background:
                      "rgba(255,255,255,0.05)",
                    border:
                      "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 2,
                    transition: "0.3s",

                    "&:hover": {
                      borderColor:
                        "rgba(79,195,247,0.45)",
                      transform:
                        "translateY(-3px)",
                      boxShadow:
                        "0 8px 24px rgba(0,0,0,0.2)",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      p: {
                        xs: 1.8,
                        sm: 2,
                        md: 2.5,
                      },

                      "&:last-child": {
                        pb: {
                          xs: 1.8,
                          sm: 2,
                          md: 2.5,
                        },
                      },
                    }}
                  >
                    <Typography
                      component="h3"
                      sx={{
                        color: "#4fc3f7",
                        fontWeight: 600,
                        fontSize: {
                          xs: "0.88rem",
                          sm: "0.92rem",
                          md: "0.98rem",
                        },
                        lineHeight: 1.5,
                        mb: 1,
                      }}
                    >
                      {item.question}
                    </Typography>

                    <Typography
                      component="p"
                      sx={{
                        color: "#ddd",
                        fontSize: {
                          xs: "0.8rem",
                          sm: "0.84rem",
                          md: "0.88rem",
                        },
                        lineHeight: 1.65,
                        mb: 0,
                      }}
                    >
                      {item.answer}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* =========================
            DESIGN TIPS
        ========================== */}
        <Box
          component="section"
          aria-labelledby="design-tips-title"
          sx={{
            mb: {
              xs: 6,
              md: 8,
            },
          }}
        >
          <Typography
            id="design-tips-title"
            component="h2"
            sx={{
              color: "#4fc3f7",
              fontWeight: 700,
              mb: 1.5,
              fontSize: {
                xs: "1.2rem",
                sm: "1.35rem",
                md: "1.55rem",
              },
              lineHeight: 1.35,
            }}
          >
            {RESOURCES_CONFIG.designTipsTitle}
          </Typography>

          <Typography
            component="p"
            sx={{
              color: "#ddd",
              mb: 2,
              fontSize: {
                xs: "0.84rem",
                sm: "0.88rem",
                md: "0.92rem",
              },
              lineHeight: 1.7,
            }}
          >
            {DESIGN_TIPS.intro}
          </Typography>

          <Box
            component="ul"
            sx={{
              m: 0,
              pl: {
                xs: 2.5,
                sm: 3,
              },
              color: "#ddd",
            }}
          >
            {DESIGN_TIPS.tips.map((tip) => (
              <Box
                component="li"
                key={tip.id}
                sx={{
                  mb: 0.8,
                  pl: 0.5,
                  fontSize: {
                    xs: "0.8rem",
                    sm: "0.84rem",
                    md: "0.88rem",
                  },
                  lineHeight: 1.7,
                }}
              >
                {tip.text}
              </Box>
            ))}
          </Box>
        </Box>

        {/* =========================
            FILE PREPARATION
        ========================== */}
        <Box
          component="section"
          aria-labelledby="file-preparation-title"
          sx={{
            mb: {
              xs: 6,
              md: 8,
            },
          }}
        >
          <Typography
            id="file-preparation-title"
            component="h2"
            sx={{
              color: "#4fc3f7",
              fontWeight: 700,
              mb: 1.5,
              fontSize: {
                xs: "1.2rem",
                sm: "1.35rem",
                md: "1.55rem",
              },
              lineHeight: 1.35,
            }}
          >
            {RESOURCES_CONFIG.filePreparationTitle}
          </Typography>

          <Typography
            component="p"
            sx={{
              color: "#ddd",
              mb: 2,
              fontSize: {
                xs: "0.84rem",
                sm: "0.88rem",
                md: "0.92rem",
              },
              lineHeight: 1.7,
            }}
          >
            {FILE_PREPARATION.intro}
          </Typography>

          <Box
            component="ul"
            sx={{
              m: 0,
              pl: {
                xs: 2.5,
                sm: 3,
              },
              color: "#ddd",
            }}
          >
            {FILE_PREPARATION.tips.map((tip) => (
              <Box
                component="li"
                key={tip.id}
                sx={{
                  mb: 0.8,
                  pl: 0.5,
                  fontSize: {
                    xs: "0.8rem",
                    sm: "0.84rem",
                    md: "0.88rem",
                  },
                  lineHeight: 1.7,
                }}
              >
                {tip.text}
              </Box>
            ))}
          </Box>
        </Box>

        {/* =========================
            PRINTING GLOSSARY
        ========================== */}
        <Box
          component="section"
          aria-labelledby="printing-glossary-title"
        >
          <Typography
            id="printing-glossary-title"
            component="h2"
            sx={{
              color: "#4fc3f7",
              fontWeight: 700,
              mb: {
                xs: 2,
                md: 3,
              },
              fontSize: {
                xs: "1.2rem",
                sm: "1.35rem",
                md: "1.55rem",
              },
              lineHeight: 1.35,
            }}
          >
            {RESOURCES_CONFIG.glossaryTitle}
          </Typography>

          <Grid
            container
            columnSpacing={{
              xs: 2,
              sm: 2.5,
              md: 3,
            }}
            rowSpacing={{
              xs: 2,
              sm: 2.5,
              md: 3,
            }}
            alignItems="stretch"
          >
            {PRINTING_GLOSSARY.map((item) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={item.id}
                sx={{
                  display: "flex",
                }}
              >
                <Card
                  component="article"
                  sx={{
                    width: "100%",
                    height: "100%",
                    background:
                      "rgba(255,255,255,0.05)",
                    border:
                      "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 2,
                    transition: "0.3s",

                    "&:hover": {
                      borderColor:
                        "rgba(79,195,247,0.45)",
                      transform:
                        "translateY(-3px)",
                      boxShadow:
                        "0 8px 24px rgba(0,0,0,0.2)",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      p: {
                        xs: 1.8,
                        sm: 2,
                        md: 2.3,
                      },

                      "&:last-child": {
                        pb: {
                          xs: 1.8,
                          sm: 2,
                          md: 2.3,
                        },
                      },
                    }}
                  >
                    <Typography
                      component="h3"
                      sx={{
                        color: "#4fc3f7",
                        fontWeight: 600,
                        fontSize: {
                          xs: "0.9rem",
                          sm: "0.94rem",
                          md: "0.98rem",
                        },
                        lineHeight: 1.4,
                        mb: 1,
                      }}
                    >
                      {item.term}
                    </Typography>

                    <Typography
                      component="p"
                      sx={{
                        color: "#ddd",
                        fontSize: {
                          xs: "0.8rem",
                          sm: "0.84rem",
                          md: "0.88rem",
                        },
                        lineHeight: 1.65,
                        mb: 0,
                      }}
                    >
                      {item.definition}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}