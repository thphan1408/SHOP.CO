import axios from "axios";

const axios_auth = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

axios_auth.interceptors.request.use(
  (response) => {
    const user = JSON.parse(localStorage.getItem("CURRENT_USER") || "{}");
    if (user) {
      response.headers.Authorization = `Bearer ${user.accessToken}`;
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios_auth;
