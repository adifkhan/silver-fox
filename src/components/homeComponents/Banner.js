import React from "react";
import style from "../../css/banner.module.css";
import BannerSlide from "./BannerSlide";
import bg1 from "../../assets/banner/banner1.jpg";
import bg2 from "../../assets/banner/banner2.jpg";
import bg3 from "../../assets/banner/banner3.jpg";
import bg4 from "../../assets/banner/banner4.jpg";
import icon1 from "../../assets/banner/icon_1.png";
import icon2 from "../../assets/banner/icon_2.png";
import icon3 from "../../assets/banner/icon_3.png";
import icon4 from "../../assets/banner/icon_4.png";

const bannerItems = [
  {
    title: "Make Your Business More Profitable",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.",
    bannerImg: bg1,
    icon: icon1,
  },
  {
    title: "Make Your Business More Profitable",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.",
    bannerImg: bg2,
    icon: icon2,
  },
  {
    title: "Make Your Business More Profitable",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.",
    bannerImg: bg3,
    icon: icon3,
  },
  {
    title: "Make Your Business More Profitable",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.",
    bannerImg: bg4,
    icon: icon4,
  },
];

const Banner = () => {
  return (
    <div className={style.banner_container} id="home">
      <BannerSlide bannerItems={bannerItems} />
    </div>
  );
};

export default Banner;
