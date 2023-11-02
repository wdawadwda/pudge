import { useEffect } from "react";

import { fetchUser } from "~/store/api/userApi";
import { useAppDispatch, useAppSelector } from "~/store/store.types";
import { selectTokens } from "~/store/user/user.selectors";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const tokens = useAppSelector(selectTokens);

  useEffect(() => {
    const promise = dispatch(fetchUser());

    return () => {
      promise.abort("cancelled");
    };
  }, [dispatch, tokens]);
};
