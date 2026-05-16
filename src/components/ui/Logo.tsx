import { ShoppingBag } from "lucide-react";
import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="flex gap-1.5 items-center">
      <ShoppingBag className="size-6 text-primary" />
      <h1 className="font-bold text-2xl text-primary-text capitalize">
        Shopio
      </h1>
    </div>
  );
};

export default Logo;
