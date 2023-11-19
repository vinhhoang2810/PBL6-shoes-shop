import React from "react";
import ProductGridCard from "../ProductGridCard";
import "./style-prefix.scss";
import shoes from "../../images/shoes4.png";

export default function ProductGridList() {
  return (
    <section>
      <div className="product-main container-layout">
        <h2 className="title">Products</h2>
        <div className="product-grid">
          <ProductGridCard
            name="Giày jordan Cổ Thấp, Giày thể thao nam nữ "
            image={shoes}
            brand="Nike"
            salePrice={5.99}
            price={4.99}
            discount="15%"
          />
          <ProductGridCard
            name="Giày jordan Cổ Thấp, Giày thể thao nam nữ "
            image={shoes}
            brand="Nike"
            salePrice={5.99}
            price={4.99}
            discount="On Sale"
          />
        </div>
      </div>
    </section>
  );
}
