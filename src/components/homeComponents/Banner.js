import React from "react";
import style from "../../css/banner.module.css";
import BannerSlide from "./BannerSlide";
import bg2 from "../../assets/banner/bg2.jpg";
import bg3 from "../../assets/banner/bg3.jpg";
import bg4 from "../../assets/banner/bg4.jpg";
import bg5 from "../../assets/banner/bg5.jpg";
import icon1 from "../../assets/banner/icon1.png";

const bannerItems = [
  {
    title: "Make Your Business More Profitable",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.",
    bannerImg: bg4,
    icon: icon1,
  },
  {
    title: "Make Your Business More Profitable",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.",
    bannerImg: bg2,
    icon: icon1,
  },
  {
    title: "Make Your Business More Profitable",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.",
    bannerImg: bg3,
    icon: icon1,
  },
  {
    title: "Make Your Business More Profitable",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.",
    bannerImg: bg5,
    icon: icon1,
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
