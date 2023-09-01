import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "~/layouts/MainLayout/MainLayout";
import { ClientAgreement } from "~/pages/ClientAgreement/ClientAgreement";
import { HomePage } from "~/pages/Home/HomePage";
import { NotFoundPage } from "~/pages/NotFound/NotFoundPage";

import { links } from "./Links";
import { Rules } from "~/pages/Rules/Rules";

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
        path: links.ClientAgreement,
        element: <ClientAgreement />,
      },
      {
        path: links.rules,
        element: <Rules />,
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
