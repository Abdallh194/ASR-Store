import { createBrowserRouter, RouterProvider } from "react-router-dom";
//MainLayout
import { lazy, Suspense } from "react";

const MainLayout = lazy(() => import("@layouts/MainLayout/MainLayout"));
// Pages
const Cart = lazy(() => import("@pages/Cart"));
const AboutUs = lazy(() => import("@pages/AboutUs"));
const Login = lazy(() => import("@pages/Login"));
const Register = lazy(() => import("@pages/Register"));

import HomePage from "@pages/HomePage";

import Categories from "@pages/Categories";
import ContactUs from "@pages/ContactUs";
import Products from "@pages/Products";

import Error from "@pages/Error";

import FavItems from "@pages/FavItems";

import Loading from "@components/feedback/Loading";
import LottieHandler from "@components/feedback/LottieHandler/LottieHandler";
import UserProfile from "@pages/UserProfile";
import CheckOut from "@pages/CheckOut";

const routers = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LottieHandler type="loading" />}>
        <MainLayout />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<LottieHandler type="loading" />}>
            <AboutUs />,
          </Suspense>
        ),
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
        element: (
          <Suspense fallback={<LottieHandler type="loading" />}>
            <Login />,
          </Suspense>
        ),
      },
      {
        path: "cart/checkout",
        element: (
          <Suspense fallback={<LottieHandler type="loading" />}>
            <CheckOut />,
          </Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <Suspense fallback={<LottieHandler type="loading" />}>
            <Register />,
          </Suspense>
        ),
      },
      {
        path: "userprofile",
        element: (
          <Suspense fallback={<LottieHandler type="loading" />}>
            <UserProfile />,
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<Loading />}>
            <Cart />,
          </Suspense>
        ),
      },
      {
        path: "fav",
        element: <FavItems />,
      },

      {
        path: "categories/products/:prefix",
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
