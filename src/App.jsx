import ProductGrid from "./components/ProductGrid";
import Cart from "./components/Cart";

const App = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className="md:col-span-2 bg-green-200">
          <ProductGrid />
          </div>
        <div className="md:col-span-1 bg-blue-200">
          <Cart />
        </div>
      </div>
    </>
  );
};

export default App;
