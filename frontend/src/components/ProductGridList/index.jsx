import React, { useEffect, useState } from "react";
import ProductGridCard from "../ProductGridCard";
import "./style-prefix.scss";
import apiProductGrid from "../API/apiProductGrid";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";
import apiBrand from "../API/apiBrand";

export default function ProductGridList() {
  const [products, setProducts] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();
  // const [brands, setBrands] = useState([]);
  const selectedBrand = searchParams.get("selectedBrand");
  console.log(selectedBrand);
  useEffect(() => {
    //Lỗi brand
    const fetchBrands = async () => {
      try {
        const response = await apiBrand.getProductByBrand(selectedBrand);
        setProducts(response.data.content);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };
    const fetchProductGrid = async () => {
      try {
        const response = await apiProductGrid.getAllProduct();
        setProducts(response.data.content);
      } catch (error) {
        toast.error(error?.message);
      }
    };

    if (selectedBrand) {
      fetchBrands();
    } else {
      // Gọi hàm fetchProductGrid
      fetchProductGrid();
    }
  }, [selectedBrand]);

  return (
    <section>
      <div className="product-main container-layout">
        <h2 className="title">Products</h2>
        <div className="product-grid">
          {products.length > 0 &&
            products.map((product) => {
              return <ProductGridCard key={product?.id} product={product} />;
            })}
        </div>
      </div>
    </section>
  );
}
