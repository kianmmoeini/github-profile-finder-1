import { useMutation } from "@tanstack/react-query";

import {
  createPost,
} from "../Service/postService.service";

export const useCreatePostQuery = () => {
  return useMutation({
    mutationFn: createPost,

    onSuccess: (data) => {
      console.log("Post created:", data);
    },

    onError: (error) => {
      console.error("Post error:", error);
    },
  });
};