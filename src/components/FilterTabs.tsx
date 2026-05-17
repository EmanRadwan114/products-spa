import React from "react";
import { filterItems } from "../data/filter.data";
import Button from "./ui/Button";
import { useProductsContext } from "../context/products.context";
import type { TCategory } from "../types/products.types";
import { useFilterProducts } from "../hooks/products.hooks";

const FilterTabs: React.FC = () => {
  const { selectedCategory } = useProductsContext();
  const { handleFetchFilteredProducts } = useFilterProducts();

  return (
    <div className="flex gap-1 sm:gap-2.5 flex-wrap items-center justify-center">
      {filterItems.map((item) => (
        <Button
          key={item}
          variant={selectedCategory === item ? "primary" : "secondary"}
          className="min-w-24 sm:min-w-32 capitalize"
          onClick={() => {
            handleFetchFilteredProducts(item as TCategory);
          }}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default FilterTabs;
