import axios from "axios";
import { api } from "../utils/api";

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
