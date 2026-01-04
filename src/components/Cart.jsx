import pie from "../assets/images/illustration-empty-cart.svg";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const itemCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const total = cart
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);
  console.log("cart: ", cart, "itemsCount: ", itemCount, "priceTotal: ", total);

  return (
    <div className="bg-rose-50 rounded-lg p-5 flex flex-col">
      <h2 className="font-bold text-xl text-primary-red">
        Your Cart ({itemCount})
      </h2>
      {itemCount === 0 && (
        <div>
          <img src={pie} />
          <p className="text-rose-500 text-sm font-semibold">
            Your added items will appear here
          </p>
        </div>
      )}
      {itemCount > 0 && (
        <div className="">
          <div className="py-2.5">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <p className="text-xs py-1 flex items-center text-rose-500 justify-between font-semibold">Order Total: 
            <span className="text-xl font-bold text-rose-900">${total}</span></p>
        </div>
      )}
    </div>
  );
};

export default Cart;
