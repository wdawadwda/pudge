import { createBrowserRouter } from "react-router-dom";

import { ClubsDetail } from "~/features/PageSections/Clubs/ClubsDetail";
import { AccountLayout } from "~/layouts/AccountLayout/AccountLayout";
import { AdminLayout } from "~/layouts/AdminLayout/AdminLayout";
import { ClubsLayout } from "~/layouts/ClubsLayout/ClubsLayout";
import { MainLayout } from "~/layouts/MainLayout/MainLayout";
import { ClientAgreement } from "~/pages/ClientAgreement/ClientAgreement";
import { Contacts } from "~/pages/Contacts/Contacts";
import { HomePage } from "~/pages/Home/HomePage";
import { NotFoundPage } from "~/pages/Placeholder/NotFoundPage";
import { Placeholder } from "~/pages/Placeholder/Placeholder";
import { Rules } from "~/pages/Rules/Rules";
import { Account } from "~/pages/User/Account/Account";
import { AddClub } from "~/pages/User/Account/AdminMenu/AdminClub/AddClub/AddClub";
import { AddContacts } from "~/pages/User/Account/AdminMenu/AdminClub/AddContacts/AddContacts";
import { AddPrice } from "~/pages/User/Account/AdminMenu/AdminClub/AddPrice/AddPrice";
import { AddSpecs } from "~/pages/User/Account/AdminMenu/AdminClub/AddSpecs/AddSpecs";
import { AddСomputers } from "~/pages/User/Account/AdminMenu/AdminClub/AddСomputers/AddСomputers";
import { AdminClub } from "~/pages/User/Account/AdminMenu/AdminClub/AdminClub";
import { AddEvents } from "~/pages/User/Account/AdminMenu/AdminEvents/AddEvents/AddEvents";
import { AdminEvents } from "~/pages/User/Account/AdminMenu/AdminEvents/AdminEvents";
import { RemoveEvents } from "~/pages/User/Account/AdminMenu/AdminEvents/RemoveEvents/RemoveEvents";
import { AddPhoto } from "~/pages/User/Account/AdminMenu/AdminGallery/AddPhoto/AddPhoto";
import { AdminGallery } from "~/pages/User/Account/AdminMenu/AdminGallery/AdminGallery";
import { RemovePhoto } from "~/pages/User/Account/AdminMenu/AdminGallery/RemovePhoto/RemovePhoto";
import { AdminMenu } from "~/pages/User/Account/AdminMenu/AdminMenu";
import { AddNews } from "~/pages/User/Account/AdminMenu/AdminNews/AddNews/AddNews";
import { AdminNews } from "~/pages/User/Account/AdminMenu/AdminNews/AdminNews";
import { RemoveNews } from "~/pages/User/Account/AdminMenu/AdminNews/RemoveNews/RemoveNews";
import { Login } from "~/pages/User/Login/Login";
import { Registration } from "~/pages/User/Registration/Registration";
import { SuccessPage } from "~/pages/User/SuccessPage/SuccessPage";

import { links } from "./Links";
import { AccessControlRoute, AccessControlStaff } from "./router.utils";

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
        path: links.news,
        element: <Placeholder />,
      },
      {
        element: <AccessControlRoute isPublicOnly={true} />,
        children: [
          {
            path: links.reg,
            element: <Registration />,
          },
          {
            path: links.success,
            element: <SuccessPage />,
          },
          {
            path: links.login,
            element: <Login />,
          },
        ],
      },
      {
        element: <AccessControlRoute isProtected={true} />,
        children: [
          {
            path: links.account,
            element: <AccountLayout />,
            children: [
              {
                path: links.account,
                element: <Account />,
              },
              {
                element: <AccessControlStaff isProtected={true} />,
                children: [
                  {
                    path: links.admin,
                    element: <AdminLayout />,
                    children: [
                      {
                        path: links.admin,
                        element: <AdminMenu />,
                      },
                      {
                        path: links.adminClub,
                        element: <AdminClub />,
                      },
                      {
                        path: links.adminClubAdd,
                        element: <AddClub />,
                      },
                      {
                        path: links.adminClubAddContacts,
                        element: <AddContacts />,
                      },
                      {
                        path: links.adminClubAddComputer,
                        element: <AddСomputers />,
                      },
                      {
                        path: links.adminClubAddSpec,
                        element: <AddSpecs />,
                      },
                      {
                        path: links.adminClubAddPrice,
                        element: <AddPrice />,
                      },
                      {
                        path: links.adminGallery,
                        element: <AdminGallery />,
                      },
                      {
                        path: links.adminGalleryAddPhoto,
                        element: <AddPhoto />,
                      },
                      {
                        path: links.adminGalleryRemovePhoto,
                        element: <RemovePhoto />,
                      },
                      {
                        path: links.adminNews,
                        element: <AdminNews />,
                      },
                      {
                        path: links.adminNewsAdd,
                        element: <AddNews />,
                      },
                      {
                        path: links.adminNewsRemove,
                        element: <RemoveNews />,
                      },
                      {
                        path: links.adminEvents,
                        element: <AdminEvents />,
                      },
                      {
                        path: links.adminEventsAdd,
                        element: <AddEvents />,
                      },
                      {
                        path: links.adminEventsRemove,
                        element: <RemoveEvents />,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
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
