import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  IconButton,
} from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import CloseIcon from "@mui/icons-material/Close";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import * as pdfjsLib from "pdfjs-dist";

import {
  TRUST_BADGES,
  CERTIFICATES,
  TRUST_CONFIG,
} from "../../constants/trustBadgesData";

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function PdfThumbnail({ file }) {
  const canvasRef = useRef(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function renderThumb() {
      try {
        const loadingTask = pdfjsLib.getDocument(file);
        const pdf = await loadingTask.promise;

        if (cancelled) return;

        const page = await pdf.getPage(1);

        if (cancelled) return;

        const canvas = canvasRef.current;

        if (!canvas) return;

        const viewport = page.getViewport({ scale: 1 });

        const desiredHeight = 260;
        const scale = desiredHeight / viewport.height;
        const scaledViewport = page.getViewport({ scale });

        canvas.width = scaledViewport.width;
        canvas.height = scaledViewport.height;

        await page.render({
          canvasContext: canvas.getContext("2d"),
          viewport: scaledViewport,
        }).promise;
      } catch (err) {
        console.error("PDF thumbnail error:", err);

        if (!cancelled) {
          setError(true);
        }
      }
    }

    renderThumb();

    return () => {
      cancelled = true;
    };
  }, [file]);

  if (error) {
    return (
      <Box
        sx={{
          height: { xs: 210, md: 260 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(255,255,255,0.04)",
          borderRadius: 1,
          gap: 1,
        }}
      >
        <PictureAsPdfIcon
          sx={{
            fontSize: 52,
            color: "#e57373",
          }}
        />

        <Typography
          sx={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "0.75rem",
          }}
        >
          Click to view PDF
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        height: { xs: 210, md: 260 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(255,255,255,0.04)",
        borderRadius: 1,
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain",
        }}
      />
    </Box>
  );
}

