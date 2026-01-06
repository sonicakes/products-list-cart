import pie from "../../assets/images/illustration-empty-cart.svg";
import { FaRegTrashAlt } from "react-icons/fa";
import OrderSummary from "../Products/OrderSummary";
import { useCart } from "../../context/CartContext";
import Cta from "../ui/Cta";
import { useModal } from "../../context/ModalContext";
import Notice from "../ui/Notice";
import { calculateTotalItems } from "../../helpers/cartHelpers";

const Cart = () => {
  const { cart, clearCart } = useCart();
  const itemCount = calculateTotalItems(cart);
  const { toggleModal } = useModal();

  return (
    <div className="bg-rose-50 rounded-lg p-5 flex flex-col">
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

      {itemCount === 0 && (
        <div className="flex justify-center items-center flex-col py-2">
          <img src={pie} />
          <p className="text-rose-500 text-sm font-semibold">
            Your added items will appear here
          </p>
        </div>
      )}
      {itemCount > 0 && 
      (<>
       <OrderSummary />
          <Notice />
       <Cta label="Confirm Order" type="confirm" onClickHandle={toggleModal} />
      </>)
     }

    </div>
  );
};

export default Cart;
