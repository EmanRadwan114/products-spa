import React from "react";
import Badge from "./ui/Badge";
import { Star } from "lucide-react";
import type { IProduct } from "../types/products.types";
import Container from "./ui/Container";

interface IProps {
  product: IProduct;
}

const ProductDetailsCard: React.FC<IProps> = ({ product }) => {
  return (
    <section className="min-h-[60vh] flex items-center justify-center max-w-5xl mx-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
          <div className="flex justify-center md:justify-start">
            <img
              src={product?.image}
              alt={product?.title}
              className="max-w-64 object-cover"
            />
          </div>

          <div className="flex flex-col gap-2 lg:col-span-2">
            <div className="flex justify-between items-center">
              <Badge>{product?.category}</Badge>
              <div className="text-sm flex items-center gap-1">
                <span className="text-sm">{product?.rating.rate}</span>
                <Star className="fill-yellow-700 text-yellow-700 size-4 mb-1" />
              </div>
            </div>
            <h3 className="text-2xl font-bold">{product?.title}</h3>
            <p className="text-primary-text/80 tracking-wide">
              {product?.description}
            </p>
            <span className="text-xl font-medium text-primary capitalize">
              price:{" "}
              <span className="text-primary-text/80">${product?.price}</span>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductDetailsCard;
