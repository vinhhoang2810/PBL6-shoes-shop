import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.scss";
import chroma from "chroma-js";

export default function WarehouseCard({
  product,
  onDelete,
  onUpdate,
  onSelectType,
}) {
  // const [selectedType, setSelectedType] = useState(type);
  // const handleTypeChange = (e) => {
  //   const newType = e.target.value;
  //   setSelectedType(newType);
  //   // Gọi hàm callback từ props để cập nhật giá trị type trong WarehouseList
  //   onSelectType(newType);
  // };

  // const hexColorCode = product?.color;
  // const colorName = chroma(hexColorCode).name();

  const handleDeleteClick = () => {
    // Gọi hàm xử lý xóa từ props
    onDelete();
  };

  const handleUpdateClick = () => {
    // Gọi hàm xử lý cập nhật từ props
    onUpdate();
  };
  console.log(product);
  return (
    <div className="warehouseList">
      <div className="warehouse-product">
        <div className="warehouse-detail">
          <Link to="/about" className="link-warehouse-detail">
            <img
              className="img-warehouse-detail"
              src={product?.imageUrl}
              alt=""
            ></img>
          </Link>
        </div>
        <div className="warehouse-content">
          <Link to="/about" className="link-warehouse-content">
            <span className="name-warehouse-content">{product?.title}</span>
          </Link>
          <Link to="#" className="catogery-warehouse-content">
            {product?.brand}
          </Link>
        </div>
      </div>
      <div className="warehouse-color">
        <span className="name-warehouse-color">{product?.color}</span>
      </div>
      <div className="warehouse-price">
        <span className="name-warehouse-price">
          ${product?.discountedPrice}
        </span>
      </div>
      <div className="warehouse-price">
        <span className="name-warehouse-price">${product?.price}</span>
      </div>
      <div className="warehouse-quantity">
        <span className="warehouse-quantity-span">{product?.quantity}</span>
        {/* <span className="warehouse-quantity-span">{product?.size}</span> */}
      </div>
      <div className="warehouse-operation">
        <Button onClick={handleDeleteClick}>Delete</Button>
        <Button onClick={handleUpdateClick}>Update</Button>
      </div>
    </div>
  );
}
