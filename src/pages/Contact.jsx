import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
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
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/contact-form/`,
        data
      );

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
    <Box
      component="main"
      aria-labelledby="contact-page-title"
      sx={{
        mt: {
          xs: 0,
          md: 4,
        },
        minHeight: "100vh",
        py: {
          xs: 5,
          sm: 6,
          md: 8,
        },
        px: {
          xs: 2.5,
          sm: 4,
          md: 6,
          lg: 8,
        },
        background:
          "linear-gradient(135deg, #051121, #0a2540, #012a4a)",
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
          id="contact-page-title"
          component="h1"
          sx={{
            color: "#fff",
            fontWeight: 700,
            mb: 1.5,
            fontSize: {
              xs: "1.7rem",
              sm: "2rem",
              md: "2.35rem",
            },
            lineHeight: 1.3,
          }}
        >
          Contact Sun Beam Printing Press
        </Typography>

        <Typography
          component="p"
          sx={{
            color: "#4fc3f7",
            maxWidth: 760,
            mx: "auto",
            fontSize: {
              xs: "0.88rem",
              sm: "0.92rem",
              md: "1rem",
            },
            lineHeight: 1.7,
            mb: 0,
          }}
        >
          Have a question or need more information about our
          printing services? Get in touch with Sun Beam Printing
          Press in Guwahati and our team will be happy to assist
          you with your printing requirements.
        </Typography>
      </Box>

      {/* =========================
          CONTACT INFORMATION + FORM
      ========================== */}
      <Grid
        container
        columnSpacing={{
          xs: 2,
          sm: 3,
          md: 5,
        }}
        rowSpacing={{
          xs: 4,
          md: 5,
        }}
        justifyContent="center"
        alignItems="stretch"
        sx={{
          maxWidth: 1100,
          mx: "auto",
        }}
      >
        {/* =========================
            BUSINESS INFORMATION
        ========================== */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
          }}
        >
          <Box
            component="address"
            sx={{
              width: "100%",
              textAlign: {
                xs: "center",
                md: "left",
              },
              color: "#fbfbf9e8",
              fontStyle: "normal",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              px: {
                xs: 1,
                md: 2,
              },
            }}
          >
            <Typography
              component="h2"
              sx={{
                color: "#4fc3f7",
                fontWeight: 700,
                mb: 2,
                fontSize: {
                  xs: "1.15rem",
                  sm: "1.25rem",
                  md: "1.35rem",
                },
                lineHeight: 1.4,
              }}
            >
              Sun Beam Printing Press
            </Typography>

            <Typography
              component="p"
              sx={{
                color: "#fbfbf9e8",
                fontSize: {
                  xs: "0.85rem",
                  sm: "0.88rem",
                  md: "0.92rem",
                },
                lineHeight: 1.7,
                mb: 0,
              }}
            >
              House No. 1, Sankardev Path
              <br />
              Rupnagar, Guwahati, Assam – 781032
            </Typography>

            <Box
              sx={{
                mt: 2.5,
              }}
            >
              <Typography
                component="p"
                sx={{
                  color: "#fbfbf9e8",
                  fontSize: {
                    xs: "0.82rem",
                    sm: "0.86rem",
                    md: "0.9rem",
                  },
                  lineHeight: 1.8,
                  mb: 0,
                }}
              >
                📞 Phone: +91 7002216187
                <br />
                📞 Alternate Phone: +91 9859235981
                <br />
                💬 WhatsApp: +91 7002216187
              </Typography>
            </Box>

            <Typography
              component="p"
              sx={{
                fontWeight: 600,
                color: "#01A9D8",
                mt: 2.5,
                mb: 0,
                fontSize: {
                  xs: "0.82rem",
                  sm: "0.86rem",
                  md: "0.9rem",
                },
                lineHeight: 1.6,
                wordBreak: "break-word",
              }}
            >
              📧 Email: anujkmazumdar@gmail.com
            </Typography>
          </Box>
        </Grid>

        {/* =========================
            CONTACT FORM
        ========================== */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
          }}
        >
          <Paper
            elevation={0}
            sx={{
              width: "100%",
              p: {
                xs: 2.5,
                sm: 3,
                md: 3.5,
              },
              borderRadius: 3,
              background: "#fff",
              boxShadow:
                "0 12px 35px rgba(0,0,0,0.25)",
            }}
          >
            <Typography
              component="h2"
              sx={{
                textAlign: "center",
                fontWeight: 700,
                mb: 2,
                color: "#0a2540",
                fontSize: {
                  xs: "1.15rem",
                  sm: "1.25rem",
                  md: "1.35rem",
                },
              }}
            >
              Send Us a Message
            </Typography>

            <Box
              component="form"
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* Subject */}
              <Controller
                name="subject"
                control={control}
                defaultValue=""
                rules={{
                  required: "Subject is required",
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Subject"
                    fullWidth
                    margin="normal"
                    size="small"
                    error={!!errors.subject}
                    helperText={errors.subject?.message}
                    sx={{
                      "& .MuiInputLabel-root": {
                        fontSize: "0.9rem",
                      },
                      "& .MuiInputBase-input": {
                        fontSize: "0.9rem",
                      },
                    }}
                  />
                )}
              />

              {/* Phone */}
              <Controller
                name="mobile"
                control={control}
                defaultValue=""
                rules={{
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message:
                      "Enter a valid 10-digit mobile number",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Phone Number"
                    fullWidth
                    margin="normal"
                    size="small"
                    type="tel"
                    error={!!errors.mobile}
                    helperText={errors.mobile?.message}
                    slotProps={{
                      htmlInput: {
                        inputMode: "numeric",
                        pattern: "[0-9]*",
                        maxLength: 10,
                      },
                    }}
                    sx={{
                      "& .MuiInputLabel-root": {
                        fontSize: "0.9rem",
                      },
                      "& .MuiInputBase-input": {
                        fontSize: "0.9rem",
                      },
                    }}
                  />
                )}
              />

              {/* Email */}
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: "Email is required",
                  pattern: {
                    value:
                      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message:
                      "Enter a valid email address",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email Address"
                    fullWidth
                    margin="normal"
                    size="small"
                    type="email"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    sx={{
                      "& .MuiInputLabel-root": {
                        fontSize: "0.9rem",
                      },
                      "& .MuiInputBase-input": {
                        fontSize: "0.9rem",
                      },
                    }}
                  />
                )}
              />

              {/* Message */}
              <Controller
                name="message"
                control={control}
                defaultValue=""
                rules={{
                  required: "Message is required",
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Message"
                    fullWidth
                    margin="normal"
                    size="small"
                    multiline
                    rows={4}
                    error={!!errors.message}
                    helperText={errors.message?.message}
                    sx={{
                      "& .MuiInputLabel-root": {
                        fontSize: "0.9rem",
                      },
                      "& .MuiInputBase-input": {
                        fontSize: "0.9rem",
                      },
                    }}
                  />
                )}
              />

              {/* Submit */}
              <Button
                fullWidth
                type="submit"
                variant="contained"
                size="large"
                disabled={status === "Sending..."}
                sx={{
                  mt: 1,
                  py: 1.1,
                  borderRadius: 2,
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: {
                    xs: "0.85rem",
                    sm: "0.9rem",
                  },
                  backgroundColor: "#01A9D8",

                  "&:hover": {
                    backgroundColor: "#008fbd",
                  },

                  "&:disabled": {
                    backgroundColor: "#9e9e9e",
                  },
                }}
              >
                {status === "Sending..."
                  ? "Sending..."
                  : "Send Message"}
              </Button>

              {/* Status */}
              {status && (
                <Typography
                  role="status"
                  aria-live="polite"
                  sx={{
                    mt: 1.5,
                    fontSize: {
                      xs: "0.78rem",
                      sm: "0.82rem",
                    },
                    textAlign: "center",
                    color: status.startsWith("✅")
                      ? "success.main"
                      : status.startsWith("❌")
                      ? "error.main"
                      : "text.secondary",
                  }}
                >
                  {status}
                </Typography>
              )}
            </Box>

            <Typography
              component="p"
              sx={{
                textAlign: "center",
                mt: 2.5,
                mb: 0,
                color: "#555",
                fontSize: {
                  xs: "0.75rem",
                  sm: "0.8rem",
                },
                lineHeight: 1.5,
              }}
            >
              We aim to respond to all inquiries as quickly as
              possible.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* =========================
          GOOGLE MAPS
      ========================== */}
      <Box
        component="section"
        aria-labelledby="location-title"
        sx={{
          maxWidth: 1100,
          mx: "auto",
          mt: {
            xs: 6,
            md: 8,
          },
        }}
      >
        <Typography
          id="location-title"
          component="h2"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            color: "white",
            mb: 1,
            fontSize: {
              xs: "1.25rem",
              sm: "1.4rem",
              md: "1.6rem",
            },
          }}
        >
          Find Sun Beam Printing Press in Guwahati
        </Typography>

        <Typography
          component="p"
          sx={{
            textAlign: "center",
            color: "rgba(255,255,255,0.8)",
            mb: 3,
            fontSize: {
              xs: "0.82rem",
              sm: "0.88rem",
              md: "0.95rem",
            },
            lineHeight: 1.6,
          }}
        >
          Sun Beam Printing Press, Rupnagar, Guwahati, Assam
        </Typography>

        {/* Map */}
        <Box
          sx={{
            width: "100%",
            height: {
              xs: 250,
              sm: 320,
              md: 400,
            },
            borderRadius: 3,
            overflow: "hidden",
            boxShadow:
              "0 10px 30px rgba(0,0,0,0.4)",
            border:
              "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Box
            component="iframe"
            title="Sun Beam Printing Press location in Rupnagar, Guwahati"
            src="https://www.google.com/maps?q=Sun%20Beam%20Printing%20Press%2C%205Q57%2BJ5Q%2C%20GMC%20Hospital%20Rd%2C%20Rupnagar%2C%20Birubari%2C%20Guwahati%2C%20Assam%20781032&output=embed"
            loading="lazy"
            allowFullScreen
            sx={{
              display: "block",
              width: "100%",
              height: "100%",
              border: 0,
            }}
          />
        </Box>

        {/* Google Maps Button */}
        <Box
          sx={{
            textAlign: "center",
            mt: 2.5,
          }}
        >
          <Button
            component="a"
            href="https://www.google.com/maps?q=Sun+Beam+Printing+Press,+5Q57+J5Q,+GMC+Hospital+Rd,+Rupnagar,+Birubari,+Guwahati,+Assam+781032"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Sun Beam Printing Press location in Google Maps"
            sx={{
              px: {
                xs: 2.5,
                sm: 3,
              },
              py: {
                xs: 0.9,
                sm: 1,
              },
              borderRadius: "30px",
              textTransform: "capitalize",
              fontWeight: 600,
              fontSize: {
                xs: "0.78rem",
                sm: "0.85rem",
              },
              letterSpacing: "0.2px",
              color: "rgba(255,255,255,0.9)",
              background:
                "rgba(255,255,255,0.05)",
              border:
                "1px solid rgba(255,255,255,0.8)",
              transition: "all 0.3s ease",

              "&:hover": {
                background:
                  "rgba(79,195,247,0.15)",
                color: "#ffffff",
                transform:
                  "translateY(-2px)",
                border:
                  "1px solid #ffffff",
                boxShadow:
                  "0 5px 20px rgba(79,195,247,0.4)",
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


