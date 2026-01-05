import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  //     () => {
  //     const stored = localStorage.getItem('cart');
  //     return stored ? JSON.parse(stored) : [];
  //   }
  // );

  //   useEffect(() => {
  //     localStorage.setItem('cart', JSON.stringify(cart))
  //   }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };
  const reduceQuantity = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (!existing) return prev;

      if (existing.qty === 1) {
        removeFromCart(product.id);
      }

      return prev.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty - 1 } : item
      );
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, reduceQuantity, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
