import { useEffect } from "react";

import { RouterProvider } from "react-router-dom";

import { useAuth } from "~/entities/hooks/useAuth";
import { Loader } from "~/pages/Loader/Loader";
import {
  fetchClubContent,
  fetchMainMap,
  fetchPartnersContent,
} from "~/store/api/contentApi";
import { getQuantityNews } from "~/store/api/newsApi";
import { useAppDispatch, useAppSelector } from "~/store/store.types";

import { routerSchema } from "./routerSchema";

export const AppRouter = () => {
  const dispatch = useAppDispatch();
  useAuth();

  const isInitializing = useAppSelector(
    ({ user }) =>
      (user.currentUser.status === "loading" ||
        user.currentUser.status === "idle") &&
      user.tokens.status === "success"
  );

  useEffect(() => {
    const clubContentPromise = dispatch(fetchClubContent());
    const partnersContentPromise = dispatch(fetchPartnersContent());
    const mainMapContentPromise = dispatch(fetchMainMap());
    const newsPromise = dispatch(getQuantityNews());

    return () => {
      clubContentPromise.abort("cancelled");
      partnersContentPromise.abort("cancelled");
      mainMapContentPromise.abort("cancelled");
      newsPromise.abort("cancelled");
    };
  }, [dispatch]);
  return isInitializing ? <Loader /> : <RouterProvider router={routerSchema} />;
};
