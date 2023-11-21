import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://pbl6-shoes-shop-production-810a.up.railway.app/api",
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDA1MzY1NTUsImV4cCI6MTcwMDYyMjU1NSwiZW1haWwiOiJraW4yMDAyQGdtYWlsLmNvbSJ9.DdlrHtRL4gYh2R9sxlUnvOA_Y3ymbA5lj6r20eSHJ0k",
  },
});

// Add a request interceptor
axios.interceptors.request.use(
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
axios.interceptors.response.use(
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
