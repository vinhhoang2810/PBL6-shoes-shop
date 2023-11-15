import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import CartCard from "../CartCard";
import shoes from "../../images/shoes4.png";
import "./style.scss";

const data = [
  {
    image: shoes,
    name: "Giày Converse Chuck Taylor All Star Classic Low 121178",
    brand: "Nike",
    price: 5,
    quantity: 2,
  },
  {
    image: shoes,
    name: "Giày Converse Chuck Taylor All Star Classic Low 121178",
    brand: "Nike",
    price: 3,
    quantity: 3,
  },
  {
    image: shoes,
    name: "Giày Converse Chuck Taylor All Star Classic Low 121178",
    brand: "Nike",
    price: 4,
    quantity: 2,
  },
];

export default function CartList() {
  const [totalPrice, setTotalPrice] = useState(0);
  const handleSetTotalPrice = useCallback((price) => {
    setTotalPrice((prev) => prev + price);
  }, []);

  useEffect(() => {
    const totalPriceArray = data.map((product) => {
      return product.price * product.quantity;
    });

    totalPriceArray.forEach((price) => {
      handleSetTotalPrice(price);
    });
  }, [handleSetTotalPrice]);

  return (
    <>
      <div className="cart container-layout">
        <div className="cart-operation">
          <Link to="/product" className="cart-operation-link">
            <button className="cart-operation-add">Thêm sản phẩm mới</button>
          </Link>

          <button className="cart-operation-delete">Xóa</button>
        </div>
        <div className="cartRow">
          <div className="cartRow-product">Sản phẩm</div>
          <div className="cartRow-price">Đơn giá</div>
          <div className="cartRow-quantity">Số lượng</div>
          <div className="cartRow-money">Thành tiền</div>
          <div className="cartRow-operation">Thao tác</div>
        </div>

        {/* Danh sách sản phẩm  */}
        {data.map((product) => {
          return (
            <CartCard
              image={product.image}
              name={product.name}
              brand={product.brand}
              price={product.price}
              quantity={product.quantity ?? 1}
            />
          );
        })}

        {/* Thêm các sản phẩm khác ở đây */}
      </div>
      <div className="payment">
        <div className="payment-voucher">
          <i className="fa fa-ticket" aria-hidden="true" />
          <span>Voucher của bạn</span>
          <button className="btn-payment-voucher">
            Chọn hoặc nhập mã Voucher
          </button>
        </div>
        <div className="payment-detail">
          <button className="payment-detail-btnall">Chọn tất cả</button>
          <button className="payment-detail-btndelete">Xóa</button>
          <div className="payment-content">
            <label>Tổng số tiền</label>
            <label>${totalPrice}</label>
          </div>
        </div>
        <div className="payment-btn">
          <Button
            text="Buy Now"
            to="/pay"
            className={"payment-btn-buy"}
          ></Button>
        </div>
      </div>
    </>
  );
}
