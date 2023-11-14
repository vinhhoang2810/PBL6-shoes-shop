import Header from "../../components/Layout/Header";
import BrandCard from "../../components/BrandCard";
import ProductGridCard from "../../components/ProductGridCard";
import ProductFeaturedCard from "../../components/ProductFeaturedCard";

export default function ProductPage() {
  return (
    <>
      <Header />
      <ProductFeaturedCard />
      <BrandCard />
      <ProductGridCard />
    </>
  );
}
