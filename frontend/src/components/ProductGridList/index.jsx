// import React from "react";
// import ProductGridCard from "../ProductGridCard";
// import "./style-prefix.scss";
// import shoes from "../../images/shoes4.png";

// export default function ProductGridList() {
//   return (
//     <section>
//       <div className="product-main container-layout">
//         <h2 className="title">Products</h2>
//         <div className="product-grid">
//           <ProductGridCard
//             name="Giày jordan Cổ Thấp, Giày thể thao nam nữ "
//             image={shoes}
//             brand="Nike"
//             salePrice={5.99}
//             price={4.99}
//             discount="15%"
//           />
//           <ProductGridCard
//             name="Giày jordan Cổ Thấp, Giày thể thao nam nữ "
//             image={shoes}
//             brand="Nike"
//             salePrice={5.99}
//             price={4.99}
//             discount="On Sale"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useEffect, useState } from "react";
import ProductGridCard from "../ProductGridCard";
import "./style-prefix.scss";
import apiProductGrid from "../API/apiProductGrid";
import { toast } from "react-toastify";

export default function ProductGridList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductGrid = async () => {
      try {
        const response = await apiProductGrid.getAllProduct();
        setProducts(response.data.content);
      } catch (error) {
        toast.error(error?.message);
      }
    };

    // Gọi hàm fetchProductGrid
    fetchProductGrid();
  }, []);

  return (
    <section>
      <div className="product-main container-layout">
        <h2 className="title">Products</h2>
        <div className="product-grid">
          {products.length > 0 &&
            products.map((product) => {
              return <ProductGridCard key={product?.id} product={product} />;
            })}
        </div>
      </div>
    </section>
  );
}
