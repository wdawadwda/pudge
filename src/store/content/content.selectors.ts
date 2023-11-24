import { type RootState } from "../store.types";

export const selectContentStatus = (state: RootState) =>
  state.content.clubContent.status;

export const selectClubData = (state: RootState) =>
  state.content.clubContent.clubData;

export const selectClubDataResults = (state: RootState) =>
  state.content.clubContent.clubData.results;

export const selectClubError = (state: RootState) =>
  state.content.clubContent.clubError;

export const selectClub = (state: RootState) =>
  state.content.clubContent.selectedClub;

export const selectBookingData = (state: RootState) =>
  state.content.clubContent.bookingClub;

export const selectMainMapData = (state: RootState) =>
  state.content.clubContent.mainMapData.results;

export const selectMainMapStatus = (state: RootState) =>
  state.content.clubContent.mainMapData.status;