export default function TrustBadges() {
  const [open, setOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const handleOpen = (cert) => {
    setSelectedCert(cert);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCert(null);
  };

  return (
    <Box
      component="section"
      aria-labelledby="trust-section-title"
      sx={{
        background:
          "linear-gradient(135deg, #051121, #0a2540, #012a4a)",
        py: { xs: 6, md: 8 },
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
        {/* Section Heading */}
        <Typography
          id="trust-section-title"
          component="h2"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            color: "white",
            mb: 1.5,
            fontSize: {
              xs: "1.5rem",
              sm: "1.7rem",
              md: "1.9rem",
            },
            lineHeight: 1.3,
          }}
        >
          {TRUST_CONFIG.mainTitle}
        </Typography>

        {/* Subtitle */}
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
          {TRUST_CONFIG.subtitle}
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
            {TRUST_CONFIG.description}
          </Typography>
        </Box>

        {/* Trust Badges */}
        <Box
          component="ul"
          aria-label="Sun Beam Printing Press trust badges"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 1.5,
            mb: 6,
            p: 0,
            m: 0,
            listStyle: "none",
          }}
        >
          {TRUST_BADGES.map((badge) => (
            <Box
              component="li"
              key={badge.id}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.8,
                px: 2,
                py: 0.8,
                borderRadius: "50px",
                background: "rgba(79, 195, 247, 0.1)",
                border: "1px solid rgba(79, 195, 247, 0.4)",
                backdropFilter: "blur(8px)",
                transition: "0.3s",

                "&:hover": {
                  background: "rgba(79, 195, 247, 0.2)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <WorkspacePremiumIcon
                aria-hidden="true"
                sx={{
                  color: "#4fc3f7",
                  fontSize: 18,
                }}
              />

              <Typography
                component="span"
                sx={{
                  color: "white",
                  fontSize: {
                    xs: "0.78rem",
                    sm: "0.82rem",
                    md: "0.86rem",
                  },
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}
              >
                {badge.text}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Certifications Heading */}
        <Typography
          component="h3"
          sx={{
            textAlign: "center",
            fontWeight: 600,
            color: "white",
            mb: 3,
            mt:3,
            fontSize: {
              xs: "1.15rem",
              sm: "1.25rem",
              md: "1.4rem",
            },
          }}
        >
          {TRUST_CONFIG.certificationsTitle}
        </Typography>

        {/* Certificates */}
        <Grid
  container
  columnSpacing={{ xs: 2, sm: 2.5, md: 3 }}
  rowSpacing={{ xs: 4, sm: 5, md: 6 }}
  justifyContent="center"
  alignItems="stretch"
>
  {CERTIFICATES.map((cert) => (
    <Grid item xs={12} sm={6} md={4} key={cert.id}>
      <Card
        component="article"
        onClick={() => handleOpen(cert)}
        role="button"
        tabIndex={0}
        aria-label={`View ${cert.title}`}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            handleOpen(cert);
          }
        }}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "rgba(255,255,255,0.05)",
          borderRadius: 2,
          transition: "0.3s",
          border: "1px solid rgba(79, 195, 247, 0.3)",
          cursor: "pointer",
          p: 1.5,

          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
            borderColor: "#4fc3f7",
          },

          "&:focus-visible": {
            outline: "2px solid #4fc3f7",
            outlineOffset: "2px",
          },
        }}
      >
        {cert.type === "image" ? (
          <CardMedia
            component="img"
            image={cert.image}
            alt={`${cert.title} - Sun Beam Printing Press`}
            loading="lazy"
            sx={{
              width: "100%",
              height: {
                xs: 210,
                md: 260,
              },
              objectFit: "contain",
              background: "rgba(255,255,255,0.02)",
            }}
          />
        ) : (
          <PdfThumbnail file={cert.file} />
        )}

        <CardContent
          sx={{
            textAlign: "center",
            px: 1,
            py: 2,
            flexGrow: 1,
            "&:last-child": {
              pb: 2,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 0.8,
            }}
          >
            <VerifiedUserIcon
              aria-hidden="true"
              sx={{
                color: "#4fc3f7",
                mr: 0.8,
                fontSize: 20,
              }}
            />

            <Typography
              component="h4"
              sx={{
                color: "white",
                fontWeight: 600,
                fontSize: {
                  xs: "0.95rem",
                  sm: "1rem",
                },
                lineHeight: 1.4,
              }}
            >
              {cert.title}
            </Typography>
          </Box>

          <Typography
            component="p"
            sx={{
              color: "rgba(255,255,255,0.7)",
              fontSize: {
                xs: "0.78rem",
                sm: "0.82rem",
              },
              lineHeight: 1.6,
              mb: 0,
            }}
          >
            {cert.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>

        {/* Certificate Dialog */}
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="md"
          fullWidth
          aria-labelledby="certificate-dialog-title"
          PaperProps={{
            sx: {
              background: "rgba(5, 17, 33, 0.95)",
              borderRadius: 3,
              border: "1px solid rgba(79, 195, 247, 0.3)",
            },
          }}
        >
          <IconButton
            onClick={handleClose}
            aria-label="Close certificate"
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "white",
              zIndex: 1,
            }}
          >
            <CloseIcon />
          </IconButton>

          {selectedCert && (
            <Box
              sx={{
                p: {
                  xs: 2,
                  sm: 3,
                },
              }}
            >
              <Typography
                id="certificate-dialog-title"
                component="h2"
                sx={{
                  color: "white",
                  textAlign: "center",
                  mb: 2,
                  fontWeight: 600,
                  fontSize: {
                    xs: "1rem",
                    sm: "1.15rem",
                  },
                }}
              >
                {selectedCert.title}
              </Typography>

              {selectedCert.type === "image" ? (
                <Box
                  component="img"
                  src={selectedCert.image}
                  alt={`${selectedCert.title} certificate`}
                  sx={{
                    width: "100%",
                    maxHeight: "70vh",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              ) : (
                <Box
                  component="iframe"
                  src={selectedCert.file}
                  title={selectedCert.title}
                  sx={{
                    width: "100%",
                    height: "70vh",
                    border: "none",
                    borderRadius: 1,
                    display: "block",
                  }}
                />
              )}
            </Box>
          )}
        </Dialog>
      </Container>
    </Box>
  );
}