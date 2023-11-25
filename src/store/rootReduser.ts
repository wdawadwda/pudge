import { combineReducers } from "@reduxjs/toolkit";
import { themeSlice } from "./theme/theme.slice";
import { contentSlice } from "./content/content.slice";
import { newsSlice } from "./news/news.slice";

export const rootReducer = combineReducers({
  [themeSlice.name]: themeSlice.reducer,
  [contentSlice.name]: contentSlice.reducer,
  [newsSlice.name]: newsSlice.reducer,
});
