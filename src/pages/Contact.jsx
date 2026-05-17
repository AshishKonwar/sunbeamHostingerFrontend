import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Breadcrumbs,
  Link,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

export default function ContactUs() {
  const [status, setStatus] = useState("");

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {

    setStatus("Sending...");

    try {
      
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/contact-form/`, data);

      if (response.data.success) {
        setStatus("✅ Message sent successfully!");
        console.log("Email sent successfully");
        reset();
      } else {
        setStatus("❌ Failed to send message.");
        console.log(response.data.error);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("❌ Error sending message");
    }
  };

  return (
    <Box sx={{ mt: { xs: 0, md: 6 }, p: 4, backgroundColor: "#061727", minHeight: "100vh" }}>
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
                Contact Us
              </Typography>

      <Box sx={{ maxWidth: 800, mx: "auto", mb: 6 }}>
                 <Typography  
                          sx={{
                            textAlign: "center",
                            color: "#4fc3f7",
                            mb: 5,
                          }}
                        >
                  Have a question or need more information about our services? Get in touch with us and our team will be happy to assist you with your printing requirements.
                </Typography>
              </Box>

      <Grid container spacing={10} justifyContent="center" mt={2}>
        {/* Left Side - Contact Info */}
         <Grid item xs={12} md={5}>
    <Box textAlign="center" sx={{ lineHeight: 1.8 }}>
      
      <Typography
        variant="h6"
        sx={{ color: "#4fc3f7", fontWeight: 700, mb: 2 }}
      >
        Sun Beam Printing Press
      </Typography>

      <Typography color="#fbfbf9e8" variant="body1">
        House No. 1, Sankardev Path <br />
        Rupnagar, Guwahati, Assam – 781032
      </Typography>

      <Typography color="#fbfbf9e8" variant="body1" sx={{ mt: 3 }}>
        📞 Phone: +91 7002216187 <br />
        📞 Alternate Phone: +91 9859235981 <br />
        💬 WhatsApp: +91 7002216187
      </Typography>

      <Typography
        variant="body1"
        sx={{ fontWeight: 600, color: "#01A9D8", mt: 3 }}
      >
        📧 Email: anujkmazumdar@gmail.com
      </Typography>

    </Box>
  </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4, boxShadow: 3, borderRadius: 2 }}>

            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
                fontWeight: 700,
                mb: 2,
                color: "#0a2540",
                fontSize: { xs: "1.3rem", md: "1.3rem" },
              }}
            >
              Send Us a Message
            </Typography>
            <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="subject"
                control={control}
                defaultValue=""
                rules={{ required: "Subject is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Subject"
                    fullWidth
                    margin="normal"
                    error={!!errors.subject}
                    helperText={errors.subject?.message}
                  />
                )}
              />

              <Controller
                name="mobile"
                control={control}
                defaultValue=""
                rules={{
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10-digit mobile number",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Phone Number"
                    fullWidth
                    margin="normal"
                    error={!!errors.mobile}
                    helperText={errors.mobile?.message}
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  />
                )}
              />

              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address (e.g. myemail@gmail.com)",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email Address"
                    fullWidth
                    margin="normal"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                )}
              />

              <Controller
                name="message"
                control={control}
                defaultValue=""
                rules={{ required: "Message is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Message"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    error={!!errors.message}
                    helperText={errors.message?.message}
                  />
                )}
              />

              <Button
                fullWidth
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
                  py: 1.2,
                  backgroundColor: "#01A9D8",
                  "&:hover": { backgroundColor: "#01A9D8" },
                }}
              >
                Send
              </Button>

              {status && (
                <Typography
                  sx={{ mt: 2, fontSize: "0.9rem", textAlign: "center" }}
                  color={
                    status.startsWith("✅")
                      ? "success.main"
                      : status.startsWith("❌")
                      ? "error.main"
                      : "text.secondary"
                  }
                >
                  {status}
                </Typography>
              )}
            </Box>
            <Typography
               sx={{
                            textAlign: "center",
                            mt: 3,
                            color: "#555",
                            fontSize: { xs: "0.85rem", md: "0.95rem" },
                          }}
                        >
              We aim to respond to all inquiries as quickly as possible.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* MAP SECTION */}
<Box sx={{ mt: 8 }}>
  <Typography
    variant="h5"
    sx={{
      textAlign: "center",
      fontWeight: 700,
      color: "white",
      mb: 2,
      fontSize: { xs: "1.2rem", md: "1.6rem" },
    }}
  >
    📍 Find Us
  </Typography>

  <Typography
    sx={{
      textAlign: "center",
      color: "rgba(255,255,255,0.8)",
      mb: 4,
      fontSize: { xs: "0.9rem", md: "1rem" },
    }}
  >
    Sun Beam Printing Press, Rupnagar, Guwahati
  </Typography>

  <Box
    sx={{
      width: "100%",
      height: { xs: 250, md: 400 },
      borderRadius: 3,
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
    }}
  >
    <iframe
      title="Sun Beam Printing Press Location"
      src="https://www.google.com/maps?q=Sun%20Beam%20Printing%20Press%2C%205Q57%2BJ5Q%2C%20GMC%20Hospital%20Rd%2C%20Rupnagar%2C%20Birubari%2C%20Guwahati%2C%20Assam%20781032&output=embed"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </Box>

  <Box sx={{ textAlign: "center", mt: 3 }}>
      <Button
        component="a"
        href="https://www.google.com/maps?q=Sun+Beam+Printing+Press,+5Q57+J5Q,+GMC+Hospital+Rd,+Rupnagar,+Birubari,+Guwahati,+Assam+781032"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          px: 3.5,
          py: 1.2,
          borderRadius: "30px",
          textTransform: "capitalize",
          fontWeight: 600,
          letterSpacing: "0.3px",

          color: "rgba(255,255,255,0.9)",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.8)",

          transition: "all 0.3s ease",

          "&:hover": {
            background: "rgba(79,195,247,0.15)",
            color: "#ffffff",
            transform: "translateY(-2px)",
            border: "1px solid #ffffff",
            boxShadow: "0 5px 20px rgba(79,195,247,0.4)",
          },

          "&:active": {
            transform: "scale(0.97)",
          },
        }}
      >
        Open in Google Maps →
      </Button>
    </Box>
</Box>
    </Box>
  );
}
