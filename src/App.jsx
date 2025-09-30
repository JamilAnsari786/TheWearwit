import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout Components
import Navbar from "./components/common/Navbar/Navbar";

// Pages
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
// Import the “Clothess” page from pages (assuming that file lives in src/pages/clothes/Clothess.jsx)
import Clothess from "./pages/clothes/Clothess.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import LoginPage from "./components/common/LoginPage/login/login.jsx";
import SignupPage from "./components/common/LoginPage/Register/Register.jsx";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder.jsx";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "16px",
            padding: "16px 24px",
            minWidth: "300px",
          },
        }}
      />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Clothess />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route
          path="/thank-you"
          element={
            <h2 style={{ textAlign: "center", marginTop: "50px" }}>
              🎉 Thank you for your order!
            </h2>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
