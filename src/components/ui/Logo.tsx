import { ShoppingBag } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Logo: React.FC = () => {
  return (
    <h1 className="font-bold text-2xl text-primary-text capitalize">
      <Link to="/" className="flex gap-1.5 w-full h-full items-center">
        <ShoppingBag className="size-6 text-primary" />
        Shopio
      </Link>
    </h1>
  );
};

export default Logo;
