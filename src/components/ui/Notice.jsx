import carbon from "../../assets/icons/icon-carbon-neutral.svg";

const Notice = () => {
  return (
    <div className="flex justify-center items-center bg-rose-100 my-4 p-2 rounded-lg gap-1">
      <img src={carbon} className="w-4 h-4" />
      <p className="text-xs">
        This is a <b>carbon-neutral</b> delivery
      </p>
    </div>
  );
};

export default Notice;
