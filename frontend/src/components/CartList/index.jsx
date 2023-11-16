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
            <button className="cart-operation-add">Add New Products</button>
          </Link>

          <button className="cart-operation-delete">Delete</button>
        </div>
        <div className="cartRow">
          <div className="cartRow-product">Product</div>
          <div className="cartRow-price">Unit price</div>
          <div className="cartRow-quantity">Quantity</div>
          <div className="cartRow-money">Total amount</div>
          <div className="cartRow-operation">Operation</div>
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
          <span>Your voucher</span>
          <button className="btn-payment-voucher">
            Select or enter Voucher code
          </button>
        </div>
        <div className="payment-detail">
          <button className="payment-detail-btnall">Select all</button>
          <button className="payment-detail-btndelete">Delete</button>
          <div className="payment-content">
            <label>The Total Amount</label>
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
