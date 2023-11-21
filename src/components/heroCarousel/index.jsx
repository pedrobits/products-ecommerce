import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/bundle";

const HeroCarousel = () => {
  const imgSource = "../../../public/imgs/HeroBanner.png";

  const imgs = Array(4).fill(imgSource);

  return (
    <Swiper
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
    >
      {imgs.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img}
            className="flex w-full h-1/3 object-fill"
            alt={`Slide ${index}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCarousel;
