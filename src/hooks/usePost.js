import {
  useCreatePostQuery,
} from "../Queries/postQueries";

function usePost() {
  const postMutation = useCreatePostQuery();

  return {
    createPost: postMutation.mutate,

    isLoading: postMutation.isPending,

    isSuccess: postMutation.isSuccess,

    error: postMutation.error,

    data: postMutation.data,
  };
}

export default usePost;