import { useEffect, useState } from "react";
import type { IProduct } from "../types/products.types";
import { fetchProducts } from "../services/products.services";
import { toast } from "react-toastify";

export const useFetchProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchProducts();
        console.log(data);
      } catch (error) {
        toast.error("Failed to fetch products");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { products, isLoading };
};
