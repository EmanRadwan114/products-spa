import React from "react";
import type { IProduct } from "../types/products.types";
import Badge from "./ui/Badge";
import { MoveRight, Star } from "lucide-react";
import { Link } from "react-router";
import ButtonLink from "./ui/ButtonLink";

interface IProps {
  product: IProduct;
}

const ProductCard: React.FC<IProps> = ({ product }) => {
  return (
    <div className="bg-primary/6 dark:bg-neutral-800 rounded-lg shadow-lg p-4 flex flex-col gap-2 group overflow-hidden h-full">
      <Link to={`/products/${product?.id}`}>
        <img
          src={product?.image}
          alt={product?.title}
          className="h-32 object-cover block m-auto group-hover:scale-110 transition-all duration-500"
        />
      </Link>
      <div className="flex justify-between items-center flex-wrap gap-2">
        <Badge>{product?.category}</Badge>
        <div className="flex items-center gap-1">
          <span className="text-sm">{product?.rating.rate}</span>
          <Star className="fill-yellow-700 text-yellow-700 size-4 mb-1" />
        </div>
      </div>
      <div className="p-2 flex flex-col gap-2">
        <h3 className="font-medium text-base group-hover:text-primary transition-all duration-300">
          <Link to={`/products/${product?.id}`} className="block w-full h-full">
            {product?.title.slice(0, 40)}
            {product?.title?.length > 40 ? "..." : ""}
          </Link>
        </h3>
        <p className="text-primary-text/80 text-sm">
          {product?.description.slice(0, 80)}
          {product?.description?.length > 40 ? "..." : ""}
        </p>
        <span className="text-lg font-semibold">{product?.price}$</span>
      </div>
      <ButtonLink to={`/products/${product?.id}`} className="mt-auto">
        View Details
        <MoveRight />
      </ButtonLink>
    </div>
  );
};

export default ProductCard;
