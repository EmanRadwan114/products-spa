import React from "react";
import { filterItems } from "../data/filter.data";
import Button from "./ui/Button";
import Container from "./ui/Container";

const FilterTabs: React.FC = () => {
  return (
    <section>
      <Container>
        <h2 className="text-3xl font-bold text-center mb-6">
          Pick Your Favorite Category
        </h2>
        <div className="flex gap-4 flex-wrap items-center justify-center">
          {filterItems.map((item) => (
            <Button key={item} variant="secondary" className="min-w-32">
              {item}
            </Button>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FilterTabs;
