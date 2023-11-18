import React from "react";
import AddressCard from "../AddressCard";
import CartList from "../CartList";
import "./style.scss";

export default function OrderSummary() {
  return (
    <>
      <div className="ordersummary">
        <AddressCard />
      </div>
      <CartList />
    </>
  );
}
