const CartItem = ({ item }) => {
  return (
    <div className="py-2.5 border-b-2 border-rose-100 text-xs ">
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
  );
};

export default CartItem;
