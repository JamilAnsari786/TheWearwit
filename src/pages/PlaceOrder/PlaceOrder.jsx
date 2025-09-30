import React, { useContext, useState, useEffect } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../components/context/StoreContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { db, auth } from '../../firebase/firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import AOS from "aos";
import "aos/dist/aos.css";

const PlaceOrder = () => {
  const { cartItems, getTotalCartAmount, setCartItems } = useContext(StoreContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    if (Object.keys(cartItems).length === 0) {
      toast.error('🛒 Your cart is empty!');
      return;
    }

    try {
      const subtotal = getTotalCartAmount();
      const deliveryFee = 50;
      const grandTotal = subtotal + deliveryFee;

      const orderData = {
        ...data,
        cartItems,
        subtotal,
        deliveryFee,
        totalAmount: grandTotal,
        userId: auth.currentUser ? auth.currentUser.uid : "Guest",
        createdAt: serverTimestamp(),
      };

      await addDoc(collection(db, 'orders'), orderData);

      toast.success('✅ Order placed successfully!');

      setTimeout(() => {
        setCartItems({});
        navigate('/thank-you');
      }, 1500);
    } catch (error) {
      toast.error('❌ Failed to place order: ' + error.message);
    }
  };

  const subtotal = getTotalCartAmount();
  const deliveryFee = Object.keys(cartItems).length > 0 ? 50 : 0;
  const grandTotal = subtotal + deliveryFee;

  return (
    <form className="place-order" onSubmit={handlePayment}>

      <div className="place-order-left" data-aos="fade-right">
        <h2>📦 Shipping Details</h2>

        <div className="multi-fields">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={data.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={data.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          name="street"
          value={data.street}
          onChange={handleChange}
          required
        />

        <div className="multi-fields">
          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={data.city}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              value={data.state}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="multi-fields">
          <div>
            <label htmlFor="zipcode">Zip Code</label>
            <input
              type="text"
              id="zipcode"
              name="zipcode"
              value={data.zipcode}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={data.country}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={data.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="place-order-right" data-aos="fade-left">
        <div className="cart-total">
          <h2>🧾 Cart Summary</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>₹{subtotal}</p>
          </div>
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>₹{deliveryFee}</p>
          </div>
          <div className="cart-total-details grand">
            <b>Total</b>
            <b>₹{grandTotal}</b>
          </div>
          <button type="submit" data-aos="flip-up">🚀 Proceed to Pay</button>
        </div>
      </div>

    </form>
  );
};

export default PlaceOrder;
