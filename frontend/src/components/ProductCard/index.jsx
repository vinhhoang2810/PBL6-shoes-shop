import React from "react";
import { Link } from "react-router-dom";
import shoes from "../../images/shoes4.png";
import "./style-prefix.scss";

export default function ProductCard() {
  return (
    <div className="product-container">
      <div className="container-product">
        {/*
        - SIDEBAR
        */}
        <div className="sidebar-scrollbar has-scrollbar" data-mobile-menu="">
          <div className="product-showcase">
            <h3 className="sidebar-heading">best sellers</h3>
            <div className="sidebar-wrapper">
              <div className="sidebar-container">
                <div className="sidebar">
                  <Link to="/about" className="sidebar-img-box">
                    <img
                      src={shoes}
                      alt=""
                      width={75}
                      height={75}
                      className="sidebar-img"
                    />
                  </Link>
                  <div className="sidebar-content">
                    <Link to="/about" className="sidebar-title-link">
                      <h4 className="sidebar-title">
                        Giày_nike air force 1 canvas navy, giày thể thao AF1 vải
                        canvas
                      </h4>
                    </Link>
                    <div className="sidebar-rating">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="price-box">
                      <del>$5.00</del>
                      <p className="price">$4.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-box">
          {/*
        - PRODUCT MINIMAL
        */}
          <div className="product-minimal">
            <div className="product-showcase">
              <h2 className="title">New Arrivals</h2>
              <div className="showcase-wrapper has-scrollbar">
                <div className="showcase-container">
                  <div className="showcase">
                    <Link to="/about" className="showcase-img-box">
                      <img
                        src={shoes}
                        alt=""
                        width={70}
                        className="showcase-img"
                      />
                    </Link>
                    <div className="showcase-content">
                      <Link to="/about" className="showcase-title-link">
                        <h4 className="showcase-title">
                          Giày jordan Cổ Thấp, Giày thể thao nam nữ jd pais Xám
                          Xanh
                        </h4>
                      </Link>
                      <Link href="#" className="showcase-category">
                        Nike
                      </Link>
                      <div className="price-box">
                        <p className="price">$45.00</p>
                        <del>$12.00</del>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
