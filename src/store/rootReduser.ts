import { combineReducers } from "@reduxjs/toolkit";

import { modalSlice } from "./modal/modal.slice";

export const rootReducer = combineReducers({
  [modalSlice.name]: modalSlice.reducer,
});
