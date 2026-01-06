import { render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import { CartProvider } from "../../context/CartContext";
import Cart from "./Cart";
import { ModalProvider } from "../../context/ModalContext";

//simple rendering test

test("renders the empty cart message", () => {
  render(
    <ModalProvider>
      <CartProvider value={{ cart: [], clearCart: vi.fn() }}>
        <Cart />
      </CartProvider>
    </ModalProvider>
  );

  const emptyMessage = screen.getByText(/Your added items will appear here/i);

  expect(emptyMessage).toBeDefined();
});
