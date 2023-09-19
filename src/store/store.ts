import { configureStore } from "@reduxjs/toolkit";

import { listenerMiddlewareModal } from "./modal/modal.listeners";
import { rootReducer } from "./rootReduser";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddlewareModal.middleware),
  devTools: import.meta.env.DEV,
});
