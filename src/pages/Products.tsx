import React from "react";
import DisplayedProducts from "../components/DisplayedProducts";
import FilterTabs from "../components/FilterTabs";

interface IProps {}

const Products: React.FC<IProps> = ({}) => {
  return (
    <div className="flex flex-col gap-4 mb-6 mt-4">
      <FilterTabs />
      <DisplayedProducts />
    </div>
  );
};

export default Products;
