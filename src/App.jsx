import ProductGrid from "./components/Products/ProductGrid";
import Cart from "./components/Cart/Cart";
import Modal from "./components/ui/Modal";
import { useModal } from "./context/ModalContext";
const App = () => {
  const { isModalOpen } = useModal();

  return (
    <>
      <div className={`relative h-screen ${isModalOpen && "overflow-hidden"}`}>
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="order-2 md:order-1 md:col-span-2">
              <ProductGrid />
            </div>
            <div className="order-1 md:order-2 md:col-span-1">
              <Cart />
            </div>
          </div>
          <a 
            target="_blank" 
            className="text-rose-400 mt-2 text-xs flex justify-end font-semibold hover:underline hover:text-primary-red" 
            href="https://www.flaticon.com/free-icons/dessert" 
            title="dessert icons"
          >
            Dessert icon (favicon) created by Febrian Hidayat - Flaticon</a>
        </div>
        {isModalOpen && (
          <>
            <div className="overlay absolute bg-rose-900/70 h-full top-0 w-full left-0 z-60"></div>
          </>
        )}

      </div>
      {isModalOpen && (
        <>
          <Modal />
        </>
      )}
    </>
  );
};

export default App;
