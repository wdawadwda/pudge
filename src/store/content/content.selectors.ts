import { type RootState } from "../store.types";

export const selectContentStatus = (state: RootState) =>
  state.content.clubContent.status;

export const selectClubData = (state: RootState) =>
  state.content.clubContent.clubData;

export const selectClubDataResults = (state: RootState) =>
  state.content.clubContent.clubData.results;

export const selectClubError = (state: RootState) =>
  state.content.clubContent.clubError;
