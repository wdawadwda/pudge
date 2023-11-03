import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

import { type NewsState } from "./news.types";
import { getNewsData, getQuantityNews } from "../api/newsApi";
import { type ErrorObject } from "../user/user.types";

const initialState: NewsState = {
  newsContent: {
    newsData: null,
    quantityNews: {
      quantityNews: 0,
      newsError: null,
      status: "idle",
    },
    newsError: null,
    status: "idle",
  },
};

export const newsSlice = createSlice({
  name: "news",
  initialState: initialState,
  reducers: {
    setError: (state, action: PayloadAction<ErrorObject | null>) => {
      state.newsContent.newsError = action.payload;
    },
    setErrorquantityNews: (
      state,
      action: PayloadAction<ErrorObject | null>
    ) => {
      state.newsContent.newsError = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getQuantityNews.fulfilled, (state, action) => {
      state.newsContent.quantityNews.quantityNews = action.payload.quantityNews;
      state.newsContent.quantityNews.status = "success";
    });
    builder.addCase(getQuantityNews.pending, (state) => {
      state.newsContent.quantityNews.status = "loading";
    });
    builder.addCase(getNewsData.fulfilled, (state, action) => {
      state.newsContent.newsData = action.payload;
      state.newsContent.status = "success";
    });
    builder.addCase(getNewsData.pending, (state) => {
      state.newsContent.status = "loading";
    });
  },
});

export const { actions: newsActions } = newsSlice;
