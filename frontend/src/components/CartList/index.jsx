import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import CartCard from "../CartCard";
import shoes from "../../images/shoes4.png";
import "./style.scss";

export default function CartList() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Giày Converse Chuck Taylor All Star Classic Low 121178",
      brand: "Nike",
      quantity: 10,
      price: 50,
      // type: "Vàng",
    },
    {
      id: 2,
      name: "Giày Converse Chuck Taylor All Star Classic Low 121178",
      brand: "Adidas",
      quantity: 20,
      price: 30,
      // type: "Đen",
    },
    {
      id: 3,
      name: "Giày Converse Chuck Taylor All Star Classic Low 121178",
      brand: "Gucci",
      quantity: 20,
      price: 40,
      // type: "Đỏ",
    },
    {
      id: 4,

      name: "Giày Converse Chuck Taylor All Star Classic Low 121178",
      brand: "New Balance",
      quantity: 30,
      price: 10,
      // type: "Xanh",
    },
    // ...Thêm các sản phẩm khác
  ]);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleIncreaseQuantity = (productId) => {
    // Tìm sản phẩm cần tăng số lượng
    const updatedProducts = products.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );

    // Cập nhật danh sách sản phẩm
    setProducts(updatedProducts);
  };

  const handleDeCreaseQuantity = (productId) => {
    // Tìm sản phẩm cần giảm số lượng
    const updatedProducts = products.map((product) =>
      product.id === productId && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );

    // Cập nhật danh sách sản phẩm
    setProducts(updatedProducts);
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };

  const handleTotal = useCallback(() => {
    // Tính tổng giá trị của sản phẩm trong giỏ hàng
    const total = products.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);

    // Cập nhật state với tổng giá trị mới
    setTotalPrice(total);
  }, [products]);

  useEffect(() => {
    // Gọi hàm handleTotal mỗi khi danh sách sản phẩm thay đổi
    handleTotal();
  }, [handleTotal, products]);
  console.log("Total Price:", totalPrice); // Thêm dòng này để debug
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
        {products.map((product) => {
          return (
            <CartCard
              key={product.id}
              image={shoes}
              name={product.name}
              brand={product.brand}
              quantity={product.quantity ?? 1}
              price={product.price}
              onDelete={() => handleDeleteProduct(product.id)}
              onIncreaseQuantity={() => handleIncreaseQuantity(product.id)}
              onDeCreaseQuantity={() => handleDeCreaseQuantity(product.id)}
            />
          );
        })}
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
