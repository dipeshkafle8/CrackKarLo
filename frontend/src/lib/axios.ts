import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
});

//adding request interceptor to include the authorization token  if exists
//to automatically include token in header
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
