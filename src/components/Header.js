import React from "react";
import logo from "../assets/silverfox.png";
import style from "../css/header.module.css";
import { HashLink as Link } from "react-router-hash-link";

const navItems = [
  {
    label: "Home",
    link: "#home",
  },
  {
    label: "Features",
    link: "#features",
  },
  {
    label: "Home",
    link: "#home",
  },
  {
    label: "About",
    link: "#about",
  },
  {
    label: "Home",
    link: "#home",
  },
  {
    label: "Home",
    link: "#home",
  },
  {
    label: "Home",
    link: "#home",
  },
  {
    label: "Home",
    link: "#home",
  },
  {
    label: "Home",
    link: "#home",
  },
];

const Header = () => {
  return (
    <header className={style.header_container}>
      <div className={style.logo}>
        <img src={logo} alt="silver fox logo" />
        <h2>Silver Fox</h2>
      </div>
      <nav className={style.navbar}>
        {navItems.map((item, index) => (
          //used hashlink to navigate through sections
          <Link key={index} to={item.link}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
