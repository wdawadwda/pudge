import { configureStore } from "@reduxjs/toolkit";

import { listenerMiddlewareModal } from "./modal/modal.listeners";
import { rootReducer } from "./rootReduser";
import { listenerMiddlewareUser } from "./user/user.listeners";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(listenerMiddlewareModal.middleware)
      .prepend(listenerMiddlewareUser.middleware),
  devTools: import.meta.env.DEV,
});
