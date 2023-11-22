import Header from "../../components/Layout/Header";
import "./style.scss";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import apiProductDetail from "../../components/API/apiProductDetail";

export default function AboutPage({ quantity = 1 }) {
  // lỗi toast
  const navigate = useNavigate();
  const [productDetail, setproductDetail] = useState([]);
  let id = useParams();
  console.log(id);
  // const selectedId = searchParams.get("selectedId");

  useEffect(() => {
    const fetchproductDetail = async () => {
      try {
        const response = await apiProductDetail.getProductDetail(id?.id);
        setproductDetail(response.data);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };
    fetchproductDetail();
  }, []);

  const handleAddtocart = async () => {
    toast.success("Thêm sản phẩm vào giỏ thành công");
    setTimeout(() => {
      navigate(`/cart`);
    }, 2000);
  };
  const handleBuynow = () => {
    toast.success("Thêm sản phẩm vào giỏ thành công");
    setTimeout(() => {
      navigate(`/pay?step=1`);
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
            <img
              src={productDetail.imageUrl}
              alt=""
              className="about-image"
            ></img>
            <div className="about-voucher">
              <span className="about-voucher-text">
                {productDetail.discountPersent}%
              </span>
            </div>
          </div>
          <div className="about-content">
            <div className="about-information">
              <h1 className="about-title">{productDetail.title}</h1>
              <div className="about-rating">
                <i className="fa fa-solid fa-star fa-2xl icon-star"></i>
                <i className="fa fa-solid fa-star fa-2xl icon-star"></i>
                <i className="fa fa-solid fa-star fa-2xl icon-star"></i>
                <i className="fa fa-solid fa-star fa-2xl icon-star"></i>
                <i className="fa fa-solid fa-star fa-2xl icon-star"></i>
              </div>
              <div className="about-description">
                <p>{productDetail.description}</p>
              </div>
            </div>
            <div class="about-table">
              <div class="about-table-price">
                <span class="about-table-price-old">
                  ${productDetail.price}
                </span>
                <span class="about-table-price-current">
                  ${productDetail.discountedPrice}
                </span>
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
                  <Button text="Add To Cart" onClick={handleAddtocart}></Button>
                  <button className="about-pay" onClick={handleBuynow}>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
