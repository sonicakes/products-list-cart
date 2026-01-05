import Cta from "./Cta";
import OrderSummary from "./OrderSummary";
import check from "../assets/icons/icon-order-confirmed.svg";
import close from "../assets/icons/icon-remove-item.svg";
import { useModal } from "../context/ModalContext";
import { useCart } from "../context/CartContext";

const Modal = () => {
  const {clearCart} = useCart();
  const {toggleModal} = useModal();
  const handleModalClose = () => {
    toggleModal();
    clearCart();
  } 
  
  return (
    <>
  
    <div className="p-6 bg-rose-50 rounded-lg w-95 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-70">
      <img 
      className="w-4 hover:invert-20 cursor-pointer absolute right-5 invert-70" 
      src={close}
      onClick={handleModalClose}
      />
      <h3 className="text-3xl mt-6 flex items-center gap-2 font-bold capitalize"><span>      <img src={check} className="w-9" />
</span>Order confirmed</h3>
      <p className="text-rose-500 font-medium text-sm pt-2 pb-5">
        We hope your enjoy your food!
      </p>
      <OrderSummary versionConfirm={true} />
      <Cta 
        label="Start New Order" 
        type="confirm" 
        additionalClass="mt-4" 
        onClickHandle={handleModalClose}
        />
    </div>
    
    </>
  );
};

export default Modal;
