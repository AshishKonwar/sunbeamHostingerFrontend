import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
} from "@mui/material";

const testimonials = [
  {
    name: "Priyanka Deka",
    title: "Medical Student",
    rating: 5,
    text: "As a medical student, I often need clear and well-printed notes and materials. Sun Beam Printing Press delivered exactly that — clean prints, readable text, and quick turnaround which really helped during exams.",
  },
  {
    name: "Pratyush Kashyap",
    title: "Veterinary Field Assistant",
    rating: 5,
    text: "We got our informational leaflets and forms printed here. The quality is neat and easy to read, which is very important for our work with farmers and animal care awareness.",
  },
  {
    name: "Parthib Moral",
    title: "Proprietor, Joyshree Parkar Servo Service Station",
    rating: 5,
    text: "We needed durable prints for outdoor use at our petrol pump, and the materials provided have held up well. Very satisfied with the service.",
  },
];

export default function FeedbackSection() {
  return (
    <Box
      component="section"
      aria-labelledby="client-feedback-title"
      sx={{
        py: {
          xs: 3,
          sm: 5,
          md: 8,
        },
        background:
          "linear-gradient(135deg, #051121, #0a2540, #012a4a)",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          px: {
            xs: 2,
            sm: 4,
            md: 6,
            lg: 8,
          },
        }}
      >
        {/* Section Heading */}
        <Typography
          id="client-feedback-title"
          component="h2"
          sx={{
            mb: {
              xs: 0.75,
              sm: 1,
              md: 1.5,
            },
            fontWeight: 700,
            textAlign: "center",
            color: "#fff",
            fontSize: {
              xs: "1.3rem",
              sm: "1.55rem",
              md: "1.9rem",
            },
            lineHeight: 1.3,
          }}
        >
          What Our Clients Say
        </Typography>

        {/* Supporting Text */}
        <Typography
          component="p"
          sx={{
            maxWidth: 680,
            mx: "auto",
            mb: {
              xs: 2.5,
              sm: 3,
              md: 5,
            },
            textAlign: "center",
            color: "rgba(255,255,255,0.72)",
            fontSize: {
              xs: "0.82rem",
              sm: "0.88rem",
              md: "0.95rem",
            },
            lineHeight: 1.5,
          }}
        >
          See what customers have to say about their experience with Sun Beam
          Printing Press and our printing services.
        </Typography>

        {/* Testimonials */}
        <Grid
          container
          columnSpacing={{
            xs: 1.5,
            sm: 2.5,
            md: 3,
          }}
          rowSpacing={{
            xs: 1.5,
            sm: 3,
            md: 4,
          }}
          justifyContent="center"
          alignItems="stretch"
        >
          {testimonials.map((t, idx) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={idx}
              sx={{
                display: "flex",
              }}
            >
              <Card
                component="article"
                aria-labelledby={`testimonial-${idx}`}
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 2.5,
                  color: "white",
                  transition: "0.3s",

                  "&:hover": {
                    transform: "translateY(-5px)",
                    borderColor: "#00bcd4",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                  },
                }}
              >
                <Box
                  sx={{
                    p: {
                      xs: 1.5,
                      sm: 2.5,
                      md: 3,
                    },
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  {/* Client Information */}
                  <Stack
                    direction="row"
                    spacing={{
                      xs: 1.2,
                      sm: 1.5,
                    }}
                    mb={{
                      xs: 1.5,
                      sm: 2,
                    }}
                    alignItems="center"
                  >
                    <Avatar
                      aria-hidden="true"
                      sx={{
                        bgcolor: "#00bcd4",
                        color: "#051121",
                        width: {
                          xs: 34,
                          sm: 40,
                        },
                        height: {
                          xs: 34,
                          sm: 40,
                        },
                        fontSize: {
                          xs: "0.82rem",
                          sm: "1rem",
                        },
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      {t.name[0]}
                    </Avatar>

                    <Stack
                      spacing={0.15}
                      sx={{
                        minWidth: 0,
                      }}
                    >
                      <Typography
                        id={`testimonial-${idx}`}
                        component="h3"
                        sx={{
                          fontWeight: 600,
                          color: "#00bcd4",
                          fontSize: {
                            xs: "0.82rem",
                            sm: "0.9rem",
                            md: "0.95rem",
                          },
                          lineHeight: 1.3,
                        }}
                      >
                        {t.name}
                      </Typography>

                      <Typography
                        component="p"
                        sx={{
                          fontSize: {
                            xs: "0.68rem",
                            sm: "0.75rem",
                            md: "0.78rem",
                          },
                          color: "rgba(255,255,255,0.65)",
                          lineHeight: 1.35,
                          mb: 0,
                        }}
                      >
                        {t.title}
                      </Typography>
                    </Stack>
                  </Stack>

                  {/* Testimonial */}
                  <CardContent
                    sx={{
                      p: 0,
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",

                      "&:last-child": {
                        pb: 0,
                      },
                    }}
                  >
                    <Typography
                      component="blockquote"
                      sx={{
                        m: 0,
                        mb: {
                          xs: 1,
                          sm: 1.5,
                        },
                        color: "rgba(255,255,255,0.86)",
                        fontSize: {
                          xs: "0.76rem",
                          sm: "0.82rem",
                          md: "0.86rem",
                        },
                        lineHeight: {
                          xs: 1.5,
                          md: 1.65,
                        },
                        fontStyle: "italic",
                      }}
                    >
                      "{t.text}"
                    </Typography>

                    {/* Rating */}
                    <Rating
                      value={t.rating}
                      precision={0.5}
                      readOnly
                      size="small"
                      aria-label={`${t.rating} out of 5 stars`}
                      sx={{
                        color: "#FFD700",
                        fontSize: {
                          xs: "0.95rem",
                          sm: "1.1rem",
                        },
                      }}
                    />
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}