import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);

  const addToCart = (item) => {
    setCarts([...carts, item]);
  };

  const clearCart = () => {
    setCarts([]);
  };

  return (
    <CartContext.Provider value={{ carts, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
