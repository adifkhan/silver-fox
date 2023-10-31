import React from "react";
import style from "../../css/feedback.module.css";
import gift_card from "../../assets/gift_card.png";
import userImg from "../../assets/testimonials/person_2.png";

const Feedback = () => {
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
