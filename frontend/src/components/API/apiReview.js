import axiosClient from "./axiosClient";

const apiCreateReview = {
  postCreateReview(data) {
    console.log(data);
    const url = "/reviews/create";
    return axiosClient.post(url, data);
  },
};
export default apiCreateReview;
