import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://pbl6-shoes-shop-production-810a.up.railway.app/api",
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDA2MzA2OTYsImV4cCI6MTcwMDcxNjY5NiwiZW1haWwiOiJraW5AZ21haWwuY29tIn0.aEL7QLW59W34FAclcuBnNCnb3CzG94YIrJqNpTIOqr0",
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
