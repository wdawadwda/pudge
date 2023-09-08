import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "~/layouts/MainLayout/MainLayout";
import { ClientAgreement } from "~/pages/ClientAgreement/ClientAgreement";
import { Clubs } from "~/pages/Clubs/Clubs";
import { HomePage } from "~/pages/Home/HomePage";
import { NotFoundPage } from "~/pages/NotFound/NotFoundPage";
import { Rules } from "~/pages/Rules/Rules";

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
        path: links.clientAgreement,
        element: <ClientAgreement />,
      },
      {
        path: links.rules,
        element: <Rules />,
      },
      {
        path: links.clubs,
        element: <Clubs />,
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
