import React from "react";
import style from "../../css/contact.module.css";

const Contact = () => {
  return (
    <div className={style.contact_container}>
      <div className={style.contact_form}>
        <div className="heading">
          <h2 className={style.heading}>Contact Us</h2>
        </div>
        <form>
          <div className={style.input_group}>
            <label htmlFor="">Full Name</label>
            <input type="text" placeholder="Full Name" />
          </div>
          <div className={style.input_group}>
            <label htmlFor="">Email</label>
            <input type="text" placeholder="Email" />
          </div>
          <div className={style.input_group}>
            <label htmlFor="">Subject</label>
            <input type="text" placeholder="Subject" />
          </div>
          <div className={style.input_group}>
            <label htmlFor="">Message</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="6"
              placeholder="Message..."
            ></textarea>
          </div>
          <input type="submit" value="Send Message" className="button" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
