import React, { useState } from "react";
import logo from "../assets/silverfox.png";
import style from "../css/header.module.css";
import { HashLink as Link } from "react-router-hash-link";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";

// navigation menu information //
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
    label: "About",
    link: "#about",
  },
  {
    label: "Team",
    link: "#team",
  },
  {
    label: "Feedback",
    link: "#feedback",
  },
  {
    label: "Testimonials",
    link: "#testimonials",
  },
  {
    label: "Blog",
    link: "#blog",
  },
  {
    label: "Contact",
    link: "#contact",
  },
];

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <header className={style.header_container}>
      <div
        className={
          menuToggle
            ? `${style.disabled__menu_icon}`
            : `${style.active__menu_icon}`
        }
        onClick={() => setMenuToggle(!menuToggle)}
      >
        <RiMenuLine />
      </div>
      <div
        className={
          menuToggle
            ? `${style.active__menu_icon}`
            : `${style.disabled__menu_icon}`
        }
        onClick={() => setMenuToggle(!menuToggle)}
      >
        <RiCloseLine />
      </div>
      <div className={style.logo}>
        <img src={logo} alt="silver fox logo" />
        <h2>Silver Fox</h2>
      </div>

      {/* navigation bar for medium and large devices  */}
      <nav className={style.navbar}>
        {navItems.map((item, index) => (
          //used hashlink to navigate through sections
          <Link key={index} to={item.link}>
            {item.label}
          </Link>
        ))}
        <button className="button">Sing Up</button>
      </nav>

      {/* side navigation bar for medium and small devices  */}
      <nav
        className={
          menuToggle ? `${style.mini_navbar}` : `${style.collapsed_navbar}`
        }
      >
        {navItems.map((item, index) => (
          //used hashlink to navigate through sections
          <Link key={index} to={item.link}>
            {item.label}
          </Link>
        ))}
        <button className="button">Sing Up</button>
      </nav>
    </header>
  );
};

export default Header;
