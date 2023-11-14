import Header from "../../components/Layout/Header";
import ProductCard from "../../components/ProductCard";
import ProductBoxCard from "../../components/ProductBoxCard";
import ProductFeaturedCard from "../../components/ProductFeaturedCard";

export default function HomePage() {
  return (
    <>
      <Header />
      <ProductFeaturedCard />
      <div className="home-page container-layout">
        <div
          style={{
            width: "25%",
          }}
        >
          <h1 className="product-title">BEST SELLERS</h1>
          <ProductCard title="Giày_nike Air Force 1 Canviày Jordad" />
          <ProductCard title="Dep Lao" />
          <ProductCard title="Giày_nike Air Force 1 Canv" />
        </div>
        <div className="product-box">
          <ProductBoxCard title="New Arrivals" name="Giày Jordan Cổ Thấp," />
          <ProductBoxCard title="New Arrivals" name="Giày Jordan Cổ Thấp," />
          <ProductBoxCard title="New Arrivals" name="Giày Jordan Cổ Thấp," />
        </div>
      </div>
    </>
  );
}
