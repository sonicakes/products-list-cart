import Cta from "./Cta";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  
  const {cart, addToCart, reduceQuantity} = useCart();
  const exists = cart.some(cartItem => cartItem.id === product.id);
  const objSelected = cart.find((item) => item.id === product.id);

  return (
    <div>
      <div className="relative">
        <img
          src={product.image.desktop}
          className=
          {`rounded-lg aspect-square w-full max-w-md object-cover ${exists ? 'border-primary-red border-2' : ''}`}
        />
        {exists ? (
          <Cta 
            label={objSelected.qty} 
            type="tools" 
            onClickHandle={ () => addToCart(product)}
            reduceHandle={ () => reduceQuantity(product)}
          />
        ) : (
        <Cta 
        onClickHandle={()=>addToCart(product)} label="Add to Cart"/>
        )}
      </div>
      <p className="text-rose-400 text-xs font-semibold">{product.category}</p>
      <h3 className="text-base font-semibold text-rose-900">{product.name}</h3>
      <p className="text-primary-red font-semibold">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
