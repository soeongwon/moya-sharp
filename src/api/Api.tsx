import axios from "axios";
import { Cookies } from "react-cookie";
const cookies = new Cookies();

const api = axios.create({
  withCredentials: true
});
api.interceptors.request.use(function (config) {
  const session = cookies.get("session");
  if (session) {
    config.headers = config.headers || {};
    config.headers["Authorization"] = "Bearer " + session;
  }

  return config;
});

export default api;
