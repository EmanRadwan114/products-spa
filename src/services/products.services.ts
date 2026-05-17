import axios from "axios";
import { api } from "../utils/api";
import type { TCategory } from "../types/products.types";

// ^------------------------------fecth all products-----------------------------
export const fetchProducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    const errMsg = axios.isAxiosError(error)
      ? error.message
      : "Failed to fetch products";

    throw new Error(errMsg, { cause: error });
  }
};

// ^------------------------------fecth products by category-----------------------------
export const fetchProductsByCategory = async (category: TCategory) => {
  try {
    const response = await api.get(`/products/category/${category}`);
    return response.data;
  } catch (error) {
    const errMsg = axios.isAxiosError(error)
      ? error.message
      : "Failed to fetch products";

    throw new Error(errMsg, { cause: error });
  }
};

// ^------------------------------fecth product by id-----------------------------
export const fetchProductById = async (id: string) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    const errMsg = axios.isAxiosError(error)
      ? error.message
      : "Failed to fetch product";

    throw new Error(errMsg, { cause: error });
  }
};
