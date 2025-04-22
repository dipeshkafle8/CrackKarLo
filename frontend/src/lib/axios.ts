import axios from "axios";

export const axiosInstanceWithToken = axios.create({
  baseURL: "http://localhost:8000/api",
});

//adding request interceptor to include the authorization token  if exists
//to automatically include token in header
axiosInstanceWithToken.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("token");
    if (token) {
      token = JSON.parse(token);
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api",
});
