import { useEffect } from "react";

import { RouterProvider } from "react-router-dom";

import { Loader } from "~/pages/Loader/Loader";
import { fetchUser } from "~/store/api/userApi";
import { useAppDispatch, useAppSelector } from "~/store/store.types";
import { selectTokens } from "~/store/user/user.selectors";

import { routerSchema } from "./routerSchema";

export const AppRouter = () => {
  const dispatch = useAppDispatch();
  const tokens = useAppSelector(selectTokens);
  const isInitializing = useAppSelector(
    ({ user }) =>
      (user.currentUser.status === "loading" ||
        user.currentUser.status === "idle") &&
      user.tokens.status === "success"
  );
  useEffect(() => {
    const promise = dispatch(fetchUser());

    return () => {
      promise.abort("cancelled");
    };
  }, [dispatch, tokens]);

  return isInitializing ? <Loader /> : <RouterProvider router={routerSchema} />;
};
