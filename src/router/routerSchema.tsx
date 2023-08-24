import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "~/layouts/MainLayout/MainLayout";
import { NotFoundPage } from "~/pages/NotFound/NotFoundPage";

export const routerSchema = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
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
