import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { NotFoundPage } from "~/pages/NotFound/NotFoundPage";

export const routerSchema = createBrowserRouter([
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={routerSchema} />;
};
