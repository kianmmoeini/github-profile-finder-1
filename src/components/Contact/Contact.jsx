import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const subject = encodeURIComponent(
      `Portfolio Contact - ${data.name}`
    );

    const body = encodeURIComponent(
      `Name: ${data.name}

Email: ${data.email}

Message:
${data.message}`
    );

    window.location.href = `mailto:kianmoeini658@gmail.com?subject=${subject}&body=${body}`;

    reset();
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: "75vh",
          py: {
            xs: 5,
            md: 10,
          },
        }}
      >
        <Box
          sx={{
            maxWidth: 650,
            mb: { xs: 4, md: 6 },
          }}
        >
          <Typography
            variant="overline"
            color="secondary"
            fontWeight="bold"
            letterSpacing={2}
          >
            GET IN TOUCH
          </Typography>

          <Typography
            variant="h1"
            sx={{
              mt: 1,
              fontSize: {
                xs: "2.25rem",
                sm: "3.25rem",
                md: "5rem",
              },
              fontWeight: 700,
            }}
          >
            Contact Me
          </Typography>

          <Typography
            color="text.secondary"
            mt={2}
            sx={{ lineHeight: { xs: 1.6, md: 1.8 } }}
          >
            Have a project in mind or want to talk? Feel free to
            send me a message.
          </Typography>
        </Box>

        <Paper
          elevation={0}
          sx={{
            p: {
              xs: 2.5,
              sm: 5,
            },
            borderRadius: 3,
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Stack spacing={3}>
              <TextField
                label="Name"
                fullWidth
                {...register("name", {
                  required: "Name is required",
                })}
                error={Boolean(errors.name)}
                helperText={errors.name?.message}
              />

              <TextField
                label="Email"
                type="email"
                fullWidth
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
              />

              <TextField
                label="Message"
                multiline
                rows={6}
                fullWidth
                {...register("message", {
                  required: "Message is required",
                })}
                error={Boolean(errors.message)}
                helperText={errors.message?.message}
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  alignSelf: { xs: "stretch", sm: "flex-start" },
                  width: { xs: "100%", sm: "auto" },
                  px: 4,
                  py: 1.3,
                  borderRadius: 2,
                }}
              >
                Send Message
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default Contact;