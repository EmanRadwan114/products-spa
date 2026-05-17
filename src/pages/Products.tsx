import React from "react";
import DisplayedProducts from "../components/DisplayedProducts";
import FilterTabs from "../components/FilterTabs";
import SearchBox from "../components/SearchBox";
import Container from "../components/ui/Container";

const Products: React.FC = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col gap-6 mb-6 mt-2">
          <div>
            <h2 className="text-3xl font-bold text-center mb-6">
              Pick Your Favorite Product
            </h2>
            <FilterTabs />
          </div>
          <div className="self-center md:self-end">
            <SearchBox />
          </div>
          <DisplayedProducts />
        </div>
      </Container>
    </section>
  );
};

export default Products;
