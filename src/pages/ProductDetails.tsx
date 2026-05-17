import React from "react";
import { useParams } from "react-router";
import { useFetchProductById } from "../hooks/products.hooks";
import ProductDetailsCard from "../components/ProductDetailsCard";
import ProductDetailsSkeleton from "../components/ProductDetailsSkeleton";

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const { product, isLoading } = useFetchProductById(id!);

  if (isLoading) {
    return <ProductDetailsSkeleton />;
  }
  return <>{product && <ProductDetailsCard product={product} />}</>;
};

export default ProductDetails;
