import { useMutation } from "@tanstack/react-query";
import axios from "axios";

function ReactQueryPost() {
  const createPost = useMutation({
    mutationFn: async () => {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: "Hello React Query",
          body: "This is my first POST request",
          userId: 1,
        }
      );

      return response.data;
    },

    onSuccess: (data) => {
      console.log("Post created:", data);
    },
  });

  return (
    <div>
      <button className="btnPost"
      onClick={() => createPost.mutate()}
      disabled={createPost.isPending}
      >
      {createPost.isPending
        ? "Sending..."
        : "Create Post"}
    </button>

      {
    createPost.isSuccess && (
      <p style={{ color: "green", textAlign: "center" }}>
        Post created successfully!
      </p>
    )
  }
    </div >
  );
}

export default ReactQueryPost;