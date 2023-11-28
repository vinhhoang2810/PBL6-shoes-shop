import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import BrandCard from "../BrandCard";
import logo from "../../images/logoNike.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper/modules";
import "./style.scss";

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
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      try {
        // Simulate a delay for each brand
        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

        const brandCards = document.querySelectorAll(".swiper-slide");
        const loadingStates = Array.from(brandCards).map(() => true);

        setIsLoading(loadingStates);

        await Promise.all(
          loadingStates.map(async (_, index) => {
            // Simulate loading data for each BrandCard
            await delay(2000);

            // Set loading state to false for the corresponding BrandCard
            setIsLoading((prev) =>
              prev.map((state, i) => (i === index ? false : state))
            );
          })
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="container-layout">
      <div className="brandList">
        <h1 className="brandList-title">Danh mục</h1>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={breakpointsSwiper}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        {[...Array(7)].map((_, index) => (
          <SwiperSlide key={index}>
            {isLoading[index] ? (
              // Hiển thị spinner hoặc thông báo loading khi dữ liệu đang được tải
              <div className="brandCard-loading">
                <p></p>
              </div>
            ) : (
              // Hiển thị BrandCard khi dữ liệu đã được tải xong
              <BrandCard image={logo} name={`Brand ${index + 1}`} amount="53" />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
