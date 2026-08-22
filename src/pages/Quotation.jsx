import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Alert,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

export default function Quotation() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      project: "",
      quantity: "",
      size: "",
      deadline: "",
      details: "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setStatus("Sending...");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/quotation-form/`,
        data
      );

      if (response.data.success) {
        setStatus("success");
        reset();

        setTimeout(() => {
          setStatus("");
        }, 5000);
      } else {
        setStatus("error");

        setTimeout(() => {
          setStatus("");
        }, 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");

      setTimeout(() => {
        setStatus("");
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="main"
      aria-labelledby="quotation-page-title"
      sx={{
        /*
         * IMPORTANT:
         * On mobile, make this section use the entire viewport width.
         * This prevents the quotation page from inheriting a narrow
         * width from a parent layout.
         */
        width: {
          xs: "100vw",
          sm: "100%",
        },

        maxWidth: {
          xs: "100vw",
          sm: "100%",
        },

        minWidth: 0,

        /*
         * Pull the quotation page to the left edge of the viewport
         * when a parent container has a restricted width.
         */
        ml: {
          xs: "calc(50% - 50vw)",
          sm: 0,
        },

        boxSizing: "border-box",
        overflowX: "hidden",

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
          xs: 2,
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
          width: "100%",
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
          id="quotation-page-title"
          component="h1"
          sx={{
            color: "#fff",
            fontWeight: 700,
            mb: 1.5,
            fontSize: {
              xs: "1.55rem",
              sm: "1.9rem",
              md: "2.25rem",
            },
            lineHeight: 1.3,
          }}
        >
          Request a Printing Quote
        </Typography>

        <Typography
          component="p"
          sx={{
            color: "#4fc3f7",
            width: "100%",
            maxWidth: 760,
            mx: "auto",
            mb: 0,
            fontSize: {
              xs: "0.82rem",
              sm: "0.9rem",
              md: "0.98rem",
            },
            lineHeight: 1.7,
          }}
        >
          Tell us about your printing requirements and we will provide a
          suitable solution and pricing based on your project, quantity, size
          and deadline.
        </Typography>
      </Box>

      {/* =========================
          QUOTATION FORM
      ========================== */}

      <Grid
        container
        justifyContent="center"
        sx={{
          width: "100%",
          maxWidth: 900,
          mx: "auto",
          minWidth: 0,
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            width: "100%",
            maxWidth: "100%",
            minWidth: 0,
          }}
        >
          <Paper
            elevation={0}
            sx={{
              width: "100%",
              maxWidth: "100%",
              minWidth: 0,
              boxSizing: "border-box",

              p: {
                xs: 2,
                sm: 3,
                md: 4,
              },

              borderRadius: {
                xs: 2.5,
                sm: 3,
              },

              background: "#fff",

              boxShadow:
                "0 12px 40px rgba(0,0,0,0.25)",
            }}
          >
            {/* =========================
                FORM TITLE
            ========================== */}

            <Typography
              component="h2"
              sx={{
                textAlign: "center",
                fontWeight: 700,
                mb: 3,
                color: "#0a2540",
                fontSize: {
                  xs: "1.1rem",
                  sm: "1.2rem",
                  md: "1.35rem",
                },
                lineHeight: 1.4,
              }}
            >
              Get Your Printing Quote
            </Typography>

            {/* =========================
                STATUS MESSAGES
            ========================== */}

            {status === "success" && (
              <Alert
                severity="success"
                sx={{
                  mb: 3,
                  fontSize: {
                    xs: "0.76rem",
                    sm: "0.82rem",
                  },
                }}
              >
                Quote request sent successfully! We'll get back to you soon.
              </Alert>
            )}

            {status === "error" && (
              <Alert
                severity="error"
                sx={{
                  mb: 3,
                  fontSize: {
                    xs: "0.76rem",
                    sm: "0.82rem",
                  },
                }}
              >
                Failed to send your request. Please try again or contact us
                directly.
              </Alert>
            )}

            {status === "Sending..." && (
              <Alert
                severity="info"
                sx={{
                  mb: 3,
                  fontSize: {
                    xs: "0.76rem",
                    sm: "0.82rem",
                  },
                }}
              >
                Sending your quotation request...
              </Alert>
            )}

            <Box
              component="form"
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
              sx={{
                width: "100%",
                minWidth: 0,
              }}
            >
              {/* =========================
                  BASIC DETAILS
              ========================== */}

              <Box
                component="section"
                aria-labelledby="basic-details-title"
                sx={{
                  mb: 3,
                }}
              >
                <Typography
                  id="basic-details-title"
                  component="h3"
                  sx={{
                    color: "#0a2540",
                    fontWeight: 700,
                    mb: 1,
                    fontSize: {
                      xs: "0.9rem",
                      sm: "0.98rem",
                      md: "1.03rem",
                    },
                  }}
                >
                  Basic Details
                </Typography>

                <Box
                  sx={{
                    height: "1px",
                    width: "100%",
                    background:
                      "linear-gradient(90deg, #4fc3f7, #01A9D8)",
                    borderRadius: "5px",
                    mb: 1,
                  }}
                />

                {/* Full Name */}

                <Controller
                  name="name"
                  control={control}
                  rules={{
                    required: "Full Name is required",
                    minLength: {
                      value: 3,
                      message: "Minimum 3 characters required",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Full Name"
                      fullWidth
                      margin="normal"
                      size="small"
                      autoComplete="name"
                      error={!!errors.name}
                      helperText={errors.name?.message}
                      sx={fieldSx}
                    />
                  )}
                />

                {/* Phone */}

                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Enter a valid 10-digit phone number",
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
                      autoComplete="tel"
                      error={!!errors.phone}
                      helperText={errors.phone?.message}
                      slotProps={{
                        htmlInput: {
                          inputMode: "numeric",
                          pattern: "[0-9]*",
                          maxLength: 10,
                        },
                      }}
                      sx={fieldSx}
                    />
                  )}
                />

                {/* Email */}

                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
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
                      autoComplete="email"
                      error={!!errors.email}
                      helperText={errors.email?.message}
                      sx={fieldSx}
                    />
                  )}
                />
              </Box>

              {/* =========================
                  PROJECT DETAILS
              ========================== */}

              <Box
                component="section"
                aria-labelledby="project-details-title"
                sx={{
                  mb: 3,
                }}
              >
                <Typography
                  id="project-details-title"
                  component="h3"
                  sx={{
                    color: "#0a2540",
                    fontWeight: 700,
                    mb: 1,
                    fontSize: {
                      xs: "0.9rem",
                      sm: "0.98rem",
                      md: "1.03rem",
                    },
                  }}
                >
                  Project Details
                </Typography>

                <Box
                  sx={{
                    height: "1px",
                    width: "100%",
                    background:
                      "linear-gradient(90deg, #4fc3f7, #01A9D8)",
                    borderRadius: "5px",
                    mb: 1,
                  }}
                />

                {/* Project */}

                <Controller
                  name="project"
                  control={control}
                  rules={{
                    required: "Please specify what you want printed",
                    minLength: {
                      value: 3,
                      message: "Too short",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="What do you want printed?"
                      fullWidth
                      margin="normal"
                      size="small"
                      multiline
                      rows={4}
                      error={!!errors.project}
                      helperText={errors.project?.message}
                      placeholder="For example: business cards, brochures, books, flyers, stationery, labels, etc."
                      sx={{
                        ...fieldSx,

                        "& .MuiInputBase-root": {
                          alignItems: "flex-start",
                        },
                      }}
                    />
                  )}
                />

                {/* Quantity */}

                <Controller
                  name="quantity"
                  control={control}
                  rules={{
                    required: "Quantity is required",
                    pattern: {
                      value: /^[1-9][0-9]*$/,
                      message: "Enter a valid quantity",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Quantity"
                      fullWidth
                      margin="normal"
                      size="small"
                      error={!!errors.quantity}
                      helperText={errors.quantity?.message}
                      slotProps={{
                        htmlInput: {
                          inputMode: "numeric",
                        },
                      }}
                      sx={fieldSx}
                    />
                  )}
                />

                {/* Size */}

                <Controller
                  name="size"
                  control={control}
                  rules={{
                    maxLength: {
                      value: 50,
                      message: "Too long",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="text"
                      label="Size (optional)"
                      fullWidth
                      margin="normal"
                      size="small"
                      error={!!errors.size}
                      helperText={errors.size?.message}
                      placeholder="Example: A4, A5, 3.5 × 2 inches"
                      sx={fieldSx}
                    />
                  )}
                />

                {/* Deadline */}

                <Controller
                  name="deadline"
                  control={control}
                  rules={{
                    validate: (value) => {
                      if (!value) return true;

                      const today = new Date()
                        .toISOString()
                        .split("T")[0];

                      return (
                        value >= today ||
                        "Deadline cannot be in the past"
                      );
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Deadline (optional)"
                      type="date"
                      fullWidth
                      margin="normal"
                      size="small"
                      slotProps={{
                        inputLabel: {
                          shrink: true,
                        },
                      }}
                      error={!!errors.deadline}
                      helperText={errors.deadline?.message}
                      sx={fieldSx}
                    />
                  )}
                />
              </Box>

              {/* =========================
                  ADDITIONAL DETAILS
              ========================== */}

              <Box
                component="section"
                aria-labelledby="additional-details-title"
                sx={{
                  mb: 2,
                }}
              >
                <Typography
                  id="additional-details-title"
                  component="h3"
                  sx={{
                    color: "#0a2540",
                    fontWeight: 700,
                    mb: 1,
                    fontSize: {
                      xs: "0.9rem",
                      sm: "0.98rem",
                      md: "1.03rem",
                    },
                  }}
                >
                  Additional Details
                </Typography>

                <Box
                  sx={{
                    height: "1px",
                    width: "100%",
                    background:
                      "linear-gradient(90deg, #4fc3f7, #01A9D8)",
                    borderRadius: "5px",
                    mb: 1,
                  }}
                />

                <Controller
                  name="details"
                  control={control}
                  rules={{
                    maxLength: {
                      value: 500,
                      message: "Maximum 500 characters allowed",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Additional Details (optional)"
                      fullWidth
                      margin="normal"
                      size="small"
                      multiline
                      rows={4}
                      error={!!errors.details}
                      helperText={errors.details?.message}
                      placeholder="Any extra instructions, finishing requirements, paper type, etc."
                      sx={{
                        ...fieldSx,

                        "& .MuiInputBase-root": {
                          alignItems: "flex-start",
                        },
                      }}
                    />
                  )}
                />
              </Box>

              {/* =========================
                  SUBMIT BUTTON
              ========================== */}

              <Button
                fullWidth
                type="submit"
                variant="contained"
                disabled={loading}
                sx={{
                  mt: 2,
                  py: 1.15,
                  borderRadius: 2,
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: {
                    xs: "0.82rem",
                    sm: "0.88rem",
                  },
                  backgroundColor: "#01A9D8",

                  "&:hover": {
                    backgroundColor: "#0190b8",
                  },

                  "&:disabled": {
                    backgroundColor: "#9e9e9e",
                  },
                }}
              >
                {loading
                  ? "Sending..."
                  : "Request Printing Quote"}
              </Button>
            </Box>

            {/* =========================
                TRUST POINTS
            ========================== */}

            <Box
              component="section"
              aria-label="Sun Beam Printing Press benefits"
              sx={{
                mt: 3,
                textAlign: "center",
              }}
            >
              <Typography
                component="p"
                sx={{
                  color: "#0a2540",
                  fontWeight: 500,
                  fontSize: {
                    xs: "0.7rem",
                    sm: "0.76rem",
                    md: "0.8rem",
                  },
                  lineHeight: 1.8,
                  mb: 0,
                }}
              >
                ✔ Reliable Service
                &nbsp;&nbsp; ✔ Timely Delivery
                &nbsp;&nbsp; ✔ Quality Assurance
              </Typography>
            </Box>

            {/* Footer Message */}

            <Typography
              component="p"
              sx={{
                textAlign: "center",
                mt: 2.5,
                mb: 0,
                color: "#555",
                fontSize: {
                  xs: "0.73rem",
                  sm: "0.78rem",
                },
                lineHeight: 1.6,
              }}
            >
              Our team will review your request and get back to you
              with details and pricing as soon as possible.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* =========================
          LOCAL SEO SUPPORTING TEXT
      ========================== */}

      <Box
        component="section"
        aria-labelledby="guwahati-quote-title"
        sx={{
          width: "100%",
          maxWidth: 850,
          mx: "auto",
          mt: {
            xs: 5,
            md: 7,
          },
          pt: {
            xs: 4,
            md: 5,
          },
          borderTop:
            "1px solid rgba(255,255,255,0.12)",
          textAlign: "center",
        }}
      >
        <Typography
          id="guwahati-quote-title"
          component="h2"
          sx={{
            color: "#4fc3f7",
            fontWeight: 700,
            mb: 1.5,
            fontSize: {
              xs: "1.1rem",
              sm: "1.25rem",
              md: "1.45rem",
            },
            lineHeight: 1.4,
          }}
        >
          Get a Printing Quote in Guwahati
        </Typography>

        <Typography
          component="p"
          sx={{
            color: "rgba(255,255,255,0.8)",
            fontSize: {
              xs: "0.78rem",
              sm: "0.83rem",
              md: "0.9rem",
            },
            lineHeight: 1.7,
            mb: 0,
          }}
        >
          Sun Beam Printing Press provides printing solutions for
          businesses, organizations and individuals in Guwahati
          and across Assam. Share your printing requirements,
          quantity and preferred deadline to receive a quotation
          tailored to your project.
        </Typography>
      </Box>
    </Box>
  );
}

/* =========================
   COMMON TEXT FIELD STYLES
========================= */

const fieldSx = {
  width: "100%",
  minWidth: 0,

  "& .MuiInputLabel-root": {
    fontSize: "0.86rem",
  },

  "& .MuiInputBase-input": {
    fontSize: "0.86rem",
  },

  "& .MuiFormHelperText-root": {
    fontSize: "0.7rem",
    marginLeft: 0,
  },

  "& .MuiInputBase-root": {
    width: "100%",
    boxSizing: "border-box",
  },
};