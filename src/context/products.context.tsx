import { createContext, useContext, useState, type ReactNode } from "react";
import type { IProduct, TCategory } from "../types/products.types";
import { useFetchProducts } from "../hooks/products.hooks";

interface IProductContext {
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: TCategory;
  setSelectedCategory: React.Dispatch<React.SetStateAction<TCategory>>;
  filteredProducts: IProduct[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

interface IProps {
  children: ReactNode;
}

const ProductsContext = createContext<IProductContext>({
  products: [],
  setProducts: () => {},
  isLoading: false,
  setIsLoading: () => {},
  searchTerm: "",
  setSearchTerm: () => {},
  selectedCategory: "all",
  setSelectedCategory: () => {},
  filteredProducts: [],
  setFilteredProducts: () => {},
});

const ProductsContextProvider = ({ children }: IProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<TCategory>("all");
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  const { products, isLoading, setIsLoading, setProducts } = useFetchProducts();

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        isLoading,
        setIsLoading,
        searchTerm,
        setSearchTerm,
        selectedCategory,
        setSelectedCategory,
        filteredProducts,
        setFilteredProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProductsContext = () => {
  const productContext = useContext(ProductsContext);
  if (!productContext) throw new Error("product context not found");
  return productContext;
};

export default ProductsContextProvider;
