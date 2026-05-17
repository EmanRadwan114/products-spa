import React from "react";
import Container from "./ui/Container";
import ProductCard from "./ProductCard";
import { MoveRight } from "lucide-react";
import { useProductsContext } from "../context/products.context";
import ButtonLink from "./ui/ButtonLink";
import ProductsSkeleton from "./ProductsSkeleton";
import NoResults from "./ui/NoResults";

const FeaturedProducts: React.FC = () => {
  const { products, isLoading } = useProductsContext();

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
        {products.length === 0 && !isLoading ? (
          <NoResults />
        ) : isLoading ? (
          <ProductsSkeleton />
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {products.slice(0, 8).map((product) => (
                <ProductCard product={product} key={product?.id} />
              ))}
            </div>
            {/* action */}
            <div className="flex justify-center">
              <ButtonLink to="/products" variant="secondary">
                View All Products
                <MoveRight />
              </ButtonLink>
            </div>
          </>
        )}
      </Container>
    </section>
  );
};

export default FeaturedProducts;
