import axios from "axios";

const api = axios.create({
  baseURL: "https://github.com/WebersonRodrigues/backend-node-exemplo-memoria",
});

export default api;
