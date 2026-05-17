import React from "react";
import { Search } from "lucide-react";
import { useProductsContext } from "../context/products.context";

const SearchBox: React.FC = () => {
  const { searchTerm, setSearchTerm } = useProductsContext();

  return (
    <div className="flex justify-between items-center border border-primary/20 w-56 sm:w-64 lg:w-80 px-4 py-2 rounded-md">
      <input
        type="search"
        id="search-input"
        placeholder="Search a Product"
        className="focus-within:outline-0 focus-visible:outline-0 w-75"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <label htmlFor="search-input">
        <Search className="text-primary-text/30 size-6" />
      </label>
    </div>
  );
};

export default SearchBox;
