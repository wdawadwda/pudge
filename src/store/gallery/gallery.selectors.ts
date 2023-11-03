import { type RootState } from "../store.types";

export const selectGalleryContent = (state: RootState) =>
  state.gallery.galleryContent;

export const selectGalleryName = (state: RootState) =>
  state.gallery.galleryContent.galleryName.clubsGallery;

export const galleryTotalPhoto = (state: RootState) =>
  state.gallery.galleryContent.galleryName.galleryTotalPhoto;

export const selectGalleryData = (state: RootState) =>
  state.gallery.galleryContent.galleryData;

export const selectGalleryStatus = (state: RootState) =>
  state.gallery.galleryContent.status;

export const selectGalleryError = (state: RootState) =>
  state.gallery.galleryContent.galleryError;
