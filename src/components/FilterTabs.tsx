import React from "react";
import { filterItems } from "../data/filter.data";
import Button from "./ui/Button";
import { useProductsContext } from "../context/products.context";
import type { TCategory } from "../types/products.types";

const FilterTabs: React.FC = () => {
  const { setSelectedCategory, selectedCategory, setSearchTerm } =
    useProductsContext();
  return (
    <div className="flex gap-1 sm:gap-4 flex-wrap items-center justify-center">
      {filterItems.map((item) => (
        <Button
          key={item}
          variant={selectedCategory === item ? "primary" : "secondary"}
          className="min-w-24 sm:min-w-32 capitalize"
          onClick={() => {
            setSelectedCategory(item as TCategory);
            setSearchTerm("");
          }}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default FilterTabs;
