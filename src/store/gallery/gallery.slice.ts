import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

import { type ContentState } from "./gallery.types";
import { getGalleryClubs, getGalleryData } from "../api/galleryApi";
import { type ErrorObject } from "../user/user.types";

const initialState: ContentState = {
  galleryContent: {
    galleryName: {
      clubsGallery: [""],
      galleryTotalPhoto: [{ name: "", quantityPictures: 0 }],
    },
    galleryData: {},
    galleryError: null,
    status: "idle",
  },
};

export const gallerySlice = createSlice({
  name: "gallery",
  initialState: initialState,
  reducers: {
    setError: (state, action: PayloadAction<ErrorObject | null>) => {
      state.galleryContent.galleryError = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGalleryClubs.fulfilled, (state, action) => {
      state.galleryContent.galleryName.clubsGallery =
        action.payload.clubsGallery;
      state.galleryContent.galleryName.galleryTotalPhoto =
        action.payload.galeryTotalPhoto;
      state.galleryContent.status = "success";
    });
    builder.addCase(getGalleryClubs.pending, (state) => {
      state.galleryContent.status = "loading";
    });
    builder.addCase(getGalleryData.fulfilled, (state, action) => {
      state.galleryContent.galleryData = action.payload;
      state.galleryContent.status = "success";
    });
    builder.addCase(getGalleryData.pending, (state) => {
      state.galleryContent.status = "loading";
    });
  },
});

export const { actions: galleryActions } = gallerySlice;
