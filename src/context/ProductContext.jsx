import { createContext, useEffect, useState, useContext } from "react";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const productCategories = [...new Set(products.map((item) => item.category))];
  const [filter, setFilter] = useState("");
  const filteredItems = filter
    ? products.filter((item) => item.category === filter)
    : products;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://69544beb1cd5294d2c7c57b2.mockapi.io/api/v1/products"
        );
        if (!res.ok) throw new Error("failed to fetch");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const toggleFilter = (f) => {
    if (filter === "" || filter != f) {
      setFilter(f);
    } else {
      setFilter("");
    }
  };

  const clearFilters = () => {
    setFilter("");
  };

  return (
    <ProductContext.Provider
      value={{
        filteredItems,
        loading,
        error,
        productCategories,
        filter,
        toggleFilter,
        clearFilters,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductContext);
}
