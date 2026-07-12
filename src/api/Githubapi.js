import axios from "axios";

const Githubapi = axios.create({
baseURL: "https://api.github.com",
});
 
export default Githubapi; 