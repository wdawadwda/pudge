import { RouterProvider } from "react-router-dom";

import { routerSchema } from "./routerSchema";

export const AppRouter = () => {
  return <RouterProvider router={routerSchema} />;
};
