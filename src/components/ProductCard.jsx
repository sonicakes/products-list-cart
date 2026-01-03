import Cta from "./Cta";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div className="relative">
        <img
          src={product.image.desktop}
          className="rounded-lg aspect-square w-full max-w-md object-cover"
        />
        <Cta />
      </div>
      <p className="text-rose-400 text-xs font-bold">{product.category}</p>
      <h3 className="text-base font-semibold text-rose-900">{product.name}</h3>
      <p className="text-primary-red font-semibold">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
