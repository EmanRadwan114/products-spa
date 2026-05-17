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
      ? error.response?.data?.message || error.message
      : "Failed to fetch products";

    console.log(errMsg);
  }
};

// ^------------------------------fecth products by category-----------------------------
export const fetchProductsByCategory = async (category: TCategory) => {
  try {
    const response = await api.get(`/products/category/${category}`);
    return response.data;
  } catch (error) {
    const errMsg = axios.isAxiosError(error)
      ? error.response?.data?.message || error.message
      : "Failed to fetch products";

    console.log(errMsg);
  }
};

// ^------------------------------fecth product by id-----------------------------
export const fetchProductById = async (id: string) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    const errMsg = axios.isAxiosError(error)
      ? error.response?.data?.message || error.message
      : "Failed to fetch product";

    console.log(errMsg);
  }
};
