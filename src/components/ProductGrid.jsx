import { useProducts } from "../context/ProductContext";
import Categories from "./Categories";
import ProductCard from "./ProductCard";

const ProductGrid = ({}) => {
  const { filteredItems, loading, error } = useProducts();
  return (
    <>
      <h1 className="text-3xl font-bold pb-2">Desserts</h1>
      <Categories />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error.toString()}</p>}        {filteredItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
