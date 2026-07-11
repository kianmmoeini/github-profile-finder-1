import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import Loader from "./components/Loader";
import Loading from "./components/Loading";
import RepoList from "./components/Repolist";import "./App.css";
import Githubapi from "./api/githubapi";

function App() {
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const fetchUser = async (username) => {
    if (!username) return;

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const response = await Githubapi.get(`/users/${username}`);
      const data = await response.data;
      setUser(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
    const repoResponse = await Githubapi.get(`/users/${username}/repos`);
    const repoData = await repoResponse.data;

    setRepos(repoData);
  };
  return (
    <div className="container">
      <h1>GitHub Profile Finder</h1>
      <SearchBar
        onSearch={fetchUser}
        loading={loading}
      />

      {loading && <Loading />}

      {error && <p className="error">{error}</p>}

      {user && <UserCard user={user} />}
      {(
        <RepoList repos={repos} />
      )}
      <div className="footer">
        <br />
        <br />
        <p className="creator">Created by Kian moeini</p>

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