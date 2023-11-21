import axiosClient from "./axiosClient";

const apiProductGrid = {
  getAllProduct() {
    const url =
      "/products/?color=&size=&minPrice=0&maxPrice=10000&minDiscount=0&category=&stock=null&sort=price_low&pageNumber=0&pageSize=10";
    return axiosClient.get(url);
  },
};
export default apiProductGrid;
