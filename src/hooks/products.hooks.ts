import { useEffect, useMemo, useState } from "react";
import type { IProduct } from "../types/products.types";
import {
  fetchProductById,
  fetchProducts,
  fetchProductsByCategory,
} from "../services/products.services";
import { toast } from "react-toastify";
import { useProductsContext } from "../context/products.context";

// ^---------------------fetch all products---------------------
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
        const errMsg =
          error instanceof Error ? error.message : "Failed to fetch products";

        toast.error(errMsg);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { products, isLoading, setIsLoading, setProducts };
};

// ^---------------------fetch category products & search product---------------------
export const useFilterProducts = () => {
  const [originalFilteredProducts, setOriginalFilteredProducts] = useState<
    IProduct[]
  >([]);

  const {
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
    return () => {
      setSelectedCategory("all");
      setSearchTerm("");
    };
  }, []);

  // fetch products by category
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchProductsByCategory(selectedCategory);
        setOriginalFilteredProducts(data);
      } catch (error) {
        const errMsg =
          error instanceof Error ? error.message : "Failed to fetch products";

        toast.error(errMsg);
      } finally {
        setIsLoading(false);
      }
    };

    if (selectedCategory !== "all") {
      fetchData();
    }
  }, [selectedCategory, setIsLoading]);

  // search product
  const filteredProducts = useMemo(() => {
    const baseProducts =
      selectedCategory === "all" ? products : originalFilteredProducts;
    return baseProducts?.filter((product) =>
      product?.title
        ?.toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase()),
    );
  }, [searchTerm, selectedCategory, originalFilteredProducts]);

  return { filteredProducts, isLoading };
};

// ^---------------------fecth product by id-----------------------------
export const useFetchProductById = (id: string) => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (error) {
        const errMsg =
          error instanceof Error ? error.message : "Failed to fetch product";

        toast.error(errMsg);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { product, isLoading };
};
