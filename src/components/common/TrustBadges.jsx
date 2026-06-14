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

import { TRUST_BADGES, CERTIFICATES, TRUST_CONFIG } from "../../constants/trustBadgesData";

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

        // Scale to fit the card width (≈ 280px card height target)
        const desiredHeight = 280;
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
        if (!cancelled) setError(true);
      }
    }

    renderThumb();
    return () => { cancelled = true; };
  }, [file]);

  if (error) {
    return (
      <Box
        sx={{
          height: { xs: 220, md: 280 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(255,255,255,0.04)",
          borderRadius: 1,
          gap: 1,
        }}
      >
        <PictureAsPdfIcon sx={{ fontSize: 64, color: "#e57373" }} />
        <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem" }}>
          Click to view PDF
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        height: { xs: 220, md: 280 },
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
        style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
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
      sx={{
        background: "linear-gradient(135deg, #051121, #0a2540, #012a4a)",
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          sx={{ textAlign: "center", fontWeight: 700, color: "white", mb: 2 }}
        >
          {TRUST_CONFIG.mainTitle}
        </Typography>

        <Typography
          variant="h6"
          sx={{ textAlign: "center", fontWeight: 600, color: "#4fc3f7", mb: 5 }}
        >
          {TRUST_CONFIG.subtitle}
        </Typography>

        <Box sx={{ maxWidth: 800, mx: "auto", mb: 6 }}>
          <Typography
            variant="body1"
            sx={{ textAlign: "center", color: "rgba(255,255,255,0.8)", lineHeight: 1.8 }}
          >
            {TRUST_CONFIG.description}
          </Typography>
        </Box>

        <Box
  sx={{
    mt: 3,
    mb: 5,
    maxWidth: 900,
    mx: "auto",
    p: 2.5,
    borderRadius: 2,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(79,195,247,0.25)",
    textAlign: "center",
  }}
>
  {TRUST_CONFIG.registrationDetails.map((detail, index) => (
    <Typography
      key={index}
      sx={{
        color: "rgba(255,255,255,0.85)",
        fontSize: { xs: "0.85rem", md: "0.95rem" },
        fontWeight: 500,
        lineHeight: 1.8,
      }}
    >
      {detail}
    </Typography>
  ))}
</Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2,
            mb: 8,
          }}
        >
          {TRUST_BADGES.map((badge) => (
            <Box
              key={badge.id}
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
                transition: "0.3s",
                "&:hover": {
                  background: "rgba(79, 195, 247, 0.2)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <WorkspacePremiumIcon sx={{ color: "#4fc3f7", fontSize: 20 }} />
              <Typography
                sx={{ color: "white", fontSize: "0.9rem", fontWeight: 500, whiteSpace: "nowrap" }}
              >
                {badge.text}
              </Typography>
            </Box>
          ))}
        </Box>

        <Typography
          variant="h6"
          sx={{ textAlign: "center", fontWeight: 600, color: "white", mb: 4 }}
        >
          {TRUST_CONFIG.certificationsTitle}
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {CERTIFICATES.map((cert) => (
            <Grid item xs={12} sm={6} md={4} key={cert.id}>
              <Card
                onClick={() => handleOpen(cert)}
                sx={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: 2,
                  transition: "0.3s",
                  border: "1px solid rgba(79, 195, 247, 0.3)",
                  cursor: "pointer",
                  padding: 2,
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
                    borderColor: "#4fc3f7",
                  },
                }}
              >
                {cert.type === "image" ? (
                  <CardMedia
                    component="img"
                    image={cert.image}
                    alt={cert.title}
                    sx={{
                      height: { xs: 220, md: 280 },
                      objectFit: "contain",
                      background: "rgba(255,255,255,0.02)",
                    }}
                  />
                ) : (
                  <PdfThumbnail file={cert.file} />
                )}

                <CardContent sx={{ textAlign: "center" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 1,
                    }}
                  >
                    <VerifiedUserIcon sx={{ color: "#4fc3f7", mr: 1 }} />
                    <Typography variant="h6" sx={{ color: "white", fontWeight: 600 }}>
                      {cert.title}
                    </Typography>
                  </Box>
                  <Typography sx={{ color: "rgba(255,255,255,0.7)" }}>
                    {cert.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="md"
          fullWidth
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
            aria-label="Close"
            sx={{ position: "absolute", top: 8, right: 8, color: "white", zIndex: 1 }}
          >
            <CloseIcon />
          </IconButton>

          {selectedCert && (
            <Box sx={{ p: 3 }}>
              <Typography
                variant="h6"
                sx={{ color: "white", textAlign: "center", mb: 2 }}
              >
                {selectedCert.title}
              </Typography>

              {selectedCert.type === "image" ? (
                <Box
                  component="img"
                  src={selectedCert.image}
                  alt={selectedCert.title}
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