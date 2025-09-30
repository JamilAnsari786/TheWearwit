import React, { useEffect } from "react";
import Footer from '@/components/common/Footer/Footer';
import ContactPage from '@/components/contactpage/ContactPage';
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <ContactPage />
      <Footer data-aos="fade-up" />
    </div>
  );
};

export default Contact;
