import React from "react";
import { Link } from "react-router-dom";
import "./Aboutpage.css";

const teamMembers = [
  {
    name: "Jamil Ansari",
    role: "Store Manager",
    image: "https://i.pravatar.cc/200?img=10",
  },
  {
    name: "Aarav Verma",
    role: "Fashion Consultant",
    image: "https://i.pravatar.cc/200?img=11",
  },
  {
    name: "Pooja Nair",
    role: "Customer Experience Lead",
    image: "https://i.pravatar.cc/200?img=12",
  },
];

const AboutPage = () => {
  return (
    <div className="about-container">
      {/* Breadcrumb */}
      <div className="about-header">
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-link">
            Home
          </Link>
          <span className="breadcrumb-separator"> &gt; </span>
          <span className="breadcrumb-current">About Us</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Welcome to WearWit Cloth Shop</h1>
          <p>
            Your go-to destination for trendy, comfortable, and affordable
            clothing. From timeless classics to the latest fashion trends, we
            have something for everyone.
          </p>
        </div>
        <div className="hero-image">
          <img
            src="https://files.cdn.printful.com/o/upload/lpg-image-upload/23/w3e8/23f2b35e680fd24cc5bb8b92c44aec9d__1000"
            alt="Fashion Store"
          />
        </div>
      </section>

      {/* Mission & Services Section */}
      <section className="section mission-services">
        <div className="mission-card-wrapper">
          <div className="mission-card">
            <div className="mission-icon">👕</div>
            <h2 className="mission-title">What We Offer</h2>
            <p className="mission-text">
              From casual to formal, we bring you versatile collections,
              flexible payment options, and exclusive rewards for our loyal
              customers.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-icon">💡</div>
            <h2 className="mission-title">Why Shop With Us</h2>
            <p className="mission-text">
              With over 5 years of experience, we make fashion accessible, fun,
              and sustainable — without compromising on quality or style.
            </p>
          </div>
        </div>
      </section>

      {/* Owner / Founder Section */}
      <section className="section owner-section">
        <div className="owner-wrapper">
          <div className="owner-info">
            <h2>Meet Our Founder</h2>
            <h3>Jamil Ansari</h3>
            <p>
              Jamil Ansari is the visionary behind WearWit. With a passion for
              fashion and customer satisfaction, he started WearWit to create a
              brand that combines style, comfort, and affordability. His goal is
              to make fashion accessible to everyone while promoting sustainable
              practices.
            </p>
            <Link to="/shop" className="owner-cta">
              Shop Now
            </Link>
          </div>
          <div className="owner-photo">
            <img
              src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
              alt="Ahad"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <h2 className="section-title">Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-photo">
                <img src={member.image} alt={member.name} />
              </div>
              <h4 className="team-name">{member.name}</h4>
              <p className="team-role">{member.role}</p>
              <div className="team-socials">
                
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
