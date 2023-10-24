import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

import { type ErrorObjectContent, type ContentState } from "./content.types";
import { fetchClubContent } from "../api/contentApi";

const initialState: ContentState = {
  clubContent: {
    clubData: {
      results: [],
    },
    clubError: null,
    status: "idle",
  },
};

export const contentSlice = createSlice({
  name: "content",
  initialState: initialState,
  reducers: {
    setError: (state, action: PayloadAction<ErrorObjectContent | null>) => {
      state.clubContent.status = "error";
      state.clubContent.clubError = action.payload;
    },
    clearError: (state) => {
      state.clubContent.status = "idle";
      state.clubContent.clubError = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchClubContent.fulfilled, (state, action) => {
      state.clubContent.status = "success";
      state.clubContent.clubData = action.payload;
    });

    builder.addCase(fetchClubContent.pending, (state) => {
      state.clubContent.status = "loading";
    });
  },
});

export const { actions: contentActions } = contentSlice;
