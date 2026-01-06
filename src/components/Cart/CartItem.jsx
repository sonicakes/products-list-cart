import remove from "../../assets/icons/icon-remove-item.svg";

const CartItem = ({ item, versionConfirm, removeItem }) => {
  return (
    <div
      className={`${
        versionConfirm ? "border-rose-200" : "border-rose-100"
      } py-3 gap-2 flex justify-between border-b-2 items-center`}
    >
      {versionConfirm && (
        <div>
          <img
            src={item.image.desktop}
            className="rounded-lg max-w-10 aspect-square object-cover"
          />
        </div>
      )}

      <div className="w-[90%] text-xs">
        <h3 className="font-semibold pb-0.5 capitalize"> {item.name}</h3>
        <p className="flex gap-2 font-semibold">
          <span className="text-primary-red font-bold">{item.qty}x</span>
          <span className="text-rose-300">@</span>

          <span className="text-rose-400">${item.price.toFixed(2)}</span>
          {!versionConfirm && (
            <span className="text-rose-500">
              ${(item.qty * item.price).toFixed(2)}
            </span>
          )}
        </p>
      </div>
      {!versionConfirm && (
        <div
          className="hover:invert-80 cursor-pointer transition w-4 h-full flex justify-center items-center"
          onClick={() => removeItem(item.id)}
        >
          <img
            className="rounded-full hover:invert-80 transition p-0.5 w-4 border border-rose-300"
            src={remove}
          />
        </div>
      )}
      {versionConfirm && (
        <span className="text-rose-900 text-sm font-semibold">
          ${(item.qty * item.price).toFixed(2)}
        </span>
      )}
    </div>
  );
};

export default CartItem;
