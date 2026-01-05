import pie from "../assets/images/illustration-empty-cart.svg";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import { FaRegTrashAlt } from "react-icons/fa";
import carbon from "../assets/icons/icon-carbon-neutral.svg";
import Cta from "./Cta";
import { useModal } from "../context/ModalContext";

const Cart = ({displayTitle = true}) => {
  const { cart, removeFromCart, clearCart } = useCart();
  const itemCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const total = cart
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);

  const { isModalOpen, toggleModal } = useModal();

  return (
    <div className="bg-rose-50 rounded-lg p-5 flex flex-col">
      {displayTitle && (
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-xl text-primary-red">
            Your Cart ({itemCount})
          </h2>
          {itemCount > 0 && (
            <FaRegTrashAlt
              style={{ color: "var(--color-rose-300)" }}
              className="w-4 h-4 hover:invert-90 transition cursor-pointer"
              onClick={clearCart}
            />
          )}
        </div>
      )}

      {itemCount === 0 && (
        <div className="flex justify-center items-center flex-col py-2">
          <img src={pie} />
          <p className="text-rose-500 text-sm font-semibold">
            Your added items will appear here
          </p>
        </div>
      )}
      {itemCount > 0 && (
        <div>
          <div className="py-2.5">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} removeItem={removeFromCart} />
            ))}
          </div>
          <p className="text-xs py-1 flex items-center text-rose-500 justify-between font-semibold">
            Order Total:
            <span className="text-xl font-bold text-rose-900">${total}</span>
          </p>
          <div className="flex justify-center items-center bg-rose-100 my-4 p-2 rounded-lg gap-1">
            <img src={carbon} className="w-4 h-4" />
            <p className="text-xs">
              This is a <b>carbon-neutral</b> delivery
            </p>
          </div>
          <Cta
            label="Confirm Order"
            type="confirm"
            onClickHandle={toggleModal}
          />
          <p>
            Modal is optn:{" "}
            {isModalOpen ? (
              <span>modal open!</span>
            ) : (
              <span>modal not open!</span>
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
