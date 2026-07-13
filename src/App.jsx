import { useState } from "react";
import "./App.css";

import { useQuery } from "@tanstack/react-query";

import Githubapi from "./api/githubapi";

import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import RepoList from "./components/Repolist";
import Loading from "./components/Loading";
import Toast, { showError } from "./components/toast";

function App() {
  const [username, setUsername] = useState("");

  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user", username],

    queryFn: async () => {
      const response = await Githubapi.get(`/users/${username}`);
      return response.data;
    },

    enabled: !!username,
  });

  const {
    data: repos = [],
  } = useQuery({
    queryKey: ["repos", username],

    queryFn: async () => {
      const response = await Githubapi.get(
        `/users/${username}/repos`
      );

      return response.data;
    },

    enabled: !!username,
  });

  if (error) {
    if (error.response?.status === 404) {
      showError("User not found!");
    } else {
      showError("Something went wrong!");
    }
  }

  return (
    <div className="container">
      <Toast />

      <h1>GitHub Profile Finder</h1>

      <SearchBar
        onSearch={setUsername}
        loading={isLoading}
      />

      {isLoading && <Loading />}

      {user && <UserCard user={user} />}

      {user && <RepoList repos={repos} />}

      <div className="footer">
        <br />
        <br />

        <p className="creator">
          Created by Kian Moeini
        </p>

        <a
          className="mygithub"
          href="https://github.com/kianmmoeini"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit My GitHub
        </a>
      </div>
    </div>
  );
}

export default App;