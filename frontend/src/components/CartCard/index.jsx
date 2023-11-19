import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.scss";
export default function CartCard({
  image,
  name,
  brand,
  price,
  priceSale,
  quantity,
  onIncreaseQuantity,
  onDeCreaseQuantity,
  onDelete,
}) {
  const [quantityDefault, setQuantityDefault] = useState(quantity);

  // useEffect(() => {
  //   onIncreaseQuantity(price, quantity);
  // }, []);

  const handleDeCreaseQuantity = () => {
    if (quantityDefault > 1) {
      setQuantityDefault(quantityDefault - 1);
      onDeCreaseQuantity();
    }
  };
  const handleIncreaseQuantity = () => {
    setQuantityDefault(quantityDefault + 1);
    onIncreaseQuantity();
  };
  const handleDelete = () => {
    onDelete();
  };
  return (
    <>
      <div className="cartList" role="list">
        <div className="cartList-detail ">
          <Link to="/about" className="cartList-detail-link">
            <img src={image} alt="" className="cartList-detail-img" />
          </Link>
          <div className="cartList-content">
            <Link to="/about" className="cartList-content-link">
              <span className="cartList-content-span">{name}</span>
            </Link>
            <Link to="/#" className="cartList-content-catogery">
              {brand}
            </Link>
            <div className="cartList-content-type">
              <select className="cartList-content-check">
                <option value={0}>Vàng</option>
                <option value={1}>Đen</option>
                <option value={2}>Đỏ</option>
              </select>
            </div>
          </div>
        </div>
        <div className="cartList-price">
          <span className="font-15">${price}</span>
        </div>
        <div className="cartList-priceSale">
          <span className="font-15">${priceSale}</span>
        </div>
        <div className="cartList-quantity">
          <button
            className="cartList-decrease"
            onClick={handleDeCreaseQuantity}
          >
            -
          </button>
          <input
            type="number"
            className="cartList-input"
            value={quantityDefault}
          />
          <button
            className="cartList-increase"
            onClick={handleIncreaseQuantity}
          >
            +
          </button>
        </div>
        <div className="cartList-money">
          <span className="font-15">
            ${quantityDefault * Number(priceSale)}
          </span>
        </div>
        <div className="cartList-operation">
          <Button onClick={handleDelete}>Delete</Button>
        </div>
      </div>
    </>
  );
}
