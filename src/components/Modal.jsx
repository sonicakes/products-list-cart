import Cart from "./Cart";
const Modal = () => {
  return (
    <div className="bg-green-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-70">
      <h3>Order confirmed</h3>
      <p>We hope your enjoy your food!</p>
      <Cart displayTitle={false} />
    </div>
  );
};

export default Modal;
