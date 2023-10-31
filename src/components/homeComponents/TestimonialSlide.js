import React from "react";
import style from "../../css/testimonial.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
// Import Swiper styles
import "swiper/css";

const TestimonialSlide = ({ testimonials }) => {
  return (
    // SwiperJs is an excellent Js library for carousel development.
    <Swiper
      loop={true}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className={style.slider_container}
    >
      {testimonials.map((item, index) => (
        <SwiperSlide key={index} className={style.slider_card}>
          <img src={item.img} alt="" />
          <p>{item.description}</p>
          <h4>{item.name}</h4>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlide;
