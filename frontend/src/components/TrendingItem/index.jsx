import React from "react";
import { Link } from "react-router-dom";
import "./style-prefix.scss";
import trending from "../../images/banner-2.jpg";

export default function TrendingItem() {
  return (
    <div className="banner">
      <div className="container-trending">
        <div className="slider-container has-scrollbar">
          <div className="slider-item">
            <img
              src={trending}
              alt="women's latest fashion sale"
              className="banner-img"
            />
            <div className="banner-content">
              <p className="banner-subtitle">Trending item</p>
              <p className="banner-text">
                starting at $ <b>20</b>.00
              </p>
              <Link to="/cart" className="banner-btn">
                Shop now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
