import add from "../assets/icons/icon-add-to-cart.svg";

const Cta = ({ onClickHandle, type = "general", label }) => {
  return (
    <button
      onClick={() => type === "general" && onClickHandle()}
      className={`${
        type === "tools"
          ? "bg-primary-red border-primary-red text-rose-50 justify-between"
          : "justify-center border-rose-500 cursor-pointer transition hover:border-primary-red bg-rose-50 text-rose-500 hover:text-primary-red "
      } flex relative rounded-full font-semibold text-xs items-center gap-0.5 px-2 py-1.5 border w-3/4 bottom-5 left-1/2 -translate-x-1/2 z-50`}
    >
      {type === "general" && (
        <>
          <span>
            <img className="w-5" src={add} />
          </span>{" "}
          <span>{label}</span>{" "}
        </>
      )}

      {type === "tools" && (
        <>
          <span className="">-</span>
          <span>{label}</span>
          <span className="cursor-pointer" onClick={onClickHandle}>+</span>
        </>
      )}
    </button>
  );
};

export default Cta;
