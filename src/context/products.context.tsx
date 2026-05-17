import { createContext, useContext, type ReactNode } from "react";
import type { IProduct } from "../types/products.types";
import { useFetchProducts } from "../hooks/products.hooks";

interface IProductContext {
  products: IProduct[];
  isLoading: boolean;
}

interface IProps {
  children: ReactNode;
}

const ProductsContext = createContext<IProductContext>({
  products: [],
  isLoading: false,
});

const ProductsContextProvider = ({ children }: IProps) => {
  const productsData = useFetchProducts();

  return (
    <ProductsContext.Provider value={productsData}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  const productContext = useContext(ProductsContext);
  if (!productContext) throw new Error("product context not found");
  return productContext;
};

export default ProductsContextProvider;
