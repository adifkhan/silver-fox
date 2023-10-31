import React from "react";
import Banner from "../components/homeComponents/Banner";
import Features from "../components/homeComponents/Features";
import About from "../components/homeComponents/About";
import OurTeam from "../components/homeComponents/OurTeam";
import Testimonial from "../components/homeComponents/Testimonial";
import BlogPost from "../components/homeComponents/BlogPost";
import Contact from "../components/homeComponents/Contact";

const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <About />
      <OurTeam />
      {/* <Testimonial /> */}
      {/* <BlogPost /> */}
      {/* <Contact /> */}
    </div>
  );
};

export default Home;
