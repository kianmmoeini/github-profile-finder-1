import Jsonplaceholderapi from "../api/Jsonplaceholderapi.js";

export const createPost = async (postData) => {
  const response = await Jsonplaceholderapi.post(
    "/posts",
    postData
  );

  return response.data;
};