import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";
// making forrm component for the contact page with react-hook-form
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{ mt: 5 }}
    >
      <Typography
        variant="h3"
        align="center"
        gutterBottom
      >
        Contact Us
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <TextField
          label="Name"
          {...register("name", {
            required: "Name is required",
          })}
          error={!!errors.name}
          helperText={errors.name?.message}
        />

        <TextField
          label="Email"
          type="email"
          {...register("email", {
            required: "Email is required",

            pattern: {
              value:
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email",
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          label="Message"
          multiline
          rows={4}
          {...register("message", {
            required: "Message is required",
          })}
          error={!!errors.message}
          helperText={errors.message?.message}
        />

        <Button
          type="submit"
          variant="contained"
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default Contact;