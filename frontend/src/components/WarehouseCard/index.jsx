import React from "react";
import { Link } from "react-router-dom";
import img from "../../images/shoes4.png";
import "./style.scss";

export default function WarehouseCard() {
  return (
    <div className="warehouse">
      <div className="warehouseAdd">
        <Link to="/addProduct" className="link-addProduct">
          <button className="btn-addProduct">Thêm sản phẩm</button>
        </Link>
      </div>
      <div className="warehouseGrid">
        <div className="warehouseRow">
          <div className="warehouseRow-yesno"></div>
          <div className="warehouseRow-product">Sản phẩm</div>
          <div className="warehouseRow-type">Phân loại hàng</div>
          <div className="warehouseRow-price">Đơn giá</div>
          <div className="warehouseRow-quantity">Số lượng còn lại</div>
          <div className="warehouseRow-operation">Thao tác</div>
        </div>
        {/* Danh sách sản phẩm */}
        <div className="warehouseList">
          <input className="warehouse-yesno" type={"checkbox"}></input>
          <div className="warehouse-product">
            <div className="warehouse-detail">
              <Link to="/about" className="link-warehouse-detail">
                <img className="img-warehouse-detail" src={img} alt=""></img>
              </Link>
            </div>
            <div className="warehouse-content">
              <Link to="/about" className="link-warehouse-content">
                <span className="name-warehouse-content">
                  Giày Converse Chuck Taylor All Star Classic Low 121178
                </span>
              </Link>
              <Link to="#" className="catogery-warehouse-content">
                Nike
              </Link>
            </div>
          </div>
          <div className="warehouse-type">
            <select className="select-warehouse-type">
              <option value={0}>Vàng</option>
              <option value={1}>Đen</option>
              <option value={2}>Đỏ</option>
            </select>
          </div>
          <div className="warehouse-price">
            <span className="name-warehouse-price">90.000 đồng</span>
          </div>
          <div className="warehouse-quantity">
            <button className="decrease-warehouse-quantity">-</button>
            <input
              type="text"
              className="text-warehouse-quantity"
              defaultValue={1}
            />
            <button className="increase-warehouse-quantity">+</button>
          </div>
          <div className="warehouse-operation">
            <button className="delete-warehouse-quantity">Xóa</button>
            <button className="update-warehouse-quantity">Chỉnh sửa</button>
          </div>
        </div>
      </div>
      {/* Thêm các sản phẩm khác ở đây  */}
    </div>
  );
}
