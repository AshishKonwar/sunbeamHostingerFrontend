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
    title: "Proprietor Joyshree Parkar Servo Service Station",
    rating: 5,
    text: "We needed durable prints for outdoor use at our petrol pump, and the materials provided have held up well. Very satisfied with the service.",
  },
];

export default function FeedbackSection() {
  return (
    <Box
      sx={{
        py: { xs: 4, md: 8 },
        background: "linear-gradient(135deg, #051121, #0a2540, #012a4a)",
      }}
    >
      <Container maxWidth="lg">
        
        <Typography
          sx={{
            mb: 3,
            fontWeight: 700,
            textAlign: "center",
            color: "#fff",
            fontSize: { xs: "18px", md: "24px" },
          }}
        >
          What Our Clients Say 💬
        </Typography>

        <Grid 
          container 
          spacing={{ xs: 2, md: 4 }}
          justifyContent="center"
        >
          
          {testimonials.map((t, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>

              <Card
                sx={{
                  height: "100%",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 3,
                  color: "white",
                  transition: "0.3s",

                  "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: "#00bcd4",
                  },
                }}
              >
                <Box sx={{ p: { xs: 2, md: 3 } }}>
                  
                  <Stack direction="row" spacing={2} mb={2} alignItems="center">
                    <Avatar sx={{ bgcolor: "#00bcd4" }}>
                      {t.name[0]}
                    </Avatar>

                    <Stack>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: "#00bcd4",
                          fontSize: { xs: 13, md: 15 },
                        }}
                      >
                        {t.title}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: 12,
                          opacity: 0.7,
                        }}
                      >
                        {t.name}
                      </Typography>
                    </Stack>
                  </Stack>

                  <CardContent sx={{ p: 0 }}>
                    <Typography
                      sx={{
                        fontSize: { xs: 13, md: 14 },
                        mb: 1.5,
                        fontStyle: "italic",
                      }}
                    >
                      "{t.text}"
                    </Typography>

                    <Rating
                      value={t.rating}
                      precision={0.5}
                      readOnly
                      size="small"
                      sx={{ color: "#FFD700" }}
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