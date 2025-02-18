// aa2c52b10f993ac6c3088f03a31602d6

import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});
export default instance;
