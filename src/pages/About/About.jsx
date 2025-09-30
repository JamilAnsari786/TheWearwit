import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "../../components/common/Footer/Footer";
import AboutPage from "@/components/Aboutpage/Aboutpage";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <>
      <AboutPage />
      <Footer data-aos="fade-up" />
    </>
  );
};

export default About;
