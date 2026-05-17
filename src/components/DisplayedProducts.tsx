import React from "react";
import Container from "./ui/Container";
import ProductCard from "./ProductCard";
import { useProductsContext } from "../context/products.context";

const DisplayedProducts: React.FC = () => {
  const { products, isLoading } = useProductsContext();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard product={product} key={product?.id} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DisplayedProducts;
