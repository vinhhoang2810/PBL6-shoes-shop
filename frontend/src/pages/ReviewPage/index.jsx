import Header from "../../components/Layout/Header";
import ProductBoxList from "../../components/ProductBoxList";
import ProductFeaturedCard from "../../components/ProductFeaturedCard";

export default function HomePage() {
  return (
    <>
      <Header />
      <ProductFeaturedCard />
      <ProductBoxList />
    </>
  );
}
