import React from "react";
import DisplayedProducts from "../components/DisplayedProducts";
import FilterTabs from "../components/FilterTabs";
import SearchBox from "../components/SearchBox";
import Container from "../components/ui/Container";
import { useProductsContext } from "../context/products.context";
import NoResults from "../components/ui/NoResults";

const Products: React.FC = () => {
  const { products, isLoading } = useProductsContext();
  return (
    <section>
      <Container>
        <div className="flex flex-col gap-6 mb-6 mt-2">
          <div>
            <h2 className="text-3xl font-bold text-center mb-6">
              Pick Your Favorite Product
            </h2>
            {products.length === 0 && !isLoading ? (
              <NoResults />
            ) : (
              <div className="flex flex-col gap-6">
                <FilterTabs />

                <div className="self-center md:self-end">
                  <SearchBox />
                </div>
                <DisplayedProducts />
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Products;
