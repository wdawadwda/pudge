import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "~/layouts/MainLayout/MainLayout";
import { HomePage } from "~/pages/Home/HomePage";
import { NotFoundPage } from "~/pages/NotFound/NotFoundPage";

import { links } from "./Links";

export const routerSchema = createBrowserRouter([
  {
    path: links.home,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
