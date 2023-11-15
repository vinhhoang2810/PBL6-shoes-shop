import React from "react";
import ProductBoxCard from "../ProductBoxCard";

export default function ProductBoxList() {
  return (
    <section>
      <div className="product-box container-layout">
        <ProductBoxCard
          title="Best Seller"
          name="Giày Jordan Cổ Thấp,"
          brand="Adidas"
          price={4.99}
          salePrice={5.99}
        />
        <ProductBoxCard
          title="Trending"
          name="Giày Jordan Cổ Thấp,"
          brand="Adidas"
          price={4.99}
          salePrice={5.99}
        />
        <ProductBoxCard
          title="New Arrivals"
          name="Giày Jordan Cổ Thấp,"
          brand="Adidas"
          price={5.99}
          salePrice={6.99}
        />
        <ProductBoxCard
          title="Top Rate"
          name="Giày Jordan Cổ Thấp,"
          brand="Adidas"
          price={4.99}
          salePrice={5.5}
        />
      </div>
    </section>
  );
}
