import axios from "axios";

const API = axios.create({
  baseURL: "https://try-back.onrender.com/api/",
});

export default API;