import React from "react";
import "./Features.css";
import { FaSyncAlt, FaLock, FaUmbrella } from "react-icons/fa";

const Features = () => {
  const data = [
    {
      icon: <FaSyncAlt />,
      title: "Free Shipping and Returns",
      desc: "Enjoy hassle-free shopping with free delivery and easy returns.",
    },
    {
      icon: <FaLock />,
      title: "Secured Payments",
      desc: "Your transactions are protected with advanced encryption.",
    },
    {
      icon: <FaUmbrella />,
      title: "Customer Service",
      desc: "We’re here for you 24/7 to make your shopping seamless.",
    },
  ];

  return (
    <section className="features">
      <h2 className="features-heading">Why Shop With Us?</h2>
      <div className="features-container">
        {data.map((item, index) => (
          <div className="feature-box" key={index}>
            <div className="feature-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
