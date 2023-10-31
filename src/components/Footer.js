import React from "react";
import style from "../css/footer.module.css";
import { SiConsul, SiContentful, SiIconfinder } from "react-icons/si";
import { GiConcentrationOrb, GiContortionist } from "react-icons/gi";
import { TfiThemifyFavicon } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { BsGlobe2 } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className={style.footer_container}>
      <div className={style.footer_wrapper}>
        <div className={style.partner_wrapper}>
          <h2>Our Partners</h2>
          <div className={style.partner_icon}>
            <span className={style.icon}>
              <GiConcentrationOrb />
            </span>
            <span className={style.icon}>
              <GiContortionist />
            </span>
            <span className={style.icon}>
              <SiConsul />
            </span>
            <span className={style.icon}>
              <SiIconfinder />
            </span>
            <span className={style.icon}>
              <SiContentful />
            </span>
            <span className={style.icon}>
              <TfiThemifyFavicon />
            </span>
          </div>
          <div className={style.contact_wrapper}>
            <p>
              <strong>Address : </strong> Panthapath, Dhanmondi, Dhaka, 1215
            </p>
            <p>
              <strong>Email : </strong> example@domain.com
            </p>
            <p>
              <strong>Emergency :</strong> +0921054888
            </p>
            <span>
              <strong>Web site :</strong> domain.com
            </span>
          </div>
        </div>
        <div className={style.content_wrapper}>
          <div className={style.footer_contents}>
            <div className={style.content_category}>
              <h2>Our Services</h2>
              <ul>
                <li>Advertisement</li>
                <li>Hosting</li>
                <li>Marketing</li>
                <li>SEO</li>
                <li>Boosting</li>
                <li>Development</li>
              </ul>
            </div>
            <div className={style.content_category}>
              <h2> Locations</h2>
              <ul>
                <li>London</li>
                <li>United State</li>
                <li>Dhaka</li>
                <li>Chottogram</li>
                <li>Dhanmondi</li>
                <li>Uttora</li>
              </ul>
            </div>
            <div className={style.content_category}>
              <h2>Our Clients</h2>
              <ul>
                <li>Sheba Epo</li>
                <li>United Pillo</li>
                <li>Jaber Tex</li>
                <li>Too Looks</li>
                <li>Handi</li>
              </ul>
            </div>
          </div>
          <div className={style.social_links}>
            <Link to="/">
              <BsGlobe2 />
            </Link>
            <Link to="/">
              <FaFacebookSquare />
            </Link>
            <Link to="/">
              <FaLinkedinIn />
            </Link>
            <Link to="/">
              <BiLogoInstagramAlt />
            </Link>
            <Link to="/">
              <FaSquareTwitter />
            </Link>
          </div>
        </div>
      </div>
      <div className={style.footer__bottom}>
        <p>
          Copyright Silver Fox &copy; {new Date().getFullYear()} | All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
}
