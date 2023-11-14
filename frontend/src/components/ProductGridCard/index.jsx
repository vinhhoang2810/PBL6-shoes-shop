import React from "react";
import { Link } from "react-router-dom";
import shoes from "../../images/shoes4.png";
import "./style-prefix.scss";

export default function ProductGridCard() {
  return (
    <div className="productGrid">
      <div className="product-main">
        <h2 className="title">Products</h2>
        <div className="product-grid">
          <div className="showcase-productGrid">
            <div className="showcase-grid">
              <p className="showcase-badge">15%</p>
              <div className="showcase-actions">
                <button className="btn-action">
                  <i className="fa fa-heart-o" aria-hidden="true"></i>
                </button>
                <button className="btn-action">
                  <i className="fa fa-eye" aria-hidden="true"></i>
                </button>
                <button className="btn-action">
                  <i className="fa fa-repeat" aria-hidden="true"></i>
                </button>
                <button className="btn-action">
                  <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                </button>
              </div>
              <Link to="/about">
                <img
                  src={shoes}
                  alt=""
                  width={300}
                  className="product-img default"
                />
              </Link>
            </div>
            <div className="showcase-content">
              <Link to="/about" className="showcase-category-grid">
                Nike
              </Link>
              <Link to="/about" className="showcase-title-grid">
                <h3 className="showcase-title">
                  Giày jordan Cổ Thấp, Giày thể thao nam nữ{" "}
                </h3>
              </Link>
              <div className="showcase-rating">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-half-o" aria-hidden="true"></i>
              </div>
              <div className="price-box">
                <p className="price">$48.00</p>
                <p className="deal">$75.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
