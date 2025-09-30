import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./Home.css";
import "aos/dist/aos.css"; // ✅ AOS CSS
import AOS from "aos";

import Footer from "../../components/common/Footer/Footer";
import Mobiles from "@/components/homepage/LatestMobile/Cloth";
import CouponBanner from "@/components/homepage/Coupon/CouponBanner";
import Features from "@/components/homepage/feature/Features";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // initialize AOS
  }, []);

  return (
    <>
      <div className="slider-wrapper" data-aos="fade-up">
        <Swiper
          className="mySwiper"
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="slide-content" >
              <img
                src="https://assets-global.website-files.com/61a3c3005e14bffd1c77eea9/643d8f05f273381daf353e76_ynB4DbpfYabbvvGIRlQZGM2IOw9NqM1_a0ESUHb0WC_Ub8317vsqZqdQMAFET6ceQET-NJkcnO0bKm-O2L18S0C6M4AzsKKjEX7Yl_FYhlryJrMAIMiWNuuPUwIjgb4w43fZ4nj-ZmV17AIrIbvEz3E.png"
                alt="Slide 1"
              />
              <div className="overlay" >
                <h2>Trendy Fashion</h2>
                <span>
                  Explore the latest styles in our clothing collection. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit.
                </span>
                <button className="shop-btn">Shop Now</button>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="slide-content">
              <img
                src="https://picsera.sirv.com/production/2017/07/iStock-1257563298.jpg?w=1024&h=683&scale.option=fill&cw=1024&ch=683&cx=center&cy=center"
                alt="Slide 2"
              />
              <div className="overlay">
                <h2>Exclusive Collection</h2>
                <span>
                  Discover premium outfits for every occasion. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit.
                </span>
                <button className="shop-btn" >Explore</button>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="slide-content">
              <img
                src="https://pixc.com/wp-content/uploads/2020/11/clothing-photography-featured-image.png"
                alt="Slide 3"
              />
              <div className="overlay" >
                <h2>New Arrivals</h2>
                <span>
                  Discover our newest collection – crafted for comfort, designed for impact. Elevate your wardrobe today!
                </span>
                <button className="shop-btn">View Collection</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div data-aos="fade-up">
        <CouponBanner />
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <Mobiles />
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <Features />
      </div>

      <div data-aos="fade-up" data-aos-delay="300">
        <Footer />
      </div>
    </>
  );
};

export default Home;
