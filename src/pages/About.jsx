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
  CERTIFICATIONS_INFO,
} from "../constants/aboutData";

export default function About() {
  return (
    <Box
      component="main"
      aria-labelledby="about-page-title"
      sx={{
        width: "100%",
        maxWidth: "100%",
        overflowX: "hidden",

        mt: {
          xs: 0,
          md: 4,
        },

        background:
          "linear-gradient(135deg, #051121, #0a2540, #012a4a)",

        minHeight: "100vh",

        py: {
          xs: 5,
          sm: 6,
          md: 8,
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          px: {
            xs: 2.5,
            sm: 4,
            md: 5,
            lg: 6,
          },
        }}
      >
        {/* =====================================================
            PAGE HEADING
        ====================================================== */}
        <Box
          component="header"
          sx={{
            textAlign: "center",
            mb: {
              xs: 4,
              md: 5,
            },
          }}
        >
          <Typography
            id="about-page-title"
            component="h1"
            sx={{
              color: "#fff",
              fontWeight: 700,
              fontSize: {
                xs: "1.6rem",
                sm: "1.9rem",
                md: "2.2rem",
              },
              lineHeight: 1.3,
            }}
          >
            {ABOUT_CONFIG.pageTitle}
          </Typography>
        </Box>

        {/* =====================================================
            TEAM IMAGE
        ====================================================== */}
        <Box
          component="section"
          aria-label={`${ABOUT_CONFIG.companyName} team`}
          sx={{
            mb: {
              xs: 5,
              md: 6,
            },
          }}
        >
          <Box
            component="img"
            src={ABOUT_IMAGES.teamPhoto}
            alt={`${ABOUT_CONFIG.companyName} team in Guwahati`}
            loading="eager"
            decoding="async"
            sx={{
              display: "block",
              width: "100%",
              height: {
                xs: 220,
                sm: 300,
                md: 430,
              },
              objectFit: "cover",
              borderRadius: 3,
              boxShadow:
                "0 12px 30px rgba(0,0,0,0.5)",
            }}
          />
        </Box>

        {/* =====================================================
            COMPANY INTRODUCTION
        ====================================================== */}
        <Box
          component="section"
          aria-labelledby="company-introduction-heading"
          sx={{
            maxWidth: 850,
            mx: "auto",
            mb: {
              xs: 6,
              md: 7,
            },
          }}
        >
          <Typography
            id="company-introduction-heading"
            component="h2"
            sx={{
              color: "#4fc3f7",
              fontWeight: 700,
              textAlign: "center",
              mb: {
                xs: 2.5,
                md: 3,
              },
              fontSize: {
                xs: "1.15rem",
                sm: "1.3rem",
                md: "1.45rem",
              },
            }}
          >
            About {ABOUT_CONFIG.companyName}
          </Typography>

          <Typography
            component="p"
            sx={{
              color: "#ddd",
              lineHeight: 1.8,
              fontSize: {
                xs: "0.84rem",
                sm: "0.88rem",
                md: "0.94rem",
              },
              textAlign: "left",
              mb: 2.5,
            }}
          >
            <Box
              component="strong"
              sx={{
                color: "#fff",
                fontWeight: 600,
              }}
            >
              {ABOUT_CONFIG.companyName}
            </Box>{" "}
            {ABOUT_INTRO.paragraph1}
          </Typography>

          <Typography
            component="p"
            sx={{
              color: "#ddd",
              lineHeight: 1.8,
              fontSize: {
                xs: "0.84rem",
                sm: "0.88rem",
                md: "0.94rem",
              },
              textAlign: "left",
              mb: 0,
            }}
          >
            Today,{" "}
            <Box
              component="strong"
              sx={{
                color: "#fff",
                fontWeight: 600,
              }}
            >
              {ABOUT_CONFIG.companyName}
            </Box>{" "}
            {ABOUT_INTRO.paragraph2}
          </Typography>
        </Box>

        {/* =====================================================
            MISSION
        ====================================================== */}
        <AboutSection
          id="mission"
          title={ABOUT_SECTIONS.mission.title}
          content={ABOUT_SECTIONS.mission.content}
        />

        {/* =====================================================
            VISION
        ====================================================== */}
        <AboutSection
          id="vision"
          title={ABOUT_SECTIONS.vision.title}
          content={ABOUT_SECTIONS.vision.content}
        />

        {/* =====================================================
            QUALITY POLICY
        ====================================================== */}
        <AboutSection
          id="quality-policy"
          title={ABOUT_SECTIONS.qualityPolicy.title}
          content={ABOUT_SECTIONS.qualityPolicy.content}
        />

        {/* =====================================================
            GUIDING PRINCIPLES
        ====================================================== */}
        <Box
          component="section"
          aria-labelledby="guiding-principles-heading"
          sx={{
            mt: {
              xs: 7,
              md: 8,
            },
            mb: {
              xs: 6,
              md: 7,
            },
          }}
        >
          <Typography
            id="guiding-principles-heading"
            component="h2"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              color: "#4fc3f7",
              mb: {
                xs: 2.5,
                md: 3,
              },
              fontSize: {
                xs: "1.15rem",
                sm: "1.3rem",
                md: "1.45rem",
              },
            }}
          >
            Our Guiding Principles
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: {
                xs: 1,
                sm: 1.5,
              },
            }}
          >
            {GUIDING_PRINCIPLES.map((principle) => (
              <Box
                key={principle.id}
                component="span"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.8,

                  px: {
                    xs: 1.4,
                    sm: 1.8,
                    md: 2,
                  },

                  py: {
                    xs: 0.7,
                    sm: 0.8,
                  },

                  borderRadius: "50px",

                  background:
                    "rgba(79,195,247,0.1)",

                  border:
                    "1px solid rgba(79,195,247,0.4)",

                  backdropFilter: "blur(8px)",

                  whiteSpace: "nowrap",

                  transition: "0.3s",

                  "&:hover": {
                    background:
                      "rgba(79,195,247,0.2)",
                    transform:
                      "translateY(-2px)",
                  },
                }}
              >
                <WorkspacePremiumIcon
                  aria-hidden="true"
                  sx={{
                    color: "#4fc3f7",
                    fontSize: {
                      xs: 16,
                      sm: 18,
                    },
                  }}
                />

                <Typography
                  component="span"
                  sx={{
                    color: "white",
                    fontSize: {
                      xs: "0.7rem",
                      sm: "0.76rem",
                      md: "0.82rem",
                    },
                    fontWeight: 500,
                  }}
                >
                  {principle.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* =====================================================
            OUR CUSTOMERS
        ====================================================== */}
        <Box
          component="section"
          aria-labelledby="customers-heading"
          sx={{
            maxWidth: 850,
            mx: "auto",
            mb: {
              xs: 6,
              md: 7,
            },
          }}
        >
          <Typography
            id="customers-heading"
            component="h2"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              color: "#4fc3f7",
              mb: {
                xs: 2.5,
                md: 3,
              },
              fontSize: {
                xs: "1.15rem",
                sm: "1.3rem",
                md: "1.45rem",
              },
            }}
          >
            Our Customers
          </Typography>

          <Grid
            container
            spacing={{
              xs: 2,
              sm: 2.5,
              md: 3,
            }}
            justifyContent="center"
          >
            {CUSTOMER_SEGMENTS.map((customer) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={customer.id}
              >
                <Card
                  component="article"
                  sx={{
                    background:
                      "rgba(255,255,255,0.05)",

                    border:
                      "1px solid rgba(255,255,255,0.08)",

                    borderRadius: 2,

                    height: "100%",

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
                      textAlign: "center",

                      p: {
                        xs: 1.5,
                        sm: 1.8,
                      },

                      "&:last-child": {
                        pb: {
                          xs: 1.5,
                          sm: 1.8,
                        },
                      },
                    }}
                  >
                    <Typography
                      component="h3"
                      sx={{
                        color: "#fff",
                        fontWeight: 500,

                        fontSize: {
                          xs: "0.76rem",
                          sm: "0.8rem",
                          md: "0.86rem",
                        },

                        lineHeight: 1.5,
                      }}
                    >
                      {customer.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* =====================================================
            CERTIFICATIONS
        ====================================================== */}
        <Box
          component="section"
          aria-labelledby="certifications-heading"
          sx={{
            maxWidth: 850,
            mx: "auto",
            mb: {
              xs: 5,
              md: 6,
            },
          }}
        >
          <Typography
            id="certifications-heading"
            component="h2"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              color: "#4fc3f7",
              mb: {
                xs: 2.5,
                md: 3,
              },
              fontSize: {
                xs: "1.15rem",
                sm: "1.3rem",
                md: "1.45rem",
              },
            }}
          >
            {CERTIFICATIONS_INFO.title}
          </Typography>

          <Card
            component="article"
            sx={{
              background:
                "rgba(255,255,255,0.05)",

              borderRadius: 2,

              border:
                "1px solid rgba(79,195,247,0.3)",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                gap: {
                  xs: 1.5,
                  sm: 2,
                },

                p: {
                  xs: 2,
                  sm: 2.5,
                  md: 3,
                },

                "&:last-child": {
                  pb: {
                    xs: 2,
                    sm: 2.5,
                    md: 3,
                  },
                },
              }}
            >
              <WorkspacePremiumIcon
                aria-hidden="true"
                sx={{
                  color: "#4fc3f7",

                  fontSize: {
                    xs: 28,
                    sm: 34,
                    md: 38,
                  },

                  flexShrink: 0,
                }}
              />

              <Typography
                component="p"
                sx={{
                  color: "#fff",

                  fontSize: {
                    xs: "0.78rem",
                    sm: "0.84rem",
                    md: "0.9rem",
                  },

                  lineHeight: 1.6,

                  mb: 0,
                }}
              >
                {ABOUT_CONFIG.companyName}{" "}
                {CERTIFICATIONS_INFO.description}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>

      {/* =====================================================
          TRUST BADGES
      ====================================================== */}
      <TrustBadges />
    </Box>
  );
}

/* ============================================================
   REUSABLE SEO-FRIENDLY SECTION
============================================================ */

function AboutSection({ id, title, content }) {
  return (
    <Box
      component="section"
      aria-labelledby={`${id}-heading`}
      sx={{
        maxWidth: 850,
        mx: "auto",

        mb: {
          xs: 6,
          md: 7,
        },
      }}
    >
      <Typography
        id={`${id}-heading`}
        component="h2"
        sx={{
          textAlign: "center",
          fontWeight: 700,
          color: "#4fc3f7",

          mb: {
            xs: 2,
            md: 2.5,
          },

          fontSize: {
            xs: "1.15rem",
            sm: "1.3rem",
            md: "1.45rem",
          },

          lineHeight: 1.35,
        }}
      >
        {title}
      </Typography>

      <Typography
        component="p"
        sx={{
          color: "#ddd",

          lineHeight: 1.8,

          fontSize: {
            xs: "0.84rem",
            sm: "0.88rem",
            md: "0.94rem",
          },

          textAlign: "left",

          mb: 0,
        }}
      >
        {content}
      </Typography>
    </Box>
  );
}