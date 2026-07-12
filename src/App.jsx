import { useState } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import RepoList from "./components/Repolist";
import Loading from "./components/Loading";
import Toast, { showError } from "./components/toast";

import Githubapi from "./api/githubapi";

function App() {
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchUser = async (username) => {
    if (!username) return;

    setLoading(true);
    setUser(null);
    setRepos([]);
    try {
    const userResponse = await Githubapi.get(`/users/${username}`);
    setUser(userResponse.data);

    const repoResponse = await Githubapi.get(
      `/users/${username}/repos`
    );
    setRepos(repoResponse.data);
    } 
    catch(err) {
      if (err.response?.status === 404) {
        showError("user not found!");
      } else {
        showError("Something went wrong!");
      }
    } 
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <Toast />

      <h1>GitHub Profile Finder</h1>

      <SearchBar
        onSearch={fetchUser}
        loading={loading}
      />

      {loading && <Loading />}

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