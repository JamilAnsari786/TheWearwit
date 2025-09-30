/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { products_list } from "../../../assets/assets";
import { StoreContext } from "@/components/context/StoreContext";
import "./cloth.css";
import toast from "react-hot-toast";
import { auth } from "../../../firebase/firebaseConfig.js";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [category, setCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const { cartItems, addToCart } = useContext(StoreContext);
  const navigate = useNavigate();

  // Track selections per product
  const [selections, setSelections] = useState({});

  // Handle selection (size or color)
  const handleSelection = (id, type, value) => {
    setSelections((prev) => ({
      ...prev,
      [id]: { ...prev[id], [type]: value },
    }));
  };

  // Filter by category
  const filteredProducts =
    category === "All"
      ? products_list
      : products_list.filter((item) => item.category === category);

  const productsToShow = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 10);

  // Only add to cart if logged in
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

    addToCart({ ...item, ...selected }); // pass size & color to cart
    toast.success(
      `${item.name} (${selected.size}, ${selected.color}) added to cart ✅`
    );
  };
  return (
    <div className="products-container">
      <main className="main-content">
        <p className="name">Clothes Products</p>

        <div className="products-grid">
          {productsToShow.map((item) => {
            const selected = selections[item.id] || {};

            return (
              <div key={item.id} className="product-card">
                <img
                  src={item.image}
                  alt={item.name}
                  className="product-image"
                />
                <div className="product-info">
                  <h3>{item.name}</h3>
                  <p className="description">{item.description}</p>
                  <p className="price">₹{item.price}</p>

                  {/* Size selection */}
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

                  {/* Color selection */}
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
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>

        {/* Show More Button */}
        {filteredProducts.length > 10 && !showAll && (
          <div className="show-more-container">
            <button
              className="show-more-button"
              onClick={() => navigate("/products")} // ✅ Navigate instead of setShowAll
            >
              Show More Products
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Products;
