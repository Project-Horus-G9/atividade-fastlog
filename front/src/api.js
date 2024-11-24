import axios from "axios";

const ENDPOINT = process.env.REACT_APP_ENDPOINT || "localhost:8080";

const api = axios.create({
  baseURL: `http://${ENDPOINT}`,
});

console.log(`http://${ENDPOINT}`);

export default api;