import { useProducts } from "../../context/ProductContext";
import Pill from "../ui/Pill";

const Categories = () => {
  const { productCategories, toggleFilter, filter } = useProducts();
  const sortedCats = productCategories.sort((a, b) => a.localeCompare(b));
  return (
    <div className="flex gap-2 flex-wrap mb-4 mt-2">
      {sortedCats.map((category) => (
        <Pill 
            key={category} 
            label={category} 
            onClickHandle={toggleFilter} 
            selected={filter}
        />
      ))}
    </div>
  );
};

export default Categories;
