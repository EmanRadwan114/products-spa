import React from "react";
import ProductCard from "./ProductCard";
import { useFilterProducts } from "../hooks/products.hooks";
import { useProductsContext } from "../context/products.context";

const DisplayedProducts: React.FC = () => {
  const { filteredProducts, isLoading } = useFilterProducts();
  const { products, selectedCategory, searchTerm } = useProductsContext();

  const displayedProducts =
    searchTerm || selectedCategory !== "all" ? filteredProducts : products;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {displayedProducts?.map((product) => (
        <ProductCard product={product} key={product?.id} />
      ))}
    </div>
  );
};

export default DisplayedProducts;
