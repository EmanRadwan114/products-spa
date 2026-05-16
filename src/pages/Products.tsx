import React from "react";
import { useFetchProducts } from "../hooks/products.hooks";
import ProductCard from "../components/ProductCard";
import Container from "../components/ui/Container";

interface IProps {}

const Products: React.FC<IProps> = ({}) => {
  const { products, isLoading } = useFetchProducts();

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

export default Products;
