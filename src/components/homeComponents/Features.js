import React, { useEffect } from "react";
import style from "../../css/feature.module.css";
import { BsBagCheckFill } from "react-icons/bs";
import { MdAddBusiness } from "react-icons/md";
import { FaArrowsSpin, FaArrowRotateLeft, FaPlug } from "react-icons/fa6";
import { FaRegSmile } from "react-icons/fa";

// using GSAP to animate user interface
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const featureItems = [
  {
    title: "Marketing Consulting",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    icon: <FaArrowsSpin />,
  },
  {
    title: "Market Analysis",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    icon: <MdAddBusiness />,
  },
  {
    title: "Easy Purchase",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    icon: <BsBagCheckFill />,
  },
  {
    title: "Free Updates",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    icon: <FaArrowRotateLeft />,
  },
  {
    title: "100% Satistified",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    icon: <FaRegSmile />,
  },
  {
    title: "Easy Plugin",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    icon: <FaPlug />,
  },
];

const Features = () => {
  // animation defination //
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".feat_card", {
        y: 300,
        opacity: 0.5,
        ease: "none",
        stagger: 1,
        scrollTrigger: {
          trigger: ".feat_card",
          start: "top 95%",
          end: "top 10%",
          scrub: 1,
        },
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className={style.features_container} id="features">
      <div className="heading">
        <h2>Features</h2>
      </div>
      <div className={style.features_wrapper}>
        {featureItems.map((item, index) => (
          <div key={index} className={`${style.feature_card} feat_card`}>
            <div className={style.icon}>{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.details}</p>
            <button className={`${style.button} button`}>See More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
