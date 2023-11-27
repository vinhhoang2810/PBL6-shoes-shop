import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Layout/Header";
import "./style.scss";
import Button from "../../components/Button";
import apiAddProduct from "../../components/API/apiAddProduct";

export default function AddProductPage() {
  const [nameProduct, setnameProduct] = useState(
    "GIÀY THỂ THAO REEBOK RIDER V"
  );
  const [descriptionProduct, setdescriptionProduct] = useState(
    "ĐÔI GIÀY LẤY CẢM HỨNG TỪ GIÀY CHẠY BỘ CỔ ĐIỂN VỚI PHONG CÁCH HIỆN ĐẠI Vẻ ngoài của bạn sẽ luôn trong khỏe khoắn năng động suốt ngày dài khi diện đôi Giày Reebok Rider V này"
  );
  const [priceProduct, setpriceProduct] = useState("200000");
  const [discountedPriceProduct, setdiscountedPriceProduct] =
    useState("180000");
  const [discountPersentProduct, setdiscountPersentProduct] = useState("10");
  const [quantityProduct, setquantityProduct] = useState("100");
  const [imageProduct, setimageProduct] = useState(
    "https://image.hsv-tech.io/1387x0/reebok/g/z/gz3109_flt_ecom.jpg"
  );
  const [selectedBrand, setSelectedBrand] = useState("Nike");
  // const [selectedSize, setSelectedSize] = useState([
  // { name: "M", quantity: 20 },
  // { name: "L", quantity: 30 },
  // { name: "S", quantity: 50 },
  // ]);
  const [arrSize, setArrSize] = useState([
    { name: "M", quantity: null },
    { name: "L", quantity: null },
    { name: "S", quantity: null },
  ]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [size, setSize] = useState(null);
  const [count, setCount] = useState(null);
  // const [selectedGender, setSelectedGender] = useState("");
  const [selectedColor, setSelectedColor] = useState("#FF0000");
  const navigate = useNavigate();

  const handleQuantityChange = (event, sizeName, quantitySize) => {
    const value = event.target.value;
    console.log(value);
    setArrSize((prevArrSize) =>
      prevArrSize.map((item) =>
        item.name === sizeName
          ? { ...item, quantity: value === "" ? null : parseInt(value, 10) }
          : item
      )
    );
  };
  // Thay đổi hàm xử lý sự kiện khi chọn size
  const handleSizeChange = (event, sizeName, quantitySize) => {
    if (event.target.checked) {
      setArrSize((prevArrSize) =>
        prevArrSize.map((item) =>
          item.name === sizeName ? { ...item, quantity: quantitySize } : item
        )
      );
    } else {
      setArrSize((prevArrSize) =>
        prevArrSize.map((item) =>
          item.name === sizeName ? { ...item, quantity: null } : item
        )
      );
    }

    setSelectedSizes((prevSelectedSizes) =>
      event.target.checked
        ? [...prevSelectedSizes, { name: sizeName, quantity: quantitySize }]
        : prevSelectedSizes.filter((size) => size.name !== sizeName)
    );
  };
  const handleSubmit = async () => {
    const arrSizes = [
      {
        name: size,
        quantity: count,
      },
    ];

    const formData = {
      title: nameProduct,
      description: descriptionProduct,
      price: parseInt(priceProduct),
      discountedPrice: parseInt(discountedPriceProduct),
      discountPersent: parseInt(discountPersentProduct),
      quantity: parseInt(quantityProduct),
      imageUrl: imageProduct,
      brand: { name: selectedBrand },
      size: arrSizes,
      color: selectedColor,
    };
    console.log(formData);
    // const axiosInstance = await axios.create({
    //   baseURL: "https://pbl6-shoes-shop-production-810a.up.railway.app/api",
    //   headers: {
    //     "Content-Type": "application/json",
    //     accept: "application/json",
    //     Authorization:
    //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDA2MzA2OTYsImV4cCI6MTcwMDcxNjY5NiwiZW1haWwiOiJraW5AZ21haWwuY29tIn0.aEL7QLW59W34FAclcuBnNCnb3CzG94YIrJqNpTIOqr0",
    //   },
    // });
    try {
      const response = await apiAddProduct.postAddProduct(formData);
      // const response = await axiosInstance.post("/admin/products/", formData);
      console.log("response:", response);
      if (response) {
        toast.success("Thêm sản phẩm mới thành công");
        setTimeout(() => {
          navigate("/warehouse");
        }, 2000);
      } else {
        toast.error("Có lỗi khi thêm sản phẩm");
      }
    } catch (error) {
      console.error("Lỗi khi thực hiện yêu cầu API:", error);
      toast.error(`Có lỗi khi thực hiện yêu cầu API: ${error.message}`);
    }
  };

  return (
    <>
      <Header />
      <section>
        <div className="add-product container-layout">
          <ToastContainer />
          <div className="add-content">
            <h1 className="add-title">Đăng Bán Sản Phẩm</h1>
            <p className="add-title-clone">
              Hãy đăng những thông tin sản phẩm bạn cần bán
            </p>
          </div>
          <div className="add-name">
            <label className="add-label">Tên sản phẩm:</label>
            <input
              type="text"
              className="add-name-input"
              value={nameProduct}
              onChange={(event) => setnameProduct(event.target.value)}
            />
          </div>
          <div className="add-description">
            <label className="add-label">Mô tả sản phẩm:</label>
            <textarea
              className="add-description-text"
              rows="4"
              value={descriptionProduct}
              onChange={(event) => setdescriptionProduct(event.target.value)}
            ></textarea>
          </div>
          <div className="add-price">
            <label className="add-label">Giá:</label>
            <input
              type="number"
              className="add-price-input"
              value={priceProduct}
              onChange={(event) => setpriceProduct(event.target.value)}
            />
          </div>
          <div className="add-discountedPrice">
            <label className="add-label">Discounted Price:</label>
            <input
              type="number"
              className="add-discountedPrice-input"
              value={discountedPriceProduct}
              onChange={(event) =>
                setdiscountedPriceProduct(event.target.value)
              }
            />
          </div>
          <div className="add-discountPersent">
            <label className="add-label">Discount Persent:</label>
            <input
              type="number"
              className="add-discountPersent-input"
              value={discountPersentProduct}
              onChange={(event) =>
                setdiscountPersentProduct(event.target.value)
              }
            />
          </div>

          <div className="add-type">
            <div className="add-brand">
              <label className="add-label">Chọn nhãn hiệu:</label>
              <select
                id="add-brand-check"
                className="add-select"
                value={selectedBrand}
                onChange={(event) => setSelectedBrand(event.target.value)}
              >
                <option value="Nike">Nike</option>
                <option value="Adidas">Adidas</option>
                <option value="Converse">Converse</option>
                <option value="Puma">Puma</option>
                <option value="Alexander Mqueen">Alexander Mqueen</option>
                <option value="New Balence">New Balence</option>
                <option value="Reebok">Reebok</option>
              </select>
            </div>
            {/* <div className="add-gender">
              <label className="add-label">Chọn Giới Tính:</label>
              <div className="add-gender-radio">
                <input
                  type="radio"
                  value={selectedGender}
                  name="gender"
                  checked
                  onChange={(event) => setSelectedGender(event.target.value)}
                />
                Nam
                <input
                  type="radio"
                  value={selectedGender}
                  name="gender"
                  onChange={(event) => setSelectedGender(event.target.value)}
                />
                Nữ
              </div>
            </div> */}
            <div className="add-size">
              <label className="add-label">Chọn Size và Số lượng:</label>
              {/* {arrSize.map((size) => (
                <div key={size.name} className="add-size-checkbox">
                  <input
                    type="checkbox"
                    id={`checkbox-${size.name}`}
                    checked={selectedSizes.some(
                      (selectedSize) => selectedSize.name === size.name
                    )}
                    onChange={(event) => handleSizeChange(event, size.name)}
                  />
                  <label htmlFor={`checkbox-${size.name}`}>{size.name}</label>
                  <input
                    type="number"
                    className="add-size-input"
                    id={`size-${size.name}`}
                    value={size.quantity || ""}
                    onChange={(event) => handleQuantityChange(event, size.name)}
                  />
                </div>
              ))} */}
              <div>
                <input type="input" onChange={(e) => setSize(e.target.value)} />
                <input type="text" onChange={(e) => setCount(e.target.value)} />
              </div>
              {/* <div>
                <input
                  type="checkbox"
                  id="S"
                  onChange={() => setNameSizeS("S")}
                />
                <label htmlFor="S">S</label>
                <input type="text" onChange={(e) => setSizeS(e.target.value)} />
              </div>
              <div>
                <input
                  type="checkbox"
                  id="L"
                  onChange={() => setNameSizeL("L")}
                />
                <label htmlFor="L">L</label>
                <input type="text" onChange={(e) => setSizeL(e.target.value)} />
              </div> */}
            </div>
            <div className="add-color">
              <label className="add-label">Chọn màu:</label>
              <select
                id="add-color-check"
                className="add-select"
                value={selectedColor}
                onChange={(event) => setSelectedColor(event.target.value)}
              >
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
          </div>
          <div className="add-image">
            <label className="add-label">Hình ảnh sản phẩm:</label>
            <input
              type="file"
              className="add-image-input"
              onChange={(event) => setimageProduct(event.target.files[0])}
            />
          </div>
          <div className="add-product-btn">
            <Button text="Đồng ý" onClick={handleSubmit}></Button>
          </div>
        </div>
      </section>
    </>
  );
}
