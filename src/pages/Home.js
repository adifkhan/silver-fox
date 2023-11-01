import React from "react";
import Banner from "../components/homeComponents/Banner";
import Features from "../components/homeComponents/Features";
import About from "../components/homeComponents/About";
import OurTeam from "../components/homeComponents/OurTeam";
import Testimonial from "../components/homeComponents/Testimonial";
import BlogPost from "../components/homeComponents/BlogPost";
import Contact from "../components/homeComponents/Contact";
import Feedback from "../components/homeComponents/Feedback";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Features />
      <OurTeam />
      <Feedback />
      <Testimonial />
      <BlogPost />
      <Contact />
    </div>
  );
};

export default Home;
