import React, { useEffect } from "react";
import style from "../../css/about.module.css";
import { TiTick } from "react-icons/ti";
import aboutImg from "../../assets/about.png";

// using GSAP to animate user interface
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  // animation defination //
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".ab_img", {
        x: -300,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".ab_img",
          start: "top 95%",
          end: "top 40%",
          scrub: 1,
        },
      });
      gsap.from(".ab_btn", {
        x: 200,
        ease: "none",
        opacity: 0,
        scrollTrigger: {
          trigger: ".ab_btn",
          start: "top 100%",
          toggleActions: "restart none none reset",
        },
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className={style.about_container} id="about">
      <div className="heading">
        <h2>About Us</h2>
      </div>
      <div className={style.about_wrapper}>
        <div className={`${style.about_img} ab_img`}>
          <img src={aboutImg} alt="about" />
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
          <button className="button ab_btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
