import { combineReducers } from "@reduxjs/toolkit";

import { contentSlice } from "./content/content.slice";
import { gallerySlice } from "./gallery/gallery.slice";
import { modalSlice } from "./modal/modal.slice";
import { newsSlice } from "./news/news.slice";
import { userSlice } from "./user/user.slice";

export const rootReducer = combineReducers({
  [modalSlice.name]: modalSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [contentSlice.name]: contentSlice.reducer,
  [gallerySlice.name]: gallerySlice.reducer,
  [newsSlice.name]: newsSlice.reducer,
});
