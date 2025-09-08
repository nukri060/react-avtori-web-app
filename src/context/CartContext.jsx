import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [carts, setCarts] = useState([]);

  const addToCart = (item) => {
    setCarts((prevCarts) => {
      const existingItem = prevCarts.find((i) => i.name === item.name);
      if (existingItem) {
        return prevCarts.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prevCarts, item];
    });
  };

  const removeFromCart = (itemName) => {
    setCarts((prevCarts) => prevCarts.filter((item) => item.name !== itemName));
  };

  return (
    <CartContext.Provider value={{ carts, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
