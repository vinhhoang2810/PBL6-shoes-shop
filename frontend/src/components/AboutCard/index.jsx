import Header from "../Layout/Header";
import "./style.scss";
import Button from "../../components/Button";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

export default function AboutCard({
  image,
  name,
  description,
  brand,
  price,
  salePrice,
  quantity = 1,
}) {
  // lỗi toast
  const navigate = useNavigate();
  const handleAddtocart = async () => {
    toast.success("Thêm sản phẩm vào giỏ thành công");
    setTimeout(() => {
      navigate("/cart");
    }, 2000);
  };

  const [quantityDefault, setQuantityDefault] = useState(quantity);
  const handleDeCreaseQuantity = () => {
    if (quantityDefault > 1) {
      setQuantityDefault(quantityDefault - 1);
    }
  };
  const handleIncreaseQuantity = () => {
    setQuantityDefault(quantityDefault + 1);
  };
  return (
    <>
      <Header />
      <div>
        <ToastContainer />
        <div className="about container-layout">
          <div className="about-div">
            <img src={image} alt="" className="about-image"></img>
            <div class="about-voucher">
              <span class="about-voucher-text">-33%</span>
              <span class="about-voucher-status">HOT</span>
            </div>
          </div>
          <div class="about-content">
            <div class="about-information">
              <h1 class="about-title">{name}</h1>
              <Link to="/about" className="showcase-category-grid">
                {brand}
              </Link>
              <div class="about-rating">
                <i class="fa fa-solid fa-star fa-2xl icon-star"></i>
                <i class="fa fa-solid fa-star fa-2xl icon-star"></i>
                <i class="fa fa-solid fa-star fa-2xl icon-star"></i>
                <i class="fa fa-solid fa-star fa-2xl icon-star"></i>
                <i class="fa fa-solid fa-star fa-2xl icon-star"></i>
              </div>
              <div class="about-description">
                <p>{description}</p>
              </div>
            </div>
            <div class="about-table">
              <div class="about-table-price">
                <span class="about-table-price-old">${salePrice}</span>
                <span class="about-table-price-current">${price}</span>
              </div>
              <div class="about-table-size">
                <span class="about-size-name">Size:</span>
                <select class="about-size-font">
                  <option value="36" defaultCheckedy>
                    Choose an option
                  </option>
                  <option value="37">37</option>
                  <option value="38">38</option>
                  <option value="39">39</option>
                  <option value="40">40</option>
                  <option value="41">41</option>
                  <option value="42">42</option>
                  <option value="43">43</option>
                  <option value="44">44</option>
                  <option value="45">45</option>
                </select>
              </div>
              <div class="about-table-color">
                <span class="about-color-name">Color:</span>
                <select class="about-color-font">
                  <option value="0" defaultCheckedy>
                    Choose an option
                  </option>
                  <option value="1">Xanh</option>
                  <option value="2">Đỏ</option>
                  <option value="3">Vàng</option>
                  <option value="4">Đen</option>
                  <option value="5">Tím</option>
                  <option value="6">Hồng</option>
                </select>
              </div>
              <div class="about-quantity">
                <div className="about-quantity-detail">
                  <Button text="-" onClick={handleDeCreaseQuantity}></Button>
                  <input
                    type="text"
                    className="about-quantity-input"
                    value={quantityDefault}
                  />
                  <Button text="+" onClick={handleIncreaseQuantity}></Button>
                </div>
                <div className="about-payment">
                  <Button
                    text="Add To Cart"
                    to="/cart"
                    onClick={handleAddtocart}
                  ></Button>
                  <Button
                    className="about-pay"
                    text="Buy Now"
                    to="/pay"
                  ></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
