
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, //  "https://api.themoviedb.org/3",
});

export default axiosInstance;
