import React from "react";
import BrandCard from "../BrandCard";

import logo from "../../images/logoNike.png";

export default function BrandList() {
  return (
    <div
      style={{ display: "flex", gap: "0 30px" }}
      className="container-layout"
    >
      <BrandCard image={logo} name="NIKE" amount="53" />
      <BrandCard image={logo} name="NIKE" amount="53" />
      <BrandCard image={logo} name="NIKE" amount="53" />
      <BrandCard image={logo} name="NIKE" amount="53" />
    </div>
  );
}
