import add from "../assets/icons/icon-add-to-cart.svg";

const Cta = ({ onClickHandle }) => {
  return (
    <button
      onClick={onClickHandle}
      className="flex relative bg-rose-50 rounded-full font-semibold text-rose-900 text-xs items-center gap-0.5 px-2 py-1.5 justify-center border border-rose-500 cursor-pointer hover:text-primary-red transition hover:border-primary-red w-3/4 bottom-5 left-1/2 -translate-x-1/2 z-50"
    >
      <span>
        <img className="w-5" src={add} />
      </span>
      Add to Cart
    </button>
  );
};

export default Cta;
