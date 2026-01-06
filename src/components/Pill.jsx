const Pill = ({ onClickHandle, label, selected }) => {
  return (
    <div
      onClick={() => onClickHandle(label)}
      className={`${
        selected === label
          ? "bg-primary-red text-rose-50 hover:text-rose-300"
          : "bg-rose-50 text-rose-500 hover:text-primary-red hover:border-primary-red"
      } text-xs flex justify-center items-center transition cursor-pointer  border border-rose-500  font-semibold py-0.75 px-3 rounded-full`}
    >
      {label}
    </div>
  );
};

export default Pill;
