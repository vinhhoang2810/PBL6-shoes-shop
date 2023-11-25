import Header from "../../components/Layout/Header";
import "./style.scss";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import apiProductDetail from "../../components/API/apiProductDetail";
import apiAddItem from "../../components/API/apiAddItem";

export default function AboutPage({ quantity = 1 }) {
  // lỗi toast
  const navigate = useNavigate();
  const [productDetail, setproductDetail] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState("");
  let id = useParams();
  // const selectedId = searchParams.get("selectedId");

  const handleAddtocart = async (productId) => {
    const formdata = {
      productId,
      quantity: selectedQuantity,
      size: selectedSize,
      color: selectedColor,
    };
    console.log(formdata);
    try {
      const response = await apiAddItem.putAddItem(formdata);
      console.log(response.data);
      toast.success("Thêm sản phẩm vào giỏ thành công");
      console.log("Item added to cart:", response.data);
    } catch (error) {
      // Handle errors
      console.error("Add to Cart Error:", error);
      toast.error(error?.message);
    }
  };
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
            <div className="about-table">
              <div className="about-table-price">
                <span className="about-table-price-old">
                  ${productDetail.price}
                </span>
                <span className="about-table-price-current">
                  ${productDetail.discountedPrice}
                </span>
              </div>
              <div className="about-table-size">
                <span className="about-size-name">Size:</span>
                <select
                  className="about-size-font"
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                >
                  <option value="" defaultCheckedy>
                    Choose an option
                  </option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                </select>
              </div>
              <div className="about-table-color">
                <span className="about-color-name">Color:</span>
                <select
                  className="about-color-font"
                  value={selectedColor} // Giữ giá trị đã chọn
                  onChange={(e) => setSelectedColor(e.target.value)}
                >
                  <option value="0" defaultCheckedy>
                    Choose an option
                  </option>
                  <option value="#FF0000">Đỏ</option>
                  <option value="#00FF00">Xanh lá</option>
                  <option value="#FFFF00">Vàng</option>
                  <option value="#C0C0C0">Bạc</option>
                  <option value="#00FFFF">Xanh Dương</option>
                  <option value="#FFFFFF">Trắng</option>
                  <option value="#000000">Đen</option>
                  <option value="#808080">Xám</option>
                </select>
              </div>
              <div className="about-quantity">
                <div className="about-quantity-detail">
                  <Button text="-" onClick={handleDeCreaseQuantity}></Button>
                  <input
                    type="text"
                    className="about-quantity-input"
                    value={selectedQuantity}
                    defaultValue={quantityDefault}
                    onChange={(e) => setSelectedQuantity(e.target.value)}
                  />
                  <Button text="+" onClick={handleIncreaseQuantity}></Button>
                </div>
                <div className="about-payment">
                  <Button
                    text="Add To Cart"
                    onClick={() => handleAddtocart(productDetail.id)}
                  ></Button>
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
