import { createListenerMiddleware } from "@reduxjs/toolkit";

import { type JWTTokens } from "~/entities/type/api.type";

import { userActions } from "./user.slice";
import { updateTokens } from "../api/axiosInstance";
import { createTokens } from "../api/userApi";

export const listenerMiddlewareUser = createListenerMiddleware();

listenerMiddlewareUser.startListening({
  matcher: createTokens.fulfilled.match,
  effect: ({ payload }: { payload: JWTTokens }) => {
    localStorage.setItem("@pudge/access-token", payload.access);
    localStorage.setItem("@pudge/refresh-token", payload.refresh);
  },
});
listenerMiddlewareUser.startListening({
  matcher: createTokens.fulfilled.match,
  effect: ({ payload }: { payload: JWTTokens }) => {
    updateTokens(payload);
  },
});

listenerMiddlewareUser.startListening({
  matcher: userActions.logout.match,
  effect: () => {
    localStorage.removeItem("@pudge/access-token");
    localStorage.removeItem("@pudge/refresh-token");
  },
});
