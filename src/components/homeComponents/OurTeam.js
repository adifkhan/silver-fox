import React from "react";
import style from "../../css/ourteam.module.css";
import person1 from "../../assets/team/person_1.jpg.jpg";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const teamMembers = [
  {
    name: "Emely Hopson",
    role: "PRESIDENT",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
    img: person1,
  },
  {
    name: "Nicolas Stainer",
    role: "FOUNDER",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
    img: person1,
  },
  {
    name: "George Brook",
    role: "FINANCING",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
    img: person1,
  },
  {
    name: "John Rooster",
    role: "MARKETING",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
    img: person1,
  },
  {
    name: "Cloe Marena",
    role: "MARKETING",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
    img: person1,
  },
  {
    name: "Will Turner",
    role: "MARKETING",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
    img: person1,
  },
];

const OurTeam = () => {
  return (
    <div className={style.team_container} id="team">
      <div className="heading">
        <h2>Our Team</h2>
      </div>
      <div className={style.team_wrapper}>
        {teamMembers.map((member, index) => (
          <div key={index} className={style.member_card}>
            <div className={style.member_img}>
              <img src={member.img} alt="" />
              <div className={style.social}>
                <span>
                  <FaFacebookF />
                </span>
                <span>
                  <FaInstagram />
                </span>
                <span>
                  <FaTwitter />
                </span>
              </div>
            </div>
            <div className={style.member_details}>
              <h4>{member.name}</h4>
              <span>{member.role}</span>
              <p>{member.about}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
