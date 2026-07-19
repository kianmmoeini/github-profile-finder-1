import {
  useGithubUserQuery,
  useGithubReposQuery,
} from "../Queries/githubQueries";

function useGithub(username) {
  const userQuery = useGithubUserQuery(username);

  const reposQuery = useGithubReposQuery(username);

  return {
    user: userQuery.data,

    repos: reposQuery.data || [],

    isLoading:
      userQuery.isLoading ||
      reposQuery.isLoading,

    error:
      userQuery.error ||
      reposQuery.error,
  };
}

export default useGithub;