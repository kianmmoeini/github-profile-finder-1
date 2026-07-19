import { useForm } from "react-hook-form";

import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Alert,
} from "@mui/material";

import usePost from "../hooks/usePost.js";

function ReactQueryPost() {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const {
    createPost,
    isLoading,
    isSuccess,
    error,
    data,
  } = usePost();

  const onSubmit = (formData) => {
    createPost({
      title: formData.title,
      body: formData.body,
      userId: 1,
    });

    reset();
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 6,
          p: 4,
          borderRadius: 3,
          boxShadow: 3,
          backgroundColor: "white",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={3}
          textAlign="center"
        >
          Create Post
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            fullWidth
            label="Title"
            {...register("title", {
              required: true,
            })}
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            multiline
            rows={5}
            label="Message"
            {...register("body", {
              required: true,
            })}
            sx={{ mb: 3 }}
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            disabled={isLoading}
          >
            {isLoading
              ? "Sending..."
              : "Send Post"}
          </Button>
        </Box>

        {isSuccess && (
          <Alert
            severity="success"
            sx={{ mt: 3 }}
          >
            Post sent successfully!
          </Alert>
        )}

        {error && (
          <Alert
            severity="error"
            sx={{ mt: 3 }}
          >
            {error.message}
          </Alert>
        )}

        {data && (
          <Typography
            mt={2}
            variant="body2"
            color="text.secondary"
          >
            Post ID: {data.id}
          </Typography>
        )}
      </Box>
    </Container>
  );
}

export default ReactQueryPost;