import axios from "axios";

const Jsonplaceholderapi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default Jsonplaceholderapi;