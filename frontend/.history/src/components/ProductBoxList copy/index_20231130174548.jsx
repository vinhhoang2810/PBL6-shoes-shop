import React from "react";
import ProductBoxCard from "../ProductBoxCard";
import shoes from "../../images/shoes4.png";
import shoes2 from "../../images/shoes3.png";
import shoes3 from "../../images/shoes7.png";
import shoes4 from "../../images/shoes2.png";

export default function ProductBoxList() {
  return (
    <section>
      <div className="product-box container-layout">
        <ProductBoxCard
          image={shoes}
          title="Best Seller"
          name="Giày Jordan Cổ Thấp,"
          brand="Adidas"
          price={199000}
          salePrice={219000}
        />
        <ProductBoxCard
          image={shoes2}
          title="Trending"
          name="Giày Jordan Cổ Thấp,"
          brand="Nike"
          price={199000}
          salePrice={219000}
        />
        <ProductBoxCard
          image={shoes3}
          title="New Arrivals"
          name="Giày Jordan Cổ Thấp,"
          brand="Gucci"
          price={199000}
          salePrice={219000}
        />
        <ProductBoxCard
          image={shoes4}
          title="Top Rate"
          name="Giày Jordan Cổ Thấp,"
          brand="Adidas"
          price={199000}
          salePrice={219000}
        />
      </div>
    </section>
  );
}
