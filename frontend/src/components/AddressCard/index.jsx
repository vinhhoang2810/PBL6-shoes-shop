import React from "react";
import "./style.scss";
export default function AddressCard() {
  return (
    <section>
      <div className="address container-layout">
        <p className="address-name">Nguyễn Hoàng Mỹ</p>
        <p className="address-p">Lien Chieu - Da Nang</p>
        <div className="address-phone">
          <p className="address-phone-title">Phone Number:</p>
          <p className="address-p">0985048769</p>
        </div>
        <div className="address-email">
          <p className="address-email-title">Email:</p>
          <p className="address-p">n.h.my2002@gmail.com</p>
        </div>
      </div>
    </section>
  );
}
