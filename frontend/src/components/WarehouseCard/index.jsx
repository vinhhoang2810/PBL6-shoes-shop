import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.scss";

export default function WarehouseCard({
  image,
  name,
  brand,
  quantity,
  type,
  price,
  onDelete,
  onUpdate,
  onSelectType,
}) {
  // const [selectedType, setSelectedType] = useState(type);
  // const handleTypeChange = (e) => {
  //   const newType = e.target.value;
  //   setSelectedType(newType);
  //   // Gọi hàm callback từ props để cập nhật giá trị type trong WarehouseList
  //   onSelectType(newType);
  // };

  const handleDeleteClick = () => {
    // Gọi hàm xử lý xóa từ props
    onDelete();
  };

  const handleUpdateClick = () => {
    // Gọi hàm xử lý cập nhật từ props
    onUpdate();
  };
  return (
    <div className="warehouseList">
      <input className="warehouse-yesno" type={"checkbox"}></input>
      <div className="warehouse-product">
        <div className="warehouse-detail">
          <Link to="/about" className="link-warehouse-detail">
            <img className="img-warehouse-detail" src={image} alt=""></img>
          </Link>
        </div>
        <div className="warehouse-content">
          <Link to="/about" className="link-warehouse-content">
            <span className="name-warehouse-content">{name}</span>
          </Link>
          <Link to="#" className="catogery-warehouse-content">
            {brand}
          </Link>
        </div>
      </div>
      <div className="warehouse-type">
        <select
          className="select-warehouse-type"
          // value={selectedType}
          // onChange={handleTypeChange}
        >
          <option value={0}>Vàng</option>
          <option value={1}>Đen</option>
          <option value={2}>Đỏ</option>
        </select>
      </div>
      <div className="warehouse-price">
        <span className="name-warehouse-price">${price}.00</span>
      </div>
      <div className="warehouse-quantity">
        <span className="warehouse-quantity-span">{quantity}</span>
      </div>
      <div className="warehouse-operation">
        <Button onClick={handleDeleteClick}>Delete</Button>
        <Button onClick={handleUpdateClick}>Update</Button>
      </div>
    </div>
  );
}
