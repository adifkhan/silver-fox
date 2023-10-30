import React from "react";
import style from "../../css/about.module.css";
import aboutImg from "../../assets/about.jpg";
import { TiTick } from "react-icons/ti";

const About = () => {
  return (
    <div id="about">
      <div className="heading">
        <h2>About Us</h2>
      </div>
      <div className={style.about_wrapper}>
        <div className={style.about_img}>
          <img src={aboutImg} alt="about us" />
        </div>
        <div className={style.about_content}>
          <h2>Our Mission</h2>
          <p>
            Eos cumque optio dolores excepturi rerum temporibus magni recusandae
            eveniet, totam omnis consectetur maxime quibusdam expedita dolorem
            dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus!
            At maiores, itaque.
          </p>
          <div>
            <p>
              <span>
                <TiTick />
              </span>
              Laborum enim quasi at modi
            </p>
            <p>
              <span>
                <TiTick />
              </span>
              Ad at tempore
            </p>
            <p>
              <span>
                <TiTick />
              </span>
              Labore quaerat esse
            </p>
          </div>
          <button className="button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
