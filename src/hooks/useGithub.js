import { useQuery } from "@tanstack/react-query";

import Githubapi from "../api/Githubapi.js";

function useGithub(username) {
  const userQuery = useQuery({
    queryKey: ["user", username],

    queryFn: async () => {
      const response = await Githubapi.get(
        `/users/${username}`
      );

      return response.data;
    },

    enabled: !!username,
  });

  const reposQuery = useQuery({
    queryKey: ["repos", username],

    queryFn: async () => {
      const response = await Githubapi.get(
        `/users/${username}/repos`
      );

      return response.data;
    },

    // فقط وقتی user پیدا شد، repos رو بگیر
    enabled: !!username && !!userQuery.data,
  });

  return {
    user: userQuery.data,

    repos: reposQuery.data || [],

    isLoading:
      userQuery.isLoading || reposQuery.isLoading,

    error:
      userQuery.error || reposQuery.error,
  };
}

export default useGithub;