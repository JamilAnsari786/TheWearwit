import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout Components
import Navbar from "./components/common/Navbar/Navbar";

// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Clothess from "./pages/clothes/Clothess";
import Contact from "./pages/Contact/Contact";
import Cart from "./pages/Cart/Cart";
import LoginPage from "./components/common/LoginPage/login/login";
import SignupPage from "./components/common/LoginPage/Register/register";
import { Toaster } from "react-hot-toast";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";

function App() {
  return (
    <Router>
      {/* Toast Notification Container */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: '16px',
            padding: '16px 24px',
            minWidth: '300px',
          },
        }}
      />

      {/* Navbar is always visible */}
      <Navbar />

      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Clothess />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/thank-you" element={<h2 style={{ textAlign: 'center', marginTop: '50px' }}>🎉 Thank you for your order!</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
