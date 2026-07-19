import Jsonplaceholderapi from "../api/JsonPlaceHolderApi";
export const createPost = async (postData) => {
  const response = await Jsonplaceholderapi.post(
    "/posts",
    postData
  );

  return response.data;
};