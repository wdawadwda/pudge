import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "~/layouts/MainLayout/MainLayout";
import { AboutUs } from "~/pages/AboutUs/AboutUs";
import { ClientAgreement } from "~/pages/ClientAgreement/ClientAgreement";
import { Clubs } from "~/pages/Clubs/Clubs";
import { HomePage } from "~/pages/Home/HomePage";
import { NotFoundPage } from "~/pages/Placeholder/NotFoundPage";
import { Placeholder } from "~/pages/Placeholder/Placeholder";
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
        path: links.price,
        element: <Clubs />,
      },
      {
        path: links.about,
        element: <AboutUs />,
      },

      {
        path: links.contacts,
        element: <Placeholder />,
      },
      {
        path: links.computers,
        element: <Placeholder />,
      },
      {
        path: links.gallery,
        element: <Placeholder />,
      },
      {
        path: links.news,
        element: <Placeholder />,
      },
      {
        path: links.games,
        element: <Placeholder />,
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
