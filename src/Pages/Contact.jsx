import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
} from "@mui/material";

import { toast } from "react-toastify";

import ContactApi from "../api/contactApi";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendContact = useMutation({
    mutationFn: async (data) => {
      const response = await ContactApi.post(
        "/contacts",
        data
      );

      return response.data;
    },

    onSuccess: () => {
      toast.success("Your data was sent successfully! 🎉");

      reset();
    },

    onError: () => {
      toast.error("Something went wrong!");
    },
  });

  const onSubmit = (data) => {
    sendContact.mutate(data);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
        >
          Contact Me
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 3,
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
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            label="Message"
            multiline
            rows={5}
            {...register("message", {
              required: "Message is required",
            })}
            error={!!errors.message}
            helperText={errors.message?.message}
          />

          <Button
            type="submit"
            variant="contained"
            disabled={sendContact.isPending}
          >
            {sendContact.isPending
              ? "Sending..."
              : "Send Message"}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Contact;