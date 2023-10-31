import React from "react";
import style from "../..//css/testimonial.module.css";
import person1 from "../../assets/testimonials/person_1.png";
import person2 from "../../assets/testimonials/person_2.png";
import person3 from "../../assets/testimonials/person_3.png";
import person4 from "../../assets/testimonials/person_4.png";
import person5 from "../../assets/testimonials/person_5.png";
import person6 from "../../assets/testimonials/person_6.png";
import TestimonialSlide from "./TestimonialSlide";

const testimonials = [
  {
    name: "John Smith",
    description:
      "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”",
    img: person1,
  },
  {
    name: "John Smith",
    description:
      "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”",
    img: person2,
  },
  {
    name: "John Smith",
    description:
      "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”",
    img: person3,
  },
  {
    name: "John Smith",
    description:
      "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”",
    img: person4,
  },
  {
    name: "John Smith",
    description:
      "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”",
    img: person5,
  },
  {
    name: "John Smith",
    description:
      "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”",
    img: person6,
  },
];

const Testimonial = () => {
  return (
    <div className={style.testimonials} id="testimonials">
      <div className="heading">
        <h2>Testimonials</h2>
      </div>
      <TestimonialSlide testimonials={testimonials} />
    </div>
  );
};

export default Testimonial;
