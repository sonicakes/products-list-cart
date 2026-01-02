const ProductCard = ({ product }) => {
  return (
    <div>
      <img src={product.image.desktop} />
      <p>{product.category}</p>
      <h3 className="text-xl font-semibold">{product.name}</h3>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductCard;
