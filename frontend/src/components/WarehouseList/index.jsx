import React, { useEffect, useState } from "react";
import WarehouseCard from "../WarehouseCard";
import shoes from "../../images/shoes4.png";
import "./style.scss";
import { toast } from "react-toastify";
import apiProductGrid from "../API/apiProductGrid";

export default function WarehouseList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProductGrid = async () => {
      try {
        const response = await apiProductGrid.getAllProduct();
        setProducts(response.data.content);
      } catch (error) {
        toast.error(error?.message);
      }
    }; // Gọi hàm fetchProductGrid
    fetchProductGrid();
  }, []);

  const handleSelectType = (productId, newType) => {
    // Xử lý logic cập nhật giá trị type cho sản phẩm
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, type: newType } : product
    );

    // Cập nhật danh sách sản phẩm
    setProducts(updatedProducts);
  };

  const handleDeleteProduct = (productId) => {
    // Xử lý logic xóa sản phẩm
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    // Cập nhật danh sách sản phẩm
    setProducts(updatedProducts);
  };

  const handleUpdateProduct = (productId, updatedProductInfo) => {
    // Xử lý logic cập nhật sản phẩm
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, ...updatedProductInfo } : product
    );
    // Cập nhật danh sách sản phẩm
    setProducts(updatedProducts);
  };
  return (
    <div>
      <div className="warehouse">
        <div className="warehouseGrid">
          <div className="warehouseRow">
            <div className="warehouseRow-product">Product</div>
            <div className="warehouseRow-type">Color</div>
            <div className="warehouseRow-price">Price Persent</div>
            <div className="warehouseRow-price">Price </div>
            <div className="warehouseRow-quantity">The remaining amount</div>
            <div className="warehouseRow-operation">Operation</div>
          </div>
          {/* Danh sách sản phẩm */}
          {products.length > 0 &&
            products.map((product) => {
              return (
                <WarehouseCard
                  key={product.id}
                  product={product}
                  onDelete={() => handleDeleteProduct(product.id)}
                  onUpdate={(updatedProductInfo) =>
                    handleUpdateProduct(product.id, updatedProductInfo)
                  }
                  onSelectType={(newType) =>
                    handleSelectType(product.id, newType)
                  }
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
