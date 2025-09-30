import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "@/components/context/StoreContext";
import "./Cart.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, deleteFromCart } =
    useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Convert cart object to array
  const items = Object.entries(cartItems).map(([key, item]) => ({
    ...item,
    uniqueKey: key,
  }));

  const hasItems = items.length > 0;
  const deliveryFee = hasItems ? 50 : 0;

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const grandTotal = subtotal + deliveryFee;

  return (
    <div className="cart-container" data-aos="fade-up">
      <h2 className="cart-heading" data-aos="fade-down">🛒 Your Cart</h2>

      {!hasItems ? (
        <p className="cart-empty" data-aos="fade-up">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-list">
            {items.map((item, index) => {
              const comboLabel =
                item.size || item.color
                  ? `${item.name} (${item.size || ""}${
                      item.size && item.color ? ", " : ""
                    }${item.color || ""})`
                  : item.name;

              return (
                <div
                  key={item.uniqueKey}
                  className="cart-item"
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                >
                  {/* Left: Image + Details */}
                  <div className="cart-item-left">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-img"
                    />
                    <div className="cart-item-details">
                      <h4>{comboLabel}</h4>
                      <p>Price: ₹{item.price}</p>
                      <p>Total: ₹{item.price * item.quantity}</p>
                    </div>
                  </div>

                  {/* Right: Controls */}
                  <div className="cart-actions" data-aos="fade-left">
                    <div className="quantity-controls">
                      {/* Delete completely */}
                      <button
                        className="delete-btn"
                        onClick={() => deleteFromCart(item.uniqueKey)}
                        style={{
                          marginRight: "10px",
                          color: "white",
                          backgroundColor: "red",
                          borderRadius: "5px",
                          border: "none",
                          padding: "7px 13px",
                          cursor: "pointer",
                        }}
                      >
                        🗑
                      </button>
                      <button onClick={() => removeFromCart(item.uniqueKey)}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => addToCart(item)}>+</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary */}
          <div className="cart-summary" data-aos="fade-up">
            <div className="cart-summary-row">
              <span>Subtotal:</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="cart-summary-row">
              <span>Delivery Fee:</span>
              <span>₹{deliveryFee}</span>
            </div>
            <div className="cart-summary-row grand">
              <strong>Total:</strong>
              <strong>₹{grandTotal}</strong>
            </div>

            <button
              className="checkout-btn"
              onClick={() => navigate("/placeorder")}
              data-aos="flip-up"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
