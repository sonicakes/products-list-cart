import add from "../../assets/icons/icon-add-to-cart.svg";
import plus from "../../assets/icons/icon-increment-quantity.svg";
import minus from "../../assets/icons/icon-decrement-quantity.svg";

const Cta = ({ 
  onClickHandle, 
  type = "general", 
  label, 
  reduceHandle,
  additionalClass
}) => {
  return (
    <button
      onClick={() => (type === "general" || type === "confirm") && onClickHandle()}
      className={`${
        type === "tools"
          ? "bg-primary-red font-semibold relative border-primary-red text-xs bottom-5 left-1/2 -translate-x-1/2 w-3/4 z-50 text-rose-50 justify-between h-[32px]"
          : type === "confirm" ?
          "bg-primary-red leading-4 transition hover:bg-rose-500 cursor-pointer text-sm w-full font-medium py-2.5 text-rose-100 flex justify-center"
          : "gap-0.5 text-xs justify-center font-semibold h-8 w-3/4 bottom-5 left-1/2 -translate-x-1/2  z-50 relative border-rose-500 cursor-pointer transition hover:border-primary-red bg-rose-50 text-rose-500 hover:text-primary-red "
      } flex  rounded-full  items-center px-2 py-1.5 border ${additionalClass}`}
    >
      {(type === "general" || type==="confirm") && (
        <>
        {type!="confirm" && ( <span>
            <img className="w-5" src={add} />
          </span>)}
         
          <span>{label}</span>
        </>
      )}

      {type === "tools" && (
        <>
          <span 
            onClick={reduceHandle}
            className="cursor-pointer p-0.5 rounded-full border border-rose-50 transition hover:bg-rose-50 h-4 w-4 flex justify-center items-center">
            <img className="transition hover:invert-50 h-4 w-4" src={minus}/>
          </span>
          <span>{label}</span>
          <span 
            className="cursor-pointer hover:bg-rose-50 p-0.5 rounded-full transition border border-rose-50 h-4 w-4 flex justify-center items-center" 
            onClick={onClickHandle}>
            <img className="transition hover:invert-50 h-4 w-4" src={plus}/>
          </span>
        </>
      )}
    </button>
  );
};

export default Cta;
