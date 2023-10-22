import { createBrowserRouter } from "react-router-dom";

import { ClubsDetail } from "~/features/PageSections/Clubs/ClubsDetail";
import { ClubsLayout } from "~/layouts/ClubsLayout/ClubsLayout";
import { MainLayout } from "~/layouts/MainLayout/MainLayout";
import { AboutUs } from "~/pages/AboutUs/AboutUs";
import { ClientAgreement } from "~/pages/ClientAgreement/ClientAgreement";
import { Contacts } from "~/pages/Contacts/Contacts";
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
        path: links.clubs,
        element: <ClubsLayout />,
        children: [
          {
            path: links.club,
            element: <ClubsDetail />,
          },
        ],
      },
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
        path: links.about,
        element: <AboutUs />,
      },
      {
        path: links.contacts,
        element: <Contacts />,
      },
      {
        path: links.gallery,
        element: <Placeholder />,
      },
      {
        path: links.events,
        element: <Placeholder />,
      },
      {
        path: links.news,
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
