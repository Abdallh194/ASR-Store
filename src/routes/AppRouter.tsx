import { createBrowserRouter, RouterProvider } from "react-router-dom";
//MainLayout
import MainLayout from "@layouts/MainLayout/MainLayout";
// Pages
import HomePage from "@pages/HomePage";
import AboutUs from "@pages/AboutUs";
import Categories from "@pages/Categories";
import ContactUs from "@pages/ContactUs";
import Products from "@pages/Products";
import Login from "@pages/Login";
import Register from "@pages/Register";
import Error from "@pages/Error";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "products/:prefix",
        element: <Products />,
        loader: ({ params }) => {
          if (
            typeof params.prefix !== "string" ||
            !/^[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response("Bad Request", {
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
const AppRouter = () => {
  return <RouterProvider router={routers}></RouterProvider>;
};

export default AppRouter;
