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

    window.location.href = `mailto:YOUR_EMAIL@gmail.com?subject=${subject}&body=${body}`;

    reset();
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: "75vh",
          py: {
            xs: 6,
            md: 10,
          },
        }}
      >
        <Box
          sx={{
            maxWidth: 650,
            mb: 6,
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
                xs: "3rem",
                md: "5rem",
              },
              fontWeight: 700,
            }}
          >
            Contact Me
          </Typography>

          <Typography
            color="text.secondary"
            lineHeight={1.8}
            mt={2}
          >
            Have a project in mind or want to talk? Feel free to
            send me a message.
          </Typography>
        </Box>

        <Paper
          elevation={0}
          sx={{
            p: {
              xs: 3,
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
                  alignSelf: "flex-start",
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