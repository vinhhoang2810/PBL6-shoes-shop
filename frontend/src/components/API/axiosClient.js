import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://pbl6-shoes-shop-production-810a.up.railway.app/api",
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDEwMTA2OTksImV4cCI6MTcwMTA5NjY5OSwiZW1haWwiOiJ0cmluaGx1Y0BnbWFpbC5jb20iLCJhdXRob3JpZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfdXNlciJ9XX0.37ii1Cn7I-CsaWytryX_hxclVdYeariQdEEDGGCYtOY",
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
