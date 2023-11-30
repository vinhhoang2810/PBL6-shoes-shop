import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import BrandCard from "../BrandCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper/modules";
import "./style.scss";
import apiProductGrid from "../../API/(product)/apiProductGrid";

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
  const [brands, setBrands] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      try {
        // Simulate a delay
        const response = await apiProductGrid.getAllProduct();
        setBrands(response.data.content);

        // Set loading state to false after data is loaded
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
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
        breakpoints={breakpointsSwiper}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        {isLoading ? (
          <SwiperSlide>
            {/* Loading state */}
            <div className="brandCard-loading">
              <p>Loading...</p>
            </div>
          </SwiperSlide>
        ) : (
          brands.map((brand) => (
            <SwiperSlide key={brand?.brand?.id}>
              <BrandCard
                imageUrl={brand?.brand?.imageUrl}
                name={brand?.brand?.name}
                amount="53"
              />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </section>
  );
}
