import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./pages/Layout";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";
import ProductsContextProvider from "./context/products.context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "products/:id", element: <ProductDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
    <ToastContainer />
    <ProductsContextProvider>
      <RouterProvider router={router} />
    </ProductsContextProvider>
  </ThemeProvider>,
);
