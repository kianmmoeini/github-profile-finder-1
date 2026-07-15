import { useEffect, useState } from "react";

import {
  Container,
  Typography,
} from "@mui/material";

import { toast } from "react-toastify";

import SearchBar from "../components/SearchBar.jsx";
import UserCard from "../components/UserCard.jsx";
import RepoList from "../components/RepoList.jsx";
import Loading from "../components/Loading.jsx";

import useGithub from "../hooks/useGithub.js";

function Home() {
  const [username, setUsername] = useState("");

  const {
    user,
    repos,
    isLoading,
    error,
  } = useGithub(username);

  useEffect(() => {
    if (!error) return;

    if (error.response?.status === 404) {
      toast.error("Username not found!");
    } else {
      toast.error("Something went wrong!");
    }
  }, [error]);

  return (
    <Container sx={{ mt: 5 }}>
      <Typography
        variant="h3"
        align="center"
        fontWeight="bold"
        gutterBottom
      >
        GitHub Profile Finder
      </Typography>

      <SearchBar
        onSearch={setUsername}
        loading={isLoading}
      />

      {isLoading && <Loading />}

      {user && (
        <UserCard user={user} />
      )}

      {user && (
        <RepoList repos={repos} />
      )}
    </Container>
  );
}

export default Home;