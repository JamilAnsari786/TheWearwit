import React, { useEffect } from "react";
import Footer from '@/components/common/Footer/Footer';
import Clothes from '../../components/mobilepage/clothes/Clothes.jsx';
import AOS from "aos";
import "aos/dist/aos.css";

const Clothess = () => {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  return (
    <div>
      <div data-aos="fade-up">
        <Clothes />
      </div>
      <Footer data-aos="fade-up" />
    </div>
  );
};

export default Clothess;
