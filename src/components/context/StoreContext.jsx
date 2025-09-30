import React, { createContext, useState, useEffect } from "react";

// Create context
// eslint-disable-next-line react-refresh/only-export-components
export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : {};
  });

  // Sync with localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Generate unique key for each variant (id + size + color)
  const getUniqueKey = (item) => {
    const size = item.size ? String(item.size).trim().toLowerCase() : "";
    const color = item.color ? String(item.color).trim().toLowerCase() : "";
    return `${item.id}-${size}-${color}`;
  };

  // Add item (or increase quantity)
  const addToCart = (item) => {
    const key = getUniqueKey(item);
    setCartItems((prev) => {
      const existingItem = prev[key];
      if (existingItem) {
        return {
          ...prev,
          [key]: { ...existingItem, quantity: existingItem.quantity + 1 },
        };
      }
      return {
        ...prev,
        [key]: { ...item, quantity: 1 },
      };
    });
  };

  // Remove 1 quantity OR delete item if quantity = 1
  const removeFromCart = (key) => {
    setCartItems((prev) => {
      const existingItem = prev[key];
      if (!existingItem) return prev;

      if (existingItem.quantity > 1) {
        return {
          ...prev,
          [key]: { ...existingItem, quantity: existingItem.quantity - 1 },
        };
      } else {
        const { [key]: _, ...rest } = prev;
        return rest;
      }
    });
  };

  // Delete item completely (trash button)
  const deleteFromCart = (key) => {
    setCartItems((prev) => {
      const { [key]: _, ...rest } = prev;
      return rest;
    });
  };

  // Clear entire cart (use this on logout)
  const clearCart = () => {
    setCartItems({});
    localStorage.removeItem("cartItems");
  };

  // Calculate total amount
  const getTotalCartAmount = () => {
    return Object.values(cartItems).reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  };

  return (
    <StoreContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        deleteFromCart,
        clearCart,
        getTotalCartAmount,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
