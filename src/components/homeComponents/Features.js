import React from "react";
import style from "../../css/feature.module.css";
import { BsBagCheckFill } from "react-icons/bs";
import { MdAddBusiness } from "react-icons/md";
import { FaArrowsSpin, FaArrowRotateLeft, FaPlug } from "react-icons/fa6";
import { FaRegSmile } from "react-icons/fa";

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
// MdAddBusiness
const Features = () => {
  return (
    <div className={style.features_container} id="features">
      <div className="heading">
        <h2>Features</h2>
      </div>
      <div className={style.features_wrapper}>
        {featureItems.map((item, index) => (
          <div key={index} className={style.feature_card}>
            <div className={style.icon}>{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.details}</p>
            <button className={`${style.button} button`}>Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
