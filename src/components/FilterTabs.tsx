import React from "react";
import { filterItems } from "../data/filter.data";
import Button from "./ui/Button";
import Container from "./ui/Container";

interface IProps {}

const FilterTabs: React.FC<IProps> = ({}) => {
  return (
    <section className="py-2">
      <Container>
        <div className="flex gap-4 flex-wrap items-center justify-center bg-primary/6 dark:bg-neutral-800 shadow-xl rounded-lg py-4">
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
