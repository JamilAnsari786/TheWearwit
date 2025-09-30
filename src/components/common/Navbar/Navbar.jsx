import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import logo from '../../../assets/logo.png';

import { auth } from "../../../firebase/firebaseConfig.js";
import { signOut, onAuthStateChanged } from "firebase/auth";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (user) {
        toast.success(`🎉 ${user.email} is logged in`);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("👋 Logged out successfully");
      navigate("/login");
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error("Error logging out");
    }
  };

  return (
    <div className="navbar">
      {/* LOGO → Navigate to Home */}
      <div className="logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        <img src={logo} alt="Logo" />
      </div>

      {/* NAV LINKS */}
      <ul className="nav-links">
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/about")}>About</li>
        <li onClick={() => navigate("/products")}>products</li>
        <li onClick={() => navigate("/contact")}>Contact</li>
      </ul>

      {/* RIGHT SIDE: CART & LOGIN/LOGOUT */}
      <div className="nav-right">
        <div className="cart">
          <FontAwesomeIcon onClick={() => navigate("/cart")} icon={faCartShopping} />
        </div>
        <div className="login">
          {currentUser ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <button onClick={() => navigate("/register")}>Login</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
