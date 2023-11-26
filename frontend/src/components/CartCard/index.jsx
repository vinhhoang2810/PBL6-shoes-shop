import chroma from "chroma-js";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.scss";
export default function CartCard({
  name,
  product,
  // onIncreaseQuantity,
  // onDeCreaseQuantity,
  onDelete,
}) {
  // console.log(product);
  const [quantityDefault, setQuantityDefault] = useState(product?.quantity);
  // console.log(quantityDefault);
  // const hexColorCode = product?.product.color;
  // const colorName = chroma(hexColorCode).name();
  // console.log(product);
  // useEffect(() => {
  //   onIncreaseQuantity(price, quantity);
  // }, []);

  const handleDeCreaseQuantity = () => {
    if (quantityDefault > 1) {
      setQuantityDefault(quantityDefault - 1);
      // onDeCreaseQuantity();
    }
  };
  const handleIncreaseQuantity = () => {
    setQuantityDefault(quantityDefault + 1);
    // onIncreaseQuantity();
  };
  const handleDelete = () => {
    onDelete();
  };
  return (
    <>
      <div className="cartList" role="list">
        <div className="cartList-detail ">
          <Link
            to={`/product/${product?.product.id}`}
            className="cartList-detail-link"
          >
            <img
              src={product?.product.imageUrl}
              alt=""
              className="cartList-detail-img"
            />
          </Link>
          <div className="cartList-content">
            <Link
              to={`/product/${product?.product.id}`}
              className="cartList-content-link"
            >
              <span className="cartList-content-span">
                {product?.product.title}
              </span>
            </Link>
            <Link
              to={`/product?brand=${name}`}
              className="cartList-content-catogery"
            >
              {product?.product.brand}
            </Link>
            <div className="cartList-content-color">
              <span className="cartList-content-color-p"></span>
            </div>
          </div>
        </div>
        <div className="cartList-price">
          <span className="font-15">${product?.discountedPrice}</span>
        </div>
        <div className="cartList-priceSale">
          <span className="font-15">${product?.price}</span>
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
            ${quantityDefault * Number(product.discountedPrice)}
          </span>
        </div>
        <div className="cartList-operation">
          <Button onClick={handleDelete}>Delete</Button>
        </div>
      </div>
    </>
  );
}
