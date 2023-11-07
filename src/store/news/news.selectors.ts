import { type RootState } from "../store.types";

export const selectNewsContent = (state: RootState) => state.news.newsContent;

export const selectNewsData = (state: RootState) =>
  selectNewsContent(state).newsData;

export const selectQuantityNews = (state: RootState) =>
  selectNewsContent(state).quantityNews;

export const selectQuantityNewsStatus = (state: RootState) =>
  selectQuantityNews(state).status;

export const selectQuantityNewsValue = (state: RootState) =>
  selectQuantityNews(state).quantityNews;

export const selectNewsError = (state: RootState) =>
  selectNewsContent(state).newsError;
