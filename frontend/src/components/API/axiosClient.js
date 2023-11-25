import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://pbl6-shoes-shop-production-810a.up.railway.app/api",
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDA4ODk4ODIsImV4cCI6MTcwMDk3NTg4MiwiZW1haWwiOiJ2aW5oQGdtYWlsLmNvbSJ9.kqrkqu5mH4vtuSLGHFboLfx0PfCMNlabHnMhv2caWPU",
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosClient;
