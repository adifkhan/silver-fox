import React from "react";
import style from "../../css/banner.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/pagination";
// Import Swiper styles
import "swiper/css";

const BannerSlide = ({ bannerItems }) => {
  return (
    // SwiperJs is an excellent Js library for carousel development.
    <Swiper
      loop={true}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      effect="fade"
      modules={[EffectFade, Pagination, Autoplay]}
      className={style.slider_container}
    >
      {bannerItems.map((item, index) => (
        <SwiperSlide key={index}>
          <div className={style.slider_wrapper}>
            <div className={style.bannerImg}>
              <img src={item.bannerImg} alt="banner img" />
            </div>
            <div className={style.banner_content}>
              <div className={style.banner_details}>
                <h2>{item.title}</h2>
                <p>{item.details}</p>
                <button className="button">Get Started</button>
              </div>
              <div className={style.banner_icon}>
                <img src={item.icon} alt="banner icon" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSlide;
