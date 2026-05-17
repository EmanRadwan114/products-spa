import React from "react";
import ProductCard from "./ProductCard";
import { useFilterProducts } from "../hooks/products.hooks";
import NoResults from "./ui/NoResults";
import ProductsSkeleton from "./ProductsSkeleton";

const DisplayedProducts: React.FC = () => {
  const { filteredProducts, isLoading } = useFilterProducts();

  if (isLoading) {
    return <ProductsSkeleton />;
  }

  if (filteredProducts.length === 0) {
    return <NoResults />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredProducts?.map((product) => (
        <ProductCard product={product} key={product?.id} />
      ))}
    </div>
  );
};

export default DisplayedProducts;
