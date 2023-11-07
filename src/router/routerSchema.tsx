import { createBrowserRouter } from "react-router-dom";

import { ClubsDetail } from "~/features/PageSections/Clubs/ClubsDetail";
import { AccountLayout } from "~/layouts/AccountLayout/AccountLayout";
import { AdminLayout } from "~/layouts/AdminLayout/AdminLayout";
import { ClubsLayout } from "~/layouts/ClubsLayout/ClubsLayout";
import { GalleryLayout } from "~/layouts/GalleryLayout/GalleryLayout";
import { MainLayout } from "~/layouts/MainLayout/MainLayout";
import { Booking } from "~/pages/Booking/Booking";
import { ClientAgreement } from "~/pages/ClientAgreement/ClientAgreement";
import { Contacts } from "~/pages/Contacts/Contacts";
import { Gallery } from "~/pages/Gallery/Gallery";
import { GalleryDetail } from "~/pages/Gallery/GalleryDetail/GalleryDetail";
import { HomePage } from "~/pages/Home/HomePage";
import { News } from "~/pages/News/News";
import { NewsDetail } from "~/pages/News/News/NewsDetail";
import { NotFoundPage } from "~/pages/Placeholder/NotFoundPage";
import { Rules } from "~/pages/Rules/Rules";
import { Account } from "~/pages/User/Account/Account";
import { AddClub } from "~/pages/User/Account/AdminMenu/AdminClub/AddClub/AddClub";
import { AddContacts } from "~/pages/User/Account/AdminMenu/AdminClub/AddContacts/AddContacts";
import { AddPrice } from "~/pages/User/Account/AdminMenu/AdminClub/AddPrice/AddPrice";
import { AddSpecs } from "~/pages/User/Account/AdminMenu/AdminClub/AddSpecs/AddSpecs";
import { AddСomputers } from "~/pages/User/Account/AdminMenu/AdminClub/AddСomputers/AddСomputers";
import { AdminClub } from "~/pages/User/Account/AdminMenu/AdminClub/AdminClub";
import { AddPhoto } from "~/pages/User/Account/AdminMenu/AdminGallery/AddPhoto/AddPhoto";
import { AdminGallery } from "~/pages/User/Account/AdminMenu/AdminGallery/AdminGallery";
import { RemoveGallery } from "~/pages/User/Account/AdminMenu/AdminGallery/RemoveGallery/RemoveGallery";
import { AddMainMap } from "~/pages/User/Account/AdminMenu/AdminMainMap/AddMainMap";
import { AdminMenu } from "~/pages/User/Account/AdminMenu/AdminMenu";
import { AddNews } from "~/pages/User/Account/AdminMenu/AdminNews/AddNews/AddNews";
import { AdminNews } from "~/pages/User/Account/AdminMenu/AdminNews/AdminNews";
import { AddPartner } from "~/pages/User/Account/AdminMenu/AdminPartners/AddPartner/AddPartner";
import { AdminPartners } from "~/pages/User/Account/AdminMenu/AdminPartners/AdminPartners";
import { RemovePartners } from "~/pages/User/Account/AdminMenu/AdminPartners/RemovePartners/RemovePartners";
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
        path: links.gallery,
        element: <GalleryLayout />,
        children: [
          {
            path: links.galleryName,
            element: <Gallery />,
          },
          {
            path: links.galleryNamePage,
            element: <Gallery />,
          },
        ],
      },
      {
        path: links.galleryDetail,
        element: <GalleryDetail />,
      },
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: links.booking,
        element: <Booking />,
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
        element: <Gallery />,
      },
      {
        path: links.news,
        element: <News />,
      },
      {
        path: links.newsDetail,
        element: <NewsDetail />,
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
                        path: links.adminMainMap,
                        element: <AddMainMap />,
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
                        path: links.adminGalleryRemove,
                        element: <RemoveGallery />,
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
                        path: links.adminPartners,
                        element: <AdminPartners />,
                      },
                      {
                        path: links.adminPartnersAdd,
                        element: <AddPartner />,
                      },
                      {
                        path: links.adminPartnersRemove,
                        element: <RemovePartners />,
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
