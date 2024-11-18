import axios from "axios";

const ENDPOINT = "localhost:8080" || process.env.ENDPOINT;

const api = axios.create({
  baseURL: `http://${ENDPOINT}`,
});


export default api;