import React from "react";
import type { IProduct } from "../types/products.types";
import Badge from "./ui/Badge";
import { Star } from "lucide-react";
import Button from "./ui/Button";

interface IProps {
  product: IProduct;
}

const ProductCard: React.FC<IProps> = ({ product }) => {
  return (
    <div className="bg-primary/6 dark:bg-neutral-800 rounded-lg shadow-xl p-4 flex flex-col gap-2 group hover:scale-105 transition-all duration-300">
      <img
        src={product?.image}
        alt={product?.title}
        className="h-32 object-cover block m-auto"
      />
      <div className="flex justify-between items-center flex-wrap gap-2">
        <Badge>{product?.category}</Badge>
        <div className="flex items-center gap-1">
          <span className="text-sm">{product?.rating.rate}</span>
          <Star className="fill-yellow-700 text-yellow-700 size-4 mb-1" />
        </div>
      </div>
      <div className="p-2 flex flex-col gap-2">
        <h3 className="font-medium text-base group-hover:text-primary transition-all duration-300">
          {product?.title.slice(0, 40)}
          {product?.title?.length > 40 ? "..." : ""}
        </h3>
        <p className="text-primary-text/80 text-sm">
          {product?.description.slice(0, 80)}
          {product?.description?.length > 40 ? "..." : ""}
        </p>
        <span className="text-lg font-semibold">{product?.price}$</span>
        <Button>View Details</Button>
      </div>
    </div>
  );
};

export default ProductCard;
