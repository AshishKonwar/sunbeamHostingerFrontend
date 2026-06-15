import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import VideoSection from "../ui/VideoSection";

export default function HeroSection() {

  return (
    <Box sx={{ py: { xs: 6, sm: 8, md: 12, lg: 15 }, bgcolor: "#051121" }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
            alignItems: "center",
          }}
        >
          <Box textAlign="left">
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: "#fbfbf9e8",
              }}
            >
              Professional Printing Press & Stationery Printing<br />Services in Guwahati
            </Typography>

            <Typography
              variant="h3"
              component="span"
              sx={{
                fontWeight: 900,
                display: "block",
                color: "#01A9D8",
                letterSpacing: 1,
              }}
            >
              Sun Beam Printing Press
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "#fbfbf9e8",
                lineHeight: 1.8,
                maxWidth: 600,
                mt: 3,
                fontSize: { xs: "1rem", md: "1.125rem" },
              }}
            >
              High-quality <strong>offset and digital printing</strong> using advanced 
              <strong> Komori Lithrone technology</strong>. Serving Assam since <em>2007 </em> 
              with reliability and precision.
            </Typography>

            <Box sx={{ mt: 3 }}>
              <Stack direction="row" gap={3}>
                <Button
                  component={RouterLink}
                  to="/contact"
                  size="large"
                  sx={{
                    px: 3.5,
                    py: 1.2,
                    borderRadius: "30px",
                    textTransform: "capitalize",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.9)",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.8)",
                    transition: "all 0.3s ease",

                    "&:hover": {
                      background: "rgba(79,195,247,0.15)",
                      color: "#ffffff",
                      transform: "translateY(-2px)",
                      boxShadow: "0 5px 20px rgba(79,195,247,0.4)",
                    },
                  }}
                >
                  Contact
                </Button>
              </Stack>
            </Box>
          </Box>

          <Box
            sx={{
              position: "relative",
              borderRadius: 3,
              overflow: "hidden",
              height: 412,
            }}
          >
            <VideoSection />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}