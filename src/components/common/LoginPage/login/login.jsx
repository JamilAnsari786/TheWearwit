import React, { useState, useEffect } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase/firebaseConfig.js";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("✅ Logged in successfully!");
      navigate("/");
    } catch (error) {
      toast.error(`❌ ${error.message}`);
    }
  };

  return (
    <div className="login-container">
      {/* Left Welcome Section */}
      <div className="login-left" data-aos="fade-right">
        <h1 className="welcome-text">
          Welcome to<br />Your Login Page
        </h1>
      </div>

      {/* Right Form Section */}
      <div className="login-right" data-aos="fade-left">
        <div className="login-form-box" data-aos="zoom-in" data-aos-delay="200">
          <h2 className="login-title">Login to your account</h2>
          <form className="login-form" onSubmit={handleLogin}>
            <div>
              <label className="login-label">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="login-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="login-label">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button" data-aos="fade-up" data-aos-delay="400">
              Login
            </button>
            <p className="signup-link" data-aos="fade-up" data-aos-delay="500">
              Don’t have an account?{" "}
              <span
                className="signup-text"
                onClick={() => navigate("/register")}
                style={{ cursor: "pointer", color: "blue" }}
              >
                Sign up
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
