import React from "react";
import WarehouseCard from "../WarehouseCard";
import shoes from "../../images/shoes4.png";
import "./style.scss";

export default function WarehouseList() {
  return (
    <div>
      <div className="warehouse">
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
          <WarehouseCard
            image={shoes}
            name="Giày Converse Chuck Taylor All Star Classic Low 121178"
            brand="NIKE"
            quantity="30"
            price={4}
          />
          <WarehouseCard
            image={shoes}
            name="Giày Converse Chuck Taylor All Star Classic Low 121178"
            brand="NIKE"
            quantity="30"
            price={4}
          />
          <WarehouseCard
            image={shoes}
            name="Giày Converse Chuck Taylor All Star Classic Low 121178"
            brand="NIKE"
            quantity="30"
            price={4}
          />
        </div>
        {/* Thêm các sản phẩm khác ở đây  */}
      </div>
    </div>
  );
}
