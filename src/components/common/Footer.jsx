import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Link,
  Divider,
  IconButton,
  Dialog,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import CloseIcon from "@mui/icons-material/Close";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { Link as RouterLink } from "react-router-dom";
import * as pdfjsLib from "pdfjs-dist";

import { CERTIFICATES } from "../../constants/trustBadgesData";

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function PdfThumbnail({ file }) {
  const canvasRef = useRef(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function render() {
      try {
        const pdf = await pdfjsLib.getDocument(file).promise;
        if (cancelled) return;
        const page = await pdf.getPage(1);
        if (cancelled) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const base = page.getViewport({ scale: 1 });
        const scale = 120 / base.height;          // target ~120px tall thumb
        const vp = page.getViewport({ scale });

        canvas.width = vp.width;
        canvas.height = vp.height;
        await page.render({ canvasContext: canvas.getContext("2d"), viewport: vp }).promise;
      } catch (e) {
        if (!cancelled) setError(true);
      }
    }
    render();
    return () => { cancelled = true; };
  }, [file]);

  if (error)
    return (
      <Box sx={{ width: 140, height: 100, display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "rgba(255,255,255,0.08)", borderRadius: 2 }}>
        <PictureAsPdfIcon sx={{ fontSize: 40, color: "#e57373" }} />
      </Box>
    );

  return (
    <Box sx={{ width: { xs: 140, md: 170 }, height: { xs: 100, md: 120 }, display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "white", borderRadius: 2, overflow: "hidden", p: 1 }}>
      <canvas ref={canvasRef} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
    </Box>
  );
}

const footerLinks = {
  "Let Us Help": [{ label: "Contact Us", path: "/contact" }],
  "Our Company": [{ label: "About Us", path: "/about" }],
};

const socialLinks = [
  { icon: <InstagramIcon />, href: "https://www.instagram.com/sunbeamprintingpress/" },
];

export default function Footer() {
  const [open, setOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const handleOpen  = (cert) => { setSelectedCert(cert); setOpen(true); };
  const handleClose = ()     => { setOpen(false); setSelectedCert(null); };

  return (
    <Box component="footer" sx={{ backgroundColor: "#051121", color: "#fbfbf9e8" }}>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4} alignItems="flex-start">

          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <Typography variant="h6" fontWeight={700}>
                You need it. We print it. You love it.
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Sun Beam Printing Press is here to help every step of the way.
              </Typography>
            </Stack>
          </Grid>

          {/* Nav links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <Grid item xs={12} sm={6} md={2} key={title}>
              <Stack spacing={2}>
                <Typography variant="subtitle1" fontWeight={600}>{title}</Typography>
                <Stack spacing={1}>
                  {links.map((link) => (
                    <Link
                      key={link.label}
                      component={RouterLink}
                      to={link.path}
                      color="inherit"
                      sx={{
                        textDecoration: "none",
                        fontSize: "0.875rem",
                        transition: "all 0.3s ease",
                        "&:hover": { textDecoration: "underline", color: "#4fc3f7" },
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Stack>
              </Stack>
            </Grid>
          ))}

          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <Typography variant="subtitle1" fontWeight={600} textAlign="center">
                Our Certifications
              </Typography>

              {/* Scrollable row of all certs */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1.5,
                  justifyContent: "center",
                }}
              >
                {CERTIFICATES.map((cert) => (
                  <Box
                    key={cert.id}
                    onClick={() => handleOpen(cert)}
                    sx={{
                      cursor: "pointer",
                      borderRadius: 2,
                      overflow: "hidden",
                      border: "1px solid rgba(79,195,247,0.3)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.06)",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
                        borderColor: "#4fc3f7",
                      },
                    }}
                  >
                    {cert.type === "image" ? (
                      <Box
                        component="img"
                        src={cert.image}
                        alt={cert.title}
                        sx={{
                          width: { xs: 140, md: 170 },
                          height: { xs: 100, md: 120 },
                          objectFit: "contain",
                          bgcolor: "white",
                          p: 1,
                          display: "block",
                        }}
                      />
                    ) : (
                      <PdfThumbnail file={cert.file} />
                    )}

                    <Typography
                      sx={{
                        fontSize: "0.65rem",
                        color: "rgba(255,255,255,0.6)",
                        textAlign: "center",
                        px: 0.5,
                        py: 0.4,
                        bgcolor: "rgba(0,0,0,0.4)",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: { xs: 140, md: 170 },
                      }}
                    >
                      {cert.title}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.2)" }} />

      {/* BOTTOM BAR */}
      <Container maxWidth="lg" sx={{ py: 3 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="caption" sx={{ opacity: 0.8 }}>
              A Printing press company © 2007-present Sun Beam Printing Press. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction="row" spacing={2} justifyContent={{ xs: "center", md: "flex-end" }} alignItems="center">
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  size="small"
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "white", "&:hover": { bgcolor: "rgba(255,255,255,0.1)" } }}
                >
                  {social.icon}
                </IconButton>
              ))}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, px: 2, py: 1, bgcolor: "rgba(255,255,255,0.1)", borderRadius: 1 }}>
                <Typography variant="body2">in</Typography>
                <Typography variant="body2">India</Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>

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
          sx={{
            position: "absolute", top: 8, right: 8, zIndex: 1,
            color: "white", background: "rgba(0,0,0,0.5)",
            "&:hover": { background: "rgba(0,0,0,0.7)" },
          }}
        >
          <CloseIcon />
        </IconButton>

        {selectedCert && (
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ color: "white", textAlign: "center", mb: 2 }}>
              {selectedCert.title}
            </Typography>

            {selectedCert.type === "image" ? (
              <Box
                component="img"
                src={selectedCert.image}
                alt={selectedCert.title}
                sx={{ width: "100%", maxHeight: "80vh", objectFit: "contain", borderRadius: 2 }}
              />
            ) : (
              <Box
                component="iframe"
                src={selectedCert.file}
                title={selectedCert.title}
                sx={{ width: "100%", height: "75vh", border: "none", borderRadius: 1, display: "block" }}
              />
            )}
          </Box>
        )}
      </Dialog>
    </Box>
  );
}