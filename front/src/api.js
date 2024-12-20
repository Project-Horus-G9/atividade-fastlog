import axios from "axios"; 

const ENDPOINT = process.env.REACT_APP_ENDPOINT || "localhost:8080";

const api = axios.create({
  baseURL: `http://${ENDPOINT}`,  // Corrige a interpolação da string
});

console.log(`http://${ENDPOINT}`);  // Corrige a interpolação da string

export default api;
