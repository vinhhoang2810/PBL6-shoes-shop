import React from "react";
import { Link } from "react-router-dom";
import "./style-prefix.scss";
import pay from "../../../images/payment.png";

export default function Footer() {
  return (
    <section>
      <footer className="footer">
        <div className="footer-category">
          <div className="footer-nav">
            <div className="container">
              <ul className="footer-nav-list">
                <li className="footer-nav-item">
                  <h2 className="nav-title">Popular Categories</h2>
                </li>
                <li className="footer-nav-item">
                  <Link href="#" className="footer-nav-link">
                    Fashion
                  </Link>
                </li>
                <li className="footer-nav-item">
                  <Link href="#" className="footer-nav-link">
                    Electronic
                  </Link>
                </li>
                <li className="footer-nav-item">
                  <Link href="#" className="footer-nav-link">
                    Cosmetic
                  </Link>
                </li>
                <li className="footer-nav-item">
                  <Link href="#" className="footer-nav-link">
                    Health
                  </Link>
                </li>
                <li className="footer-nav-item">
                  <Link href="#" className="footer-nav-link">
                    Watches
                  </Link>
                </li>
              </ul>
              <ul className="footer-nav-list">
                <li className="footer-nav-item">
                  <h2 className="nav-title">Products</h2>
                </li>
                <li className="footer-nav-item">
                  <Link href="#" className="footer-nav-link">
                    Prices drop
                  </Link>
                </li>
                <li className="footer-nav-item">
                  <Link href="#" className="footer-nav-link">
                    New products
                  </Link>
                </li>
                <li className="footer-nav-item">
                  <Link href="#" className="footer-nav-link">
                    Best sales
                  </Link>
                </li>
                <li className="footer-nav-item">
                  <Link href="#" className="footer-nav-link">
                    Contact us
                  </Link>
                </li>
                <li className="footer-nav-item">
                  <Link href="#" className="footer-nav-link">
                    Sitemap
                  </Link>
                </li>
              </ul>
              <ul className="footer-nav-list">
                <li className="footer-nav-item">
                  <h2 className="nav-title">Our Company</h2>
                </li>
                <li className="footer-nav-item">
                  <Link href="#" className="footer-nav-link">
                    Delivery
                  </Link>
                </li>
                <li className="footer-nav-item">
                  <Link href="#" className="footer-nav-link">
                    Legal Notice
                  </Link>
                </li>
                <li className="footer-nav-item">
                  <Link href="#" className="footer-nav-link">
                    Terms and conditions
                  </Link>
                </li>
                <li className="footer-nav-item">
                  <Link href="#" className="footer-nav-link">
                    About us
                  </Link>
                </li>
                <li className="footer-nav-item">
                  <Link href="#" className="footer-nav-link">
                    Secure payment
                  </Link>
                </li>
              </ul>
              <ul className="footer-nav-list">
                <li className="footer-nav-item">
                  <h2 className="nav-title">Services</h2>
                </li>
                <li className="footer-nav-item">
                  <Link href="#" className="footer-nav-link">
                    Prices drop
                  </Link>
                </li>
                <li className="footer-nav-item">
                  <Link href="#" className="footer-nav-link">
                    New products
                  </Link>
                </li>
                <li className="footer-nav-item">
                  <Link href="#" className="footer-nav-link">
                    Best sales
                  </Link>
                </li>
                <li className="footer-nav-item">
                  <Link href="#" className="footer-nav-link">
                    Contact us
                  </Link>
                </li>
                <li className="footer-nav-item">
                  <Link href="#" className="footer-nav-link">
                    Sitemap
                  </Link>
                </li>
              </ul>
              <ul className="footer-nav-list">
                <li className="footer-nav-item">
                  <h2 className="nav-title">Contact</h2>
                </li>
                <li className="footer-nav-item flex">
                  <div className="icon-box">
                    <i className="fa fa-map" aria-hidden="true"></i>
                  </div>
                  <address className="content">
                    419 State 414 Rte Beaver Dams, New York(NY), 14812, USA
                  </address>
                </li>
                <li className="footer-nav-item flex">
                  <div className="icon-box">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                  </div>
                  <a href="tel:+607936-8058" className="footer-nav-link">
                    (607) 936-8058
                  </a>
                </li>
                <li className="footer-nav-item flex">
                  <div className="icon-box">
                    <i className="fa fa-info" aria-hidden="true"></i>
                  </div>
                  <a
                    href="mailto:example@gmail.com"
                    className="footer-nav-link"
                  >
                    example@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <img src={pay} alt="payment method" className="payment-img" />
              <p className="copyright">
                Copyright © <Link href="#">Anon</Link> all rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
