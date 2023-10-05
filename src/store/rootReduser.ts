import { combineReducers } from "@reduxjs/toolkit";

import { modalSlice } from "./modal/modal.slice";
import { userSlice } from "./user/user.slice";

export const rootReducer = combineReducers({
  [modalSlice.name]: modalSlice.reducer,
  [userSlice.name]: userSlice.reducer,
});
