import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Layout/Header";
import "./style.scss";
import Button from "../../components/Button";

export default function AddProductPage() {
  const [nameProduct, setnameProduct] = useState("");
  const [descriptionProduct, setdescriptionProduct] = useState("");
  const [priceProduct, setpriceProduct] = useState("");
  const [imageProduct, setimageProduct] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (
      nameProduct !== "" &&
      descriptionProduct !== "" &&
      priceProduct !== "" &&
      imageProduct !== ""
    ) {
      toast.success("Thêm sản phẩm mới thành công");
      setTimeout(() => {
        navigate("/warehouse");
      }, 2000);
    } else {
      toast.error("Cần nhập đầy đủ thông tin");
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
          <div className="add-type">
            <div className="add-brand">
              <label className="add-label">Chọn nhãn hiệu:</label>
              <select id="add-brand-check" className="add-select">
                <option value="Nike">Nike</option>
                <option value="Adidas">Adidas</option>
                <option value="Converse">Converse</option>
                <option value="Puma">Puma</option>
                <option value="Alexander Mqueen">Alexander Mqueen</option>
                <option value="New Balence">New Balence</option>
                <option value="Reebok">Reebok</option>
              </select>
            </div>
            <div className="add-size">
              <label className="add-label">Chọn Size:</label>
              <select id="add-size-check" className="add-select">
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
              </select>
            </div>
            <div className="add-color">
              <label className="add-label">Chọn màu:</label>
              <select id="add-color-check" className="add-select">
                <option value="1">Đỏ</option>
                <option value="2">Cam</option>
                <option value="3">Vàng</option>
                <option value="4">Xanh Lá</option>
                <option value="5">Xanh Dương</option>
                <option value="6">Trắng</option>
                <option value="7">Đen</option>
                <option value="8">Xám</option>
              </select>
            </div>
          </div>
          <div className="add-image">
            <label className="add-label">Hình ảnh sản phẩm:</label>
            <input
              type="file"
              className="add-image-input"
              value={imageProduct}
              onChange={(event) => setimageProduct(event.target.value)}
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
