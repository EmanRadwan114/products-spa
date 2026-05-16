import React from "react";
import { useFetchProducts } from "../hooks/products.hooks";

interface IProps {}

const Products: React.FC<IProps> = ({}) => {
  const { products, isLoading } = useFetchProducts();
  return <>Products</>;
};

export default Products;
