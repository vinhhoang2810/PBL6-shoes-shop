import Button from "../../components/Button";
import Header from "../../components/Layout/Header";
import WarehouseList from "../../components/WarehouseList";
import "./style.scss";
export default function WarehousePage() {
  return (
    <>
      <Header />
      <div className="warehouse-addProduct container-layout">
        <Button text="Add new products" to="/addProduct"></Button>
      </div>
      <div className="Warehouse container-layout">
        <WarehouseList />
      </div>
    </>
  );
}
