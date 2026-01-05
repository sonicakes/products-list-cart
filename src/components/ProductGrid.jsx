import { useProducts } from "../context/ProductContext";
import ProductCard from "./ProductCard";

const ProductGrid = ({}) => {
  const { products, loading, error } = useProducts();
  return (
    <>
      <h1 className="text-3xl font-bold pb-6">Desserts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {loading && <p>Loading...</p>}
        {error && <p>Error:{error}</p>}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
