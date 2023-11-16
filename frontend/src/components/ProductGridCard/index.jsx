import React from "react";
import { Link } from "react-router-dom";

export default function ProductGridCard({
  name,
  image,
  brand,
  salePrice,
  price,
  discount,
}) {
  return (
    <div>
      <div className="showcase-productGrid">
        <div className="showcase-grid">
          <p className="showcase-badge">{discount}</p>
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
              src={image}
              alt=""
              width={300}
              className="product-img default"
            />
          </Link>
        </div>
        <div className="showcase-content">
          <Link to="/" className="showcase-category-grid">
            {brand}
          </Link>
          <Link to="/about" className="showcase-title-grid">
            <h3 className="showcase-title">{name}</h3>
          </Link>
          <div className="showcase-rating">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-half-o" aria-hidden="true"></i>
          </div>
          <div className="price-box">
            <p className="price">${price}</p>
            <p className="deal">${salePrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
