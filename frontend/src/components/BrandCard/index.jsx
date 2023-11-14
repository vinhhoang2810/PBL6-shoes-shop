import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logoNike.png";
import "./style-prefix.scss";

export default function BrandCard() {
  return (
    <div className="category">
      <div className="container-category">
        <div className="category-item-container has-scrollbar">
          <div className="category-item">
            <div className="category-img-box">
              <img src={logo} alt="" className="logo-catogery" width={70} />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">NIKE</h3>
                <p className="category-item-amount">(53)</p>
              </div>
              <Link to="#" className="category-btn">
                Show all
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
