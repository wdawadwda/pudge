import { createListenerMiddleware } from "@reduxjs/toolkit";

import { modalActions } from "./modal.slice";

export const listenerMiddlewareModal = createListenerMiddleware();

listenerMiddlewareModal.startListening({
  matcher: modalActions.toggleModal.match,
  effect: () => {
    document.body.classList.toggle("disable-scroll");
  },
});
