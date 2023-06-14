import axios from "axios";
const BASE_URL = "https://api-vande-rastra.vercel.app/api/v1";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
