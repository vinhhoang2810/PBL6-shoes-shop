import React from "react";
import { Link } from "react-router-dom";
import shoes from "../../images/shoes3.png";
import "./style.scss";
import Button from "../../components/Button";

export default function ProductFeaturedCard() {
  return (
    <section>
      <div className="product-featured">
        <h2 className="product-featured-title">Deal Of The Day</h2>
        <div className="product-featured-content">
          <Link to={"/about"} className="product-featured-link">
            <img src={shoes} alt="" className="product-featured-image"></img>
          </Link>
          <div className="product-featured-detail">
            <div class="product-featured-rating">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
            </div>
            <h2 className="product-featured-name">
              <Link to="/about" className="product-featured-name-link">
                Giày Nike Air Force 1 Canviày Jordad
              </Link>
            </h2>
            <Link to="/#" className="product-featured-category">
              Nike
            </Link>
            <div className="product-featured-price">
              <p className="product-featured-price-real">$12.00</p>
              <del>$15.00</del>
            </div>
            <Button text="ADD TO CART" to="/cart"></Button>
            <div class="product-featured-status">
              <p>
                {" "}
                already sold: <b>15</b>{" "}
              </p>

              <p>
                {" "}
                available: <b>40</b>{" "}
              </p>
            </div>
            <div class="product-featured-countdown-box">
              <p class="product-featured-countdown-desc">
                Hurry Up! Offer ends in:
              </p>
              <div class="product-featured-countdown">
                <div class="product-featured-countdown-content">
                  <p class="product-featured-display-number">360</p>
                  <p class="product-featured-display-text">Days</p>
                </div>
                <div class="product-featured-countdown-content">
                  <p class="product-featured-display-number">24</p>
                  <p class="product-featured-display-text">Hours</p>
                </div>
                <div class="product-featured-countdown-content">
                  <p class="product-featured-display-number">59</p>
                  <p class="product-featured-display-text">Min</p>
                </div>
                <div class="product-featured-countdown-content">
                  <p class="product-featured-display-number">00</p>
                  <p class="product-featured-display-text">Sec</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
