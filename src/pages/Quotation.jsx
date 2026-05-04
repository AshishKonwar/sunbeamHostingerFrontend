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
        setStatus("✅ Quote request sent successfully!");
        reset();
        setLoading(false);
      } else {
        setStatus("❌ Failed to send request.");
      }
    } catch (error) {
      setStatus("❌ Error sending request");
    }
  };

  return (
    <Box
      sx={{
        mt: { xs: 0, md: 6 },
        p: 4,
        backgroundColor: "#061727",
        minHeight: "100vh",
      }}
    >
       <Typography
                              variant="h5"
                              sx={{
                                textAlign: "center",
                                fontWeight: 700,
                                color: "white",
                                mt: 4,
                                mb: 3,
                              }}
                            >
        Request a Quote
      </Typography>

      {/* Intro */}
      <Box sx={{ maxWidth: 800, mx: "auto", mb: 6 }}>
        <Typography
                                  sx={{
                                    textAlign: "center",
                                    color: "#4fc3f7",
                                    mb: 5,
                                  }}
                                >
          Tell us about your printing requirements and we will provide you with
          the best solution and pricing tailored to your needs.
        </Typography>
      </Box>

      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 4, borderRadius: 2 }}>
            
            {/* Form Title */}
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: 700,
                mb: 3,
                color: "#0a2540",
                fontSize: { xs: "1.2rem", md: "1.5rem" },
              }}
            >
              Get Your Printing Quote
            </Typography>

            <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>

  {/* 🔹 BASIC DETAILS */}
  <Typography sx={{ fontWeight: 700, mt: 1, mb: 1 }}>
    Basic Details
  </Typography>

  <Box
  sx={{
    height: "1px",
    width: "100%",
    background: "linear-gradient(90deg, #4fc3f7, #01A9D8)",
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
      minLength: { value: 3, message: "Minimum 3 characters required" },
    }}
    render={({ field }) => (
      <TextField
        {...field}
        label="Full Name"
        fullWidth
        margin="normal"
        error={!!errors.name}
        helperText={errors.name?.message}
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
        error={!!errors.phone}
        helperText={errors.phone?.message}
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
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
        error={!!errors.email}
        helperText={errors.email?.message}
      />
    )}
  />

  {/* 🔹 PROJECT DETAILS */}
  <Typography sx={{ fontWeight: 700, mt: 3, mb: 1 }}>
    Project Details
  </Typography>

  <Box
  sx={{
    height: "1px",
    width: "100%",
    background: "linear-gradient(90deg, #4fc3f7, #01A9D8)",
    borderRadius: "5px",
    mb: 1,
      }}
    />

  {/* What to print */}
        <Controller
          name="project"
          control={control}
          rules={{
            required: "Please specify what you want printed",
            minLength: { value: 3, message: "Too short" },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="What do you want printed?"
              fullWidth
              margin="normal"
              multiline
              rows={5}
              error={!!errors.project}
              helperText={errors.project?.message}
              sx={{
                "& .MuiInputBase-root": {
                  alignItems: "flex-start", // better text alignment
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
              error={!!errors.quantity}
              helperText={errors.quantity?.message}
              inputProps={{ inputMode: "numeric" }}
            />
          )}
        />

        {/* Size */}
        <Controller
          name="size"
          control={control}
          rules={{
            maxLength: { value: 50, message: "Too long" },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              type="text"
              label="Size (optional)"
              fullWidth
              margin="normal"
              error={!!errors.size}
              helperText={errors.size?.message}
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
              const today = new Date().toISOString().split("T")[0];
              return value >= today || "Deadline cannot be in the past";
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Deadline (optional)"
              type="date"
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
              error={!!errors.deadline}
              helperText={errors.deadline?.message}
            />
          )}
        />

        {/* 🔹 ADDITIONAL DETAILS */}
        <Typography sx={{ fontWeight: 700, mt: 3, mb: 1 }}>
          Additional Details
        </Typography>

        <Box
          sx={{
            height: "1px",
            width: "100%",
            background: "linear-gradient(90deg, #4fc3f7, #01A9D8)",
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
              multiline
              rows={5} 
              error={!!errors.details}
              helperText={errors.details?.message}
              placeholder="Any extra instructions, finishing requirements, paper type, etc."
              sx={{
                "& .MuiInputBase-root": {
                  alignItems: "flex-start",
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
          sx={{
            mt: 3,
            py: 1.2,
            backgroundColor: "#01A9D8",
            fontWeight: 600,
          }}
          disabled={loading}
        >
          {loading ? "Sending..." : "Request Quote"}
        </Button>

      </Box>

            {/* TRUST LINE */}
            <Box sx={{ mt: 4, textAlign: "center" }}>
              <Typography sx={{ color: "#0a2540", fontWeight: 500 }}>
                ✔ Reliable Service &nbsp;&nbsp; ✔ Timely Delivery &nbsp;&nbsp; ✔ Quality Assurance
              </Typography>
            </Box>

            {/* CLOSING NOTE */}
            <Typography
              sx={{
                textAlign: "center",
                mt: 3,
                color: "#555",
                fontSize: { xs: "0.85rem", md: "0.95rem" },
              }}
            >
              Our team will review your request and get back to you with details
              and pricing as soon as possible.
            </Typography>

          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}