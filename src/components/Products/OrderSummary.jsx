import { useCart } from "../../context/CartContext";
import CartItem from "../Cart/CartItem";

const OrderSummary = ({ versionConfirm }) => {
  const { cart, removeFromCart } = useCart();
  const total = cart
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);

  return (
    <div className={versionConfirm && "bg-rose-100 rounded-lg px-3 pb-3"}>
      <div className="py-2.5">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            versionConfirm={versionConfirm}
            removeItem={removeFromCart}
          />
        ))}
      </div>
      <p className="text-xs py-1 flex items-center text-rose-500 justify-between font-semibold">
        Order Total:
        <span className="text-xl font-bold text-rose-900">${total}</span>
      </p>
    </div>
  );
};

export default OrderSummary;
