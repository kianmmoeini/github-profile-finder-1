import Githubapi from "../api/Githubapi.js";

export const getGithubUser = async (username) => {
  const response = await Githubapi.get(
    `/users/${username}`
  );

  return response.data;
};

export const getGithubRepos = async (username) => {
  const response = await Githubapi.get(
    `/users/${username}/repos`
  );

  return response.data;
};