import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import BrandCard from "../BrandCard";
import logo from "../../images/logoNike.png";
import "swiper/css";

// Install Swiper components
const breakpointsSwiper = {
  320: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  576: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  992: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
};
export default function BrandList() {
  return (
    <section className="container-layout">
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={breakpointsSwiper}
      >
        <SwiperSlide>
          <BrandCard image={logo} name="NIKE" amount="53" />
        </SwiperSlide>
        <SwiperSlide>
          <BrandCard image={logo} name="Adidas" amount="53" />
        </SwiperSlide>
        <SwiperSlide>
          <BrandCard image={logo} name="Gucci" amount="53" />
        </SwiperSlide>
        <SwiperSlide>
          <BrandCard image={logo} name="New Balance" amount="53" />
        </SwiperSlide>
        <SwiperSlide>
          <BrandCard image={logo} name="Alex" amount="53" />
        </SwiperSlide>
        <SwiperSlide>
          <BrandCard image={logo} name="Converse" amount="53" />
        </SwiperSlide>
        <SwiperSlide>
          <BrandCard image={logo} name="Puma" amount="53" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
