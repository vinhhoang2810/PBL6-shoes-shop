import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./style-prefix.scss";

import logo2 from "../../../images/logo2png.png";

export default function Header() {
  const dropdownRef = useRef(null);
  const [active, setActive] = useState(false);

  const onMenuAccount = (e) => {
    e.preventDefault();
    setActive(true);
  };
  const offMenuAccount = () => {
    setActive(false);
  };

  const handleClickOutside = (event) => {
    console.log(event?.target);
    console.log(dropdownRef?.current);
    if (!dropdownRef?.current?.contains(event?.target)) {
      setActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <header className="header">
      <div className="header-main">
        <div className="container">
          <Link to="/" className="header-logo">
            <img
              className="img-logo"
              src={logo2}
              alt="Anon's logo"
              width="120"
              height="50"
            />
          </Link>
          <div className="header-search-container">
            <input
              type="search"
              name="search"
              className="search-field"
              placeholder="Enter your product name..."
            />
            <button className="search-btn">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
          <div className="header-user-actions">
            <Link to="/login" className="action-btn">
              <i className="fa fa-user-o" aria-hidden="true"></i>
            </Link>
            <Link to="/profile" className="action-btn">
              <i className="fa fa-id-card" aria-hidden="true"></i>
            </Link>
            <Link to="/cart" className="action-btn">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              <span className="count">0</span>
            </Link>
          </div>
        </div>
      </div>
      <nav className="desktop-navigation-menu">
        <div className="container">
          <ul className="desktop-menu-category-list">
            <li className="menu-category">
              <Link to="/" className="menu-title">
                Home
              </Link>
            </li>
            <li className="menu-category">
              <Link to="/product" className="menu-title">
                Product
              </Link>
            </li>
            <li className="menu-category">
              <Link to="/warehouse" className="menu-title">
                Warehouse
              </Link>
            </li>
            <li className="menu-category">
              <Link to="/review" className="menu-title">
                Review
              </Link>
            </li>
            <li className="menu-category">
              <Link to="/service" className="menu-title">
                Service
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div ref={dropdownRef}>
        <div className="mobile-bottom-navigation">
          <button
            className="action-btn"
            onClick={(e) => onMenuAccount(e)}
            data-mobile-menu-open-btn
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
          <Link to="/cart">
            <button className="action-btn">
              <i className="fa fa-shopping-bag" aria-hidden="true"></i>
              <span className="count">0</span>
            </button>
          </Link>
          <Link to="/" className="mobile-bottom-navigation-home">
            <button className="action-btn">
              <i className="fa fa-home" aria-hidden="true"></i>
            </button>
          </Link>
          <Link to="/profile" className="action-btn">
            <i className="fa fa-id-card" aria-hidden="true"></i>
          </Link>
          <Link to="/login" className="action-btn">
            <i className="fa fa-user-o" aria-hidden="true"></i>
          </Link>
        </div>
        <nav
          className={`mobile-navigation-menu  has-scrollbar ${
            active ? "active" : ""
          }`}
          data-mobile-menu
        >
          <div className="menu-top">
            <h2 className="menu-title">Menu</h2>
            <Link to="/" className="menu-close-btn" data-mobile-menu-close-btn>
              <i className="fa fa-home" aria-hidden="true"></i>
            </Link>
          </div>
          <ul className="mobile-menu-category-list">
            <li className="menu-category">
              <Link to="/product" className="accordion-menu" data-accordion-btn>
                <p className="menu-title">Product</p>
              </Link>
            </li>
            <li className="menu-category">
              <Link to="/about" className="accordion-menu" data-accordion-btn>
                <p className="menu-title">About</p>
              </Link>
            </li>
            <li className="menu-category">
              <Link
                to="/warehouse"
                className="accordion-menu"
                data-accordion-btn
              >
                <p className="menu-title">Warehouse</p>
              </Link>
            </li>
            <li className="menu-category">
              <Link to="/review" className="accordion-menu" data-accordion-btn>
                <p className="menu-title">Review</p>
              </Link>
            </li>
            <li className="menu-category">
              <Link to="/service" className="accordion-menu" data-accordion-btn>
                <p className="menu-title">Service</p>
              </Link>
            </li>
            <li className="menu-category">
              <Link to="/cart" className="accordion-menu" data-accordion-btn>
                <p className="menu-title">Cart</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
