import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Footer.css";

const Footer2 = () => {
  return (
    <footer className="footer2">
      <div className="footer2-container">
        {/* Brand Info */}
        <div className="footer2-column">
          <h2 className="footer2-title">TheWearwit</h2>
          <p className="footer2-text">
            Trendy clothing, accessories, and more. Elevate your style with
            exclusive collections for every season.
          </p>
          <div className="footer2-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer2-column">
          <h3 className="footer2-subtitle">Quick Links</h3>
          <ul className="footer2-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/collection">Collection</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Customer Care */}
        <div className="footer2-column">
          <h3 className="footer2-subtitle">Customer Care</h3>
          <ul className="footer2-contact">
            <li><FaPhoneAlt /> +91 9643296976</li>
            <li><FaEnvelope /> support@wearwit.com</li>
            <li><FaMapMarkerAlt /> Noida , India</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer2-column">
          <h3 className="footer2-subtitle">Newsletter</h3>
          <p className="footer2-text">
            Subscribe to get the latest fashion updates and offers.
          </p>
          <div className="footer2-newsletter">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer2-bottom">
        &copy; {new Date().getFullYear()} TheWearwit. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer2;
