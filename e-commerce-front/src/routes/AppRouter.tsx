import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@pages/Home";
import Categories from "@pages/Categories";
import AboutUs from "@pages/AboutUs";
import MainLayout from "@layouts/MainLayout/MainLayout";
import ErrorPage from "@pages/ErrorPage";
import Products from "@pages/Products";
import CartPage from "@pages/CartPage";
import WishPage from "@pages/WishPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "wishlist",
        element: <WishPage />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "categories/products/:prefix",
        element: <Products />,
        loader: ({ params }) => {
          if (
            typeof params.prefix !== "string" ||
            !/^[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response("bad Request", {
              statusText: "Category not found",
              status: 400,
            });
          }
          return true;
        },
      },
    ],
  },
]);
export default function AppRouter() {
  return <RouterProvider router={router} />;
}
