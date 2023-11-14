import React from "react";
import { Link } from "react-router-dom";
import shoes from "../../images/shoes4.png";
import "./style-prefix.scss";

export default function ProductCard({ title }) {
  return (
    // <div className="product-container container-layout">
    //   <div className="container-product">
    //     {/*
    //     - SIDEBAR
    //     */}
    //     <div className="sidebar-scrollbar has-scrollbar" data-mobile-menu="">
    //       <div className="product-showcase">
    //         <h3 className="sidebar-heading">best sellers</h3>
    //         <div className="sidebar-wrapper">
    //           <div className="sidebar-container">
    //             <div className="sidebar">
    //               <Link to="/about" className="sidebar-img-box">
    //                 <img
    //                   src={shoes}
    //                   alt=""
    //                   width={75}
    //                   height={75}
    //                   className="sidebar-img"
    //                 />
    //               </Link>
    //               <div className="sidebar-content">
    //                 <Link to="/about" className="sidebar-title-link">
    //                   <h4 className="sidebar-title">
    //                     Giày_nike air force 1 canvas navy, giày thể thao AF1 vải
    //                     canvas
    //                   </h4>
    //                 </Link>
    //                 <div className="sidebar-rating">
    //                   <i className="fa fa-star" aria-hidden="true"></i>
    //                   <i className="fa fa-star" aria-hidden="true"></i>
    //                   <i className="fa fa-star" aria-hidden="true"></i>
    //                   <i className="fa fa-star" aria-hidden="true"></i>
    //                   <i className="fa fa-star" aria-hidden="true"></i>
    //                 </div>
    //                 <div className="price-box">
    //                   <del>$5.00</del>
    //                   <p className="price">$4.00</p>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="product-box">
    //       {/*
    //     - PRODUCT MINIMAL
    //     */}
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className="product-content">
        <Link to={"/about"} className="product-link">
          <img src={shoes} alt="" className="product-image"></img>
        </Link>
        <div>
          <h2 className="product-name">{title}</h2>
          <div className="product-rating">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
          </div>
          <div className="product-price">
            <del>$5.00</del>
            <p className="product-price-real">$4.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
