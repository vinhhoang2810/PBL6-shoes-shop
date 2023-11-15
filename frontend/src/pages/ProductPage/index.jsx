import Header from "../../components/Layout/Header";
import BrandList from "../../components/BrandList";
import ProductGridList from "../../components/ProductGridList";
import ProductFeaturedCard from "../../components/ProductFeaturedCard";

export default function ProductPage() {
  return (
    <>
      <Header />
      <ProductFeaturedCard />
      <BrandList />
      <ProductGridList />
    </>
  );
}
