import { type RootState } from "../store.types";

export const selectUser = (state: RootState) =>
  state.user.currentUser.status === "success"
    ? state.user.currentUser.data
    : null;

export const selectTokens = (state: RootState) =>
  state.user.tokens.status === "success" ? state.user.tokens.data : null;

export const selectError = (state: RootState) => state.user.error;

export const selectTokensStatus = (state: RootState) =>
  state.user.tokens.status;
