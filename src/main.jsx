import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { ModalProvider } from "./context/ModalContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
   
    <CartProvider>
       <ModalProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
         </ModalProvider>
    </CartProvider>
 
  </StrictMode>
);
