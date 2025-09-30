/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { products_list } from "../../../assets/assets";
import { StoreContext } from "@/components/context/StoreContext";
import toast from "react-hot-toast";
import "./clothes.css";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../../firebase/firebaseConfig.js";

const Clothes = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { cartItems, addToCart } = useContext(StoreContext);
  const navigate = useNavigate();
  const [selections, setSelections] = useState({});

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleSelection = (id, type, value) => {
    setSelections((prev) => ({
      ...prev,
      [id]: { ...prev[id], [type]: value },
    }));
  };

  const handleAddToCart = (item) => {
    if (!auth.currentUser) {
      toast.error("⚠ Please login to add items to cart");
      navigate("/login");
      return;
    }
    const selected = selections[item.id];
    if (!selected?.size || !selected?.color) {
      toast.error("⚠ Please select size and color before adding");
      return;
    }
    addToCart({ ...item, ...selected });
    toast.success(
      `${item.name} (${selected.size}, ${selected.color}) added to cart ✅`
    );
  };

  const categories = [...new Set(products_list.map((item) => item.category))];
  const filteredClothes =
    selectedCategories.length === 0
      ? products_list
      : products_list.filter((item) =>
          selectedCategories.includes(item.category)
        );

  return (
    <div>
      {/* 🔹 Header Section */}
      <div className="contact-header" data-aos="fade-down">
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator"> &gt; </span>
          <span className="breadcrumb-current">Products</span>
        </div>
      </div>

      <div className="clothes-layout">
        {/* Left Sidebar */}
        <aside className="sidebar" data-aos="fade-right">
          <h3>Categories</h3>
          {categories.map((category, idx) => (
            <label key={idx} className="category-label">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => toggleCategory(category)}
              />
              <span>{category}</span>
            </label>
          ))}
        </aside>

        {/* Right Product Grid */}
        <main className="products-section">
          <div className="products-grid">
            {filteredClothes.map((item, index) => {
              const selected = selections[item.id] || {};
              return (
                <div
                  key={item.id}
                  className="product-card"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="product-image"
                  />
                  <div className="product-info">
                    <h3>{item.name}</h3>
                    <p className="description">{item.description}</p>
                    <p className="price">₹{item.price}</p>

                    {item.sizes && (
                      <div className="selector">
                        <label>Size: </label>
                        <div className="options">
                          {item.sizes.map((size, idx) => (
                            <button
                              key={idx}
                              className={`option-btn ${
                                selected.size === size ? "active" : ""
                              }`}
                              onClick={() =>
                                handleSelection(item.id, "size", size)
                              }
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.colors && (
                      <div className="selector">
                        <label>Color: </label>
                        <div className="options">
                          {item.colors.map((color, idx) => (
                            <button
                              key={idx}
                              className={`option-btn ${
                                selected.color === color ? "active" : ""
                              }`}
                              onClick={() =>
                                handleSelection(item.id, "color", color)
                              }
                            >
                              {color}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <button
                    className="details-button"
                    onClick={() => handleAddToCart(item)}
                    data-aos="flip-up"
                  >
                    Add to Cart
                  </button>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Clothes;
