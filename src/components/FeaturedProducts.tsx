import React from "react";
import Container from "./ui/Container";
import ProductCard from "./ProductCard";
import Button from "./ui/Button";
import { Link } from "react-router";
import { MoveRight } from "lucide-react";
import { useProductsContext } from "../context/products.context";

const FeaturedProducts: React.FC = () => {
  const { products, isLoading } = useProductsContext();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <Container>
        {/* header */}
        <header className="flex flex-col gap-2 mb-8 items-center justify-center">
          <h2 className="text-3xl font-bold text-center">Featured Products</h2>
          <p className="text-center text-primary-text/80 max-w-xl tracking-wide">
            Discover our curated selection of high-quality products, chosen for
            their excellence and popularity, and find your next favorite item
            today
          </p>
        </header>
        {/* products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {products.slice(0, 8).map((product) => (
            <ProductCard product={product} key={product?.id} />
          ))}
        </div>
        {/* action */}
        <div className="flex justify-center">
          <Button variant="secondary" className="px-6">
            <Link
              to="/products"
              className="flex gap-2 items-center justify-center h-full w-full"
            >
              View All Products
              <MoveRight />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
