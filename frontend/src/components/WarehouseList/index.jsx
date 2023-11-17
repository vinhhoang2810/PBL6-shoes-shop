import React, { useState } from "react";
import WarehouseCard from "../WarehouseCard";
import shoes from "../../images/shoes4.png";
import "./style.scss";

export default function WarehouseList() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Giày Converse Chuck Taylor All Star Classic Low 121178",
      brand: "Brand A",
      quantity: 10,
      price: 50,
      // type: "Vàng",
    },
    {
      id: 2,
      name: "Giày Converse Chuck Taylor All Star Classic Low 121178",
      brand: "Brand B",
      quantity: 20,
      price: 30,
      // type: "Đen",
    },
    {
      id: 3,
      name: "Giày Converse Chuck Taylor All Star Classic Low 121178",
      brand: "Brand B",
      quantity: 20,
      price: 40,
      // type: "Đỏ",
    },
    {
      id: 4,
      name: "Giày Converse Chuck Taylor All Star Classic Low 121178",
      brand: "Brand A",
      quantity: 30,
      price: 10,
      // type: "Xanh",
    },
    // ...Thêm các sản phẩm khác
  ]);
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
            <div className="warehouseRow-yesno"></div>
            <div className="warehouseRow-product">Product</div>
            <div className="warehouseRow-type">Type</div>
            <div className="warehouseRow-price">Price</div>
            <div className="warehouseRow-quantity">The remaining amount</div>
            <div className="warehouseRow-operation">Operation</div>
          </div>
          {/* Danh sách sản phẩm */}
          {products.map((product) => (
            <WarehouseCard
              key={product.id}
              image={shoes}
              name={product.name}
              brand={product.brand}
              quantity={product.quantity}
              type={product.type}
              price={product.price}
              onDelete={() => handleDeleteProduct(product.id)}
              onUpdate={(updatedProductInfo) =>
                handleUpdateProduct(product.id, updatedProductInfo)
              }
              onSelectType={(newType) => handleSelectType(product.id, newType)}
            />
          ))}
        </div>
        {/* Thêm các sản phẩm khác ở đây  */}
      </div>
    </div>
  );
}
