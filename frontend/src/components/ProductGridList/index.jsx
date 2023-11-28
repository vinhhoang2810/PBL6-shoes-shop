import React, { useEffect, useState } from "react";
import ProductGridCard from "../ProductGridCard";
import "./style-prefix.scss";
import apiProductGrid from "../API/apiProductGrid";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";
import apiBrand from "../API/apiBrand";

export default function ProductGridList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();
  const selectedBrand = searchParams.get("selectedBrand");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        if (selectedBrand) {
          const response = await apiBrand.getProductByBrand(selectedBrand);
          setProducts(response.data.content);
        } else {
          const response = await apiProductGrid.getAllProduct();
          setProducts(response.data.content);
        }
      } catch (error) {
        toast.error(error?.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedBrand]);

  return (
    <section>
      <div className="product-main container-layout">
        <h2 className="title">Products</h2>
        <div className="product-grid">
          {isLoading ? (
            // Hiển thị spinner hoặc thông báo loading khi dữ liệu đang được tải
            <div className="brandCard-loading">
              <p></p>
            </div>
          ) : (
            // Hiển thị danh sách sản phẩm khi dữ liệu đã được tải xong
            products.length > 0 &&
            products.map((product) => {
              return <ProductGridCard key={product?.id} product={product} />;
            })
          )}
        </div>
      </div>
    </section>
  );
}
