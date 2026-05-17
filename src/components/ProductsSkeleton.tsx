import React from "react";
import Skeleton from "./ui/Skeleton";
import Container from "./ui/Container";

const ProductsSkeleton: React.FC = () => {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {Array.from({ length: 8 }).map((_, index) => (
            <Skeleton key={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductsSkeleton;
