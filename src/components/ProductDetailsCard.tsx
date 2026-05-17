import React from "react";
import type { IProduct } from "../data/products.data";
import Badge from "./ui/Badge";
import { Star } from "lucide-react";

interface IProps {
  product: IProduct;
}

const ProductDetailsCard: React.FC<IProps> = ({ product }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <img
          src={product?.image}
          alt={product?.title}
          className="w-full h-full"
        />
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <Badge>{product?.category}</Badge>
          <h3 className="text-2xl font-bold">{product?.title}</h3>
          <p className="text-sm flex items-center gap-1">
            <span className="text-sm">{product?.rating.rate}</span>
            <Star className="fill-yellow-700 text-yellow-700 size-4 mb-1" />
          </p>
        </div>
        <p className="mb-4">{product?.description}</p>
        <span className="text-lg font-medium">${product?.price}</span>
      </div>
    </section>
  );
};

export default ProductDetailsCard;
