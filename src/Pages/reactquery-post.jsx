import { useForm } from "react-hook-form";

import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
} from "@mui/material";

import { useMutation } from "@tanstack/react-query";

import { createPost } from "../api/jsonPlaceholderApi.js";

function ReactQueryPost() {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const createPostMutation = useMutation({
    mutationFn: createPost,

    onSuccess: () => {
      reset();
    },
  });

  const onSubmit = (data) => {
    createPostMutation.mutate(data);
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        mt: 6,
        p: 3,
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        Send a Post
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
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          multiline
          rows={5}
          label="Message"
          {...register("body", {
            required: true,
          })}
          sx={{ mb: 2 }}
        />

        <Button
          type="submit"
          variant="contained"
          disabled={createPostMutation.isPending}
        >
          {createPostMutation.isPending
            ? "Sending..."
            : "Send Post"}
        </Button>
      </Box>

      {createPostMutation.isSuccess && (
        <Alert
          severity="success"
          sx={{ mt: 3 }}
        >
          Post sent successfully!
        </Alert>
      )}

      {createPostMutation.isError && (
        <Alert
          severity="error"
          sx={{ mt: 3 }}
        >
          {createPostMutation.error.message}
        </Alert>
      )}

      {createPostMutation.isSuccess && (
        <Box sx={{ mt: 3 }}>
          <Typography
            variant="h6"
            fontWeight="bold"
          >
            JSONPlaceholder Response
          </Typography>

          <Typography>
            Title: {createPostMutation.data.title}
          </Typography>

          <Typography>
            Message: {createPostMutation.data.body}
          </Typography>

          <Typography>
            Post ID: {createPostMutation.data.id}
          </Typography>

          <Typography>
            User ID: {createPostMutation.data.userId}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default ReactQueryPost;