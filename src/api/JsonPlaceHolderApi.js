import axios from "axios";

const jsonPlaceholderApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const createPost = async (postData) => {
  const response = await jsonPlaceholderApi.post(
    "/posts",
    {
      title: postData.title,
      body: postData.body,
      userId: 1,
    }
  );

  return response.data;
};

export default jsonPlaceholderApi;