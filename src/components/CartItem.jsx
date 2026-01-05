import remove from "../assets/icons/icon-remove-item.svg";

const CartItem = ({ item, removeItem }) => {
  return (
    <div className="py-3 flex justify-between border-b-2 border-rose-100 items-center">
    <div className=" text-xs">
      <h3 className="font-semibold pb-0.5"> {item.name}</h3>
      <p className="flex gap-2 font-semibold">
        <span className="text-primary-red font-bold">{item.qty}x</span>
        <span className="text-rose-300">@</span>
        <span className="text-rose-400">${item.price.toFixed(2)}</span>
        <span className="text-rose-500">
          ${(item.qty * item.price).toFixed(2)}
        </span>
      </p>
    </div>
    <div 
      className="hover:invert-80 cursor-pointer transition w-4 h-full flex justify-center items-center "
      onClick={() => removeItem(item.id)}
    >
      <img className="rounded-full hover:invert-80 transition p-0.5 w-4 border border-rose-300" src={remove}/>
    </div>
    </div>
  );
};

export default CartItem;
