import { useEffect, useMemo, useState } from "react";
import type { IProduct } from "../types/products.types";
import {
  fetchProducts,
  fetchProductsByCategory,
} from "../services/products.services";
import { toast } from "react-toastify";
import { useProductsContext } from "../context/products.context";

export const useFetchProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        toast.error(error?.message || "Failed to fetch products");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { products, isLoading, setIsLoading, setProducts };
};

export const useFilterProducts = () => {
  const [originalFilteredProducts, setOriginalFilteredProducts] = useState<
    IProduct[]
  >([]);

  const {
    setFilteredProducts,
    filteredProducts,
    searchTerm,
    isLoading,
    setIsLoading,
    selectedCategory,
    setSelectedCategory,
    products,
    setSearchTerm,
  } = useProductsContext();

  // every mount start with all category
  useEffect(() => {
    setSelectedCategory("all");
  }, []);

  // fetch products by category
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchProductsByCategory(selectedCategory);
        setFilteredProducts(data);
        setOriginalFilteredProducts(data);
      } catch (error) {
        toast.error(error?.message || "Failed to fetch products");
      } finally {
        setIsLoading(false);
      }
    };

    if (selectedCategory !== "all") {
      fetchData();
    }
  }, [selectedCategory, setFilteredProducts, setIsLoading, setSearchTerm]);

  // search product
  useEffect(() => {
    let resultedProducts: IProduct[] = [];

    if (selectedCategory === "all") {
      resultedProducts = products.filter((product) =>
        product?.title
          ?.toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase()),
      );
    } else {
      resultedProducts = originalFilteredProducts?.filter((product) =>
        product?.title
          ?.toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase()),
      );
    }

    setFilteredProducts(resultedProducts);
  }, [searchTerm, setFilteredProducts, selectedCategory]);

  return { filteredProducts, isLoading };
};
