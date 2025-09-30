import React from "react";
import "./CouponBanner.css";

const CouponBanner = () => {
  return (
    <section className="coupon-banner-2" aria-label="Special Coupon Banner">
      <div className="coupon-inner-2">
        {/* Coupon Code */}
        <div className="coupon-code-2" role="region" aria-label="Coupon code">
          <div className="code-label-2">APPLY THIS CODE</div>
          <div className="code-value-2">NEWYEAR50</div>
        </div>

        {/* Offers */}
        <div className="offers-2" role="list">
          <div className="offer-2" role="listitem">
            <div className="amount-2">
              ₹250 <span className="off-2">OFF</span>
            </div>
            <div className="conditions-2">Orders Above ₹2000</div>
          </div>

          <div className="offer-2" role="listitem">
            <div className="amount-2">
              ₹500 <span className="off-2">OFF</span>
            </div>
            <div className="conditions-2">Orders Above ₹4000</div>
          </div>

          <div className="offer-2" role="listitem">
            <div className="amount-2">
              ₹800 <span className="off-2">OFF</span>
            </div>
            <div className="conditions-2">Orders Above ₹6000</div>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <p className="coupon-note-2">
        Valid on all Accessories, Bags &amp; Footwear
      </p>
    </section>
  );
};

export default CouponBanner;
