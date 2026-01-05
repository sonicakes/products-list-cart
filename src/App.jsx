import ProductGrid from "./components/ProductGrid";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div className="bg-rose-100">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="order-2 md:order-1 md:col-span-2">
            <ProductGrid />
          </div>
          <div className="order-1 md:order-2 md:col-span-1">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
