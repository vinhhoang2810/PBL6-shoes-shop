import React from "react";
import { Link } from "react-router-dom";
import shoes from "../../images/shoes4.png";
import "./style.scss";
export default function CartCard() {
  return (
    <>
      <div className="cart">
        <div className="cart-operation">
          <Link to="/product" className="cart-operation-link">
            <button className="cart-operation-add">Thêm sản phẩm mới</button>
          </Link>

          <button className="cart-operation-delete">Xóa</button>
        </div>
        <div className="cartRow">
          <div className="cartRow-yesno" />
          <div className="cartRow-product">Sản phẩm</div>
          <div className="cartRow-price">Đơn giá</div>
          <div className="cartRow-quantity">Số lượng</div>
          <div className="cartRow-money">Thành tiền</div>
          <div className="cartRow-operation">Thao tác</div>
        </div>
        {/* Danh sách sản phẩm  */}
        <div className="cartList" role="list">
          <input type="checkbox" className="cartList-yesno" />
          <div className="cartList-detail">
            <Link to="/about" className="cartList-detail-link">
              <img src={shoes} alt="" className="cartList-detail-img" />
            </Link>
            <div className="cartList-content">
              <Link to="/about" className="cartList-content-link">
                <span className="cartList-content-span">
                  Giày Converse Chuck Taylor All Star Classic Low 121178
                </span>
              </Link>
              <Link to="/#" className="cartList-content-catogery">
                Nike
              </Link>
              <div className="cartList-content-type">
                <select className="cartList-content-check">
                  <option value={0}>Vàng</option>
                  <option value={1}>Đen</option>
                  <option value={2}>Đỏ</option>
                </select>
              </div>
            </div>
          </div>
          <div className="cartList-price">
            <span>90.000 đồng</span>
          </div>
          <div className="cartList-quantity">
            <button className="cartList-decrease">-</button>
            <input type="text" className="cartList-input" defaultValue={1} />
            <button className="cartList-increase">+</button>
          </div>
          <div className="cartList-money">
            <span>90.000 đồng</span>
          </div>
          <div className="cartList-operation">
            <button className="cartList-operation-delete">Xóa</button>
            <button className="cartList-operation-update">Chỉnh sửa</button>
          </div>
        </div>
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
          <input type="checkbox" className="payment-detail-yesno" />
          <button className="payment-detail-btnall">Chọn tất cả</button>
          <button className="payment-detail-btndelete">Xóa</button>
          <div className="payment-content">
            <label>Tổng số tiền</label>
            <label>35.000.000 đồng</label>
          </div>
        </div>
        <div className="payment-btn">
          <button className="payment-btn-cart">
            <span className="add-text">Add To Cart</span>
          </button>
          <button className="payment-btn-buy">
            <span className="buy-text">Buy Now</span>
          </button>
        </div>
      </div>
    </>
  );
}
