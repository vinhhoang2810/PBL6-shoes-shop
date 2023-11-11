import Header from "../../components/Layout/Header";
import BrandCard from "../../components/BrandCard";
import TrendingItem from "../../components/TrendingItem";
import ProductCard from "../../components/ProductCard";
import ProductGridCard from "../../components/ProductGridCard";

export default function HomePage() {
  return (
    <>
      <Header />
      <TrendingItem />
      <BrandCard />
      <ProductCard />
      <ProductGridCard />
    </>
  );
}
