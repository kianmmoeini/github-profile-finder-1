import axios from "axios";

const Githubapi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2026-03-10",
  },
});

export default Githubapi;