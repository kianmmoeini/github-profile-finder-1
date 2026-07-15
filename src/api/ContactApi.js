import axios from "axios";

const ContactApi = axios.create({
  baseURL: "http://localhost:3000",
});

export default ContactApi;