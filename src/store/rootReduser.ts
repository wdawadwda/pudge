import { combineReducers } from "@reduxjs/toolkit";
import { themeSlice } from "./theme/theme.slice";
import { shoesSlice } from "./shoes/shoes.slice";

export const rootReducer = combineReducers({
  [themeSlice.name]: themeSlice.reducer,
  [shoesSlice.name]: shoesSlice.reducer,
});
