import React from "react";
import Container from "./ui/Container";
import { Star } from "lucide-react";

const ProductDetailsSkeleton: React.FC = () => {
  return (
    <section className="min-h-[60vh] flex items-center justify-center max-w-5xl mx-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
          <div>
            <div className="w-64 h-72 rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
          </div>
          <div className="flex flex-col gap-4 lg:col-span-2">
            <div className="flex justify-between items-center">
              <div className="w-24 h-4 bg-gray-200 dark:bg-gray-800 animate-pulse rounded"></div>
              <div className="flex items-center gap-1">
                <div className="w-12 h-4 bg-gray-200 dark:bg-gray-800 animate-pulse rounded"></div>
                <Star className=" size-4 mb-1 fill-primary/15 dark:fill-gray-800 animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="w-full h-4 rounded-md bg-primary/15 dark:bg-gray-800 animate-pulse"></div>
              <div className="w-1/4 h-4 rounded-md bg-primary/15 dark:bg-gray-800 animate-pulse"></div>
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="w-full h-4 rounded-md bg-primary/15 dark:bg-gray-800 animate-pulse"></div>
              <div className="w-full h-4 rounded-md bg-primary/15 dark:bg-gray-800 animate-pulse"></div>
              <div className="w-full h-4 rounded-md bg-primary/15 dark:bg-gray-800 animate-pulse"></div>
              <div className="w-full h-4 rounded-md bg-primary/15 dark:bg-gray-800 animate-pulse"></div>
            </div>
            <div className="w-12 h-4 rounded-md bg-primary/15 dark:bg-gray-800"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductDetailsSkeleton;
