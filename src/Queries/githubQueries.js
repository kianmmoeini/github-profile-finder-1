import { useQuery } from "@tanstack/react-query";

import {
  getGithubUser,
  getGithubRepos,
} from "../Service/githubService.service";
export const useGithubUserQuery = (username) => {
  return useQuery({
    queryKey: ["user", username],
    queryFn: () => getGithubUser(username),
    enabled: !!username,
  });
};

export const useGithubReposQuery = (username) => {
  return useQuery({
    queryKey: ["repos", username],
    queryFn: () => getGithubRepos(username),
    enabled: !!username,
  });
};