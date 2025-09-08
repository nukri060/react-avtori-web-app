import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);

  const addToCart = (item) => {
    const exists = carts.find((cartItem) => cartItem.name === item.name);
    if (exists) {
      setCarts(carts.map(cartItem =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCarts([...carts, { ...item, price: Number(item.price), quantity: 1 }]);
    }
  };

  const removeItem = (name) => {
    setCarts(carts.filter((item) => item.name !== name));
  };

  const updateQuantity = (name, newQuantity) => {
    if (newQuantity < 1) return; 
    setCarts(carts.map(item =>
      item.name === name ? { ...item, quantity: newQuantity } : item
    ));
  };

  const clearCart = () => setCarts([]);

  return (
    <CartContext.Provider value={{ carts, addToCart, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
