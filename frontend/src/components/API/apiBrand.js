import axiosClient from "./axiosClient";

const apiBrand = {
  getProductByBrand(brand) {
    const url = `/products/?color=&size=&minPrice=0&maxPrice=10000&minDiscount=0&category=&stock=null&sort=price_low&pageNumber=0&pageSize=60&brand=${brand}`;
    return axiosClient.get(url);
  },
};
export default apiBrand;
