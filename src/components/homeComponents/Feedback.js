import React, { useEffect } from "react";
import style from "../../css/feedback.module.css";
import gift_card from "../../assets/gift_card.png";
import userImg from "../../assets/testimonials/person_2.png";

// using GSAP to animate user interface
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Feedback = () => {
  // animation defination //
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".feed_img", {
        x: 300,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".feed_img",
          start: "top 95%",
          end: "top 40%",
          scrub: 1,
        },
      });
      gsap.from(".user_box", {
        x: -200,
        ease: "none",
        opacity: 0,
        scrollTrigger: {
          trigger: ".user_box",
          start: "top 90%",
          toggleActions: "restart none none reset",
        },
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className={style.feedback_container} id="feedback">
      <div className={style.feedback_contents}>
        <div className="heading">
          <h2>Communicate and gather feedback</h2>
        </div>
        <p className={style.feedback_text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          neque nisi architecto autem molestias corrupti officia veniam.
        </p>
        <div className={`${style.user_wrapper} user_box`}>
          <div className={style.user_details}>
            <img src={userImg} alt="user" />
            <div className={style.user_info}>
              <p>
                <strong>Grey Simpson</strong>
              </p>
              <span>Co-Founder, XYZ Inc.</span>
            </div>
          </div>
          <p className={style.user_text}>
            “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            vitae ipsa asperiores inventore aperiam iure?”
          </p>
        </div>
      </div>
      <div className={`${style.feedback_img} feed_img`}>
        <img src={gift_card} alt="gift card" />
      </div>
    </div>
  );
};

export default Feedback;
